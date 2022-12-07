const Contacts = ({people, searchTerm}) => {
    // filter by contact name
    const peopleShown = people.filter(person => person.name.toLowerCase().includes(searchTerm.toLowerCase()))
    return (
      <>
        <h2>My contatcts</h2>
        <ul>
          {peopleShown.map(person => <li key={person.id}>{person.name} {person.number}</li>)}
        </ul>
      </>
    )
}

export default Contacts