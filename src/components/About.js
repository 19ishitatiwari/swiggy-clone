import TeamMember from "./TeamMember";
import TeamMemberClass from "./TeamMemberClass";
import React, { Component } from "react";

class About extends Component {
    constructor(props){
        super(props);
        console.log("Parent - About Constructor");
    }
    componentDidMount(){
        console.log("Parent - About Component Did Mount");
    }
    render() {
        console.log("Parent - About Render");
        return (
        <div>
            <h1>About Us</h1>
            <p>This is the About Us page of the application.</p>
            <h3>Our Team</h3>
            <TeamMemberClass name={"19ishitatiwari"} role={"Developer"} location={"Jaipur"} contact={"9876543210"}/>
            {/* <TeamMemberClass name={"Ankit"} role={"Designer"} location={"Delhi"} contact={"8765432109"}/>
            <TeamMemberClass name={"Rohit"} role={"Manager"} location={"Mumbai"} contact={"7654321098"}/> */}
        </div>
    );
    }
}
// const About = () => {
//     return (
//         <div>
//             <h1>About Us</h1>
//             <p>This is the About Us page of the application.</p>
//             <h3>Our Team</h3>
//             <TeamMemberClass name={"Ishita (class)"} role={"Developer (class)"} location={"Jaipur (class)"} contact={"9876543210 (class)"}/>
//         </div>
//     );
// }

export default About;