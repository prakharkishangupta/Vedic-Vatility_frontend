import React, { useEffect, useState } from 'react';

const Course = () => {
  const [recomendation, setRecomendation] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [vedioDescription, setVedioDescription] = useState(null);
  const [courseDescription, setCourseDescription] = useState(null);

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
        if (json && json.vedioDesc && json.vedioDesc.length > 0) {
            setVedioDescription(json.vedioDesc);
          }
          if (json && json.courseDesc && json.courseDesc.length > 0) {
            setCourseDescription(json.courseDesc);
          }
        //   if (json && json.imageDesc && json.imageDesc.length > 0) {
        //     setImageDescription(json.imageDesc);
        //   }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleVideoClick = (video) => {
    setSelectedVideo(video);
  };

  return (
    <div>
        <div className="container text-center ">
            <h1>Yoga is precaution and</h1>
            <h1>Precaution is better than cure</h1>
        </div>
    <div style={{ display: 'flex' }}>
        
      <div className = "row h-100 justify-content-left align-items-left my-5 mx-4" style={{ flex: 1 }}>
        
        {selectedVideo && (
          <div>
            <iframe
              width="800"
              height="500"
              src={`https://www.youtube.com/embed/${selectedVideo}`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        )}
      </div>
      <div style={{ flex: 1 }}>
        {recomendation && recomendation.courseVedio && courseDescription && vedioDescription && (
          <div className = "row my-3 h-100 justify-content-center align-items-center my-5 mx-4">
            {recomendation.courseVedio.map((video, index) => (
                
                    <div key={index} className="card mb-3" onClick={() => handleVideoClick(video)}>
                        <div className="row g-0">
                            <div className="col-md-4 my-4 mx-2">
                                <img
                                    height = "100 px"
                                    src={`https://img.youtube.com/vi/${video}/0.jpg`}
                                    alt="thumbnail"
                                    style={{ cursor: 'pointer' }}
                                />
                            </div>
                            <div className="col-md-7">
                            <div className="card-body">
                                <h5 className="card-title">{vedioDescription[index]}</h5>
                                <p className="card-text">{courseDescription[index]}</p>
                                
                            </div>
                            </div>
                        </div>
                    
                </div>
            ))};
          </div>
        )}
      </div>
    </div>
    </div>
  );
};

export default Course;

