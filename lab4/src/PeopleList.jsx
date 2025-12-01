import Person from './Person';

const PeopleList = ({people}) => {
    
    return (
      <>
        <p>Hello</p>
        {people.map(person => (
          <Person person={person}/>
        ))}
      </>
    )
  }
  
  export default PeopleList
  