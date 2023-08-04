import { useState } from 'react';
import Sidebar from './Sidebar';
import ProductGrid from './ProductGrid';
import Footer from './Footer';
import SortingDropdown from './SortingDropdown';
import CategorySection from './CategorySection';
import { products } from '../assets/products';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Products = () => {
    const [sortOption, setSortOption] = useState('alpha-asc');
    const [selectedCategory, setSelectedCategory] = useState('Swimming suit');
    const [selectedColor, setSelectedColor] = useState('');
    const [selectedPrice, setSelectedPrice] = useState('');
    const [cartItems, setCartItems] = useState([]);

    const handleSortChange = (option) => {
        setSortOption(option);
    };

    const handleCategorySelect = (category) => {
        setSelectedCategory(category);
    };

    const handleColorSelect = (color) => {
        setSelectedColor(color);
    };

    const handlePriceSelect = (price) => {
        setSelectedPrice(price);
    };

    const addToCart = (product) => {
        setCartItems((prevCartItems) => [...prevCartItems, product]);
    };

    const categoryOptions = [
        {
            name: 'Swimming suit',
            description: 'Fits your body perfectly',
        },
        {
            name: 'Flip flops',
            description: 'Makes you feel light and happy',
        },
    ];

    return (
            <div id="app-container">
                <div className="container-fluid mt-3">
                    <div className="row">
                        <div className="col-md-11">
                            <CategorySection
                                options={categoryOptions}
                                selectedCategory={selectedCategory}
                                onSelectCategory={handleCategorySelect}
                            />
                        </div>
                        <div className="col-md-1 mr-3">
                            <SortingDropdown onSelectSort={handleSortChange} />
                        </div>
                    </div>
                    <div
                        className="container-fluid mt-3"
                        id="filter-product-container"
                    >
                        <div className="row">
                            <div className="col-md-1 col-xs-12">
                                <Sidebar
                                    onSelectColor={handleColorSelect}
                                    onSelectPrice={handlePriceSelect}
                                />
                            </div>
                            <div className="col-md-11 col-xs-12">
                                <div className="mb-4">
                                    <ProductGrid
                                        products={products}
                                        sortOption={sortOption}
                                        selectedCategory={selectedCategory}
                                        selectedColor={selectedColor}
                                        selectedPrice={selectedPrice}
                                        addToCart={addToCart}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default Products;
