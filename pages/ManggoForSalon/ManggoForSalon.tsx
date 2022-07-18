


import { Button, Col, Drawer, Row } from 'antd';
import React, { useState } from 'react';
import { SiAdobedreamweaver } from 'react-icons/si'
import { BsSearch } from 'react-icons/bs'
import { RiHomeSmile2Fill } from 'react-icons/ri'
import { MdCall } from 'react-icons/md'
import { BsMessenger } from 'react-icons/bs'
import { BsEmojiSmileFill } from 'react-icons/bs'
import { ImNext } from 'react-icons/im'
const ManggoForSalon: React.FC = () => {

     
     
    const [visible, setVisible] = useState(false);
    const showDrawer = () => {
        setVisible(true);
    };
    const onClose = () => {
        setVisible(false);
    };
    return (
        <>
            <Button type="primary" onClick={showDrawer}>
                Open
            </Button>
            <Drawer  placement="right" onClose={onClose} visible={visible}>
                <div>
                <div  className=' bg-orange-500 '>
                    <Row justify="space-around" >
                        <Col span={4}>
                            <SiAdobedreamweaver style={{ width: '30px', height: '30px' }} />
                        </Col>
                        <Col span={20}>
                            <span className=' text-base font-semibold'>
                                Manggo For Salon
                            </span>
                            <br />
                            <span>
                                Support is online
                            </span>
                        </Col>
                    </Row>
                    <Row justify="space-around" >
                        <Col span={1}>
                            <BsSearch style={{ width: '25px', height: '25px' }} />
                        </Col>
                        <Col span={1}>
                            <RiHomeSmile2Fill style={{ width: '25px', height: '25px' }} />
                        </Col>
                        <Col span={1}>
                            <MdCall style={{ width: '25px', height: '25px' }} />
                        </Col>
                        <Col span={1}>
                            <BsMessenger style={{ width: '25px', height: '25px' }} />
                        </Col>
                    </Row>
                </div>
                 
                 <div className=' w-full h-[300px] overflow- '>
                 <Button style={{ width: '100%', background: 'rgb(254 215 170)', border: 'none' }}>
                        please set your emai to continue
                    </Button> 
                 
                 </div>
                <div>
                    <Button style={{ width: '100%', background: 'rgb(254 215 170)', border: 'none' }}>
                        please set your emai to continue
                    </Button>
                    <div className='bg-orange-50 w-full h-full'>
                        <BsEmojiSmileFill style={{ width: '30px', height: '30px' }} />
                        <ImNext style={{ width: '30px', height: '30px' }} />
                    </div>
                </div>
                </div>
                
            </Drawer>
        </>
    );
};
export default ManggoForSalon   