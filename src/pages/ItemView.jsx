import ItemDisplay from "../components/overviewproducts/ItemDisplay";
import SidebagC from "../components/sidebag/SidebagC"
import Sidebar from '../components/sidebar/Sidebar';
import {Col, Row, Container} from 'react-bootstrap';


const ItemView = () => {

    return(
    <>
        <Container fluid={true}>
        <div className='line-3'></div>
        <Row>

            <Col md={2}>
            <Sidebar/>
            </Col>

            <Col md={7}>
            <ItemDisplay/>
            </Col>

            <Col md={3}>
            <SidebagC caption='Check Bag' link = "/check-bag"/>
            </Col>

        </Row>

      </Container></>
    );

}

export default ItemView;