import React, { Component } from 'react';
import axios from 'axios'

export class PlayersList extends Component {
    componentDidMount(){
        axios.get("http://localhost:5000/api/players")
        .then((response)=>{
console.log(response);

        })
        .catch((error)=>{
            console.log(`This is an error`);
            
        })
    }
    render() {
        return (
            <div>
                
            </div>
        )
    }
}

export default PlayersList
