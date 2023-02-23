import { useState } from 'react'


const TicketPage = () => {

  const [ formData, setFormData ] = useState({
    status: "Not Started",
    progress: 0,
  })
  const editMode = false

  const handleSubmit = () => { 
    console.log('submitted')
  }

  const handleChange = () => { 
    console.log('changed')
  }


  return (
    <div className='ticket'>
      <h1>{ editMode ? "Update your ticket" : "Create a Ticket" }</h1>
      <div className="ticket-container">
        <form onSubmit={handleSubmit}>
          <section>
            <label htmlFor="title">Title</label>
            <input type="text" name="title" onChange={ handleChange } required={ true } value={ formData.title} />
          </section>
        </form>
      </div>
    </div>
  )
}

export default TicketPage
