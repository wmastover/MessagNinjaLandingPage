import React from 'react';
import { useDispatch } from 'react-redux';
import { signOut } from 'firebase/auth';
import { clearUser } from '../redux/authSlice';
import { auth } from '../functions/firebase';

interface Props {
    setClicked: (arg0: boolean) => void;
  }

export const LogoutButton: React.FC<Props> = ( {setClicked} ) => {
  const dispatch = useDispatch();

  const handleLogout = async () => {
    setClicked(false)
    await signOut(auth);
    dispatch(clearUser());
  };

  return (
    <div onClick={handleLogout} className='topRightButton'>Log Out</div>
  );
};

