import { initializeApp, getApps, getApp } from 'firebase/app';
import { 
  getFirestore, 
  doc, 
  onSnapshot, 
  setDoc, 
  updateDoc, 
  increment,
  getDoc,
  collection,
  addDoc
} from 'firebase/firestore';
import firebaseConfig from '../firebase-applet-config.json';

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

export const db = firebaseConfig.firestoreDatabaseId 
  ? getFirestore(app, firebaseConfig.firestoreDatabaseId)
  : getFirestore(app);

const ANALYTICS_COLLECTION = 'analytics';
const VISITOR_DOC_ID = 'visitor_counter';

let sessionIncrementStarted = false;

/**
 * Increments the visitor_count field on mount (deduplicated per session)
 * and listens for real-time changes to visitor_count in Firebase Firestore.
 */
export function subscribeToVisitorCount(callback: (count: number) => void): () => void {
  const counterDoc = doc(db, ANALYTICS_COLLECTION, VISITOR_DOC_ID);
  const sessionKey = 'portfolio_counted_session';
  const hasCounted = typeof window !== 'undefined' && sessionStorage.getItem(sessionKey);

  if (!hasCounted && !sessionIncrementStarted) {
    sessionIncrementStarted = true;
    if (typeof window !== 'undefined') {
      sessionStorage.setItem(sessionKey, 'true');
    }
    const incrementCounter = async () => {
      try {
        const snap = await getDoc(counterDoc);
        if (!snap.exists()) {
          await setDoc(counterDoc, {
            visitor_count: 1,
            updatedAt: new Date().toISOString()
          });
        } else {
          await updateDoc(counterDoc, {
            visitor_count: increment(1),
            updatedAt: new Date().toISOString()
          });
        }
      } catch (err) {
        console.warn('Visitor count increment notice:', err);
      }
    };
    incrementCounter();
  }

  const unsubscribe = onSnapshot(
    counterDoc,
    (snap) => {
      if (snap.exists()) {
        const data = snap.data();
        if (typeof data?.visitor_count === 'number') {
          callback(data.visitor_count);
        }
      }
    },
    (err) => {
      console.warn('Real-time listener notice:', err);
    }
  );

  return unsubscribe;
}

/**
 * Saves an incoming contact inquiry directly into Firestore
 */
export async function saveContactMessage(name: string, email: string, message: string): Promise<void> {
  const messagesCol = collection(db, 'messages');
  await addDoc(messagesCol, {
    name,
    email,
    message,
    createdAt: new Date().toISOString()
  });
}
