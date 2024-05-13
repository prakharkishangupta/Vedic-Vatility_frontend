import React, {useContext, useEffect} from 'react';
import Context from '../Context/Notes/Context';
const About = () => {
  const data = useContext(Context)
  console.log(data);
  
  useEffect(() => {
    data.update();
    // eslint-disable-next-line
  }, []);
  return (
    <div>
      <h1>I am {data.state.name}.</h1>
    </div>
  );
}

export default About;
