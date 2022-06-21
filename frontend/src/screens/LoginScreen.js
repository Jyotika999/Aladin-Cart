import React, {useState, useEffect} from 'react'
import {Link, useSearchParams, useNavigate } from 'react-router-dom'
import {Form, Button, Row, Col, FormGroup} from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { login } from '../actions/userActions'
import FormContainer from '../components/FormContainer'


const LoginScreen = () =>{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [searchParams] = useSearchParams()
    const dispatch= useDispatch()
    const userLogin = useSelector(state =>state.userLogin )
    const history = useNavigate()
    const redirect = searchParams.get('redirect')? searchParams.get('redirect'): '/'

    const {loading, error, userInfo} = userLogin

    useEffect(()=>{
        if(userInfo){
            history(`/${redirect}`)
        }
    }, [history, userInfo, redirect])

    const submitHandler= (e)=>{
        e.preventDefault()
        //dispatchLogin
        dispatch(login(email, password))
    }

    return (
        <FormContainer>
            <h1>
                SIGN-IN
            </h1>
            {error && (<Message varient='danger'>{error}</Message>)}
            {loading && (<Loader></Loader>)}
            
            <Form onSubmit={submitHandler}>
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

                <Button className='mt-2' type='submit' variant='primary'>
                Sign In
                </Button>
            </Form>

            <Row className='py-3'>
                <Col>
                New Customer?{' '}
                <Link to={redirect ? `/register?redirect=${redirect}` : '/register'}>
                    Register
                </Link>
                </Col>
            </Row>
        </FormContainer>
    )
}

export default LoginScreen