import React from 'react';

export const LoadingLine = () => {
    
  const linkedInProfileUrl = 'https://www.linkedin.com/in/me/';

  return (
    <div>
      <p style={{fontWeight:"bold", fontSize:"30px"}}>
        Navigate to a{' '}
        <a href={linkedInProfileUrl} target="_blank" rel="noopener noreferrer">
          LinkedIn profile
        </a>{' '}
        to start
      </p>
    </div>
  );
}

