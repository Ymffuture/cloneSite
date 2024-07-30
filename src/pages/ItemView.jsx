import React from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import ItemDisplay from '../components/overviewproducts/ItemDisplay';
import SidebagC from '../components/sidebag/SidebagC';
import Sidebar from '../components/sidebar/Sidebar';

const ItemView = () => {
    return (
        <Container fluid>
            <div className='line-3'></div>
            <Row>
                <Col md={2}>
                    <Sidebar />
                </Col>
                <Col md={6} className='pt-4 m-0 '>
                    <ItemDisplay />
                </Col>
                <Col md={3}>
                    <SidebagC caption='Check Bag' link='/check-bag' />
                </Col>
            </Row>
        </Container>
    );
};

export default ItemView;
