import './Person.css'

const Person = ({person}) => {

    const {name, favoriteNumber, favoriteColors} = person;

    return (
        <div className="person">

            <h2>Hello, {name}</h2>
            <p>{name}'s favorite number is {favoriteNumber}</p>
            <p>{name}'s favorite number plus 10 is {favoriteNumber + 10}</p>
            <p>{name}'s favorite colors are:</p>
            <ul>
                {favoriteColors ?
                    favoriteColors.map(color => (
                        <li key={color}>{color}</li>
                    ))
                    :
                    <li>None</li>
                }

            </ul>

        </div>
    )
}

export default Person