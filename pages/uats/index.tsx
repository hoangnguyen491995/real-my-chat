import { Col, Row, Select, Tag } from 'antd';
;
import type { CustomTagProps } from 'rc-select/lib/BaseSelect';
import React from 'react';
import ListUat from './listUat';
const options = [{ value: 'gold' }, { value: 'lime' }, { value: 'green' }, { value: 'cyan' }, { value: 'blue ' }]
const tagRender = (props: CustomTagProps) => {
  const { label, value, closable, onClose } = props;
  const onPreventMouseDown = (event: React.MouseEvent<HTMLSpanElement>) => {
    event.preventDefault();
    event.stopPropagation();
  }
  return (
    <Tag
      color={value}
      onMouseDown={onPreventMouseDown}
      closable={closable}
      onClose={onClose}
      style={{ marginRight: 3 }}
    >
      {label}
    </Tag>
  )
}
const Login: React.FC = () => (
  <div>
    <Select
      mode="tags"
      showArrow
      tagRender={tagRender}
      // defaultValue={['gold', 'cyan']}
      style={{ width: '40%', }}
      options={options}
    >
    </Select>
    <button className='w-full ml-2 '>
      <Row justify="space-around" >
        <Col span={1}>
          <p className='font-semibold'>TICKET</p>
        </Col>
        <Col span={1}>
          <p className='font-semibold'>TECH</p>
        </Col>
        <Col span={1}>
          <p className='font-semibold'>REQUEST</p>
        </Col>
        <Col span={3}>
          <p className='font-semibold'>SERIVCE</p>
        </Col>
        <Col span={1}>
          <p className='font-semibold'>DUR</p>
        </Col>
        <Col span={3}>
          <p className='font-semibold'>CLIENT</p>
        </Col>
        <Col span={2}>
          <p className='font-semibold'>PHONE</p>
        </Col>
        <Col span={1}>
          <p className='font-semibold'>DATE</p>
        </Col>
        <Col span={1}>
          <p className='font-semibold w-[80px]'>APPT TIME</p>
        </Col>
        <Col span={1}>
          <p className='font-semibold'>STATUS</p>
        </Col>
      </Row>
    <ListUat />
    </button>
  </div>


)
export default Login