import React from 'react';
import './userCards.css';

const UserCards = (props) => {
  return (
    <div className="individual-card">


      {props.first.map(user => {
        return <div key={user.id} className="card">
          <div className="card-body">
            <h5 className="card-title">{user.name}</h5>
            <p className="card-text">{"Company: " + user.company} </p>
            <p className="card-text">{"Postion: " + user.position} </p>
            <p className="card-text">{"Gender: " + user.profile.gender}</p>
            <p className="card-text">{"Age: " + user.profile.age}</p>
          </div>
        </div>;
      })}


    </div>
  )
}

export default UserCards;