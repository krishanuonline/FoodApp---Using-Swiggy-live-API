import React from "react";
class UserClass extends React.Component{
    constructor(props){
        super(props);
        console.log(props)
    }
    render(){
        return (
            <div className="user-card">
                <h2>Name : {this.props.name} (Class) </h2>
                <h3>Location : Kolkata</h3>
                <h4>Contact : krishanu178@gmail.com</h4>
            </div>
        )
    }
}

export default UserClass;