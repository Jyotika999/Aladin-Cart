import React from 'react'
import { Card } from 'react-bootstrap';
import Rating from './Ratings'

const Product = ({ product }) => {
    return (
        <Card className='my-3 p-3 rounded'>
            <a href={`/product/ ${product._id}`}>
                {/* card image  */}
                <Card.Img src={product.image} variant='top'></Card.Img>
            </a>

            {/* card body */}
            <Card.Body>

                <a href={`/product/ ${product._id}`}>
                    <Card.Title as='div'>
                        <strong>{product.name}</strong>
                    </Card.Title>
                </a>


                <Card.Text as='div' >
                    <Rating
                        value={product.rating}
                        Text={`${product.numReviews} Reviews`}
                        color='yellow'></Rating>
                </Card.Text>

                <Card.Text as='h3'> ${product.price}</Card.Text>
            </Card.Body>
        </Card>
    )
}

export default Product;