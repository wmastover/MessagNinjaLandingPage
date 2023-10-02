import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { signInWithPopup, onAuthStateChanged } from 'firebase/auth';
import { getFunctions, httpsCallable } from 'firebase/functions';
import { getFirestore, doc, setDoc } from 'firebase/firestore';
import { auth, googleAuthProvider } from '../functions/firebase';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../redux/authSlice';
import { setToken } from '../redux/tokenSlice';

export const GoogleSignInButton: React.FC = () => {
  const dispatch = useDispatch();
  const firestore = getFirestore();

  React.useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      if (firebaseUser) {
        const { uid, displayName, email, photoURL } = firebaseUser;
        dispatch(setUser({ uid, displayName, email, photoURL }));

        // Set user document in Firestore
        setDoc(doc(firestore, "users", uid), { displayName, email, photoURL, paid: false, credits: 20 })
          .then(() => {
            console.log("User document successfully written!");
          })
          .catch((error) => {
            console.error("Error writing user document: ", error);
          });

        // Call the Firebase function to get a custom token for this user
        const functions = getFunctions();
        const createToken = httpsCallable(functions, 'createToken');
        createToken({ uid: uid })
          .then((result) => {
            var token = result.data;
            console.log("Custom token: ", token);

            if (typeof token === 'string') {
              dispatch(setToken(token))
            }

            // Send the token to your Chrome extension
          })
          .catch((error) => {
            console.log("Error generating custom token: ", error.code, error.message);
          });
      } else {
        dispatch(setUser(null));
      }
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, [dispatch, firestore]);

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleAuthProvider);
    } catch (error) {
      console.error(error);
    }
  };

  return (

      <div className="button1" onClick={signInWithGoogle}>
        <FcGoogle size={60} />
        <span>Login with Google</span>
      </div>
  );
};
