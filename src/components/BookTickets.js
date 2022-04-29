import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function BookTickets() {
  const { id } = useParams();

  const [data, setData] = useState([]);
  useEffect(() => {
    async function apiCall() {
      await axios
        .get(`https://api.tvmaze.com/search/shows?q=all`)
        .then((res) => {
          setData(res.data);
          console.log(res.data);
        });
    }
    apiCall();
  }, []);

  let filteredData = data.filter((data) => {
    return data.show.id == id;
  });

  return (
    <>
      {filteredData.length >= 1 ? (
        <div className="movie">
         <div className="summImg">
           <div style={{marginRight:"36px"}}>
         <h3 className="movieName">{filteredData[0].show.name}</h3>
         <div  style={{display:"flex",justifyContent:"flex-start",marginBottom:"24px"}}>
         <p className="rating">{filteredData[0].show.rating.average}</p>
         <p className="premiere">{filteredData[0].show.premiered.slice(0,4)}</p> 
         </div>
        
        <p className="summary">{filteredData[0].show.summary.slice(3,-4)}</p>
        </div>
        <img className="photo" src={filteredData[0].show.image.medium}/>
        </div>
        </div>
      ) : (
        <div>Data not found</div>
      )}
    </>
  );
}

export default BookTickets;
