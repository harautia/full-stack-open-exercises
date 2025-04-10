import noteService from '../services/notes'

const AddData = ({ persons, setPersons, name, number }) => {
    console.log(name)
    console.log(number)
    console.log(persons)

  if (persons.some(person => person.name === name)) {
    alert(`${name} is already added to the phonebook`);
    return;
  }

  if (persons.some(person => person.number === number)) {
    alert(`${number} is already added to the phonebook`);
    return;
  }

  const newData = { name, number, id: persons.length + 1 };
  noteService
  .addData(newData)
  .then(response => {
    setPersons(persons.concat(response))
    console.log(response)
    console.log(persons)
  })
};

export default AddData
