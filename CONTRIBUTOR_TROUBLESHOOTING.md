# Quick Troubleshooting for Contributors

## Can't access http://localhost:3000?

### Step 1: Check if dependencies are installed
```bash
npm install
```

### Step 2: Check if dev server is running
```bash
npm run dev
```
You should see: "✓ Ready in X seconds" and "○ Local: http://localhost:3000"

### Step 3: Check Node.js version
```bash
node --version
```
Must be v18 or higher. If not, update Node.js from [nodejs.org](https://nodejs.org/)

### Step 4: Port already in use?
If port 3000 is busy, use a different port:
```bash
npm run dev -- -p 3001
```
Then open: http://localhost:3001

### Step 5: Check for errors
Look at the terminal output for error messages. Common issues:
- Missing dependencies → Run `npm install`
- Build errors → Check Node.js version
- Port conflicts → Use different port (see Step 4)

### Step 6: Clear cache and reinstall (if nothing works)
```bash
rm -rf node_modules package-lock.json .next
npm cache clean --force
npm install
npm run dev
```

## Still having issues?
1. Make sure you're in the project directory: `cd /path/to/uk-tax-calculator`
2. Check the terminal for specific error messages
3. Verify you have Node.js v18+ installed
