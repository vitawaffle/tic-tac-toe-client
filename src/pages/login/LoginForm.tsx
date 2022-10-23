import { useState, ChangeEvent } from 'react';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event: ChangeEvent) => {};

  return (
    <form>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email*
        </label>
        <input
          id="email"
          type="email"
          value={email}
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">
          Password*
        </label>
        <input
          id="password"
          type="password"
          value={password}
          className="form-control"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Log in
      </button>
    </form>
  );
};

export default LoginForm;
