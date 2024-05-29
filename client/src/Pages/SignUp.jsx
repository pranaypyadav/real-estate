import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom"

const SignUp = () => {

  const [formData, setFormData] = useState({})
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)


  function handleChange(e) {
    const { id, value } = e.target
    setFormData((prevData) => {
      return {
        ...prevData,
        [id]: value
      }
    })
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setLoading(true)
    try {
      const res = await fetch('https://localhost:3000/api/auth/signup', {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      })
      const data = await res.json()
      if (data.success === false) {
        setError(data.message)
        setLoading(false)
        return
      }
      console.log(data)
    } catch (error) {
      setLoading(false)
    }
  }


  useEffect(() => {
    console.log(formData)
  }, [handleChange])



  return (
    <div className=' p-3 max-w-lg mx-auto'>
      <h1 className=' text-3xl text-center font-semibold my-7 '>Sign Up</h1>
      <form onSubmit={handleSubmit} action="" className=' flex flex-col gap-4  '>
        <input onChange={handleChange} className=' border p-3 rounded-lg ' type="text" name="" id="username" placeholder='Username..' />
        <input onChange={handleChange} className=' border p-3 rounded-lg ' type="email" name="" id="email" placeholder='Email..' />
        <input onChange={handleChange} className=' border p-3 rounded-lg ' type="password" name="" id="password" placeholder='Password..' />
        <button disabled={loading} className=' bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'>{loading ? "Loading" : "Sign Up"}</button>
      </form>
      <div className=' flex gap-2 mt-6 '>
        <p>Have an account  <Link to={'/sign-in'}> <span className=' text-blue-700  '>Sign In</span></Link></p>
      </div>
    </div>
  )
}

export default SignUp
