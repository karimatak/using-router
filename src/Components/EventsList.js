import React, { useContext }from 'react';
import '../App.css';
import Events from './Events'
import {EventContext} from '../Context/EventsContext'

function EventsList() {
    const [data, isLoading, error] = useContext(EventContext);
    if (isLoading) {
        return <p>Loading ...</p>;
    }
    if (error) {
       return <p>error fetching data</p>;
    }

  return (
    <div className="page">
        <h1>Events Page</h1>
        {data.map(event => (
            // <Events id={event.EventId} name={event.EventName} detail={event.EventDetails} date={event.EventDate} country={event.Country.countryName} category={event.Category.categoryName} />
            <Events event={event} />
        ))}
    </div>
  );
}

export default EventsList;
