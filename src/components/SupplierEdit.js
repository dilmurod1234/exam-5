import React, { useState } from 'react'
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import { Notification } from '../plugins/Notification'
import http from '../axios'
export default function ModalEdit({ modalVisible, setModalVisible, id, supplier}) {
  const [username, setUsername] = useState('')
  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')
  const [address, setAddress] = useState('')
  const [email, setEmail] = useState('')
  const [age, setAge] = useState('')
  const [phone, setPhone] = useState('')
  const [image, setImg] = useState('')
  const editSupplier = () => {
    const form = new FormData()
    form.append("username", username)
    form.append("first_name", firstname)
    form.append("last_name", lastname)
    form.append("address", address)
    form.append("email", email)
    form.append("age", age)
    form.append("phone_number", phone)
    form.append("image", image)
    http.patch(`/suppliers/${id}/`, form).then(res => {
      if (res.status === 200) {
        setTimeout(() => {
          window.location.reload()
        }, 2000);
        setModalVisible(prev => !prev)
        Notification({ text: "Supplier o'zgartirildi", type: "success" })
      }
    })
  }
  return (
    <Modal isOpen={modalVisible} toggle={() => setModalVisible(prev => !prev)}>
      <ModalHeader>
        <h1 className='text-center'>Add new client</h1>
      </ModalHeader>
      <ModalBody>
      <form>
          <input type="text" defaultValue={supplier.username} onChange={(e) => setUsername(e.target.value)} className='form-control my-2' placeholder='Username...' />
          <input type="text" defaultValue={supplier.first_name} onChange={(e) => setFirstname(e.target.value)} className='form-control my-2' placeholder='Firstname...' />
          <input type="text" defaultValue={supplier.last_name} onChange={(e) => setLastname(e.target.value)} className='form-control my-2' placeholder='Lastname...' />
          <input type="text" defaultValue={supplier.email} onChange={(e) => setEmail(e.target.value)} className='form-control my-2' placeholder='Email...' />
          <input type="text" defaultValue={supplier.age} onChange={(e) => setAge(e.target.value)} className='form-control my-2' placeholder='Age...' />
          <input type="text" defaultValue={supplier.phone_number} onChange={(e) => setPhone(e.target.value)} className='form-control my-2' placeholder='Phone...' />
          <input type="text" defaultValue={supplier.address} onChange={(e) => setAddress(e.target.value)} className='form-control my-2' placeholder='Address...' />
          <input type="file" onChange={(e) => setImg(e.target.files[0])} className='form-control my-2' placeholder='Image...' />
        </form>
      </ModalBody>
      <ModalFooter>
        <button className='btn btn-info text-white' onClick={editSupplier}>save</button>
        <button className='btn btn-danger' onClick={() => setModalVisible(prev => !prev)}>close</button>
      </ModalFooter>
    </Modal>
  )
}