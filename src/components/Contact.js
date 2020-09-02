import React, { Component } from 'react'
import {
    Row, Col,
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';

const users = [
    {
        _id: '209658',
        name: 'รุ่งนภา มุทาพร',
        email: 'rungnapa.09np@gmail.com',
        address: '420/270 หมู่บ้านทิพย์วัล จังหวัดสมุทรปราการ',
        pic: './imeges/IMG_5019.JPG',
        age: 34,
        major: 'คอมพิเตอร์ธุรกิจ'
    },
    {
        _id: '209658',
        name: 'รุ่งนภา มุทาพร',
        email: 'rungnapa.09np@gmail.com',
        address: '420/270 หมู่บ้านทิพย์วัล จังหวัดสมุทรปราการ',
        pic: './imeges/IMG_5019.JPG',
        age: 34,
        major: 'คอมพิเตอร์ธุรกิจ'
    },

    {
        _id: '209658',
        name: 'รุ่งนภา มุทาพร',
        email: 'rungnapa.09np@gmail.com',
        address: '420/270 หมู่บ้านทิพย์วัล จังหวัดสมุทรปราการ',
        pic: './imeges/IMG_5019.JPG',
        age: 34,
        major: 'คอมพิเตอร์ธุรกิจ'
    },

]

export default class Contact extends Component {
    render() {
        return (
            <div>
                <h1>ติดต่อเรา</h1>

                {
                    users.map(user =>
                        <Card key={user.id}>
                            <Row>
                                <Col>
                                    <CardImg src={user.pic} />
                                </Col>
                                <Col>
                                    <CardBody>
                                        <CardTitle>รหัสนักศึกษา {user._id}</CardTitle>
                                        <CardSubtitle>ชื่อ {user.name}</CardSubtitle>
                                        <CardSubtitle>E-mail: {user.name}</CardSubtitle>
                                    </CardBody>
                                </Col>
                            </Row>
                        </Card>
                    )


                }

            </div>
        )
    }
}
