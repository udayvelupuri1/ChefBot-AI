// Importing ReactDOM's modern client API for creating the root of the React app
import ReactDOM from 'react-dom/client';

// Importing the main App component
import App from "./App";

// Creating the root of the React app and rendering the App component into the DOM element with id="root"
ReactDOM.createRoot(document.getElementById('root')).render(<App />);
