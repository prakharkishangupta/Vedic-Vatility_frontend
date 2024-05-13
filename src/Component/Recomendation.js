import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Recomendation = (props) => {
  const [recomendation, setRecomendation] = useState(null);
  const [rimage, setRimage] = useState(null);
  const [description, setDescription] = useState(null);
  const [imageDescription, setImageDescription] = useState(null);
  let navigate = useNavigate()
  const handleCourse = ()=>{
    navigate('/course')
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const host = 'http://localhost:5000';
        const response = await fetch(`${host}/api/assesment/getRecomendation`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "auth-token": localStorage.getItem('token')
          },
        });
        const json = await response.json();
        setRecomendation(json);
        if (json && json.recImage && json.recImage.length > 0) {
          setRimage(json.recImage);
        }
        if (json && json.desc && json.desc.length > 0) {
          setDescription(json.desc);
        }
        if (json && json.imageDesc && json.imageDesc.length > 0) {
          setImageDescription(json.imageDesc);
        }

        console.log("print: ", json);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {recomendation && rimage.length > 0 && description.length > 0 && imageDescription.length > 0 ? (
        <div>
          <h1>Recomendation Details:</h1>
          <p>Problem: {recomendation.problem || 'Unknown'}</p>
          <p>Age: {recomendation.age || 'Unknown'}</p>
          <p>Level: {recomendation.level || 'Unknown'}</p>
          <p>image: {rimage || 'Unknown'}</p>
          <p>description: {description || 'Unknown'}</p>
          <div className = "row my-3 h-100 justify-content-center align-items-center my-5 mx-4">
            {rimage.map((rimage, index) => (
              <div className="col-sm-5 mb-3 mb-sm-0 my-2">
                <div key={index} className={`card mb-3 text-${props.mode==='light'?'dark':'light'}`} style={{backgroundColor: props.mode==='light'?'white':'grey',  width: "540px" }}>
                  <div className="row g-0">
                    <div className="col-md-4 my-4 mx-2">
                      <img src={rimage} className="img-fluid rounded-start" alt={` ${index}`} />
                    </div>
                    <div className="col-md-7">
                      <div className="card-body">
                        <h5 className="card-title">{imageDescription[index]}</h5>
                        <p className="card-text">{description[index]}</p>
                        
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="container">
            {description.map((description, index)=>(
              <div key={index} className="container">
                <ul>
                  <li>{description}</li>
                </ul>
              </div>
            ))}
          </div>
          <div className="container">
          <button onClick={handleCourse} type="button" class="btn btn-outline-secondary">Secondary</button>
          </div>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default Recomendation;









