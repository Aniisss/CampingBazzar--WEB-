import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals



// project structure

/*  my-multi-page-site/
├── public/
│   ├── index.html         # Main HTML file
│   └── favicon.ico        # Favicon
├── src/
│   ├── assets/            # Images, fonts, and other static assets
│   │   └── logo.png
│   ├── components/        # Reusable components
│   │   ├── Header.js
│   │   ├── Footer.js
│   ├── pages/             # Folder for page components
│   │   ├── Home.js        # Home page component
│   │   ├── About.js       # About page component
│   │   └── Contact.js     # Contact page component
│   ├── App.js             # Main App component
│   ├── App.css            # Global styles
│   └── index.js           # Entry point of the application
├── package.json           # Project dependencies and scripts
└── README.md              # Project description    */
