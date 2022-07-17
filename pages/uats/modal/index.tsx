import { Button, Col, Modal, Row } from 'antd';
import React, { useState } from 'react';
import { GoClock } from 'react-icons/go';
import { BsCalendarCheckFill } from 'react-icons/bs';
import { MdOutlineEdit } from 'react-icons/md';
import { MdDelete } from 'react-icons/md';
import { FaPhone } from 'react-icons/fa';
import { BiLike } from 'react-icons/bi';
import { BiBook } from 'react-icons/bi';
interface Props {
    ticket: number
    client: string
    tech: string
    phone: string
    open:boolean
    onOpen:any
}
const ModalClient: React.FC<Props> = (props) => {
    
    const [isModalVisible, setIsModalVisible] = useState(false)
    const showModal = () => {
        setIsModalVisible(props.open)
    }
    const handleOk = () => {
        setIsModalVisible(false);
    }
    const handleCancel = () => {
        setIsModalVisible(false);
    }
   
    
    return (
        <>
            <Button type="primary" onClick={showModal}>

                Open Modal
            </Button>
            <Modal  width="370px" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                <h2>{props.client}</h2>
                <span style={{ display: 'flex', flexDirection: "row" }}>

                    <FaPhone className='mr-4 mt-[3px]' /> :{props.phone}
                    <BiLike className='ml-4 mt-[2px]' fontSize='larger' />
                </span>
                <span>Ticket : {props.ticket}</span>
                <br />
                <span>Appointment time: 6.15 PM</span>
                {/* icons */}
                <div className=' justify-center text-center mt-4 ' >
                    <Row style={{ justifyContent: 'center', alignContent: 'center' }} justify="space-around">
                        <Col className='border-dotted border-r-2' span={5}  >
                            <div className='  justify-center  text-center'>
                                <GoClock className=' ml-[21px]' style={{ justifyContent: 'center', alignContent: 'center' }} fontSize='larger' />
                                <span>Remind</span>
                            </div>
                        </Col>
                        <Col span={5} className=' border-dotted border-r-2'>
                            <BsCalendarCheckFill className=' ml-[21px]  justify-center text-center' fontSize='larger' />
                            <span >Check-in</span>
                        </Col>
                        <Col span={4} className='border-dotted border-r-2'>
                            <MdOutlineEdit className=' ml-[20px]' fontSize='larger' />
                            <span>Edit</span>
                        </Col>
                        <Col span={5} className='border-dotted border-r-2'>

                            <BiBook className=' ml-[20px]' fontSize='larger' />
                            <span>Rebook</span>
                        </Col>
                        <Col span={5} className='border-dotted border-r-2'>

                            <MdDelete className=' ml-[20px]' fontSize='larger' />
                            <span>Cancel</span>
                        </Col>
                    </Row>
                </div>
                <div className='h-[200px] w-full overflow-auto'>
                    <div className=' border-y-2 mt-2 mb-6 justify-center text-center  '>
                        <Row style={{ justifyContent: 'center', alignContent: 'center' }} justify="space-around">
                            <Col className='font-semibold ' span={8}  >
                                TECH
                            </Col>
                            <Col className='font-semibold ' span={8}>
                                SERVICE
                            </Col>
                            <Col className='font-semibold ' span={4}>
                                DUR
                            </Col>
                            <Col className='font-semibold ' span={4}>
                                PRICE
                            </Col>
                        </Row>
                    </div>
                    <div className='border-dotted border-b-2 justify-center text-center'>
                        <Row style={{ justifyContent: 'center', alignContent: 'center' }} justify="space-around">
                            <Col span={8}  >
                                {props.tech}
                            </Col>
                            <Col span={8}>
                                Multiple
                            </Col>
                            <Col span={4}>
                                155 min
                            </Col>
                            <Col className='text-blue-600' span={4}>
                                $34.00
                            </Col>
                        </Row>
                    </div>
                    <div className='border-dotted border-b-2 justify-center text-center'>
                        <Row style={{ justifyContent: 'center', alignContent: 'center' }} justify="space-around">
                            <Col span={8}  >
                                {props.tech}
                            </Col>
                            <Col span={8}>
                                Multiple
                            </Col>
                            <Col span={4}>
                                155 min
                            </Col>
                            <Col className='text-blue-600' span={4}>
                                $34.00
                            </Col>
                        </Row>
                    </div>
                    <div className='border-dotted border-b-2 justify-center text-center'>
                        <Row style={{ justifyContent: 'center', alignContent: 'center' }} justify="space-around">
                            <Col span={8}  >
                                {props.tech}
                            </Col>
                            <Col span={8}>
                                Multiple
                            </Col>
                            <Col span={4}>
                                155 min
                            </Col>
                            <Col className='text-blue-600' span={4}>
                                $34.00
                            </Col>
                        </Row>
                    </div>
                </div>
            </Modal>
        </>
    )
}
export default ModalClient