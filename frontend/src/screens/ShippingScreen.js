import React, { useState } from 'react'
import { Form, Button, FormGroup, FormControl, FormLabel } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import FormContainer from '../components/FormContainer'
import CheckoutSteps from '../components/CheckoutSteps'
import { saveShippingAddress } from '../actions/cartActions'

const ShippingScreen = () => {

    const cart= useSelector(state=>state.cart)
    const dispatch= useDispatch()
    const history= useNavigate()

    const {shippingAddress} = cart

  const [address, setAddress] = useState(shippingAddress.address)
  const [city, setCity] = useState(shippingAddress.city)
  const [postalCode, setPostalCode] = useState(shippingAddress.postalCode)
  const [country, setCountry] = useState(shippingAddress.country)

  const submitHandler=(e)=>{
    e.preventDefault()
    dispatch(saveShippingAddress({address, city, postalCode, country}))
    history('/payment')
  }

  return (
    <FormContainer>
    <CheckoutSteps step1 step2 />
      <h1>Shipping</h1>
      <Form onSubmit={submitHandler}>
        <FormGroup controlId='address'>
          <FormLabel className='mt-2'>Address</FormLabel>
          <FormControl
            type='text'
            placeholder='Enter address'
            value={address}
            required
            onChange={(e) => setAddress(e.target.value)}
          ></FormControl>
        </FormGroup>

        <FormGroup controlId='city'>
          <FormLabel className='mt-2'>City</FormLabel>
          <FormControl
            type='text'
            placeholder='Enter city'
            value={city}
            required
            onChange={(e) => setCity(e.target.value)}
          ></FormControl>
        </FormGroup>

        <FormGroup controlId='postalCode'>
          <FormLabel className='mt-2'>Postal Code</FormLabel>
          <FormControl
            type='text'
            placeholder='Enter postal code'
            value={postalCode}
            required
            onChange={(e) => setPostalCode(e.target.value)}
          ></FormControl>
        </FormGroup>

        <FormGroup controlId='country'>
          <FormLabel className='mt-2'>Country</FormLabel>
          <FormControl
            type='text'
            placeholder='Enter country'
            value={country}
            required
            onChange={(e) => setCountry(e.target.value)}
          ></FormControl>
        </FormGroup>

        <Button className='mt-2' type='submit' variant='primary' >
          Continue
        </Button>
      </Form>
    </FormContainer>
  )
}

export default ShippingScreen
