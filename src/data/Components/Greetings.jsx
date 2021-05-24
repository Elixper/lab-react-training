import React from 'react';

const Greetings = (props) => {
  let bonjour ='';
  let langue = props.lang;
  switch (langue) {
    case 'de':
      bonjour = 'Hallo';
      break;
    case 'en':
      bonjour = 'Hello';
      break;
    case 'es':
      bonjour = 'Ola';
      break;
    case 'fr':
      bonjour = 'Bonjour';
      break;
    default:
      bonjour = 'Hey';
  }

  return (
    <div>
      <p className="Card__description"> {bonjour}</p>
      <p className="Card__description"> {props.children}</p>
    </div>
  );
};

export default Greetings;
