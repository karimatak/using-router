import React from 'react';
import '../App.css';
import Straw_Hat_Pirates_flag from '../assets/Straw_Hat_Pirates_flag.png'


// function Events({id, name, detail, date, country, category}) {
   function Events({event}) {
  return (
        <div className="single-data">
            <img src={Straw_Hat_Pirates_flag} className="img"  alt="" />
            <div>    
                {/* <p><strong>ID       :</strong> {event.id}</p>
                <p><strong>Name     :</strong> {event.name}</p>
                <p><strong>Details  :</strong> {event.detail}</p>
                <p><strong>Date     :</strong> {event.date}</p>
                <p><strong>Country  :</strong> {event.country}</p>
                <p><strong>Category :</strong> {event.category}</p> */}
                <p><strong>ID       :</strong> {event.EventId}</p>
                <p><strong>Name     :</strong> {event.EventName}</p>
                <p><strong>Details  :</strong> {event.EventDetails}</p>
                <p><strong>Date     :</strong> {event.EventDate}</p>
                <p><strong>Country  :</strong> {event.Country.countryName}</p>
                <p><strong>Category :</strong> {event.Category.categoryName}</p>
            </div>
        </div>
  );
}

export default Events;
