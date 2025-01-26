import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchFilter, setFilter] = useState('')

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };
  
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const handleFilter = (event) => {
    setFilter(event.target.value);
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

  const personsToShow = searchFilter
  ? persons.filter(person => 
      person.name.toLowerCase().includes(searchFilter.toLowerCase())
    ) : persons;

  return (
    <div>
      <h2>Phonebook</h2>
      <div>Search: <input value={searchFilter} onChange={handleFilter}/></div>
      <h3>Add New User</h3>
      <form onSubmit={addData}>
        <div>Name: <input value={newName} onChange={handleNameChange}/></div>
        <div>Number: <input value={newNumber} onChange={handleNumberChange} /></div>
        <div><button type="submit">add</button></div>
      </form>
      <h3>Numbers</h3>
      <ul style={{ listStyleType: 'none', padding:0}}>
        {personsToShow.map((person) => (
          <li key={person.name}>{person.name} {person.number}</li>
        ))}
      </ul>
    </div>)
}

export default App
