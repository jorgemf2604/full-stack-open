const Contacts = ({people, searchTerm}) => {
    // filter by contact name
    const peopleShown = people.filter(person => person.name.includes(searchTerm))
    return (
      <>
        <h2>My contatcts</h2>
        <ul>
          {peopleShown.map(person => <li key={person.key}>{person.name} {person.telephone}</li>)}
        </ul>
      </>
    )
}

export default Contacts