# RAG Chat App

A modern web application that enables AI-powered conversations about any web content using Retrieval-Augmented Generation (RAG). Simply provide a URL, and chat with an AI that understands the content of that page.

## Features

- **URL-based RAG Chat**: Navigate to any URL path (e.g., `/https://example.com`) to chat about that page's content
- **Real-time Streaming**: AI responses stream in real-time for a natural conversation experience
- **Smart Caching**: Automatically caches indexed content to avoid re-processing the same URLs
- **Session Management**: Unique sessions per user with persistent chat history (up to 10 messages)
- **Auto-scrolling**: Messages automatically scroll into view as they arrive
- **Responsive UI**: Clean, modern interface with distinct user and AI message styling

## Tech Stack

### Core Framework
- **Next.js 14.2.12** - React framework with App Router
- **React 18** - UI library
- **TypeScript** - Type safety

### AI & Database
- **@upstash/rag-chat** (v1.6.4) - RAG functionality with vector embeddings
- **@upstash/redis** (v1.34.0) - Redis for caching and session storage
- **Vercel AI SDK** (v3.3.41) - Streaming AI responses
- **Meta-Llama-3-8B-Instruct** - Language model via Upstash

### UI & Styling
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - High-quality component library
- **Radix UI** - Accessible component primitives
- **lucide-react** - Icon library

## Project Structure

```
chat-app/
├── src/
│   ├── app/
│   │   ├── [...url]/           # Dynamic catch-all route for any URL
│   │   │   └── page.tsx        # Main chat page
│   │   ├── api/
│   │   │   └── chat-stream/
│   │   │       └── route.ts    # Streaming chat API endpoint
│   │   ├── globals.css         # Global styles
│   │   ├── layout.tsx          # Root layout
│   │   └── page.tsx            # Home page
│   ├── components/
│   │   ├── ui/                 # shadcn/ui components
│   │   ├── ChatInputForm.tsx   # Message input component
│   │   ├── ChatWindow.tsx      # Main chat container
│   │   ├── Message.tsx         # Individual message component
│   │   ├── MessageAvatar.tsx   # User/AI avatars
│   │   ├── MessageContent.tsx  # Message bubble
│   │   └── Messages.tsx        # Message list with auto-scroll
│   ├── lib/
│   │   ├── rag-chat.ts         # RAG chat initialization
│   │   ├── redis.ts            # Redis client setup
│   │   └── utils.ts            # Utility functions
│   ├── utils/
│   │   └── helperFunctions.ts  # URL reconstruction helpers
│   └── middleware.ts           # Session ID management
├── .env                        # Environment variables
├── components.json             # shadcn/ui configuration
├── tailwind.config.ts          # Tailwind configuration
└── tsconfig.json              # TypeScript configuration
```

## Getting Started

### Prerequisites

- Node.js 18+ installed
- Upstash account with:
  - Vector database
  - Redis instance
  - QStash service
- LlamaCloud API key

### Environment Setup

Create a `.env` file in the root directory with the following variables:

```bash
# Upstash Vector Database (for embeddings)
UPSTASH_VECTOR_REST_URL=your_vector_url
UPSTASH_VECTOR_REST_TOKEN=your_vector_token

# Upstash Redis (for caching and sessions)
UPSTASH_REDIS_REST_URL=your_redis_url
UPSTASH_REDIS_REST_TOKEN=your_redis_token

# Upstash QStash (for queue management)
QSTASH_TOKEN=your_qstash_token

# LlamaCloud API (for AI model access)
LLAMA_CLOUD_API_KEY=your_llama_api_key
```

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd chat-app
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Set up environment variables (see above)

4. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

### Usage

1. Navigate to any URL path, for example:
   - `http://localhost:3000/https://example.com`
   - `http://localhost:3000/https://docs.example.com/api/introduction`

2. The app will automatically:
   - Fetch the HTML content from the provided URL
   - Index it in the vector database (if not already cached)
   - Load your chat history for that URL (if you've chatted before)

3. Start chatting! Ask questions about the content, request summaries, or have the AI explain concepts from the page.

## How It Works

### RAG Pipeline

1. **URL Processing**: When you visit `/{url}`, the app extracts and validates the URL
2. **Content Indexing**:
   - HTML content is fetched from the URL
   - Text is chunked into 200-character segments with 50-character overlap
   - Chunks are embedded and stored in Upstash Vector database
3. **Smart Caching**: Indexed URLs are tracked in Redis to prevent re-indexing
4. **Chat Context**:
   - Your message is sent to the RAG system
   - Relevant chunks are retrieved from the vector database
   - The AI model generates a response using the retrieved context
5. **Streaming**: Responses stream back in real-time via the Vercel AI SDK

### Session Management

- Unique session IDs are generated automatically via middleware
- Session IDs combine the URL + a unique cookie value
- Chat history persists across page refreshes for the same URL
- Maximum of 10 messages stored per session

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Architecture Highlights

- **Server Components**: URL indexing and initial data loading happen server-side
- **Client Components**: Interactive chat UI runs client-side for responsiveness
- **Streaming API**: Real-time message streaming using Vercel AI SDK's `aiUseChatAdapter`
- **Type Safety**: Full TypeScript coverage with strict mode enabled
- **Component Patterns**: Modern React patterns with hooks and compound components

## Deployment

### Deploy on Vercel

The easiest way to deploy this app is using the [Vercel Platform](https://vercel.com):

1. Push your code to a Git repository
2. Import your repository in Vercel
3. Configure environment variables in the Vercel dashboard
4. Deploy

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

### Other Platforms

This is a standard Next.js application and can be deployed to any platform that supports Node.js:
- Netlify
- AWS Amplify
- Railway
- Render
- Self-hosted with PM2

Ensure all environment variables are properly configured in your deployment platform.

## Configuration

### RAG Chat Settings

RAG configuration can be adjusted in `src/lib/rag-chat.ts:4-10`:
- Model: `meta-llama/Meta-Llama-3-8B-Instruct`
- Chunk size: 200 characters
- Chunk overlap: 50 characters

### Session Settings

Session configuration is in `src/app/[...url]/page.tsx:54-59`:
- Maximum message history: 10 messages
- Session ID format: `{url}-{cookie-session-id}`

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is private and proprietary.

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Upstash RAG Chat](https://upstash.com/docs/rag-chat/overview)
- [Vercel AI SDK](https://sdk.vercel.ai/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [shadcn/ui](https://ui.shadcn.com)
