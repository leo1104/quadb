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
        <div>{filteredData[0].show.id}</div>
      ) : (
        <div>Data not found</div>
      )}
    </>
  );
}

export default BookTickets;
