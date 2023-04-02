import React, { useState } from 'react'
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import { Notification } from '../plugins/Notification'
import http from '../axios'
export default function ModalApp({ modalVisible, setModalVisible }) {
  const [username, setUsername] = useState('')
  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')
  const [address, setAddress] = useState('')
  const [email, setEmail] = useState('')
  const [age, setAge] = useState('')
  const [phone, setPhone] = useState('')
  const [image, setImg] = useState('')
  const addSupplier = () => {
    const form = new FormData()
    form.append("username", username)
    form.append("firstname", firstname)
    form.append("lastname", lastname)
    form.append("address", address)
    form.append("email", email)
    form.append("age", age)
    form.append("phone_number", phone)
    form.append("image", image)
    http.post('/suppliers/', form).then(res => {
      if (res.status === 201) {
        setTimeout(() => {
          window.location.reload()
        }, 2000);
        setModalVisible(prev => !prev)
        Notification({ text: "Supplier qo'shildi", type: "success" })
      }
    })
  }
  return (
    <Modal isOpen={modalVisible} toggle={() => setModalVisible(prev => !prev)}>
      <ModalHeader>
        <h1 className='text-center'>Add new supplier</h1>
      </ModalHeader>
      <ModalBody>
        <form>
          <input type="text" onChange={(e) => setUsername(e.target.value)} className='form-control my-2' placeholder='Username...' />
          <input type="text" onChange={(e) => setFirstname(e.target.value)} className='form-control my-2' placeholder='Firstname...' />
          <input type="text" onChange={(e) => setLastname(e.target.value)} className='form-control my-2' placeholder='Lastname...' />
          <input type="text" onChange={(e) => setEmail(e.target.value)} className='form-control my-2' placeholder='Email...' />
          <input type="text" onChange={(e) => setAge(e.target.value)} className='form-control my-2' placeholder='Age...' />
          <input type="text" onChange={(e) => setPhone(e.target.value)} className='form-control my-2' placeholder='Phone...' />
          <input type="text" onChange={(e) => setAddress(e.target.value)} className='form-control my-2' placeholder='Address...' />
          <input type="file" onChange={(e) => setImg(e.target.files[0])} className='form-control my-2' placeholder='Image...' />
        </form>
      </ModalBody>
      <ModalFooter>
        <button className='btn btn-info text-white' onClick={addSupplier}>save</button>
        <button className='btn btn-danger' onClick={() => setModalVisible(prev => !prev)}>close</button>
      </ModalFooter>
    </Modal>
  )
}