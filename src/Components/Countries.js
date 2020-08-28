import React from 'react';
import '../App.css';


function Countries({id, name, continent, Ccontinent}) {

  return (
      <div className="single-data">
          <div>    
              <p><strong>ID        :</strong> {id}</p>
              <p><strong>Name      :</strong> {name}</p>
              <p><strong>Continent :</strong> {continent}</p>
              <p><strong>Continent FROM Continent :</strong> {Ccontinent}</p>
          </div>
      </div>
  );
}

export default Countries;
