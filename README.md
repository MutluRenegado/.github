# Chat App with Social Authentication

A modern, real-time chat application built with Next.js 14, featuring social authentication integration with Google, GitHub, Facebook, and Twitter/X.

## Features

- 🔐 **Social Authentication**: Login with Google, GitHub, Facebook, or Twitter/X
- 💬 **Real-time Messaging**: Instant message delivery using Pusher
- 🎨 **Modern UI**: Beautiful, responsive design with Tailwind CSS
- 👥 **Multiple Conversations**: Create and manage multiple chat rooms
- 📱 **Responsive Design**: Works seamlessly on desktop and mobile devices
- 🔒 **Secure**: Built with NextAuth.js v5 and Prisma ORM

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Authentication**: NextAuth.js v5
- **Database**: PostgreSQL with Prisma ORM
- **Real-time**: Pusher
- **Deployment**: Vercel-ready

## Getting Started

### Prerequisites

- Node.js 18+ installed
- PostgreSQL database
- Social OAuth credentials (Google, GitHub, Facebook, Twitter)
- Pusher account for real-time messaging

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd chat-app-social
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env
```

Edit `.env` and add your credentials:

```env
# Database
DATABASE_URL="postgresql://user:password@localhost:5432/chatapp?schema=public"

# NextAuth.js
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="generate-with-openssl-rand-base64-32"

# Google OAuth
GOOGLE_CLIENT_ID="your-google-client-id"
GOOGLE_CLIENT_SECRET="your-google-client-secret"

# GitHub OAuth
GITHUB_ID="your-github-client-id"
GITHUB_SECRET="your-github-client-secret"

# Facebook OAuth
FACEBOOK_CLIENT_ID="your-facebook-app-id"
FACEBOOK_CLIENT_SECRET="your-facebook-app-secret"

# Twitter OAuth
TWITTER_CLIENT_ID="your-twitter-client-id"
TWITTER_CLIENT_SECRET="your-twitter-client-secret"

# Pusher
NEXT_PUBLIC_PUSHER_APP_KEY="your-pusher-app-key"
PUSHER_APP_ID="your-pusher-app-id"
PUSHER_SECRET="your-pusher-secret"
NEXT_PUBLIC_PUSHER_CLUSTER="your-pusher-cluster"
```

4. Set up the database:
```bash
npx prisma generate
npx prisma db push
```

5. Run the development server:
```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Setting Up OAuth Providers

### Google OAuth
1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing one
3. Enable Google+ API
4. Create OAuth 2.0 credentials
5. Add authorized redirect URI: `http://localhost:3000/api/auth/callback/google`

### GitHub OAuth
1. Go to [GitHub Developer Settings](https://github.com/settings/developers)
2. Create a new OAuth App
3. Set Authorization callback URL: `http://localhost:3000/api/auth/callback/github`

### Facebook OAuth
1. Go to [Facebook Developers](https://developers.facebook.com/)
2. Create a new app
3. Add Facebook Login product
4. Add Valid OAuth Redirect URI: `http://localhost:3000/api/auth/callback/facebook`

### Twitter OAuth
1. Go to [Twitter Developer Portal](https://developer.twitter.com/)
2. Create a new app
3. Enable OAuth 2.0
4. Add Callback URI: `http://localhost:3000/api/auth/callback/twitter`

### Pusher Setup
1. Go to [Pusher](https://pusher.com/)
2. Create a new app
3. Copy your app credentials to `.env`

## Project Structure

```
├── app/
│   ├── api/
│   │   ├── auth/[...nextauth]/    # NextAuth.js API routes
│   │   ├── conversations/         # Conversation API endpoints
│   │   └── messages/              # Message API endpoints
│   ├── auth/
│   │   └── signin/                # Sign-in page
│   ├── chat/                      # Chat interface page
│   ├── globals.css                # Global styles
│   ├── layout.tsx                 # Root layout
│   └── page.tsx                   # Home page (redirects)
├── components/
│   └── ChatInterface.tsx          # Main chat component
├── lib/
│   ├── prisma.ts                  # Prisma client
│   └── pusher.ts                  # Pusher configuration
├── prisma/
│   └── schema.prisma              # Database schema
├── types/
│   └── next-auth.d.ts             # NextAuth type definitions
├── auth.ts                        # NextAuth configuration
├── middleware.ts                  # Auth middleware
└── tailwind.config.ts             # Tailwind configuration
```

## Database Schema

The application uses the following main models:

- **User**: User accounts with social authentication
- **Account**: OAuth account connections
- **Session**: User sessions
- **Conversation**: Chat conversations/rooms
- **ConversationParticipant**: Users in conversations
- **Message**: Chat messages

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in Vercel
3. Add environment variables in Vercel dashboard
4. Deploy

### Other Platforms

Ensure you:
1. Set up PostgreSQL database
2. Configure all environment variables
3. Run `npx prisma generate` and `npx prisma db push`
4. Build with `npm run build`

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

ISC License

## Support

For issues and questions, please open an issue on GitHub.
