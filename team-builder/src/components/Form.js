import React, {useState} from 'react';



function Form (props){
    const [member, setMember] = useState({
        fullName: "",
        email: "",
        role: ""
    }); 

    const changeHandler = event => {
        setMember({ ...member, [event.target.name]: event.target.value })
    }

    const submitForm = event => {
        event.preventDefault()
        props.addNewMember(member)
        setMember({ name: "", email: "", role: "" })
    }

    return (
        <div className='myForm'>
        <form onSubmit={submitForm}>
            <label htmlFor='name'> New Member's Name: </label> <br />
            <input
                id='1'
                name='name'
                type='text'
                placeholder='John Smith'
                onChange={changeHandler}
                value={member.name}
                required
            /><br />

            <label htmlFor='email'>Email: </label><br />
            <input
                id='2'
                name='email'
                type='text'
                placeholder='example@test.something'
                onChange={changeHandler}
                value={member.email}
                required
            /><br />

            <label htmlFor='role'>Role: </label><br />
            <input
                id='3'
                name='role'
                type='text'
                placeholder='Role'
                onChange={changeHandler}
                value={member.role}
                required
            /><br />

            <button type='submit'>Add to the Dream Team</button>
        </form>
        </div>
    )
}


export default Form;