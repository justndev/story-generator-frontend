# Story Generator Frontend

A React-based frontend application for the Story Generator project that allows users to create short narrated videos with customizable backgrounds and voices. This frontend works together with the Spring Boot backend service and Flask-based microservice for a complete video generation experience.

![User Flow](./assets/designs/userflow.jpg)

## 🚀 Features

- **User Authentication** - Complete user flow with signup, email verification, and login
- **Multi-language Support** - Interface available in English, Russian, and Estonian
- **Video Creation** - Generate narrated videos with custom text and background
- **Voice Selection** - Choose from multiple AI voice options for narration
- **Background Video Selection** - Choose from multiple attractive video
- **Real-time Progress Tracking** - Monitor video generation status
- **Responsive Design** - Works on desktop and mobile devices

## 📁 Project Structure

```
story-generator-frontend/
├── node_modules         # Dependencies
├── src                  # Source code
│   ├── api              # API communication services
│   │   ├── AuthApi.ts   # Authentication API
│   │   └── ServiceApi.ts # Video generation API
│   ├── assets           # Static assets
│   ├── constants        # Application constants
│   │   ├── gifs.ts      # Animation assets
│   │   ├── icons.ts     # UI icons
│   │   ├── snaps.ts     # Snapshot references
│   │   └── voices.ts    # Available voice options
│   ├── hooks            # Custom React hooks
│   ├── i18n             # Internationalization
│   │   ├── config.js    # i18n configuration
│   │   ├── en.json      # English translations
│   │   ├── ru.json      # Russian translations
│   │   └── ee.json      # Estonian translations
│   ├── pages            # Application pages
│   │   ├── AuthPage.tsx # Login/signup page
│   │   ├── HomePage.tsx # Main landing page
│   │   ├── ResultsPage.tsx # Video results page
│   │   └── ServicePage.tsx # Video creation page
│   ├── UI               # UI components
│   │   ├── components   # Reusable UI components
│   │   │   ├── animated # Animation components
│   │   │   ├── buttons  # Button components
│   │   │   ├── dropdowns # Dropdown menus
│   │   │   ├── forms    # Form components
│   │   │   ├── labels   # Text label components
│   │   │   ├── textInputs # Input field components
│   │   │   └── utilComponents # Utility components
│   ├── utils            # Utility functions
│   │   ├── redux        # State management
│   │   │   ├── appSlice.ts # App-wide state
│   │   │   ├── store.ts # Redux store
│   │   │   └── userSlice.ts # User state
│   │   ├── apiUtil.ts   # API utilities
│   │   ├── authUtil.ts  # Authentication utilities
│   │   └── fileUtil.ts  # File handling utilities
│   ├── App.tsx          # Main application component
│   └── index.tsx        # Application entry point
```

## 🔧 Installation

1. **Clone the repository**
```bash
git clone https://github.com/justndev/story-generator-frontend.git
cd story-generator-frontend
```

2. **Install dependencies**
```bash
npm install
```

3. **Run the application**
```bash
npm start
```

The application will be available at `http://localhost:3000`.

## 🔄 Integration with Backend Services

This React application works with two backend services:

1. **Spring Boot Backend** - Handles authentication, user management, and coordinates video generation requests
2. **Flask Microservice API** - Processes the actual video generation with AI voice synthesis

The frontend communicates with these services to provide a seamless experience:
- User registers and logs in via the Spring Boot backend
- Video generation requests are sent through the Spring Boot backend
- The backend delegates processing to the Flask microservice
- The frontend polls for status updates and retrieves completed videos

## 📸 Pages

### Home Page
![Home Page](./assets/designs/home.jpg)

### Video Creation
![Video Creation](./assets/designs/service.jpg)

### Results Page
![Results Page](./assets/designs/result.jpg)

## 🎨 Design

View the complete design in [Figma](https://www.figma.com/design/rWcvmb2AqLqM7sdSspf3TI/Short-Video-Builder?node-id=0-1&p=f&t=i1KcojzPZMuFaAvy-0).

## 🧩 Related Projects

### Backend Service
The Spring Boot backend service handles authentication, email confirmation, video generation requests, and file management. [View Backend Repository](https://github.com/justndev/story-generator-backend)

### Video Generation Microservice
The Flask-based microservice processes the actual video generation with OpenAI text-to-speech and FFmpeg. [View Microservice Repository](https://github.com/justndev/story-generator-flask-script-api)

## 📦 Requirements

- Node.js 14.x+
- npm 6.x+
- Modern web browser
- The backend services must be running (see companion READMEs)

## 📝 License

MIT License
