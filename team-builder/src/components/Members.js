import React from 'react';


const Members = props => {
    console.log(props)
    return (
        <div className='member-list'>
            {props.teamDetail.map((member, index) => {
                return (
                    <div className='member' key={index}>
                        <h3>{member.name}</h3>
                        <p>{member.email}</p>
                        <p>{member.role}</p> <hr/>
                    </div>
                )
            })}
        </div>
    )
}

export default Members;
