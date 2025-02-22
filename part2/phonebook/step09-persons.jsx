import noteService from '../services/notes'

const handleDeleteData = (userId, name, setPersons) => {
  deleteData(userId, name, setPersons);
  console.log(userId);
};

const deleteData = (userId, name, setPersons) => {
  console.log(userId)
  if (window.confirm("Delete " + name + "?")) {
    noteService
      .deleteData(userId)
      .then(response => {
        console.log(response);
        setPersons(prevPersons => prevPersons.filter(person => person.id !== userId));
    })
  }
};

const Persons = ({ persons, setPersons }) => {
  return (
    <ul style={{ listStyleType: 'none', padding: 0 }}>
      {persons.map((person) => (
        <li key={person.id}>
          {person.name} {person.number} 
          <button type="button" onClick={() => handleDeleteData(person.id, person.name, setPersons)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default Persons;
