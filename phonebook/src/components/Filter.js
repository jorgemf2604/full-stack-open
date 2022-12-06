const Filter = ({term, handler}) => {
    return (
      <>
        <h2>Filter contact</h2>
        <div>
            Contact name: <input  
              placeholder='Enter term...'
              value={term}
              onChange={handler}
            />
          </div>
      </>
    )
}

export default Filter