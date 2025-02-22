const Persons = ({ persons }) => {

    return (
        <ul style={{ listStyleType: 'none', padding:0}}>
        {persons.map((person) => (
          <li key={person.name}>{person.name} {person.number}</li>
        ))}
      </ul>
        )
      }
      
export default Persons
