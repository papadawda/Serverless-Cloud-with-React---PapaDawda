import PeopleList from './PeopleList'
import './App.css'

function App() {

  const people = [
    {
      name: 'Juan',
      favoriteNumber: 9,
      favoriteColor: ['green', 'blue', 'purple'],
    },
    {
      name: 'Ivy',
      favoriteNumber: 43,
      favoriteColor: [],
    },
    {
      name: 'Kia',
      favoriteNumber: 34,
      favoriteColor: [],
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