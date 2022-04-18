import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDZCg1uR74j9Qbiwjff0vFiAHscpDzfqwA',
  authDomain: 'unlens.firebaseapp.com',
  projectId: 'unlens',
  storageBucket: 'unlens.appspot.com',
  messagingSenderId: '709211248385',
  appId: '1:709211248385:web:331c9975c9c09c3fefad00',
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
