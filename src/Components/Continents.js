import React from 'react';
import '../App.css';

function Continents({continentId, name}) {

    return (
          <div className="single-data">
              <div>    
                  <p><strong>ID   :</strong> {continentId}</p>
                  <p><strong>Name :</strong> {name}</p>
              </div>
          </div>
    );
  }

export default Continents;
