import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import {LinkContainer} from 'react-router-bootstrap'
import {Form, Button, Row, Col, FormGroup, Table} from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { getUserDetails, updateUserProfile } from '../actions/userActions'
import { listMyOrders } from '../actions/orderActions'


const ProfileScreen = () =>{
    const [name, setName] = useState('')
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('')
    const [message, setMessage] = useState(null)

    const dispatch= useDispatch()
    const history = useNavigate()
    const userDetail = useSelector(state =>state.userDetail )
    const userLogin = useSelector(state =>state.userLogin )
    const userUpdateProfile = useSelector(state =>state.userUpdateProfile )
    const orderListMy= useSelector((state)=> state.orderListMy)

    const {loading, error, user} = userDetail
    const {userInfo}= userLogin
    const {success} = userUpdateProfile
    const {loading:loadingOrders, error: errorOrders, orders}= orderListMy

    useEffect(()=>{
        if(!userInfo){
            history('/login')
        }else{
            if(!user.name){
                dispatch(getUserDetails('profile'))
                dispatch(listMyOrders())
            }else{
                setName(user.name)
                setEmail(user.email)
            }
        }
    }, [dispatch, history, userInfo, user])

    const submitHandler= (e)=>{
        e.preventDefault()
        //dispatchRegister
        if(password !== confirmPassword){
            setMessage('Passwords do not match')
        }else{
            //dispatch update profile
            dispatch(updateUserProfile({
                id: user._id, name, email, password
            }))
        }
    }

    return (
        <Row>
            <Col md={3}>
            <h1>
                User Profile
            </h1>
            {message && (<Message varient='danger'>{message}</Message>)}
            {error && (<Message varient='danger'>{error}</Message>)}
            {success && (<Message varient='success'>Profile Updated</Message>)}
            {loading && (<Loader></Loader>)}
            
            <Form onSubmit={submitHandler}>
            <FormGroup controlId='name'>
                <Form.Label className='mt-2'>Name</Form.Label>
                    <Form.Control type='Name' placeholder='Enter Name' value={name} onChange={(e) => setName(e.target.value)}> 
                    </Form.Control>
                </FormGroup>

                <FormGroup controlId='email'>
                <Form.Label className='mt-2'>Email Address</Form.Label>
                    <Form.Control type='email' placeholder='Enter email' value={email} onChange={(e) => setEmail(e.target.value)}> 
                    </Form.Control>
                </FormGroup>

                <Form.Group controlId='password'>
                <Form.Label className='mt-2'>Password</Form.Label>
                <Form.Control type='password' placeholder='Enter password' value={password} onChange={(e) => setPassword(e.target.value)}>
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId='consfirmPassword'>
                <Form.Label className='mt-2'>Confirm Password</Form.Label>
                <Form.Control type='password' placeholder='Confirm password' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}>
                    </Form.Control>
                </Form.Group>

                <Button className='mt-2' type='submit' variant='primary'>
                 Update
                </Button>
            </Form>
            </Col>
            <Col md={9}>
                <h1>My Orders</h1>
                {loadingOrders ? (
          <Loader />
        ) : errorOrders ? (
          <Message variant='danger'>{errorOrders}</Message>
        ) : (
          <Table striped bordered hover responsive className='table-sm'>
            <thead>
              <tr>
                <th>ID</th>
                <th>DATE</th>
                <th>TOTAL</th>
                <th>PAID</th>
                <th>DELIVERED</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order._id}>
                  <td>{order._id}</td>
                  <td>{order.createdAt}</td>
                  <td>{order.totalPrice}</td>
                  <td>
                    {order.isPaid ? (
                      order.paidAt
                    ) : (
                      <i className='fas fa-times' style={{ color: 'red' }}></i>
                    )}
                  </td>
                  <td>
                    {order.isDelivered ? (
                      order.deliveredAt
                    ) : (
                      <i className='fas fa-times' style={{ color: 'red' }}></i>
                    )}
                  </td>
                  <td>
                    <LinkContainer to={`/orders/${order._id}`}>
                      <Button className='btn-sm' variant='light'>
                        Details
                      </Button>
                    </LinkContainer>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        )}
      </Col>
    </Row>
    )
}

export default ProfileScreen