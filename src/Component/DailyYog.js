import React, {useRef, useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
// import Recomendation from './Recomendation';


const DailyYog = (props) => {
  // const [recomendation, setRecomendation] = useState(null);
  const [completeInput, setCompleteInput] = useState({name:"", phone:"", age:"", gender:"", problem:"", sleep:"", level:""});
  const [data, setData] = useState("Data");
  const [last, setLast] = useState("Next");
  const [credentials, setCredentials] = useState({val:""});
  // const [navigateToRecomendation, setNavigateToRecomendation] = useState(false);

  const ref = useRef(null);
  let navigate = useNavigate()
  // useEffect(() => {
  //   console.log("Updated recomendation:", recomendation);
  //   console.log(typeof recomendation);
  //   // eslint-disable-next-line
  // }, [recomendation]);

  // useEffect(() => {
    
  //   if (recomendation !== null && navigateToRecomendation) {
  //     navigate('/recomendation');
  //     console.log("Sent recomendatio: ", recomendation);
  //   }
  //   // eslint-disable-next-line
  // }, [recomendation, navigate, navigateToRecomendation]);

  
  

  const handleClick = ()=>{
      
      if(!localStorage.getItem('token')){
        navigate('/login')
      }
      else{
        ref.current.click();
        setData("Name")
        setLast("Next")
      }
      
  } 
  const handleNextClick = async(e)=>{
    e.preventDefault();
      if(data==="Name"){
        
        setCompleteInput(prevState => ({ ...prevState, name: credentials.val }));
        // JSON.stringify({name:completeInput.val})
        setCredentials({val:""})
        setData("Phone")
        
      }
      else if(data === "Phone"){
        setCompleteInput(prevState => ({ ...prevState, phone: credentials.val }));
        // JSON.stringify({phone:completeInput.val})
        setCredentials({val:""})
        setData("Age")
        
      }
      else if(data === "Age"){
        setCompleteInput(prevState => ({ ...prevState, age: credentials.val }));
        // JSON.stringify({age:completeInput.val})
        setCredentials({val:""})
        setData("Gender")
       
      }
      else if(data === "Gender"){
        setCompleteInput(prevState => ({ ...prevState, gender: credentials.val }));
        // JSON.stringify({gender:completeInput.val})
        setCredentials({val:""})
        setData("Problem")
        JSON.stringify({problem:completeInput.val})
      }
      else if(data === "Problem"){
        setCompleteInput(prevState => ({ ...prevState, problem: credentials.val }));
        setCredentials({val:""})
        setData("Sleep")
        
      }
      else if(data === "Sleep"){
        setCompleteInput(prevState => ({ ...prevState, sleep: credentials.val }));
        // JSON.stringify({sleep:completeInput.val})
        setCredentials({val:""})
        setData("Level")
        
       
      }
      else if(data === "Level"){
        setCompleteInput(prevState => ({ ...prevState, level: credentials.val }));
        setData("End")
        setLast("Submit")
        
      }
      else if(data === "End"){
        const host = 'http://localhost:5000'
        console.log(completeInput);
        const response = await fetch(`${host}/api/assesment/addProblem`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "auth-token":   localStorage.getItem('token')
          },
    
          body: JSON.stringify(completeInput),
        });
        const json = await response.json();
        
        console.log("sol:", json.sol);
        
        // setRecomendation(json.sol)
        if(json.success){
          navigate('/recomendation');
          // setNavigateToRecomendation(true);
          
        }
        else{
          console.log('false');
        }
     
        setCredentials({val: ""})
      }
      
      
  }
    
 
  
    const handleChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };
  
  
  return (
    
      <div className="h-100  text-center" style = {{backgroundColor: props.mode==='light'?'dark':'dark'}}>
        {/* head */}
      <div className={`container text-center text-${props.mode==='light'?'dark':'light'} `}>
        <h1>YOGA is Precaution and</h1>
        <h2>Precaution is better than Cure</h2>
        <h2>Precaution is better than Cure</h2>
      </div>
      {/* Modal getstarted */}
      
      <button ref={ref} onClick = {handleClick} type="button" class="btn btn-secondary " data-bs-toggle="modal" data-bs-target="#exampleModal">
        Get Started 
      </button>
      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
            {data !== "End" && <form>
              <div class="mb-3">
                <label for="val" class="form-label">{data}</label>
                <input onChange = {handleChange} type="val" class="form-control" name="val" id="val" value = {credentials.val}/>
              </div>
            </form>}
            {(data === "Level" || data === "Age" || data === "Problem" || data === "End") &&
                <form>
                  <div className="mb-3">
                    
                    {data === "Age" && 
                      <select style = {{width:"8rem"}} onChange={handleChange} className="form-select" name="val" id="age" value={credentials.val}>
                        <option value="">Select </option>
                        <option value="Adult">Adult(10-30 years) </option>
                        <option value="Middle">Middle(30-50 years)</option>
                        <option value="Old">Old(50-80 years)</option>
                      </select>
                    }
                    {data === "Problem" && 
                      <select style = {{width:"8rem"}} onChange={handleChange} className="form-select" name="val" id="age" value={credentials.val}>
                        <option value="">Select </option>
                        <option value="Stress">Stress </option>
                        <option value="Cardiovascular">Cardiovascular</option>
                        <option value="Respiration">Respiration</option>
                        <option value="Flexibility">Flexibility</option>
                        <option value="Concentration">Concentration</option>
                        <option value="Heavy Weight">Heavy Weight</option>
                        <option value="Digetion">Digetion</option>
                        <option value="Less Immunity">Less Immunity</option>
                        <option value="Hypertention(High Blood Pressure)">Hypertention(High Blood Pressure)</option>
                        <option value="Sleep">Sleep</option>
                        <option value="Joint Pains">Joint Pains</option>
                        <option value="Depression">Depression</option>
                        <option value="Better Posture">Better Posture</option>
                        <option value="Harmonal Problem">Harmonal Problem</option>
                        <option value="Hair Loss">Hair Loss</option>
                      </select>
                    }
                    {data === "Level" && 
                      <select style = {{width:"8rem"}} onChange={handleChange} className="form-select" name="val" id="level" value={credentials.val}>
                        <option value="">Select </option>
                        <option value="Beginner">Beginner</option>
                        <option value="Intermediate">Intermediate</option>
                        <option value="Pro">Pro</option>
                      </select>
                    }
                    {data === "End" && 
                      <ul>
                        <h1><strong>Recheck your inputs</strong> </h1>
                        <li>Your name is {completeInput.name}</li>
                        <li>Your phone no. is {completeInput.phone}</li>
                        <li>Your age is {completeInput.age}</li>
                        <li>Your gender is {completeInput.gender}</li>
                        <li>Your problem is {completeInput.problem}</li>
                        <li>Your sleep is {completeInput.sleep}</li>
                        <li>Your Yoga Stage is {completeInput.level}</li>
                      </ul>
                  
                    }
                    
                  </div>
                </form>
              }

            
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button onClick = {handleNextClick} type="button" class="btn btn-primary">{last}</button>
            </div>
          </div>
        </div>
      </div>

  </div>
    
  );
}

export default DailyYog;
