import React from 'react';
import FlashcardForm from '../components/FlashcardForm/FlashcardForm';
import NavBar from '../components/NavBar/Navbar';

const CreateFlashcardPage: React.FC = () => {
  return (
    <div className="create-flashcard-page">
      <NavBar />
      <main>
        <h1>Create a Flashcard</h1>
        <FlashcardForm />
      </main>
    </div>
  );
};

export default CreateFlashcardPage;
