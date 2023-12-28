import React from 'react';
class Stateful extends React.Component{
    constructor(props){
        super(props);
        this.state={
            name:"Welcome"
        }
    }
    render(){
        return(
            <div>
                <p>Name: {this.state.name}</p>
                <button onClick={() => {
                    this.setState({name:"Hello"})}}>ChangeName</button>
            </div>
        )
    }

}

export default Stateful;