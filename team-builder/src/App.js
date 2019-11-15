import React, {useState} from 'react';
import Members from './components/Members';
import membersData from './components/membersData';
import Form from './components/Form';


import './App.css';

function App() {
  const [members, setMembers] = useState(membersData)

  const addNewMember = member => {
    setMembers([...members, member])
}
    
      

  return (
    <div className="App">
      <header className="App-header">
      <h2>Dream Team</h2>

      <Form addNewMember={addNewMember} />
      <Members teamDetail={members} />

      </header>
    </div>
  );
}

export default App;
