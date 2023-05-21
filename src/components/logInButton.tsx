import React from 'react';

interface Props {
  setClicked: (arg0: boolean) => void;
}

export const LogInButton: React.FC<Props> = ({ setClicked }) => {
  return (
    <button onClick={() => setClicked(true)} className='topRightButton'>Log In</button>
  );
};
