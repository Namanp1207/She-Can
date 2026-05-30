import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Form.css'

const Form = () => {

  const [showPopup, setShowPopup] = useState(false)
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {

      const response = await fetch(
        "http://localhost:4000/api/form/form",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(formData)
        }
      )

      const result = await response.json()

      console.log(result)

      if (result.success) {

        setShowPopup(true)

        setFormData({
          name: "",
          email: "",
          message: ""
        })

      } else {
        alert(result.message)
      }

    } catch (error) {
      console.log(error)
      alert("Server Error")
    }
  }

  return (
    <div className='volunteer-form'>

      <h1>She Can Foundation</h1>

      <p className="subtitle">
        Empowering voices, creating opportunities.
      </p>

      <form onSubmit={handleSubmit}>

        <div className="input-group">
          <label>Name</label>

          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="input-group">
          <label>Email</label>

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="input-group">
          <label>Message</label>

          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <button type="submit">
          Submit Form
        </button>

      </form>

      {showPopup && (
        <div className="popup-overlay">
          <div className="popup">

            <h2>🎉 Success!</h2>
            <p>Form Submitted Successfully</p>

            <button onClick={() => navigate('/')}>
              OK
            </button>

          </div>
        </div>
      )}

    </div>
  )
}

export default Form
