import React, { useState } from 'react';
import '../../App.css';
import {Link} from 'react-router-dom'


function Continents({continentId, name,summary,deleteContinent}) {
    
    return (
        <div key={continentId} className="single-data">
            <div>    
                <p><strong>ID   :</strong> {continentId}</p>
                <p><strong>Name :</strong> {name}</p>
                <p><strong>Summary :</strong> {summary}</p>
            </div>
            <div className="btns">
                <Link to={"/continents/edit/"+continentId} className="btn btn-warning">Edit</Link>
                <button onClick={() => deleteContinent(continentId)} className="btn btn-danger">Delete</button>
            </div>
        </div>
    );
  }

export default Continents;
