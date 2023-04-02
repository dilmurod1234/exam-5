import React, { useState } from 'react'
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import { Notification } from '../plugins/Notification'
import http from '../axios'
export default function ModalApp({ modalVisible, setModalVisible }) {
  const [name, setName] = useState('')
  const [address, setAddress] = useState('')
  const [phone, setPhone] = useState('')
  const [image, setImage] = useState('')
  const addClient = () => {
    const form = new FormData()
    form.append("name", name)
    form.append("address", address)
    form.append("image", image)
    form.append("phone_number", phone)
    http.post('/clients/', form).then(res => {
      if (res.status === 201) {
        setTimeout(() => {
          window.location.reload()
        }, 2000);
        setModalVisible(prev => !prev)
        Notification({ text: "Client qo'shildi", type: "success" })
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
          <input type="text" onChange={(e) => setName(e.target.value)} className='form-control my-2' placeholder='Name...' />
          <input type="text" onChange={(e) => setPhone(e.target.value)} className='form-control my-2' placeholder='Phone...' />
          <input type="text" onChange={(e) => setAddress(e.target.value)} className='form-control my-2' placeholder='Address...' />
          <input type="file" onChange={(e) => setImage(e.target.files[0])} className='form-control my-2' placeholder='Image...'/>
        </form>
      </ModalBody>
      <ModalFooter>
        <button className='btn btn-info text-white' onClick={addClient}>save</button>
        <button className='btn btn-danger' onClick={() => setModalVisible(prev => !prev)}>close</button>
      </ModalFooter>
    </Modal>
  )
}