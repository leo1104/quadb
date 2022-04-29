import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function BookingForm() {
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
        <div className="bookingForm">
        <h2 className="formHeading">Movie Name: {filteredData[0].show.name}</h2>
        <div className="inputs">
        <input className="username" placeholder="Name" type='text'/>
        <input type='email' className="email" placeholder="Email"/>
        <input type='number' placeholder="Mobile No." className="mobile"/>
        <input type='number' className="ticketCount" placeholder="No. of tickets"/>
        <button className="book">Proceed To Payment</button>
        </div>
        </div>
      ) : (
        <div>Data Not Found</div>
      )}
    </>
  );
}

export default BookingForm;
