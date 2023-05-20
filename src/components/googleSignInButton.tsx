import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { signInWithPopup, onAuthStateChanged } from 'firebase/auth';
import { auth, googleAuthProvider } from '../functions/firebase';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../redux/authSlice';
import { RootState } from '../redux/store';

export const GoogleSignInButton: React.FC = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.auth.user);

  React.useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      if (firebaseUser) {
        const { uid, displayName, email, photoURL } = firebaseUser;
        dispatch(setUser({ uid, displayName, email, photoURL }));
      } else {
        dispatch(setUser(null));
      }
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, [dispatch]);

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleAuthProvider);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      {user ? (
        <p>Welcome, {user.displayName}</p>
      ) : (
        <button className="google-signin-btn" onClick={signInWithGoogle}>
          <FcGoogle size={22} />
          <span>Login with Google</span>
        </button>
      )}
    </div>
  );
};

