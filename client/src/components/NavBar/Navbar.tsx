import { Link, useNavigate } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
    const nav = useNavigate();

    const handleLogout = () => {
        nav('/')
    }
  return (
    <nav>
       <p className='logo'>Q</p>
       <Link className='logo' to='/'><p>Q</p></Link>
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
      <button onClick={handleLogout}>Logout</button>
    </nav>
  );
};

export default NavBar;
