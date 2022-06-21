import React, {useState, useEffect} from 'react'
import {Link, useSearchParams, useNavigate } from 'react-router-dom'
import {Form, Button, Row, Col, FormGroup} from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { register } from '../actions/userActions'
import FormContainer from '../components/FormContainer'


const RegisterScreen = () =>{
    const [name, setName] = useState('')
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('')
    const [message, setMessage] = useState(null)

    const [searchParams] = useSearchParams()
    const dispatch= useDispatch()
    const userRegister = useSelector(state =>state.userRegister )
    const history = useNavigate()
    const redirect = searchParams.get('')? searchParams.get(''): '/'

    const {loading, error, userInfo} = userRegister

    useEffect(()=>{
        if(userInfo){
            history(redirect)
        }
    }, [history, userInfo, redirect])

    const submitHandler= (e)=>{
        e.preventDefault()
        //dispatchRegister
        if(password !== confirmPassword){
            setMessage('Passwords do not match')
        }else{
            dispatch(register(name, email, password))
        }
    }

    return (
        <FormContainer>
            <h1>
                SIGN-UP
            </h1>
            {message && (<Message varient='danger'>{message}</Message>)}
            {error && (<Message varient='danger'>{error}</Message>)}
            {loading && (<Loader></Loader>)}
            
            <Form onSubmit={submitHandler}>
            <FormGroup controlId='email'>
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
                 Register
                </Button>
            </Form>

            <Row className='py-3'>
                <Col>
                Have an account?{' '}
                <Link to={redirect ? `/login?redirect=${redirect}` : '/login'}>
                    Login
                </Link>
                </Col>
            </Row>
        </FormContainer>
    )
}

export default RegisterScreen