import React, {Component} from 'react';
import {MyInput} from './MyInput';

export class ParentComp extends Component{
    constructor(){
        super();
        this.state = {
            miles: 0,
            km: 0
        }
    }

    updateMiles = (e) => {
        let km = e.target.value;
        this.setState({
            miles: km*0.621371,
            km: km
        })
    }

    updateKm = (e) => {
        let miles = e.target.value;
        this.setState({
            km: miles/0.621371,
            miles: miles
        })
    }

    
    render(){
        let animationSpeed;
        if (this.state.miles == 0) {
            animationSpeed = "";
        } else {
            animationSpeed = "kart-move infinite " + (100/this.state.miles) + "s linear";
        }
        console.log(this.state.miles)
        let marioStyle = {
            height: "300px",
            marginTop: "100px",
            animation: animationSpeed
        }
        return(
            <div>
                <MyInput label="Miles" value={this.state.miles} onChange={this.updateKm} />
                <MyInput label="Km" value={this.state.km} onChange={this.updateMiles} />
                <img style={marioStyle} src="https://i5.walmartimages.com/asr/7d33a628-5ac9-4568-b3d8-a7e68d518e76_1.7f938887b584cf46a8439c9eb8339a77.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF" />
            </div>
        )
    }
}