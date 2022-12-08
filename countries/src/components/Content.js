import Country from "./Country"
import "../App.css"

const Content = ({filteredCountries}) => {
    if (filteredCountries.length > 10) {
      return (
        <>
          <p>Too many results</p>
        </>
      )
    } else if (filteredCountries.length === 1) {
      return (
        <>
          <Country data={filteredCountries[0]} />
        </>
      )
    } else if (filteredCountries.length > 1 && filteredCountries.length <= 10) {
      return (
        <>
          {filteredCountries.map(country => <Country data={country} />)}
        </>
      )
    }
}

export default Content