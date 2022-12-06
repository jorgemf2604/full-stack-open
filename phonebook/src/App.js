import { useState } from 'react'
import Filter from './components/Filter'
import Form from './components/Form'
import Contacts from './components/Contacts'

const App = () => {
  // state
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', key: 1, telephone: "07567345672"}
  ]) 
  const [newName, setNewName] = useState('')
  const [telephone, setTelephone] = useState("")
  const [term, setTerm] = useState("")

  // event handler
  const addNote = (e) => {
    e.preventDefault()
    if (persons.every(person => person.name !== newName.trim())) {
      const newPerson = {
        name:newName,
        key: persons.length + 1,
        telephone: telephone
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