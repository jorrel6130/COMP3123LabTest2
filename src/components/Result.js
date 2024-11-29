import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

export default function Result() {

    const { city } = useParams()
    var [weather, setWeather] = useState([])

    const getWeatherData = async() => {
        const apiCall = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=6b004d8f498397498a715f5b380362a6`
        try {
            const response = await axios.get(apiCall)
            setWeather(response.data.weather)
        } catch (error) {
            console.log(error)
        } 
    }

    useEffect(() => {
        
        getWeatherData()
        
    },[])

  return (
    <div>
        <div>
            <h2>The weather in {city} right now is...</h2>
            {
                weather.map(data => {
                    return(
                        <div key={data.id}>
                            <img src={`https://openweathermap.org/img/wn/${data.icon}@2x.png`}/>
                            <h3>{data.main}</h3>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}
