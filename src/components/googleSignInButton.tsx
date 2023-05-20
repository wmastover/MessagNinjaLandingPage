import React, { useState, useEffect } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { signInWithPopup, onAuthStateChanged, User } from 'firebase/auth';
import { auth, googleAuthProvider } from '../functions/firebase';


export const GoogleSignInButton: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

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
        <p style={{color:"white"}}>Welcome, {user.displayName}</p>
      ) : (
        <button className="google-signin-btn" onClick={signInWithGoogle}>
          <FcGoogle size={22} />
          <span>Login with Google</span>
        </button>
      )}
    </div>
  );
};


