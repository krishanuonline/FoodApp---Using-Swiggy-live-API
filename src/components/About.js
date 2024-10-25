import User from "./User";
import UserClass from "./UserClass";

const About = ()=>{
    return(
        <div>
            <h1>About Component</h1>
            <h3>This is about page</h3>
            <User name={"Krishanu Mandal"}/>
            <UserClass name={"Krishanu"}/>
        </div>
    )
}

export default About;