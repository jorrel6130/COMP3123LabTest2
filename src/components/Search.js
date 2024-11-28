import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default class Search extends Component {

    constructor(props){
        super(props)
        this.state = {
            lat: 0,
            lon: 0,
            city: 'Toronto'
        }
    }

    searchCity = async(e) => {
        const { name, value } = e.target

        console.log(value)

        const apiPrefix = 'http://api.openweathermap.org/data/2.5/weather?q='
        const apiSuffix = '&appid=6b004d8f498397498a715f5b380362a6'
        const apiCall = apiPrefix + value + apiSuffix
        console.log(apiCall)

        try {
            const response = await axios.get(apiCall)
            console.log(response.data)
            this.setState({test: response.data})
            return response.data
        } catch (error) {
            console.log(error)
        }
    }

    render() {
        return (
            <div>
                City: <select name='city' onChange={this.searchCity}>
                    <option value='Toronto'>Toronto</option>
                    <option value='Markham'>Markham</option>
                    <option value='London'>London</option>
                </select>

                <h1>Current Weather Conditions In {}</h1>
            </div>
        )
    }
}
