import React from 'react'
import {Link} from 'react-router-dom'
import {Row, Col, Image, ListGroup, Card, Button} from 'react-bootstrap'
import Ratings from '../components/Ratings'
import products from '../products'
const ProductScreen = ({match}) => {

    const product = products.find(p => p._id === match.params.id)
    return <div>Product</div>



}

export default ProductScreen