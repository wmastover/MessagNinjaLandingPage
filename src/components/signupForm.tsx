import React, { useState } from 'react';
import { signUp } from '../functions/auth';

const SignupForm: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      // on error, show error message
      console.error("Passwords do not match");
      return;
    }
    try {
      await signUp(email, password);
      // on success, redirect or update UI
    } catch (error) {
      // on error, show error message
      console.error(error);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" required />
      <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" required />
      <input type="password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} placeholder="Confirm Password" required />
      <button type="submit">Sign Up</button>
    </form>
  );
}

export default SignupForm;
