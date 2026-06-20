# AI Resume Reviewer

A simple capstone-ready AI-powered resume review application.

## Features

- React frontend
- Vercel serverless API
- Gemini AI integration
- Resume improvement suggestions
- Missing skills detection
- Resume rating
- GitHub Actions test and build workflow

## Project Flow

User enters resume text
→ Frontend sends request to `/api/review`
→ Vercel serverless function calls Gemini API
→ AI feedback is returned
→ Frontend displays feedback

## Local Setup

```bash
npm install
npm run dev
```

## Environment Variable Required

Create this environment variable in Vercel:

```text
GEMINI_API_KEY=your_gemini_api_key_here
```

Never commit real API keys to GitHub.

## Deploy on Vercel

1. Push this project to GitHub.
2. Go to Vercel.
3. Click Add New Project.
4. Import the GitHub repository.
5. Add environment variable `GEMINI_API_KEY`.
6. Click Deploy.

## Testing

```bash
npm test
```

## Build

```bash
npm run build
```
