# Smart Meeting Assistant

An AI-powered meeting assistant that provides real-time transcription, note-taking, and automated Minutes of Meeting (MoM) generation.

## Features

- Real-time speech-to-text transcription
- Multi-speaker detection
- AI-powered note-taking and summarization
- Action item and task detection
- Automated MoM generation
- Multilingual support (English, Hindi, Hinglish)
- Meeting archive with search functionality
- Email and notification system

## Tech Stack

- Frontend: React with TypeScript
- Backend: Node.js with Express
- Database: MongoDB
- Real-time Communication: Socket.IO
- Speech-to-Text: Web Speech API / Google Cloud Speech-to-Text
- Authentication: JWT

## Prerequisites

- Node.js (v14 or higher)
- MongoDB
- npm or yarn

## Setup Instructions

1. Clone the repository
2. Install dependencies:
   ```bash
   npm run install-all
   ```
3. Set up environment variables:
   - Create `.env` files in both frontend and backend directories
   - Add necessary API keys and configuration

4. Start the development servers:
   ```bash
   npm start
   ```

## Project Structure

```
smart-meeting-assistant/
├── frontend/           # React frontend application
├── backend/           # Node.js backend server
└── package.json       # Root package.json
```

## Color Scheme

- Primary: Purple (#6B46C1)
- Secondary: White (#FFFFFF)
- Accent: Light Purple (#9F7AEA)

## Contributing

Please read CONTRIBUTING.md for details on our code of conduct and the process for submitting pull requests.

## License

This project is licensed under the ISC License. 