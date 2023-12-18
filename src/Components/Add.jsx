import React,{useState} from 'react'
import { Button,Modal } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

function Add() {
  const [uploadVideo,setUploadVideo]=useState({
    id:"",caption:"",url:"",link:""
  })
  const [show, setShow] = useState(false);
  console.log(uploadVideo);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const getYoutubeEmbedLink=(e)=>{
    const {value}=e.target
    if(value.includes("v=")){
      let vID=value.split("v=")[1].slice(0,11)
      console.log(`https://www.youtube.com/embed/${vID}`);
      setUploadVideo(`{...uploadVideo,link:https://www.youtube.com/embed/${vID}}`)
    }
    else{
      setUploadVideo({...uploadVideo,link:""})
    }
  }

  return (
    <>
    <div className="d-flex align-items-center">
      <h5>Upload New Video</h5>
      <button onClick={handleShow} className='btn fs-5'><i class="fa-solid fa-circle-plus"></i></button>
    </div>
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Uploading New Video</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <p className='text-white'>Please Fill The Details!!!</p>
        <FloatingLabel
        controlId="floatingInput"
        label="Uploading video Id"
        className="mb-3"
      >
        <Form.Control type="text" placeholder="Uploading video Id" onChange={e=>setUploadVideo({...uploadVideo,id:e.target.value})}/>
      </FloatingLabel>
      <FloatingLabel
        controlId="floatingInput"
        label="Uploading video Caption"
        className="mb-3"
      >
        <Form.Control type="text" placeholder="Uploading video Id" onChange={e=>setUploadVideo({...uploadVideo,caption:e.target.value})}/>
      </FloatingLabel>
      <FloatingLabel
        controlId="floatingInput"
        label="Uploading video Image URL"
        className="mb-3"
      >
        <Form.Control type="text" placeholder="Uploading video Id" onChange={e=>setUploadVideo({...uploadVideo,url:e.target.value})}/>
      </FloatingLabel>
      <FloatingLabel
        controlId="floatingInput"
        label="Uploading video Youtube Link"
        className="mb-3"
      >
        <Form.Control type="text" placeholder="Uploading video Id" onChange={(e)=>getYoutubeEmbedLink(e)}/>
      </FloatingLabel>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="info" onClick={handleClose}>
            Upload
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Add