import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar: React.FC = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/categories">Categories</Link>
        </li>
        <li>
          <Link to="/flashcards">Flashcards</Link>
        </li>
        <li>
          <Link to="/quiz">Quiz</Link>
        </li>
        <li>
          <Link to="/create-flashcard">Create Flashcard</Link> {/* New Link */}
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
