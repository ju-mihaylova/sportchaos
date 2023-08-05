import { useState, useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import ProductTile from './ProductTile';
import LoadMoreButton from './LoadMoreButton';

const ProductGrid = ({
    products,
    sortOption,
    selectedCategory,
    selectedColor,
    selectedPrice,
    addToCart
}) => {
    const [totalProducts, setTotalProducts] = useState(4); // Initially display 4 products
    const productsPerPage = 4; // Number of products to load per click

    const handleLoadMore = () => {
        setTotalProducts((prevTotal) => prevTotal + productsPerPage);
    };

    // Function to sort the products based on the selected sort option
    const sortProducts = (option, productsToSort) => {
        switch (option) {
            case 'alpha-asc':
                return productsToSort
                    .slice()
                    .sort((a, b) => a.name.localeCompare(b.name));
            case 'alpha-desc':
                return productsToSort
                    .slice()
                    .sort((a, b) => b.name.localeCompare(a.name));
            case 'price-asc':
                return productsToSort.slice().sort((a, b) => a.price - b.price);
            case 'price-desc':
                return productsToSort.slice().sort((a, b) => b.price - a.price);
            default:
                return productsToSort;
        }
    };

    // State to hold the sorted and displayed products
    const [sortedProducts, setSortedProducts] = useState([]);

    useEffect(() => {
        // Filter the products based on the selected category
        const filteredProducts = selectedCategory
            ? products.filter(
                  (product) => product.category === selectedCategory
              )
            : products;

        // Filter the products based on the selected color
        const filteredByColor = selectedColor
            ? filteredProducts.filter(
                  (product) => product.color === selectedColor
              )
            : filteredProducts;

        // Filter the products based on the selected price range
        const filteredByPrice = selectedPrice
            ? selectedPrice.max === Infinity // Handle "All" option
                ? filteredByColor
                : filteredByColor.filter(
                      (product) =>
                          product.price >= selectedPrice.min &&
                          product.price <= selectedPrice.max
                  )
            : filteredByColor;

        // Sort the filtered products based on the selected sort option
        const sorted = sortProducts(sortOption, filteredByPrice);
        setSortedProducts(sorted);
    }, [sortOption, products, selectedCategory, selectedColor, selectedPrice]);


    // Slice the sortedProducts array to display only the specified number of products
    const displayedProducts = sortedProducts.slice(0, totalProducts);

    return (
        <Container className="product-grid-container mt-4">
            <Row>
                {displayedProducts.map((product) => (
                    <Col md={3} key={product.id} className="mb-4">
                        <ProductTile
                            product={product}
                            addToCart={addToCart} // Pass the addToCart function to ProductTile
                        />
                    </Col>
                ))}
            </Row>
            {totalProducts < sortedProducts.length && (
                <LoadMoreButton
                    onClick={handleLoadMore}
                    className="show-more-button"
                />
            )}
        </Container>
    );
};

export default ProductGrid;
