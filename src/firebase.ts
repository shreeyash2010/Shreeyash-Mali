import { initializeApp, getApps, getApp } from 'firebase/app';
import { 
  getFirestore, 
  doc, 
  onSnapshot, 
  setDoc, 
  updateDoc, 
  increment,
  getDoc
} from 'firebase/firestore';
import firebaseConfig from '../firebase-applet-config.json';

// Initialize Firebase App
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

// Initialize Firestore with configured database ID or default
export const db = firebaseConfig.firestoreDatabaseId 
  ? getFirestore(app, firebaseConfig.firestoreDatabaseId)
  : getFirestore(app);

const COUNTER_DOC_PATH = 'analytics';
const COUNTER_DOC_ID = 'portfolio_views';

/**
 * Subscribes to real-time visitor count updates.
 * Increments visitor count once per browser session.
 */
export function subscribeToVisitorCount(callback: (count: number) => void): () => void {
  const counterRef = doc(db, COUNTER_DOC_PATH, COUNTER_DOC_ID);

  // Check if this session has already incremented
  const sessionKey = 'portfolio_session_counted';
  const hasCounted = sessionStorage.getItem(sessionKey);

  const incrementVisitorCount = async () => {
    try {
      const snap = await getDoc(counterRef);
      if (!snap.exists()) {
        // Initialize if not present
        await setDoc(counterRef, {
          count: 1,
          updatedAt: new Date().toISOString()
        });
      } else {
        await updateDoc(counterRef, {
          count: increment(1),
          updatedAt: new Date().toISOString()
        });
      }
      sessionStorage.setItem(sessionKey, 'true');
    } catch (err) {
      console.warn('Failed to increment visitor counter:', err);
    }
  };

  if (!hasCounted) {
    incrementVisitorCount();
  }

  // Real-time listener for live updates across all active viewers
  const unsubscribe = onSnapshot(
    counterRef,
    (snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.data();
        if (typeof data?.count === 'number') {
          callback(data.count);
        }
      }
    },
    (err) => {
      console.warn('Error listening to visitor count:', err);
    }
  );

  return unsubscribe;
}
