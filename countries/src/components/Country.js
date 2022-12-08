const Country = ({data}) => {
    return (
      <div className="country">
        <h3>{data.name.common}</h3>
        <img src={data.flags.png} alt={`the flag of ${data.name.common}`}/>
        <p>Polulation: {data.population}</p>
        <p>Area: {data.area}</p>
        <p>Languages:</p>
        <ul>
          {Object.values(data.languages).map(language => <li>{language}</li>)}
        </ul>
      </div>
    )
}

export default Country