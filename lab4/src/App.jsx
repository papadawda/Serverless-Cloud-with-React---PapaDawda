import PeopleList from './PeopleList'
import './App.css'

function App() {

  const people = [
    {
      name: 'Juan',
      favoriteNumber: 9,
      favoriteColors: ['green', 'blue', 'purple'],
    },
    {
      name: 'Ivy',
      favoriteNumber: 43,
      favoriteColors: null,
    },
    {
      name: 'Kia',
      favoriteNumber: 34,
      favoriteColors: null,
    }
  ]
  
  return (
    <>
      <h1>Hello React</h1>
      <PeopleList people={people}/>
    </>
  )
}

export default App