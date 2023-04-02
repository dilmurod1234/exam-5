import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import http from '../axios'
import { ToastContainer } from 'react-toastify';
import { Notification } from '../plugins/Notification'
export default function LoginUsers() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  const sendLogin = (e) => {
    e.preventDefault();
    http.post('/login/', {
      username: username,
      password: password
    }).then(res => {
      if (res.data.success === true) {
        Notification({ text: 'Hammasi yaxshi', type: 'success' })
        setTimeout(() => {
          navigate('/clients')
        }, 3000);
      }
      console.log(res.data.success, 'success')
    }).catch((err) => {
      console.log(err.response.data.success, 'data')
      if (err.response.data.success === 'False') {
        Notification({ text: 'xatolik mavjud', type: 'error' })
      }
    })
  }
  return (
    <div className='container'>
      <ToastContainer />
      <div className="row">
        <div className="col-md-6 offset-3">
          <div className="card mt-5">
            <div className="card-header">
              <h1 className='text-center'>Login</h1>
            </div>
            <div className="card-body">
              <form onSubmit={sendLogin} id="form">
                <input type="text" onChange={(e) => setUsername(e.target.value)} className='form-control my-1' placeholder='Username...' />
                <input type="password" onChange={(e) => setPassword(e.target.value)} className='form-control my-1' placeholder='Password...' />
              </form>
            </div>
            <div className="card-footer text-center">
              <button type='submit' form='form' className='btn btn-success'>Login</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
