# MyDay

## 📝 Description
MyDay is a web application that simplifies your daily schedule management by connecting with your Google Calendar and enabling easy sharing through WhatsApp. The app fetches your current day's events from Google Calendar and generates a shareable format that can be sent via WhatsApp.

## ✨ Features
- Retrieves today's events from Google Calendar
- Integration with Google Cloud Platform
- Direct WhatsApp sharing through URL scheme
- User-friendly interface built with Vue.js

## 🔧 Technical Stack
- Frontend: Vue.js
- Backend: Node.js + Express.js
- APIs: Google Calendar API
- Cloud Services: Google Cloud Platform

## ⚠️ Note
This is currently an experimental application and hasn't been verified by Google. It's in development phase and meant for testing purposes.

## 🚀 Getting Started

### Prerequisites
- Node.js installed on your machine
- npm (Node Package Manager)
- Google Cloud Platform account (for API access)

### Installation

1. Clone the repository
```bash
git clone https://github.com/NaamaAtias/MyDay-GoogleCalendar-.git
cd MyDay-GoogleCalendar-
```

2. Backend Setup
```bash
cd backend
npm install
npm run dev
```

3. Frontend Setup
```bash
cd frontend
npm install
npm run dev
```

### Environment Configuration
Create a `.env` file in the backend directory with the following variables:
```
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
REDIRECT_URI=your_redirect_uri
```

These credentials can be obtained from the Google Cloud Console after setting up your project and enabling the Calendar API.

## 📱 WhatsApp Integration
The application uses WhatsApp's URL scheme to open the WhatsApp application with a pre-formatted message containing your daily events. This is achieved through direct URL parameters.

