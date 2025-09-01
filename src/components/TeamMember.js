import React from 'react'
import { useState, useEffect } from 'react';

const TeamMember = (props) => {

    const { name, role, location, contact } = props;
    const [votes, setVotes] = useState(0);
    const [votes1, setVotes1] = useState(1);
    
    useEffect(() => {
        // API call
        const timer = setInterval(() => {
            console.log("Interval");
        }, 1000);

        // cleanup function
        return () => {
            clearInterval(timer);
        }
    }, []);
  return (
    <div className='team-member'>
        <h4>Name: {name}</h4>
        <h4>Role: {role}</h4>
        <h4>Contact: {contact}</h4>
        <h4>Location: {location}</h4>
        <h4>Votes: {votes}</h4>
        <h4>Votes1: {votes1}</h4>
    </div>
  )
}

export default TeamMember
