import React,{useState} from 'react'
import {Modal,Button} from "react-bootstrap";
import ReactDOM from 'react-dom'




export default function ErrorModal() {
    const  [show,setShow]=useState(true)
    const onHide=()=>{
setShow(false)
    }

    return ReactDOM.createPortal(
   <>    
            <div>
            <Modal animation={false} aria-labelledby="contained-modal-title-vcenter"
            centered show={show} >
                    <Modal.Header >LoggedIn </Modal.Header>
                    <Modal.Body >
                      Succesfully!!!!!!!!!!!!!!!!!1
                        <Modal.Footer>
                            <Button  onClick={onHide}>okay</Button>
                        </Modal.Footer>
                    </Modal.Body>
            </Modal>
        </div>
     

</>,document.getElementById('portal')
    )
}
