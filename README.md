# Movie Reviews App

## Description
This project is a web application for movie reviews, built with Flask and React. The backend provides RESTful APIs for managing movie data, while the frontend allows users to view and submit reviews.

## Installation

### Backend (Flask)
1. Clone the repository:
   
   git clone https://github.com/your/repository.git
   
2. Navigate to the backend directory:
   
   cd backend
   
3. Create a virtual environment:
   
   python3 -m venv venv
   
4. Activate the virtual environment:
   - On Windows:
     
     venv\Scripts\activate
     
   - On macOS and Linux:
     
     source venv/bin/activate
     
5. Install dependencies:
   
   pip install -r requirements.txt
   
6. Set up the database:
   - Modify the database configuration in config.py
   - Run migrations:
     
     flask db upgrade
     
7. Run the Flask application:
   
   python app.py
   

 #  Frontend (React with Vite)
The frontend is built with React using Vite, a fast build tool that significantly improves frontend development experience.

1. Navigate to the frontend directory:
   
   cd frontend
   
2. Install dependencies:
   
   npm install
   
3. Start the development server:
   
   npm run dev
   

## Project Structure
### Backend (Flask)
- app.py: Main Flask application file
- models.py: Defines the database models for movies and reviews
- routes.py: Contains the API routes for interacting with movie data
- ... (other backend files)

### Frontend (React with Vite)
- src/: Contains the React components and other frontend files
  - components/: Directory for reusable React components
  - pages/: Directory for individual pages of the application
  - App.jsx: Main entry point for the React application
- public/: Contains the public assets such as images, icons, and other static files
- package.json: Manages Node.js dependencies and scripts for building and running the frontend
- vite.config.js: Configuration file for Vite, allowing customization of the build process and development server settings

## Usage
1. Access the web application at http://127.0.0.1:5000 in your web browser.
2. Browse the list of movies, view details, and submit reviews.
3. Interact with the application to see the integration between the Flask backend and React frontend.

## Contributing
Feel free to contribute to this project by submitting pull requests. Your contributions are highly appreciated!