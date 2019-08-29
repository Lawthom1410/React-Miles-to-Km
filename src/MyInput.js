import React, {Component} from 'react';

export class MyInput extends Component{

    myStyle = {
        fontSize: "50px"
    }

    render(){
        return(
            <div>
                <h2 style={this.myStyle}>{this.props.label}</h2>
                <input style={this.myStyle} type="number" value={this.props.value} onChange={this.props.onChange} />
            </div>
        )
    }
}