import React from 'react'
import http from '../axios'
import { ToastContainer } from 'react-toastify'
import { useState, useEffect } from 'react'
import SupplierModal from './SupplierModal'
import SupplierDelete from "./SupplierDelete"
import SupplierEdit from './SupplierEdit'
import Navbar from './Navbar'
export default function Products() {
    const [suppliers, setSuppliers] = useState([])
    const [supplier, setSupplier] = useState({})
    const [modalVisible, setModalVisible] = useState(false)
    const [modalVisible2, setModalVisible2] = useState(false)
    const [modalVisible3, setModalVisible3] = useState(false)
    const [id, setId] = useState()

    useEffect(() => {
        http.get('/suppliers/', {
            headers: {
                'Authorization': 'Basic YWRtaW46MTIz'
            }
        }).then(res => {
            setSuppliers(res.data)
        })
    }, [])

    const addSupplier = () => {
        setModalVisible(prev => !prev)
    }

    const deleteSupplier = (id) => {
        setModalVisible2(prev => !prev)
        setId(id)
    }

    const editSupplier = (id, supplier) => {
        setModalVisible3(prev => !prev)
        setId(id)
        setSupplier(supplier)
    }

    return (
        <div className='flex'>
            <Navbar />
            <div className='w-[85%] bg-[#F7F8FC]'>
                <div className='container'>
                    <ToastContainer />
                    <SupplierModal modalVisible={modalVisible} setModalVisible={setModalVisible} />
                    <SupplierDelete modalVisible={modalVisible2} setModalVisible={setModalVisible2} id={id} />
                    <SupplierEdit modalVisible={modalVisible3} setModalVisible={setModalVisible3} id={id} supplier={supplier} />
                    <div className="row mt-2">
                        <div className="col-md-12 mx-auto">
                            <button className='btn btn-success w-100' onClick={addSupplier}>add suppliers</button>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-md-11 mx-auto'>
                            <ul className='flex items-center justify-start flex-wrap'>
                                {
                                    suppliers?.map((item) => (
                                        <li className='w-[300px] text-center mx-5 mt-5 rounded-md bg-slate-400 p-4' key={item.id}>
                                            <strong className='text-white'>{item.username}</strong>
                                            <img className='mx-auto my-2' src={item.image} alt="Img icon" width={100} height={100} />
                                            <p className='text-white'><span className='font-bold'>Firstname : </span>{item.first_name}</p>
                                            <p className='text-white'><span className='font-bold'>Lastname : </span>{item.last_name}</p>
                                            <p className='text-white'><span className='font-bold'>Phone : </span>{item.phone_number}</p>
                                            <p className='text-white'><span className='font-bold'>Address : </span>{item.address}</p>
                                            <p className='text-white'><span className='font-bold'>Email : </span>{item.email}</p>
                                            <button className='w-[70px] bg-red-500 p-2 mt-3 mx-2 rounded-md text-white' onClick={() => deleteSupplier(item.id)}>Delete</button>
                                            <button className='w-[70px] bg-blue-400 p-2 mt-3 mx-2 rounded-md text-white' onClick={()=> editSupplier(item.id, item)}>Edit</button>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}