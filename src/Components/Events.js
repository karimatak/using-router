import React from 'react';
import '../App.css';
import Straw_Hat_Pirates_flag from '../assets/Straw_Hat_Pirates_flag.png'


function Events({id, name, detail, date, country, category}) {
  return (
        <div className="single-data">
            <img src={Straw_Hat_Pirates_flag} className="img"  alt="" />
            <div>    
                <p><strong>ID       :</strong> {id}</p>
                <p><strong>Name     :</strong> {name}</p>
                <p><strong>Details  :</strong> {detail}</p>
                <p><strong>Date     :</strong> {date}</p>
                <p><strong>Country  :</strong> {country}</p>
                <p><strong>Category :</strong> {category}</p>
            </div>
        </div>
  );
}

export default Events;
