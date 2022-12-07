import { useEffect, useState } from 'react'
import Filter from './components/Filter'
import Form from './components/Form'
import Contacts from './components/Contacts'
import axios from 'axios'

const App = () => {
  // state
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [telephone, setTelephone] = useState("")
  const [term, setTerm] = useState("")

  // fetch data (side effect)
  useEffect(() => {
    axios.get("http://localhost:3001/persons")
    .then(response => {
      setPersons(response.data)
    })
  }, [])

  // event handler
  const addNote = (e) => {
    e.preventDefault()
    if (persons.every(person => person.name !== newName.trim())) {
      const newPerson = {
        name:newName,
        id: persons.length + 1,
        number: telephone
      }
      setPersons(persons.concat(newPerson))
      setNewName("")
      setTelephone("")
    } else {
      alert(`${newName} is already in the Phonebook`)
    }
  }

  return (
    <div>
      <h1>Phonebook</h1>
      <Filter term={term} handler={(e) => setTerm(e.target.value)}/> 
      <Form 
        handler={addNote}
        nameValue={newName}
        changeName={(e) => setNewName(e.target.value)}
        telephoneValue={telephone}
        changeTelephone={(e) => setTelephone(e.target.value)}    
      /> 
      <Contacts people={persons} searchTerm={term}/> 
    </div>
  )
}

export default App