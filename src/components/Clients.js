import React from 'react'
import http from '../axios'
import ModalApp from './ModalApp'
import Navbar from './Navbar'
import { ToastContainer } from 'react-toastify'
import { useState, useEffect } from 'react'
import ModalDelete from './ModalDelete'
import ModalEdit from './ModalEdit'
export default function Clients() {
    const [clients, setClients] = useState([])
    const [client, setClient] = useState({})
    const [modalVisible, setModalVisible] = useState(false)
    const [modalVisible2, setModalVisible2] = useState(false)
    const [modalVisible3, setModalVisible3] = useState(false)
    const [id, setId] = useState()

    useEffect(() => {
        http.get('/clients/', {
            headers: {
                'Authorization': 'Basic YWRtaW46MTIz'
            }
        }).then(res => {
            setClients(res.data)
        })
    }, [])

    const deleteClient = (id) => {
        setModalVisible2(prev => !prev)
        setId(id)
    }

    const editClient = (id, client) => {
        setModalVisible3(prev => !prev)
        setId(id)
        setClient(client)
    }

    return (
        <div className='flex'>
            <Navbar />
            <div className='w-[85%] bg-[#F7F8FC]'>
                <div className='container'>
                    <ToastContainer />
                    <ModalApp modalVisible={modalVisible} setModalVisible={setModalVisible} />
                    <ModalDelete modalVisible={modalVisible2} setModalVisible={setModalVisible2} id={id} />
                    <ModalEdit modalVisible={modalVisible3} setModalVisible={setModalVisible3} id={id} client={client} />
                    <div className="row mt-2">
                        <div className="col-md-10 offset-1">
                            <button className='btn btn-success' onClick={() => setModalVisible(prev => !prev)}>add client</button>
                            <table className='table table-bordered table-hover table-striped my-2'>
                                <thead>
                                    <tr>
                                        <th>T/R</th>
                                        <th>Name</th>
                                        <th>Address</th>
                                        <th>Phone</th>
                                        <th>Image</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        clients?.map((item, index) => {
                                            return <tr key={index}>
                                                <td>{index + 1}</td>
                                                <td>{item.name}</td>
                                                <td>{item.address}</td>
                                                <td>{item.phone_number}</td>
                                                <td>
                                                    <img className='mx-auto' src={item.image} alt="Client img" width={60} height={60}/>
                                                </td>
                                                <td>
                                                    <div className='flex'>
                                                        <button className='btn btn-info text-white mx-2' onClick={() => editClient(item.id, item)}><i class="fa-solid fa-pen-to-square"></i></button>
                                                        <button className='btn btn-danger mx-2' onClick={() => deleteClient(item.id)}><i class="fa-solid fa-trash"></i></button>
                                                    </div>
                                                </td>
                                            </tr>
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}