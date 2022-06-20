import React, {useState, useEffect} from 'react'
import {Link, useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import {Row, Col, Image, ListGroup, Card, Button, ListGroupItem, FormControl} from 'react-bootstrap'
import Ratings from '../components/Ratings'
import { listProductDetails } from '../actions/productActions'
import Loader from '../components/Loader'
import Message from '../components/Message'
// import products from '../products'



const ProductScreen = ({ match }) => {

    const dispatch = useDispatch()
    const productDetails= useSelector( (state) => state.productDetails)
    const { id } = useParams()
    const history = useNavigate()
    const [qty, setQty] =useState(1)
    const {loading, error, product}= productDetails
    // const product = products.find(p => p._id === match.params.id);


    useEffect(()=>{
        dispatch(listProductDetails(id))
      }, [dispatch, id])

    const addTocartHandler = () => {
        const urll = `/cart/${id}?qty=${qty}`
        history(urll)
        // console.log("hello")
    }

    return <>
        <Link className='btn btn-dark my-3' to='/'>
        Go Back
        </Link>
        {loading ? (<Loader></Loader>) : error? (<Message varient= 'danger'>{error}</Message>) : (
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

                        {
                            product.countInStock>0 && (
                                <ListGroupItem>
                                    <Row>
                                        <Col>QTY</Col>
                                        <Col>
                                            <FormControl as='select' value={qty} onChange= {(e)=> setQty(e.target.value)}>
                                                {[...Array(product.countInStock).keys()].map( x=> (
                                                    <option key= {x+1} value={x+1}> { x + 1} </option>
                                                ))}
                                            </FormControl>
                                        </Col>
                                    </Row>
                                </ListGroupItem>
                            )
                        }
                        <ListGroup.Item>
                            <Button className='btn-block' type='button' disabled={product.countInStock === 0} onClick={addTocartHandler}>
                                Add to Cart
                            </Button>
                        </ListGroup.Item>
                    </ListGroup>
                </Card>
            </Col>
        </Row>
        )}
        
    </>



}

export default ProductScreen