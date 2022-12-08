import { useState, useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
import AddRecord from './AddRecord'
import Button from './Button'
import Record from './Record'

const Records = ({ records, employees, cars, clients, showAddRecord }) => {
  return (
    <>
      <Row>
        {records.map((records) => (
          <Col key={records.id} sm={12} md={6} lg={4} xl={3}>
            <Record
              record={records}
              employee={employees}
              car={cars.map((cars) => cars)}
              client={clients.map((clients) => clients)}
            />
          </Col>
        ))}
        <Col sm={12} md={6} lg={4} xl={3}>
          {showAddRecord && <AddRecord record={records} />}
        </Col>
      </Row>
    </>
  )
}

export default Records
