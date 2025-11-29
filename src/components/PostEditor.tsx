import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext'
import { Bold, Italic, Underline, List, ListOrdered, Quote, Code, Trash2, Plus, Mic, Video, SendHorizontal } from 'lucide-react';


interface PostEditorProps {
  onPostCreated: (context: string, emoji?: string) => void;
  onUnAuthorizedAction: () => void;
}


const PostEditor: React.FC<PostEditorProps> = ({ onPostCreated, onUnAuthorizedAction }) => {
  const { isAuthenticated } = useAuth();
  const [content, setContent] = useState('');
  const [selectedEmoji, setSelectedEmoji] = useState<string>('');

  const publishPost = () => {
    if (!isAuthenticated) {
      onUnAuthorizedAction();
      return;
    }

    const trimmedContent = content.trim();
    if (trimmedContent) {
      onPostCreated(trimmedContent, selectedEmoji);
      setContent('');
      setSelectedEmoji('');
    }
  };

  const checkAuth = () => {
    if (!isAuthenticated) {
      onUnAuthorizedAction();
    }
  };

  const handleNotReady = (e: React.MouseEvent) => {
    e.preventDefault();
    if (!isAuthenticated) {
      onUnAuthorizedAction();
    } else {
      alert('Function not implemented');
    }
  };


  return (

    <div className="w-full max-w-3xl bg-white rounded-xl shadow-uniform" onClick={checkAuth}>

      <div>
        <div className="flex items-center bg-white justify-between px-4 py-3 border-gray-200 rounded-t-2xl">
          <div className="flex items-center bg-gray-100 justify-between px-1 py-1  border-gray-1000 rounded-lg">
            <div className="flex items-center gap-1">
              {/* Paragraph Dropdown */}
              <select 
                className="px-3 py-1.5 text-sm font-medium text-gray-700 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
                onChange={(e) => {
                  if (!isAuthenticated) {
                    e.preventDefault();
                    onUnAuthorizedAction();
                  } else {
                    handleNotReady(e as any);
                  }
                }}
              >
                <option>Paragraph</option>
                <option>Heading 1</option>
                <option>Heading 2</option>
                <option>Heading 3</option>
              </select>


              {/* <div className="w-px h-6 bg-gray-200 mx-2" /> */}

              {/* Bold */}
              <button 
                className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
              
              >
                <Bold className="w-5 h-5" />
              </button>

              {/* Italic */}
              <button 
                className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
                
              >
                <Italic className="w-5 h-5" />
              </button>

              {/* Underline */}
              <button 
                className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
              
              >
                <Underline className="w-5 h-5" />
              </button>


              <div className="w-px h-6 bg-gray-200 mx-2" />


              <button 
                className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
                
              >
                <List className="w-5 h-5" />
              </button>


              <button 
                className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
                
              >
                <ListOrdered className="w-5 h-5" />
              </button>


              <div className="w-px h-6 bg-gray-200 mx-2" />


              <button 
                className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
                
              >
                <Quote className="w-5 h-5" />
              </button>


              <button 
                className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
                
              >
                <Code className="w-5 h-5" />
              </button>
            </div>



          </div>
          <button 
            className="p-2.5 text-red-500 bg-red-50 hover:bg-red-100 rounded-xl transition-colors"
            onClick={handleNotReady}
          >
            <Trash2 className="w-5 h-5" />
          </button>
        </div>


        <div className="px-6 py-4">
          <div className="flex items-start gap-3">
            <span className="text-2xl mt-1">😊</span>
              <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              onClick={checkAuth}
              placeholder="What's on your mind?"
              className="flex-1 text-gray-400 text-lg placeholder-gray-400 border-none outline-none resize-none font-normal"
              rows={3}
            />
          </div>
        </div>


        <div className="flex items-center justify-between px-4 py-3 border-t border-gray-200 rounded-b-2xl">
          {/* Left side - Action buttons */}
          <div className="flex items-center gap-2">
            <button className="p-2 text-gray-600 bg-gray-100 rounded-lg transition-colors"
              onClick={handleNotReady}
            >
              <Plus className="w-5 h-5" />
            </button>
            <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
              onClick={handleNotReady}
            >
              <Mic className="w-5 h-5" />
            </button>
            <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
              onClick={handleNotReady}
            >
              <Video className="w-5 h-5" />
            </button>
          </div>

          {/* Right side - Send button */}
          <button 
            className="p-2.5 hover:bg-gray-200 rounded-xl transition-colors"
            onClick={publishPost}
          >
            <SendHorizontal strokeWidth={2} color='#5157ea' />
          </button>
        </div>
      </div>
    </div>

  )
}

export default PostEditor;