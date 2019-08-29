import React, {Component} from 'react';

export class Miles extends Component{

    handleChange = (e) => {
        onchange(e.target.value);
    }

    render(){
        return(
            <div>
                <input type="number" />
            </div>
        )
    }
}