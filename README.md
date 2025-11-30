# foo-rum - Social Feed Application

A modern, responsive social feed application built with React, TypeScript, and Vite. Create posts, interact with content, and manage your social presence with a clean and intuitive interface.

## 🚀 Features

- **User Authentication**: Sign up and sign in functionality with persistent sessions
- **Social Feed**: Browse and interact with posts from various users
- **Post Creation**: Create new posts with rich text editing capabilities
- **Emoji Support**: Add emojis to your posts for better expression
- **Responsive Design**: Beautiful, modern UI that works on all devices
- **Local Storage**: Posts and user data persist across sessions
- **Modal System**: Smooth modal dialogs for authentication and interactions

## 🛠️ Tech Stack

- **React 19** - UI library
- **TypeScript** - Type-safe JavaScript
- **Vite** - Fast build tool and dev server
- **React Router DOM** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful icon library
- **ESLint** - Code linting and quality

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18 or higher)
- **npm** (v9 or higher) or **yarn**

## 🏗️ Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd foo-rum
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` (or the port shown in your terminal)

## 📜 Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the project for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint to check code quality

## 🎯 Usage

### Authentication

The application includes demo accounts for testing:

**Test Accounts:**
- Email: `demo@example.com` | Password: `password123`
- Email: `test@user.com` | Password: `testpass`

You can also create a new account by signing up with any email address.

### Creating Posts

1. Sign in to your account
2. Use the post editor at the top of the feed
3. Type your content and optionally add an emoji
4. Click the send button to publish your post

### Navigation

- `/` - Main feed page
- `/signin` - Sign in page
- `/signup` - Sign up page

## 📁 Project Structure

```
foo-rum/
├── src/
│   ├── components/       # Reusable UI components
│   │   ├── Header.tsx
│   │   ├── Modal.tsx
│   │   ├── PostCard.tsx
│   │   └── PostEditor.tsx
│   ├── context/          # React context providers
│   │   └── AuthContext.tsx
│   ├── pages/           # Page components
│   │   ├── Feed.tsx
│   │   ├── SignIn.tsx
│   │   └── SignUp.tsx
│   ├── assets/          # Static assets
│   ├── App.tsx          # Main app component
│   ├── main.tsx         # Application entry point
│   ├── types.ts         # TypeScript type definitions
│   └── index.css        # Global styles
├── public/              # Public assets
├── dist/                # Production build output
├── vercel.json          # Vercel deployment configuration
├── vite.config.ts       # Vite configuration
├── tailwind.config.js   # Tailwind CSS configuration
├── tsconfig.json        # TypeScript configuration
└── package.json         # Project dependencies and scripts
```

## 🚢 Deployment

### Deploy to Vercel

The project is configured for easy deployment to Vercel:

1. **Install Vercel CLI** (if not already installed)
   ```bash
   npm i -g vercel
   ```

2. **Deploy from the project directory**
   ```bash
   cd foo-rum
   vercel
   ```

3. **Follow the prompts** to complete the deployment

Alternatively, you can deploy directly from the Vercel dashboard:

1. Push your code to GitHub/GitLab/Bitbucket
2. Import your repository in [Vercel](https://vercel.com)
3. Vercel will automatically detect the Vite configuration and deploy

The `vercel.json` file is already configured with:
- Build command: `npm run build`
- Output directory: `dist`
- SPA routing support for React Router

### Build for Production

To create a production build:

```bash
npm run build
```

The optimized files will be in the `dist/` directory, ready to be deployed to any static hosting service.

## 🎨 Styling

The project uses Tailwind CSS for styling. Customize the design by editing:

- `tailwind.config.js` - Tailwind configuration
- `src/index.css` - Global styles and custom CSS variables

## 🔒 Authentication

Currently, the application uses a simple authentication system with:
- Local storage for session persistence
- Demo accounts for testing
- Email-based signup (no password validation for new accounts)

**Note**: This is a frontend-only implementation. For production use, integrate with a proper backend authentication service.

## 📝 Data Persistence

- User sessions are stored in `localStorage`
- Posts are stored in `localStorage` (key: `posts`)
- Data persists across browser sessions

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 🙏 Acknowledgments

- [Vite](https://vitejs.dev/) for the amazing build tool
- [React](https://react.dev/) for the UI framework
- [Tailwind CSS](https://tailwindcss.com/) for the styling framework
- [Lucide](https://lucide.dev/) for the beautiful icons

---

Made with ❤️ using React and TypeScript
