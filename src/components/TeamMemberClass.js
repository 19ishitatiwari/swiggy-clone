import React from "react";

class TeamMemberClass extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            // votes: 0,
            // votes1: 2
            userInfo: {
                name: "Dummy Name",
                location: "Dummy Location",
            }
        }
        console.log(this.props.name + " Child - TeamMember Constructor");
    }

    async componentDidMount(){
        const username = this.props.name;
        console.log(this.props.name + " Child - TeamMember Component Did Mount");
        const data = await fetch(`https://api.github.com/users/${username}`);
        const json = await data.json();
        console.log(json);

        this.setState({
            userInfo: json,
        })

        this.timer = setInterval(() => {
            console.log("Interval");
        }, 1000);
    }

    componentDidUpdate(prevProps, prevState){
        console.log(this.props.name + " Child - TeamMember Component Did Update");

        // if (this.state.votes !== prevState.votes) { ------ now we do this using useEffect with votes as dependency
        //     // make an API call
    }

    componentWillUnmount(){
        console.log(this.props.name + " Child - TeamMember Component Will Unmount");
        // clear the timer
        clearInterval(this.timer);
    }

    render() {
        console.log(this.props.name + " Child - TeamMember Render");

        const { name, location } = this.state.userInfo;
        // const { name, role, location, contact } = this.props;

        // const { votes, votes1 } = this.state;

        return (
            <div className='team-member'>
                <h4>Name: {name}</h4>
                {/* <h4>Role: {role}</h4>
                <h4>Contact: {contact}</h4> */}
                <h4>Location: {location}</h4>
                {/* <h4>Votes: {votes}</h4>
                <button onClick={() => {
                    this.setState({
                        votes: this.state.votes + 1 // Correct way to update state in class components
                        // Can also write as votes: votes + 1
                    })
                }}>Vote</button> */}
            </div>
        )
    }
}

export default TeamMemberClass;