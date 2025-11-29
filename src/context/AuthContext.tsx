import React, { createContext, useContext, useState, useEffect } from 'react';
import type { User } from '../types';
import type { AuthContextType } from '../types';

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const TEST_ACCOUNTS = [
  { email: 'demo@example.com', password: 'password123', username: 'Demo User' },
  { email: 'test@user.com', password: 'testpass', username: 'Test User' },
];

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (e) {
        localStorage.removeItem('user');
      }
    }
  }, []);

  const login = (email: string, password: string): boolean => {
    const account = TEST_ACCOUNTS.find(
      acc => acc.email === email && acc.password === password
    );

    if (account) {
      const userData = { email: account.email, username: account.username };
      setUser(userData);
      localStorage.setItem('user', JSON.stringify(userData));
      return true;
    }
    return false;
  };

  const signup = (email: string, _password: string): boolean => {
    const existingAccount = TEST_ACCOUNTS.find(acc => acc.email === email);
    if (existingAccount) {
      return false;
    }

    const username = email.split('@')[0];
    const userData = { email, username };
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData));
    return true;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        login,
        signup,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

