import { Button, Checkbox, Form, Input, Row, Col } from 'antd';
import React from 'react'
import { auth } from '../../src/component/fireBase/config';

const Login: React.FC = () => {
//  const fbProvider= firebase.auth.FacebookAuthProvider()
//   const hanleFbLogin=()=>{
//     auth.signInWithPopup(fbProvider)
//   }
  return (
    <div>
      <Row justify='center' style={{height:800}}>
        <Col span={8}>
          <h1 className='  justify-center text-center' > Fun Chat </h1>
          <Button style={{ width: '100%', marginBottom: 5 }}> Đăng nhập bằng Google</Button>
          <Button style={{ width: '100%' }} > Đăng nhập bằng Facebook</Button>
        </Col>
      </Row>
    </div>
  )
}
export default Login