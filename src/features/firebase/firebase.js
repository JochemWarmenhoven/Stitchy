import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyB2XhuGT4zTs56G8JwFEv987srNxaa7Bpc',
  authDomain: 'stitchy-d9018.firebaseapp.com',
  databaseURL: 'https://stitchy-d9018.firebaseio.com',
  projectId: 'stitchy-d9018',
  storageBucket: 'stitchy-d9018.appspot.com',
  messagingSenderId: '677365817706',
  appId: '1:677365817706:web:e643a9d1eec72c598d0513',
  measurementId: 'G-K3GY0T25XL',
};

const provider = new firebase.auth.GoogleAuthProvider();

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const signInWithGoogle = () => {
  auth.signInWithPopup(provider);
};

export const generateUserDocument = async (user, additionalData) => {
  if (!user) return;
  const userRef = firestore.doc(`users/${user.uid}`);
  userRef.get().then((val) => console.log(val));

  const snapshot = await userRef.get();
  if (!snapshot.exists) {
    const { email, displayName, photoURL } = user;
    try {
      await userRef.set({
        displayName,
        email,
        photoURL,
        ...additionalData,
      });
    } catch (error) {
      console.error('Error creating user document', error);
    }
  }
  return getUserDocument(user.uid);
};

const getUserDocument = async (uid) => {
  if (!uid) return null;
  try {
    const userDocument = await firestore.doc(`users/${uid}`).get();
    return {
      uid,
      ...userDocument.data(),
    };
  } catch (error) {
    console.error('Error fetching user', error);
  }
};
