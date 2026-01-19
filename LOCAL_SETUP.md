# Local Setup Guide

This guide will help you set up and run the UK Tax Calculator locally on your machine.

## Prerequisites

- **Node.js** (v18 or higher recommended)
- **npm** (comes with Node.js)

You can check if you have Node.js installed by running:
```bash
node --version
npm --version
```

If you don't have Node.js, download it from [nodejs.org](https://nodejs.org/)

## Setup Steps

### 1. Install Dependencies

```bash
npm install
```

This will install all required packages listed in `package.json`.

### 2. Configure Environment Variables (Optional)

The AI chatbot feature requires an OpenAI API key. If you want to use this feature:

1. Copy the example environment file:
   ```bash
   cp .env.example .env.local
   ```

2. Get your OpenAI API key from [platform.openai.com/api-keys](https://platform.openai.com/api-keys)

3. Open `.env.local` and add your API key:
   ```
   OPENAI_API_KEY=sk-your-actual-api-key-here
   ```

**Note:** The application will work without this - the chatbot feature just won't be available.

### 3. Run the Development Server

```bash
npm run dev
```

The application will start on [http://localhost:3000](http://localhost:3000)

Open your browser and navigate to that URL to see the application running.

## Available Scripts

- `npm run dev` - Start the development server with hot reload
- `npm run build` - Build the production application
- `npm start` - Start the production server (requires `npm run build` first)
- `npm run lint` - Run ESLint to check for code issues

## Project Structure

```
salarytakehome/
├── src/
│   └── app/               # Next.js App Router pages
│       ├── page.js        # Homepage
│       ├── layout.js      # Root layout
│       ├── components/    # React components
│       ├── api/          # API routes
│       └── [features]/   # Feature pages (mortgages, debts, etc.)
├── public/               # Static assets
├── package.json          # Dependencies and scripts
└── next.config.mjs      # Next.js configuration
```

## Troubleshooting

### Port 3000 is already in use

If you see an error about port 3000 being in use, you can either:
- Stop the process using port 3000
- Run on a different port: `npm run dev -- -p 3001`

### Dependencies won't install

Try clearing the npm cache and reinstalling:
```bash
rm -rf node_modules package-lock.json
npm cache clean --force
npm install
```

### Build errors

Make sure you're using Node.js v18 or higher:
```bash
node --version
```

## Development

The development server includes:
- **Hot reload** - Changes appear instantly without manual refresh
- **Error overlay** - See errors directly in the browser
- **Fast Refresh** - Preserves component state during edits

## Need Help?

- Check the [Next.js Documentation](https://nextjs.org/docs)
- Review the main [README.md](./README.md)
