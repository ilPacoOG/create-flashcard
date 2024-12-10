import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Categories from './pages/Categories';
import Flashcards from './pages/Flashcards';
import Quiz from './pages/Quiz';
import App from './App';
import ErrorPage from './pages/ErrorPage';
import Login from './pages/Login';
import CreateFlashcardPage from './pages/CreateFlashcardForm';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />, // App acts as the layout
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Login />,
      },
      {
        path: '/categories',
        element: <Categories />,
      },
      {
        path: '/flashcards',
        element: <Flashcards />,
      },
      {
        path: '/quiz',
        element: <Quiz />,
      },
      {
        path: '/create-flashcard',  // Add this route
        element: <CreateFlashcardPage />
      },
    ],
  },
]);

const rootElement = document.getElementById('root');
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(<RouterProvider router={router} />);
}


