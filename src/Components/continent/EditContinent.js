import React ,{useState, useEffect} from 'react';
import '../../App.css'
import ContinentDataService from '../../services/ContinentDataService';
import {Link} from 'react-router-dom';
import { useParams } from "react-router";

const EditContinent = () => {
    const initalContinentState = {
        continentId: null,
        continentName: "",
        summary: ""
    };

  let {id} = useParams();
  const [continent, setContinent] = useState(initalContinentState);
  const [updated, setUpdated] = useState(false);

const handleInputChange = (e) =>  {
    const {name, value} = e.target;
    setContinent({...continent, [name]: value});
};

useEffect(() => {
  ContinentDataService.get(id)
  .then(response => {
    setContinent(response.data)
  })
  .catch(e => {
    console.log(e);
  })
},[id])
console.log(continent)
const updateContinent = () => {
  ContinentDataService.update(continent)
    .then(response => {
      console.log(response);
      setUpdated(true);
    })
    .catch(e => {
      console.log(e);
    })
}


return (
    <div className="submit-form">
      {updated ? (
        <div>
          <h4>Updated successfully!</h4>
          <Link to="/continents" className="btn btn-success" /*onClick={newContinent}*/>
            return
          </Link>
        </div>
      ) : (
        <div>
          <div className="form-group">
            <label htmlFor="name">name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              required
              value={continent.continentName}
              onChange={handleInputChange} 
              name="name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="summary">summary</label>
            <input
              type="text"
              className="form-control"
              id="summary"
              required
              value={continent.summary}
              onChange={handleInputChange}
              name="summary"
            />
          </div>

          <button onClick={updateContinent} className="btn btn-success">
            Update
          </button>
        </div>
      )}
    </div>
  );
}

export default EditContinent;