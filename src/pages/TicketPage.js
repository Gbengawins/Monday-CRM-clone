import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'


const TicketPage = ({ editMode }) => {

  const [ formData, setFormData ] = useState({
    status: "Not Started",
    progress: 0,
    timestamp: new Date().toISOString(),
  })

  const editMode = false

  const navigate = useNavigate()
  let { id } = useParams()

  const handleChange = (e) => {
    const value = e.target.value
    const name = e.target.name

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editMode) {
      const response = await axios.put(`http://localhost:8000/tickets/${id}`, {
        data: formData,
      });
      const success = response.status === 200;
      if (success) {
        navigate("/");
      }
    }
    if (!editMode) {
      console.log("posting");
      const response = await axios.post("http://localhost:8000/tickets", {
        formData,
      });
      const success = response.status === 200;
      if (success) {
        navigate("/");
      }
    }
  };

  

  const categories = [ "test1", "test2", "test3", "test4" ]
  

  return (
    <div className="ticket">
      <h1>{editMode ? "Update your ticket" : "Create a Ticket"}</h1>
      <div className="ticket-container">
        <form onSubmit={handleSubmit}>
          <section>
            <label htmlFor="title">Title</label>
            <input
              id="title"
              type="text"
              name="title"
              onChange={handleChange}
              required={true}
              value={formData.title}
            />
            <label htmlFor="description">Description</label>
            <input
              id="description"
              type="text"
              name="description"
              onChange={handleChange}
              required={true}
              value={formData.description}
            />
            <label htmlFor="category">Category</label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
            >
              {categories?.map((category, index) => (
                <option key={index} value={category}>
                  {category}
                </option>
              ))}
            </select>
            <label htmlFor="new-category">New Category</label>
            <input
              id="new-category"
              type="text"
              name="category"
              onChange={handleChange}
              required={true}
              value={formData.category}
            />
            <label>Priority</label>
            <div className="multiple-input-container">
              <label htmlFor="priority">1</label>
              <input
                id="priority-1"
                name="priority"
                type="radio"
                onChange={handleChange}
                value={1}
                checked={formData.priority === 1}
              />
              <label htmlFor="priority">2</label>
              <input
                id="priority-2"
                name="priority"
                type="radio"
                onChange={handleChange}
                value={2}
                checked={formData.priority === 2}
              />
              <label htmlFor="priority">3</label>
              <input
                id="priority-3"
                name="priority"
                type="radio"
                onChange={handleChange}
                value={3}
                checked={formData.priority === 3}
              />
              <label htmlFor="priority">4</label>
              <input
                id="priority-4"
                name="priority"
                type="radio"
                onChange={handleChange}
                value={4}
                checked={formData.priority === 4}
              />
              <label htmlFor="priority">5</label>
              <input
                id="priority-5"
                name="priority"
                type="radio"
                onChange={handleChange}
                value={5}
                checked={formData.priority === 5}
              />
            </div>

            {editMode && (
              <>
                <input
                  type="range"
                  id="progress"
                  name="progress"
                  value={formData.progress}
                  min="0"
                  max="100"
                  onChange={handleChange}
                />
                <label htmlFor="progress">Progress</label>

              <label>Status</label>
              <select 
              id="status" 
              name="status" 
              onChange={handleChange}
              >
                <option 
                  selected={formData.status === "Done"} 
                  value="done">
                    Done
                  </option>
                <option 
                  selected={formData.status === "In Progress"} 
                  value="In Progress">
                    In Progress
                  </option>
                <option 
                  selected={formData.status === "Stuck"} 
                  value="stuck">
                    Stuck
                  </option>
                <option 
                  selected={formData.status === "Not Started"} 
                  value="Not started">
                    Not Started
                  </option>
              </select>
            </>
            )}
            <input type="submit" />
          </section>
          <section>
              <label htmlFor="owner">Owner</label>
              <input
                id="owner"
                name="owner"
                type="text"
                onChange={handleChange}
                required={true}
                value={formData.owner}
              />
              <label htmlFor="avatar">Avatar</label>
              <input
                id="avatar"
                name="avatar"
                type="url"
                onChange={handleChange}
                required={true}
                value={formData.avatar}
            />
            <div className="img-preview">
              { formData.avatar && (
                <img src={ formData.avatar } alt="preview" />
              )}
            </div>
          </section>
        </form>
      </div>
    </div>
  );
}

export default TicketPage
