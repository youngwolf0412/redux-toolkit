import React from 'react'
import { Button, Card } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux'
import { remove } from '../store/cartSlice';

const Cart = () => {
    const products = useSelector(state => state.cart);

    const dispatch = useDispatch();

    const removeToCart = (id) =>{
        //dispatch a remove action
        dispatch(remove(id))
    }

    const cards = products.map(product => (
        <div className="col-md-12 ">
            <Card key={product.id} className="h-100" style={{ width: '100%'}}>
                <div className="text-center">
                    <Card.Img variant="top" src={product.image}  style={{width:"100px",height:"130px"}}/>
                </div>
                <Card.Body className='text-center'>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text>
                    INR: {product.price}
                    </Card.Text>
                    
                </Card.Body>
                <Card.Footer className="text-center" style={{backgroundColor:"white"}}>
                <Button variant="danger" onClick={()=> removeToCart(product.id)}>Remove Item</Button>
                </Card.Footer>
            </Card>
        </div>
    ))

  return (
    <div >
        {cards}
    </div>
  )
}

export default Cart