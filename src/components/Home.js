import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
function Home() {
    const [data, setData] = useState([])
    useEffect(() => {
      async function apiData() {
          axios.get(`https://api.tvmaze.com/search/shows?q=all`).then((res)=>{
              setData(res.data)
              console.log(res.data);
          })
      }
      apiData()
    }, [])
    
  return (
    <>
    <div className='cards'>{data.map((score)=>{return(
        <div className='card'>
            <Link to={`/search/${score.show.id}`}>
              <div className='singleCard'>
                <img src={score.show.image.medium}/>
                <h3>{score.show.name}</h3>
              </div>
            </Link>
        </div>
    )})}</div>
  </>
  )
}

export default Home