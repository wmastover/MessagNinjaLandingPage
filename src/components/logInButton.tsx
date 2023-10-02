import React from 'react';

interface Props {
  setClicked: (arg0: boolean) => void;
}

export const LogInButton: React.FC<Props> = ({ setClicked }) => {
  return (
    <div onClick={() => setClicked(true)} className='topRightButton'>LogIn</div>
  );
};
