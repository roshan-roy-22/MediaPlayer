import React from 'react'
import {Row,Col} from 'react-bootstrap'
import Videocard from './Videocard' 


function View() {
  return (
    <>
    <Row className='mx-auto '>
      <Col sm={12} md={6} lg={4} xl={3}>
     <Videocard/>
      </Col>
    </Row>
    </>
  )
}

export default View