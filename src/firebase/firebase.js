import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAv-N9IGCjfTHTI1ZLcO5Afd7mtJ-bvl2Y",
  authDomain: "thedasy-70fd9.firebaseapp.com",
  projectId: "thedasy-70fd9",
  storageBucket: "thedasy-70fd9.firebasestorage.app",
  messagingSenderId: "222506721011",
  appId: "1:222506721011:web:4ad07a62690d965de02186"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
