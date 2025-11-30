import React, { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import Modal from '../components/Modal';
import type { Post } from '../types';
import Header from '../components/Header';
import PostEditor from '../components/PostEditor';
import SignIn from './SignIn';
import SignUp from './SignUp';
import PostCard from '../components/PostCard';

const INITIAL_POSTS_STATE: Post[] = [
  {
    id: '1',
    author: { email: 'theresa@example.com', username: 'Theresa Webb' },
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    timestamp: new Date(Date.now() - 5 * 60000),
    emoji: '😊',
  },
  {
    id: '2',
    author: { email: 'john@example.com', username: 'John Doe' },
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    timestamp: new Date(Date.now() - 5 * 60000),
    emoji: '👍',
  },
  {
    id: '3',
    author: { email: 'jane@example.com', username: 'Jane Doe' },
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    timestamp: new Date(Date.now() - 5 * 60000),
    emoji: '😢',
  }
];


const Feed: React.FC = () => {
  const { user, isAuthenticated } = useAuth();
  const [posts, setPosts] = useState<Post[]>(INITIAL_POSTS_STATE);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authView, setAuthView] = useState<'signin' | 'signup'>('signin');
  const [nextId, setNextId] = useState(4);

  useEffect(() => {
    const savedPosts = localStorage.getItem('posts');
    if (savedPosts) {
      try {
        const parsed = JSON.parse(savedPosts);
        if (Array.isArray(parsed) && parsed.length > 0) {
          setPosts(parsed.map(p => ({ ...p, timestamp: new Date(p.timestamp) })));
        }
      } catch (err) {
        console.error('Failed to load posts from storage');
      }
    }
  }, []);

  const addNewPost = (content: string, emoji?: string) => {
    if (!user) return;
    
    const newPost: Post = {
      id: String(nextId),
      author: user,
      content: content.trim(),
      timestamp: new Date(),
      emoji: emoji || '😊'
    };

    const updatedPosts = [newPost, ...posts];
    setPosts(updatedPosts);
    setNextId(nextId + 1);
    localStorage.setItem('posts', JSON.stringify(updatedPosts));
  };

  const requireAuth = () => {
    if (!isAuthenticated) {
      setShowAuthModal(true);
    }
  };

  const onAuthComplete = () => {
    setShowAuthModal(false);
    setAuthView('signin');
  };

  const switchToSignUp = () => {
    setAuthView('signup');
  };

  const switchToSignIn = () => {
    setAuthView('signin');
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="max-w-2xl mx-auto mt-10 px-6 pt-12 pb-8">
        <div className="bg-gray-100 rounded-xl shadow-sm border border-gray-100 overflow-hidden p-2">
          <PostEditor
            onPostCreated={addNewPost}
            onUnAuthorizedAction={requireAuth}
          />
        </div>

        <div className="mt-6 space-y-4 pb-8">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} onInteraction={requireAuth} />
          ))}
        </div>
      </main>

      <Modal isOpen={showAuthModal} onClose={() => setShowAuthModal(false)}>
        {authView === 'signin' ? (
          <SignIn 
            isModal={true} 
            onSuccess={onAuthComplete}
            onSwitchToSignUp={switchToSignUp}
          />
        ) : (
          <SignUp 
            isModal={true} 
            onSuccess={onAuthComplete}
            onSwitchToSignIn={switchToSignIn}
          />
        )}
      </Modal>
    </div>
  )

}

export default Feed;

