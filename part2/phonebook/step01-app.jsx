import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const addPerson = (event) => {
    event.preventDefault();
    const newPerson = { name: newName };
    setPersons(persons.concat(newPerson));
    setNewName('');
  };
  
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          Name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul style={{ listStyleType: 'none', padding:0}}>
        {persons.map((person) => (
          <li key={person.name}>{person.name}</li>
        ))}
      </ul>
    </div>)
}

export default App
