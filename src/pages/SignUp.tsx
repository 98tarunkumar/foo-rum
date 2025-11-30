import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Header from '../components/Header';

const SignUp: React.FC = () => {
  const navigate = useNavigate();
  const { signup } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!email.trim() || !password.trim() || !repeatPassword.trim()) {
      setError('All fields are required');
      return;
    }

    if (password !== repeatPassword) {
      setError('Passwords do not match');
      return;
    }

    if (password.length < 6) {
      setError('Password needs to be at least 6 characters');
      return;
    }

    const registered = signup(email, password);
    if (registered) {
      navigate('/');
    } else {
      setError('This email is already registered');
    }
  };

  return (
    <div className="min-h-screen bg-background-secondary w-full">
      <Header showBackOption={true} />

      <div className="flex items-center justify-center px-4 py-8">
        <div className="bg-white rounded-xl max-w-lg w-full border border-gray-100">
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
                <h2 className="text-3xl font-semibold text-text-primary mb-2">
                  Create an account to continue
                </h2>
                <p className="text-base text-text-secondary">
                  Create an account to access all the features on this app
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4 flex gap-2 flex-col mb-4">
                <div>
                  <label className="block text-sm font-medium text-text-primary mb-2">
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
                  <label className="block text-sm font-medium text-text-primary mb-2">Password</label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    className="input-field bg-gray-100 rounded-lg"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-text-primary mb-2">
                    Repeat password
                  </label>
                  <input
                    type="password"
                    value={repeatPassword}
                    onChange={(e) => setRepeatPassword(e.target.value)}
                    placeholder="Enter your password again"
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
                  className="btn-primary font-medium mt-4"
                  style={{ backgroundColor: '#5157ea' }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#4349d4'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#5157ea'}
                >
                  Sign Up
                </button>
              </form>
            </div>

            <div className="text-center text-sm text-text-secondary flex items-center justify-center p-2">
              <span>Already have an account?</span>
              <span className="ml-2">
                <Link to="/signin" className="text-primary hover:underline">
                  Sign In
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

