import React, { useState } from 'react'
import http from '../axios'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Notification } from '../plugins/Notification'
import { useNavigate } from "react-router-dom";
export default function Register() {
    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')
    const [confirmation,setConfirmation] = useState('')
    const navigate = useNavigate();
    const sendRegister =()=>{
        http.post('/register/',{
            username: username,
            password: password,
            password2:confirmation
        }).then(res=>{
            if(res.status === 201){
            Notification({text:'Success',type:'success'})
            setTimeout(() => {
            navigate('/login')
            }, 3000);
            } 
        }).catch((err)=>{
            if(err.response.status === 400){
                Notification({text:'xato mavjud',type:'error'})
            }
        })
    }
  return (
    <div className='row'>
    <ToastContainer />
    <div className="col-md-6 offset-3">
        <div className="card mt-5">
            <div className="card-header">
                <h1 className='text-center'>Register</h1>
            </div>
            <div className="card-body">
            <form>
            <input type="text" onChange={(e)=>setUsername(e.target.value)} className='form-control my-1' placeholder='Username...'/>
            <input type="password" onChange={(e)=>setPassword(e.target.value)} className='form-control my-1' placeholder='Password...'/>
            <input type="password" onChange={(e)=>setConfirmation(e.target.value)} className='form-control my-1' placeholder='Confirm password...'/>
            </form>
               
            </div>
            <div className="card-footer text-center">
                <button className='btn btn-success' onClick={sendRegister}>Register</button>
            </div>
        </div>
    </div>
    </div>
  )
}
