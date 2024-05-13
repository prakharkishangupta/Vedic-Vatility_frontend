import React, {useState} from 'react';


const PreData = (props) => {
    const [scredentials, setScredentials] = useState({problem:"", age:"", level:"", recImage:[], imageDesc:[], desc:[], vedio:[], courseVedio:[], courseDesc:[], vedioDesc:[]});
    const host = 'http://localhost:5000'
 
    const handleSubmit = async(e)=>{
        console.log(scredentials.recImage);
        e.preventDefault()
        const response = await fetch(`${host}/api/preData/addPreData`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
      
            body: JSON.stringify({problem:scredentials.problem, age:scredentials.age, level:scredentials.level, recImage:scredentials.recImage, imageDesc:scredentials.imageDesc, desc:scredentials.desc,  vedio:scredentials.vedio,  courseVedio:scredentials.courseVedio, courseDesc:scredentials.courseDesc, vedioDesc: scredentials.vedioDesc }),
          });
          const json = await response.json();
          console.log(json);
       
          setScredentials({problem:" ", age:" ", level:" ", recImage:[], imageDesc:[], desc:[], vedio:[], courseVedio:[], courseDesc:[], vedioDesc:[]})
        
    }
    const handleChange = (e) => {
        // setScredentials({ ...scredentials, [e.target.name]: e.target.value });
        const { name, value } = e.target;
        if (name === 'recImage') {
            const imageUrls = value.split(',').map(url => url.trim());
            setScredentials({ ...scredentials, [name]: imageUrls });
        } 
        else if(name === 'imageDesc'){
            const imageDescription = value.split(',').map(url => url.trim());
            setScredentials({ ...scredentials, [name]: imageDescription });
        }
        else if(name === 'desc'){
            const description = value.split(',').map(url => url.trim());
            setScredentials({ ...scredentials, [name]: description });
        }
        else if(name === 'vedio'){
            const vedioUrls = value.split(',').map(url => url.trim());
            setScredentials({ ...scredentials, [name]: vedioUrls });
        }
        else if(name === 'courseVedio'){
            const courseVedioUrls = value.split(',').map(url => url.trim());
            setScredentials({ ...scredentials, [name]: courseVedioUrls });
        }
        else if(name === 'courseDesc'){
            const courseDescription = value.split(',').map(url => url.trim());
            setScredentials({ ...scredentials, [name]: courseDescription });
        }
        else if(name === 'vedioDesc'){
            const vedioDescription = value.split(',').map(url => url.trim());
            setScredentials({ ...scredentials, [name]: vedioDescription });
        }
        
        else {
            setScredentials({ ...scredentials, [name]: value });
        }
      };
  return (
    <div className="container" style={{width: "70rem"}}>
      <form onSubmit={handleSubmit}>
            <div className="mb-3 justify-content-center align-items-center my-5 mx-1">
                <label htmlFor="problem" className="form-label">Problem</label>
                <input type="problem" className="form-control" id="problem" name="problem" value = {scredentials.problem} onChange = {handleChange} placeholder="xyz"/>
            </div>
            <div className="mb-3">
                <label htmlFor="age" className="form-label">Age</label>
                <input type="age" className="form-control" id="age" name="age" value = {scredentials.age} onChange = {handleChange} placeholder="name@example.com"/>
            </div>
            <div className="mb-3">
                <label htmlFor="level" className="form-label">Level</label>
                <input type="level" className="form-control" id="level" name="level" value = {scredentials.level} onChange = {handleChange} placeholder="xyz"/>
            </div>
            <div className="mb-3">
                <label htmlFor="recImage" className="form-label">recImage</label>
                <input type="recImage" className="form-control" id="recImage" name="recImage" value = {scredentials.recImage} onChange = {handleChange} placeholder="name@example.com"/>
            </div>
            <div className="mb-3">
                <label htmlFor="imageDesc" className="form-label">imageDesc</label>
                <input type="imageDesc" className="form-control" id="imageDesc" name="imageDesc" value = {scredentials.imageDesc} onChange = {handleChange} placeholder="xyz"/>
            </div>
            <div className="mb-3">
                <label htmlFor="desc" className="form-label">desc</label>
                <input type="desc" className="form-control" id="desc" name="desc" value = {scredentials.desc} onChange = {handleChange} placeholder="name@example.com"/>
            </div>
            <div className="mb-3">
                <label htmlFor="vedio" className="form-label">vedio</label>
                <input type="vedio" className="form-control" id="vedio" name="vedio" value = {scredentials.vedio} onChange = {handleChange} placeholder="xyz"/>
            </div>
            <div className="mb-3">
                <label htmlFor="courseVedio" className="form-label">courseVedio</label>
                <input type="courseVedio" className="form-control" id="courseVedio" name="courseVedio" value = {scredentials.courseVedio} onChange = {handleChange} placeholder="xyz"/>
            </div>
            <div className="mb-3">
                <label htmlFor="courseDesc" className="form-label">courseDesc</label>
                <input type="courseDesc" className="form-control" id="courseDesc" name="courseDesc" value = {scredentials.courseDesc} onChange = {handleChange} placeholder="xyz"/>
            </div>
            <div className="mb-3">
                <label htmlFor="vedioDesc" className="form-label">vedioDesc</label>
                <input type="vedioDesc" className="form-control" id="vedioDesc" name="vedioDesc" value = {scredentials.vedioDesc} onChange = {handleChange} placeholder="name@example.com"/>
            </div>
            
            <button  className="btn btn-primary" type="submit" value="Submit">Submit</button>
        </form>
    </div>
  );
}

export default PreData;
