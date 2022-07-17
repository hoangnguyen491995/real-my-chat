import { Button, Checkbox, Form, Input,Row,Col } from 'antd';
import Title from 'antd/lib/skeleton/Title';
import React from 'react';

const Login: React.FC = () => {
 
  return (
    <div>
        <Row>
            <Col span={8}>
                <p> Fun Chat </p>
                <Button> Đăng nhập bằng Google</Button>
                <Button> Đăng nhập bằng Facebook</Button>
            </Col>
        </Row>
    </div>
  )
};

export default Login