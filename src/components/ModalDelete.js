import React from 'react'
import { Modal, ModalBody, ModalFooter } from 'reactstrap'
import http from '../axios'
import { Notification } from '../plugins/Notification'

const ModalDelete = ({modalVisible, setModalVisible, id}) => {

    const deleteClient = () => {
        http.delete(`/clients/${id}/`).then(res => {
            if(res.status === 204){
                setTimeout(() => {
                    window.location.reload()
                }, 2000);
                Notification({text: "Client o'chirildi", type: "warning"})
            }
        })
        setModalVisible(prev => !prev)
    }

    return (
        <Modal isOpen={modalVisible} toggle={()=> setModalVisible(prev => !prev)}>
            <ModalBody>
                <h2 className='text-center'>O'chirishga rozimisan</h2>
            </ModalBody>
            <ModalFooter> 
                <button className='btn btn-danger' onClick={deleteClient}>delete</button>
                <button className='btn btn-success' onClick={()=> setModalVisible(prev => !prev)}>close</button>
            </ModalFooter>
        </Modal>
    )
}

export default ModalDelete