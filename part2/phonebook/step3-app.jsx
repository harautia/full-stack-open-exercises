import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas',
      number: '+358123456'
    }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };
  
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const addData = (event) => {
    console.log(newName)
    console.log(newNumber)
    event.preventDefault();
    if (persons.some((person) => person.name === newName)) {
      alert(`${newName} is already added to the phonebook`);
    }
    if (persons.some((person) => person.number === newNumber)) {
      alert(`${newNumber} is already added to the phonebook`);
    } else {
      const newData = { name: newName, number:newNumber };
      setPersons(persons.concat(newData));
      setNewName('');
      setNewNumber('');
    }
  };
  
  return (
    <div>
      <h2>Phonebook</h2>

      <form onSubmit={addData}>
        <div>name: <input value={newName} onChange={handleNameChange}/></div>
        <div>number: <input value={newNumber} onChange={handleNumberChange} /></div>
        <div><button type="submit">add</button></div>
      </form>
      
      <h2>Numbers</h2>
      <ul style={{ listStyleType: 'none', padding:0}}>
        {persons.map((person) => (
          <li key={person.name}>{person.name} {person.number}</li>
        ))}
      </ul>
    </div>)
}

export default App
