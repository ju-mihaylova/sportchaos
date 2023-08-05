import { useState } from 'react';
import { Card, Button, Alert } from 'react-bootstrap';
import { FaStar } from 'react-icons/fa';

const ProductTile = ({ product, addToCart }) => {
    const [showAlert, setShowAlert] = useState(false);

    const handleAddToCart = () => {
        addToCart(product);
        setShowAlert(true);
        setTimeout(() => {
            setShowAlert(false);
        }, 2000); // Hide the alert after 2 seconds
    };

    return (
        <Card className="mx-auto">
            <Card.Img variant="top" src={product.image} alt={product.name} />
            <Card.Body>
                <Card.Title style={{ minHeight: '90px' }}>
                    {product.name}
                </Card.Title>
                <Card.Text style={{ minHeight: '110px' }}>
                    {product.description}
                </Card.Text>
                <Card.Text>
                    {product.discountedPrice ? (
                        <div>
                            <span className="text-muted">${product.price}</span>{' '}
                            <span className="text-danger">
                                ${product.discountedPrice}
                            </span>
                        </div>
                    ) : (
                        <span>${product.price}</span>
                    )}
                </Card.Text>
                <div className="mb-2">
                    {Array.from({ length: product.rating }).map((_, index) => (
                        <FaStar key={index} color="#ffc107" />
                    ))}
                </div>
                <Button onClick={handleAddToCart} variant="primary">
                    Add to Cart
                </Button>
                {showAlert && (
                    <Alert variant="success" className="mt-3">
                        Product added to cart
                    </Alert>
                )}
            </Card.Body>
        </Card>
    );
};

export default ProductTile;
