import React, { useEffect, useState, useRef } from 'react';
import { CheckCircle2, AlertCircle, Info, X } from 'lucide-react';

export type ToastType = 'success' | 'error' | 'info';

export interface ToastMessage {
  id: string;
  type: ToastType;
  title?: string;
  message: string;
  duration?: number;
}

interface ToastContainerProps {
  toasts: ToastMessage[];
  onDismiss: (id: string) => void;
}

function ToastItem({ toast, onDismiss }: { toast: ToastMessage; onDismiss: (id: string) => void }) {
  const duration = toast.duration ?? 4000;
  const [isPaused, setIsPaused] = useState(false);
  const remainingTimeRef = useRef(duration);
  const startTimeRef = useRef(Date.now());
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const onDismissRef = useRef(onDismiss);

  useEffect(() => {
    onDismissRef.current = onDismiss;
  }, [onDismiss]);

  useEffect(() => {
    if (isPaused) {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
        timerRef.current = null;
      }
      remainingTimeRef.current = Math.max(0, remainingTimeRef.current - (Date.now() - startTimeRef.current));
      return;
    }

    startTimeRef.current = Date.now();
    const delay = Math.max(100, remainingTimeRef.current);
    timerRef.current = setTimeout(() => {
      onDismissRef.current(toast.id);
    }, delay);

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
        timerRef.current = null;
      }
    };
  }, [isPaused, toast.id]);

  const typeConfig = {
    success: {
      border: 'border-emerald-500/40',
      icon: <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />,
      accentBg: 'bg-emerald-500/10',
      barColor: 'bg-emerald-500',
      tag: 'Success'
    },
    error: {
      border: 'border-red-500/40',
      icon: <AlertCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />,
      accentBg: 'bg-rose-500/10',
      barColor: 'bg-rose-500',
      tag: 'Notice'
    },
    info: {
      border: 'border-[#e8662a]/50',
      icon: <Info className="w-5 h-5 text-[#e8662a] shrink-0 mt-0.5" />,
      accentBg: 'bg-[#e8662a]/10',
      barColor: 'bg-[#e8662a]',
      tag: 'Information'
    }
  }[toast.type];

  return (
    <div
      role="status"
      aria-live="polite"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      className={`relative w-full max-w-sm sm:max-w-md bg-[#1f1b16]/95 backdrop-blur-md text-[#f6efe4] border ${typeConfig.border} rounded-2xl p-4 shadow-2xl transition-all duration-300 animate-in fade-in slide-in-from-bottom-5 overflow-hidden flex flex-col gap-2 group select-none`}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-start gap-3">
          <div className={`p-1.5 rounded-xl ${typeConfig.accentBg}`}>
            {typeConfig.icon}
          </div>
          <div className="space-y-0.5">
            {toast.title && (
              <h4 className="text-xs uppercase tracking-wider font-bold text-[#beb8ad]">
                {toast.title}
              </h4>
            )}
            <p className="text-sm font-medium leading-snug text-[#fdfaf5]">
              {toast.message}
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={() => onDismissRef.current(toast.id)}
          className="text-[#9e9587] hover:text-[#ffffff] p-1 rounded-lg hover:bg-white/10 transition-colors"
          aria-label="Dismiss notification"
        >
          <X size={16} />
        </button>
      </div>

      {/* Countdown progress bar with CSS animation */}
      <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden mt-1">
        <div
          className={`h-full ${typeConfig.barColor}`}
          style={{
            width: '100%',
            animation: `toast-progress ${duration}ms linear forwards`,
            animationPlayState: isPaused ? 'paused' : 'running'
          }}
        />
      </div>
    </div>
  );
}

export function ToastContainer({ toasts, onDismiss }: ToastContainerProps) {
  if (toasts.length === 0) return null;

  return (
    <div className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 flex flex-col gap-3 pointer-events-auto max-w-[calc(100vw-40px)]">
      {toasts.map((toast) => (
        <ToastItem key={toast.id} toast={toast} onDismiss={onDismiss} />
      ))}
    </div>
  );
}
