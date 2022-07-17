import { Col, Row } from 'antd';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { GiEternalLove } from 'react-icons/gi'
import ModalClient from './modal';
interface Posts {
    email: string
    id: number
    name: string
    phone: string
    username: string
    website: string
}
function ListUat() {
    const [open, setOpen] = useState<boolean>(false)
    var dateObj = new Date();
    var month = dateObj.getUTCMonth() + 1; //months from 1-12
    var day = dateObj.getUTCDate();
    var year = dateObj.getUTCFullYear()
    let newdate = month + "/" + day + "/" + year
    let dates = day
    const [posts, setPosts] = useState<Posts[]>([])
    useEffect(() => {
        axios
            .get("https://jsonplaceholder.typicode.com/users")
            .then(function (response) {
                setPosts(response.data);
            })
            .catch(function (error) {
                console.log(error)
            })
    }, [])
    console.log(posts)
    const hanleOpenModal = () => {
        console.log(open);
        
        setOpen(!open)
    }
    return (
        <div className='overflow-auto  w-full h-[400px] ' >
            {posts != [] && posts.map((post: Posts, index: number) => {
                return (
                    <div key={index}   >
                        <button onClick={hanleOpenModal} className='  relative w-full h-full  bg-blue-400 hover:bg-blue-500 border-l-4  border-indigo-900 mt-1  ' >
                        <ModalClient open={open} onOpen={hanleOpenModal} ticket={post.id} client={post.username} tech={post.name} phone={post.phone} />
                             <Row justify="space-around"  >
                                <Col span={1}>
                                    <p className='font-semibold  '>{post.id}</p>
                                </Col>
                                <Col span={1}>
                                    <img className='h-[30px] w-[30px] rounded-full ' src="https://i.pinimg.com/originals/da/17/cd/da17cd93c410602b58009cb119b3223d.jpg" alt="" />
                                </Col>
                                <Col span={1}>
                                    <p className='font-semibold '><GiEternalLove /></p>
                                </Col>
                                <Col span={3}>
                                    <p className='font-semibold '>{post.name}</p>
                                </Col>
                                <Col span={1}>
                                    <p className='font-semibold '>DUR</p>
                                </Col>
                                <Col span={3}>
                                    <p className='font-semibold '>{post.username}</p>
                                </Col>
                                <Col span={2}>
                                    <p className='font-semibold '>0988675434</p>
                                </Col>
                                <Col span={1}>
                                    <p className='font-semibold '>{newdate}</p>
                                </Col>
                                <Col span={1}>
                                    <p className='font-semibold w-[80px] '>{day}</p>
                                </Col>
                                <Col span={1}>
                                    <p className='font-semibold '>STATUS</p>
                                </Col>
                            </Row>
                        </button>
                       
                    </div>
                )
            })}
        </div>
    )
}
export default ListUat