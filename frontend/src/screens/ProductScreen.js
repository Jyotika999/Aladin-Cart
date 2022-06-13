import React, {useState, useEffect} from 'react'
import {Link, useParams} from 'react-router-dom'
import {Row, Col, Image, ListGroup, Card, Button, ListGroupItem} from 'react-bootstrap'
import Ratings from '../components/Ratings'
import axios from 'axios'
// import products from '../products'

const ProductScreen = ({match}) => {
    const { id } = useParams();
    // const product = products.find(p => p._id === match.params.id);

    const [product, setProduct]= useState({})

    useEffect(()=>{
        const fetchProduct= async ()=>{
          const {data} = await axios.get(`/api/products/${String(id)}`)
    
          setProduct(data);
        }
        fetchProduct();
    
        return ()=>{
          setProduct({});
        }
        
      }, [id])

    return <>
        <Link className='btn btn-dark my-3' to='/'>
        Go Back
        </Link>
        <Row>
            <Col md={6}>
                <Image src={product.image} alt={product.name} fluid></Image>
            </Col>
            <Col md={3}>
                <ListGroup variant='flush'>
                    <ListGroupItem>
                        <h3>{product.name}</h3>
                    </ListGroupItem>
                    <ListGroupItem>
                        <Ratings value={product.rating} Text={`${product.numReviews} reviews`}/>
                    </ListGroupItem>
                    <ListGroupItem>
                        Price: ${product.price}
                    </ListGroupItem>
                    <ListGroupItem>
                        Description: {product.description}
                    </ListGroupItem>
                </ListGroup>
            </Col>
            <Col md={3}>
                <Card >
                    <ListGroup variant='flush'>
                        <ListGroup.Item>
                            <Row>
                                <Col>
                                    Price:
                                </Col>
                                <Col>
                                    <strong>${product.price}</strong>
                                </Col>
                            </Row>
                        </ListGroup.Item>

                        <ListGroup.Item>
                            <Row>
                                <Col>
                                    Status:
                                </Col>
                                <Col>
                                    {product.countInStock>0 ? 'In Stock': 'Out of Stock'}
                                </Col>
                            </Row>
                        </ListGroup.Item>

                        <ListGroup.Item>
                            <Button className='btn-block' type='button' disabled={product.countInStock === 0}>
                                Add to Cart
                            </Button>
                        </ListGroup.Item>
                    </ListGroup>
                </Card>
            </Col>
        </Row>
    </>



}

export default ProductScreen