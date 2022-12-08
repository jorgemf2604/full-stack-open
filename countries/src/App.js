import { useEffect, useState } from "react"
import axios from 'axios'
import Filter from './components/Filter'
import Content from "./components/Content"
import "./App.css"

const App = () => {

  const [allCountries, setAllCountries] = useState([])
  const [term, setTerm] = useState("")
  const [filteredCountries, setFilteredCountries] = useState([])
  
  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all")
    .then(response => {
      setAllCountries(response.data)
    })    
  }, [])

  const handleInputChange = (e) => {
    setTerm(e.target.value)
    const filteredArray = allCountries.filter(country => country.name.common.toLowerCase().includes(term.toLowerCase()))
    setFilteredCountries(filteredArray)
  }

  return (
    <>
      <h1>Country info</h1>
      <Filter
        placeholder="Enter the name of a country"
        value={term}
        onChange={handleInputChange}
      />
      <div className="container">
        <Content filteredCountries={filteredCountries}/>
      </div>
    </>
  )
}

export default App