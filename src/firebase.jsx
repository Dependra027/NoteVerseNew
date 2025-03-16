import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBVGmLXPqP3mM4n_5-kaeHpPKH0zZKpySQ",
  authDomain: "notesweb-60b36.firebaseapp.com",
  projectId: "notesweb-60b36",
  storageBucket: "notesweb-60b36.appspot.com",
  messagingSenderId: "273862683776",
  appId: "1:273862683776:web:4ee431f0ab31188917ca65"
};


const app = initializeApp(firebaseConfig);


const auth = getAuth(app);

export {app, auth};

export const storage = getStorage(app);


export const db = getFirestore(app);


