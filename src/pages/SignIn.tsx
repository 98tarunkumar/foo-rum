import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Header from '../components/Header';

interface SignInProps {
  isModal?: boolean;
  onSuccess?: () => void;
}

const SignIn: React.FC<SignInProps> = ({ isModal = false, onSuccess }) => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!email.trim() || !password.trim()) {
      setError('All fields are required');
      return;
    }

    const loggedIn = login(email, password);
    if (loggedIn) {
      if (onSuccess) {
        onSuccess();
      } else {
        navigate('/');
      }
    } else {
      setError('Invalid credentials');
    }
  };

  const content = (
    <div className="w-full bg-gray-200 p-2 rounded-xl rounded-full">
      <div className="bg-white rounded-xl w-full px-12 py-8">
      <div className="flex flex-col items-center mb-16">
        <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-4">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-text-primary">
            <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
            <polyline points="10 17 15 12 10 7" />
            <line x1="15" y1="12" x2="3" y2="12" />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-text-primary mb-2">Sign in to continue</h2>
        <p className="text-sm text-text-secondary">Sign in to access all the features on this app</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-bold text-text-primary mb-2">
            Email or username
          </label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email or username"
           className="input-field bg-gray-100 rounded-lg"
          />
        </div>

        <div>
          <label className="block text-sm font-bold text-text-primary mb-2">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            className="input-field bg-gray-100 rounded-lg"
          />
        </div>

        {error && (
          <div className="text-red-400 text-sm bg-red-400/10 border border-red-400/20 rounded-md p-3">
            {error}
          </div>
        )}

        <button 
          type="submit" 
          className="btn-primary font-normal" 
          style={{ backgroundColor: '#5157ea' }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#4349d4'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#5157ea'}
        >
          Sign In
        </button>
      </form>
      </div>

      <div className=" text-center text-sm text-text-secondary flex items-center justify-center p-2">
        <span>Do not have and account?</span>
        <span className="ml-2">
          {isModal ? (
            <Link to="/signup" className="text-primary hover:underline" onClick={onSuccess}>
              Sign Up
            </Link>
          ) : (
            <Link to="/signup" className="text-primary hover:underline">
              Sign Up
            </Link>
          )}
        </span>
      </div>
    </div>
  );

  if (isModal) {
    return content;
  }

  return (
    <div className="min-h-screen bg-background-primary">
      <Header showBackOption={true} />
      <div className="flex items-center justify-center px-4 py-8">
        <div className="bg-white rounded-xl max-w-lg w-full shadow-uniform border border-border">
          {content}
        </div>
      </div>
    </div>
  );
};

export default SignIn;

