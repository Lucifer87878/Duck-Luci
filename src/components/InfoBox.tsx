import React from 'react';

interface InfoBoxProps {
  person: {
    firstname: string;
    lastname: string;
    pant_color: string;
    favorite_food: string;
    favorite_tool: string;
    pet: string;
    hobby: string;
  };
}

const InfoBox: React.FC<InfoBoxProps> = ({ person }) => {
  return (
    <div>
      <h2>Personal Information</h2>
      <p>Name: {person.firstname + ' ' + person.lastname}</p>
      <p>Pant's Color: {person.pant_color}</p>
      <p>Favorite Food: {person.favorite_food}</p>
      <p>Favorite Tool: {person.favorite_tool}</p>
      <p>Pet: {person.pet}</p>
      <p>Hobby: {person.hobby}</p>
    </div>
  );
};

export default InfoBox;
