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

  // The ID had to modified like this in order that is defined as string ""
  const newData = {name, number, id: (Math.max(...persons.map(p => Number(p.id)), 0) + 1).toString()
  };

  noteService
  .addData(newData)
  .then(response => {
    setPersons(persons.concat(response))
    console.log(newData)
  })
};

export default AddData
