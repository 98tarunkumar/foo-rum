import React from 'react';
import type { Post } from '../types';
import { Heart, MessageCircle, Send } from 'lucide-react';

interface PostCardProps {
  post: Post;
  onInteraction: () => void;
}

const PostCard: React.FC<PostCardProps> = ({ post, onInteraction: _onInteraction }) => {
  const formatTime = (date: Date) => {
    const now = new Date();
    const minutes = Math.floor((now.getTime() - date.getTime()) / 60000);

    if (minutes < 1) return 'Just now';
    if (minutes < 60) return `${minutes} min${minutes > 1 ? 's' : ''} ago`;
    
    const hours = Math.floor(minutes / 60);
    if (hours < 24) return `${hours} hour${hours > 1 ? 's' : ''} ago`;
    
    const days = Math.floor(hours / 24);
    return `${days} day${days > 1 ? 's' : ''} ago`;
  };

  return (
   
      <div className="w-full max-w-2xl">
        <div className="bg-gray-100 rounded-xl shadow-sm border border-gray-100 overflow-hidden p-2">
          <div className="px-4 pt-4 pb-4 bg-white">
            <div className="flex items-center gap-3">
              <button 
                onClick={() => alert('Profile view not implemented')}
                className="flex-shrink-0 focus:outline-none focus:ring-2 focus:ring-primary rounded-full transition-all hover:opacity-80"
                title="View profile"
              >
                <img 
                  src={`https://i.pravatar.cc/150?img=${post.id}`}
                  alt={`${post.author.username}'s avatar`}
                  className="w-12 h-12 rounded-xl object-cover ring-2 ring-gray-200"
                />
              </button>
              
              <div className="flex-1 min-w-0">
                <div className="flex flex-col gap-0">
                  <h3 className="font-semibold text-gray-900 text-lg">
                    {post.author.username}
                  </h3>
                  <span className="text-sm text-gray-500 font-normal">
                    {formatTime(post.timestamp)}
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-4 flex items-start gap-3">
              {post.emoji && (
                <span className="text-2xl flex-shrink-0 leading-none">
                  {post.emoji}
                </span>
              )}
              
              <p className="text-gray-900 text-base leading-relaxed flex-1 font-normal">
                {post.content}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-1">
            <button
              className="p-2.5 rounded-lg transition-colors text-gray-600"
              onClick={() => alert('Function not implemented')}
              title="Like"
            >
              <Heart className="w-5 h-5 stroke-[2]" />
            </button>
            <button
              className="p-2.5 rounded-lg transition-colors text-gray-600"
              onClick={() => alert('Function not implemented')}
              title="Comment"
            >
              <MessageCircle className="w-5 h-5 stroke-[2]" />
            </button>
            <button
              className="p-2.5 rounded-lg transition-colors text-gray-600"
              onClick={() => alert('Function not implemented')}
              title="Share"
            >
              <Send className="w-5 h-5 stroke-[2]" />
            </button>
          </div>
        </div>
      </div>
    
  );
};

export default PostCard;

