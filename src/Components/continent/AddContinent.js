import React ,{useState} from 'react';
import '../../App.css'
import ContinentDataService from '../../services/ContinentDataService';

const AddContinent = () => {
    const initalContinentState = {
        id: null,
        name: "",
        summary: ""
    };

const [continent, setContinent] = useState(initalContinentState);
const [submitted, setSubmitted] = useState(false);

const handleInputChange = (e) =>  {
    const {name, value} = e.target;
    console.log('name', name)
    console.log('value', value)
    setContinent({...continent, [name]: value});
};

const saveContinent = () => {
    let data = {
        ContinentName: continent.name,
        Summary: continent.summary
    }

    ContinentDataService.create(data)
        .then(response => {
            setContinent({
                id: response.data.ContinentId,
                name: response.data.ContinentName,
                summary: response.data.Summary
            });
            setSubmitted(true);
            console.log(response.data);
        })
        .catch(e => {
            console.log(e);
        });
};

    const newContinent = () => {
        setContinent(initalContinentState);
        setSubmitted(false);
    }

return (
    <div className="submit-form">
      {submitted ? (
        <div>
          <h4>You submitted successfully!</h4>
          <button className="btn btn-success" onClick={newContinent}>
            Add
          </button>
        </div>
      ) : (
        <div>
          <div className="form-group">
            <label htmlFor="name">Continent Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              required
              value={continent.name}
              onChange={handleInputChange}
              name="name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="summary">Summary</label>
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

          <button onClick={saveContinent} className="btn btn-success">
            Submit
          </button>
        </div>
      )}
    </div>
  );
}

export default AddContinent;