import React, { useEffect, useState } from "react";
import { Modal, Button, FloatingLabel, Form } from "react-bootstrap";
import {
  addCategoryAPI,
  getAVideoAPI,
  getAllCategoryAPI,
  removeCategoryAPI,
  updateCategoryAPI,
} from "../Services/allAPI";

function Category() {
  const [allCategories, setAllCategories] = useState([]);
  const [categoryName, setCategoryName] = useState("");
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    getAllCategory();
  }, []);

  const getAllCategory = async () => {
    const { data } = await getAllCategoryAPI();
    setAllCategories(data);
  };

  const handleAdd = async () => {
    if (categoryName) {
      const result = await addCategoryAPI({ categoryName, allVideos: [] });
      if (result.status >= 200 && result.status < 300) {
        handleClose();
        setCategoryName("");
        getAllCategory();
      } else {
        alert(result.message);
      }
    } else {
      alert("Please fill the form completely");
    }
  };

  const removeCategory = async (id) => {
    await removeCategoryAPI(id);
    getAllCategory();
  };

const dragOver =(e) =>{
  console.log(`Video card is dragging over the category`);
  e.preventDefault()
}

const videoDrop = async (e,categoryId)=>{
  const videoId = e.dataTransfer.getData("videoId")
  console.log("Video id:" +videoId + "dropped!! Inside the category"+categoryId);
  const {data} = await getAVideoAPI(videoId)

  const selectedCategory = allCategories.find(item=>item.id===categoryId)
  selectedCategory.allVideos.push(data);
  console.log(selectedCategory);
  await updateCategoryAPI(categoryId,selectedCategory)
  getAllCategory();
}
console.log(allCategories);


  return (
    <>
      <div className="d-grid">
        <Button variant="info" onClick={handleShow}>
          Add New Category
        </Button>
      </div>
      {allCategories?.length > 0 ? (
        allCategories.map((category) => (
          <div className="border rounded p-3 mt-2 " droppable="true" onDragOver={e=>dragOver(e)} onDrop={e=>videoDrop(e,category?.id)}>
            <div className="d-flex justify-content-between align-items-center">
              <h6>{category?.categoryName}</h6>
              <button
                onClick={() => removeCategory(category?.id)}
                className="btn"
              >
                <i className="fa-solid fa-trash text-danger"></i>
              </button>
            </div>
          </div>
        ))
      ) : (
        <p className="fw-bolder fs-5 text-warning mt-2">
          No Categories are added yet!!!
        </p>
      )}
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Category Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FloatingLabel
            controlId="floatingInput"
            label="Category Name"
            className="mb-3"
          >
            <Form.Control
              type="text"
              placeholder="Category Name"
              onChange={(e) => setCategoryName(e.target.value)}
            />
          </FloatingLabel>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleAdd} variant="info">
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Category;
