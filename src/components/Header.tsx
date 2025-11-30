
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';


interface HeaderProps {
  showBackOption?: boolean;
}

const Header: React.FC<HeaderProps> = ({ showBackOption = false }) => {

  const navigate = useNavigate();
  const { isAuthenticated, logout } = useAuth();

  const handleAuthAction = () => {
    if (isAuthenticated) {
      logout();
      navigate('/');
    } else {
      navigate('/signin');
    }
  };

  return (
    <header className="w-full h-16 bg-white  sticky top-0 z-40">
       <div className="max-w-10xl mx-auto px-6 h-full flex items-center justify-between">
       <div className="flex items-center gap-3 cursor-pointer" onClick={() => navigate('/')}>
          <div className="w-9 h-9 rounded-full bg-gray-400 flex items-center justify-center">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
              <circle cx="12" cy="12" r="10" />
            </svg>
          </div>
          <span className="text-xl font-semibold text-text-primary">foo-rum</span>
        </div>



        {showBackOption ? (
          <button
            onClick={() => navigate('/')}
            className="text-text-secondary hover:text-text-primary transition-colors duration-200 font-medium text-sm"
          >
            Back to home
          </button>
        ) : (
          <button
            onClick={handleAuthAction}
            className="flex items-center gap-2 text-text-secondary hover:text-text-primary transition-colors duration-200 font-medium text-sm"
          >
            <span>{isAuthenticated ? 'Logout' : 'Login'}</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
              <polyline points="10 17 15 12 10 7" />
              <line x1="15" y1="12" x2="3" y2="12" />
            </svg>
          </button>
        )}


      </div>
    </header>
  )

}

export default Header;

