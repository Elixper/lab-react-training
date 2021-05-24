import React from 'react';
import '../styles/IdCard.css';
const IdCard = (props) => {
//   console.log(props);
//   console.log(props.birth.toString());
//   console.dir(JSON.stringify(props.birth));

  return (
    <div className="Card">
      <h1 className="Card__title">{props.name}</h1>
      <p className="Card__description"> {props.firstName}</p>
      <p className="Card__description"> {props.lastName}</p>
      <p className="Card__description"> {props.gender}</p>
      <p className="Card__description"> {props.height}</p>
      <p className="Card__description"> {props.birth.toUTCString()}</p>
      <img
        className="Card__image"
        style={{
          width: 20,
          height: 20,
        }}
        src={props.picture}
        alt=""
      />
    </div>
  );
};

export default IdCard;
