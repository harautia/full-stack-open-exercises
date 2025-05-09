import { useState, useEffect } from 'react'
import noteService from './services/notes'
import Filter from './components/Filter'
import AddData from './components/AddData'
import Persons from './components/Persons'
import Notification from './components/Notification'
import Alert from './components/Alerts'


const App = () => {

  const [persons, setPersons] = useState([])
  useEffect(() => {
    console.log('effect')
    noteService
    .getData()
    .then(initialData => {
      setPersons(initialData)
    })
  }, [])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchFilter, setFilter] = useState('')
  const [notificatioMessage, setNotificationMessage] = useState(null)
  const [alertMessage, setAlertMessage] = useState(null)

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };
  
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const handleFilter = (event) => {
    setFilter(event.target.value);
  };

  const handleAddData = (event) => {
    event.preventDefault();
    AddData({ persons, setPersons, name: newName, number: newNumber });
    setNewName('');
    setNewNumber('');
    setNotificationMessage(
      `Added '${newName}'`
    )
    setTimeout(() => {
      setNotificationMessage(null)
    }, 5000)
  };

    return (
      <div>
        <h2>Phonebook</h2>
        <Notification message={notificatioMessage} />
        <Alert message={alertMessage} />
        <div>Find Users: <input value={searchFilter} onChange={handleFilter}/></div>
        <Filter persons={persons} filter={searchFilter} />
        <h3>Add a new</h3>
        <form onSubmit={handleAddData}>
          <div>Name: <input value={newName} onChange={handleNameChange}/></div>
          <div>Number: <input value={newNumber} onChange={handleNumberChange} /></div>
          <div><button type="submit">add</button></div>
        </form>
        <h3>Numbers</h3>
        <Persons persons={persons} setPersons={setPersons} setAlert={setAlertMessage} />
      </div>
    )
}

export default App
