import React, { useState } from 'react'
import { Form, Button, Col, FormCheck, FormGroup, FormLabel } from 'react-bootstrap'
import {useNavigate} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import FormContainer from '../components/FormContainer'
import CheckoutSteps from '../components/CheckoutSteps'
import { savePaymentMethod } from '../actions/cartActions'

const PaymentScreen = () => {
  const cart = useSelector((state) => state.cart)
  const { shippingAddress } = cart
  const history= useNavigate()

  if (!shippingAddress.address) {
    history('/shipping')
  }

  const [paymentMethod, setPaymentMethod] = useState('PayPal')

  const dispatch = useDispatch()

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(savePaymentMethod(paymentMethod))
    history('/placeorder')
  }

  return (
    <FormContainer>
      <CheckoutSteps step1 step2 step3 />
      <h1>Payment Method</h1>
      <Form onSubmit={submitHandler}>
        <FormGroup>
          <FormLabel className='mb-2' as='legend'>Select Method</FormLabel>
          <Col>
            <FormCheck className='mt-2'
              type='radio'
              label='PayPal or Credit Card'
              id='PayPal'
              name='paymentMethod'
              value='PayPal'
              checked
              onChange={(e) => setPaymentMethod(e.target.value)}
            ></FormCheck>
            <FormCheck className='mt-2'
              type='radio'
              label='Stripe'
              id='Stripe'
              name='paymentMethod'
              value='Stripe'
              onChange={(e) => setPaymentMethod(e.target.value)}
            ></FormCheck>
          </Col>
        </FormGroup>

        <Button className='mt-2' type='submit' variant='primary'>
          Continue
        </Button>
      </Form>
    </FormContainer>
  )
}

export default PaymentScreen