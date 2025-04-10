import axios from 'axios'

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
  axios
  .post('http://localhost:3001/persons', newData)
  .then(response => {
    setPersons(persons.concat(newData))
    setPersons('')
    console.log(response)
  })
//  setPersons(persons.concat(newData));
};


export default AddData
