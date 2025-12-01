const Person = ({ person }) => {

    const {name, favoriteNumber, favoriteColors} = person;
  
    return (
      <>
        <h2>Hello, {name}</h2>
        <p>{name}'s favorite number is {favoriteNumber}</p>
        <p>{name}'s favorite number plus 10 is {favoriteNumber + 10}</p>
  
        {favoriteColors ? 
          <ul>
            {favoriteColors.map(color => (
              <li key={color}>{color}</li>
            ))}
          </ul>
          : 
          ''
        }
      </>
    )
  }
  
  export default Person;
  