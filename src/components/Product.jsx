import { useState,useEffect } from "react";
import { Button, Card } from "react-bootstrap";
import { useDispatch, useSelector} from "react-redux";
import { add } from "../store/cartSlice";
import { getProducts } from "../store/productSlice";


const Product = () => {
    const dispatch = useDispatch();
    const {data:products,status} = useSelector(state => state.products) //destructuring data as products and status

    // const [products,setProduct] = useState([]); //setProduct hota hai but youtube pe getProduct rakha hai isne

    useEffect(()=>{
        // dispatch an action to fetchProducts from middleware thunk
        dispatch(getProducts());
        //api call
        // fetch('https://fakestoreapi.com/products')
        // .then(data => data.json())
        // .then(result => setProduct(result))
    },[])

    if(status=='loading'){
        return <p className="text-center">Loading...</p>
    }

    const addToCart = (product) => {
        //dispatch an add action
        dispatch(add(product))
    }
// console.log(data);
    const cards = products.map(product => (
        <div className="col-md-3 ">
            <Card key={product.id} className="h-100" style={{ width: '18rem', margin:"20px"}}>
                <div className="text-center">
                    <Card.Img variant="top" src={product.image}  style={{width:"100px",height:"130px"}}/>
                </div>
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>
          INR: {product.price}
        </Card.Text>
        
      </Card.Body>
        <Card.Footer className="text-center" style={{backgroundColor:"white"}}>
        <Button variant="primary" onClick={()=> addToCart(product)}>Add To Cart</Button>
        </Card.Footer>
    </Card>
        </div>
    ))

    return (
        <div className="text-center">
            <h1>Product Dashboard</h1>
            <div className="row">
                {cards}
            </div>
        </div>
    )
}

export default Product;