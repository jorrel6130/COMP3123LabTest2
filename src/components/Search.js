import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Search extends Component {

    constructor(props){
        super(props)
        this.state = {
            query: 'Toronto'
        }
    }

    searchCity = async(e) => {
        const { name, value } = e.target 
        
        this.setState({
            ...this.state,
            [name]: value
        })
    }

    render() {
        return (
            <div>
                City: <select name='query' onChange={this.searchCity}>
                    <option value='Toronto'>Toronto</option>
                    <option value='Markham'>Markham</option>
                    <option value='London'>London</option>
                </select>

                <p>
                    <Link to={`/result/${this.state.query}`}>Click To Search {this.state.query}</Link>
                </p>
            </div>
        )
    }
}
