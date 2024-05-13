import React, {useState} from 'react';
import Context from './Context';


const State = (props) => {
    const s1 = {
        "name":"Prakhar",
        "age":22
    }
    const [state, setstate] = useState(s1);
    const update = ()=>{
        if(s1.age>21){
            setstate({
                "name":"Kishan",
                "age":22
            })
        }
    }
  return (
    <Context.Provider value={{state, update}}>
        {props.children}
    </Context.Provider>
  );
}

export default State;
