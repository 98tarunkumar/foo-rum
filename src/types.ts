export interface User {
  email: string;
  username: string;
}

export interface Post {
  id: string;
  author: User;
  content: string;
  timestamp: Date;
  emoji?: string;
}

export interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => boolean;
  signup: (email: string, password: string) => boolean;
  logout: () => void;
}

