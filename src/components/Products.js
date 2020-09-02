import React, { Component } from 'react'
import data from '../models/data.js';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Row, Col
} from 'reactstrap';
export default class Products extends Component {
    render() {
        return (
            <div>
                <Row>
                    {
                        data.products.map(item =>
                            <Col>
                                <Card>
                                    <CardImg src={item.imgs} />
                                    <CardBody>
                                        <CardTitle>รหัสสินค้า{item._id}</CardTitle>
                                        <CardSubtitle>{item.prdName}</CardSubtitle>
                                        <CardSubtitle>{item.price}</CardSubtitle>
                                        <CardText>รายละเอียด <br />{item.description}</CardText>
                                        <Button>++เพิ่มสินค้าในตะกร้า</Button>
                                    </CardBody>
                                </Card>
                            </Col>


                        )
                    }
                </Row>
            </div>
        )
    }
}
