const Form = (props) => {
  return (
    <>
      <form onSubmit={props.handler}>
        <h2>Add a new contact</h2>
        <div>
          Name: <input
            required  
            placeholder='Enter new person...'
            value={props.nameValue}
            onChange={props.changeName}
          />
        </div>
        <div>
          Telephone: <input
            required  
            placeholder='Enter telephone number...'
            value={props.telephoneValue}
            onChange={props.changeTelephone}
          />
        </div>
        <div>
          <button
            type="submit"
          >add</button>
        </div>
      </form>
    </>
  )
}

export default Form

