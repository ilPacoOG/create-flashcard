import React from 'react';
import Card from '../Card/Card';

interface CardListProps {
  cards: { _id: string; questionText: string; answerText: string }[];
}

const CardList: React.FC<CardListProps> = ({ cards }) => {
  if (!cards.length) {
    return <h3>No Cards Yet</h3>;
  }

  return (
    <div className="card-list">
      {cards.map((card) => (
        <Card
          key={card._id} // Ensure a unique key is passed
          question={card.questionText}
          answer={card.answerText}
        />
      ))}
    </div>
  );
};

export default CardList;
