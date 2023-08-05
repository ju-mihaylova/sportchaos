import { useState } from 'react';
import { Carousel } from "react-bootstrap";

const MyCarousel = () => {
    const [activeIndex, setActiveIndex] = useState(0)
    const handleSelect = (selectedIndex) => {
        setActiveIndex(selectedIndex);
    }

    return (
        <Carousel
            activeIndex={activeIndex}
            onSelect={handleSelect}
            interval={3000}
        >
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="/fashion-yellow-swimsuit.webp"
                    alt="fashion-yellow-swimsuit"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="/people-at-the-beach.webp"
                    alt="people-at-the-beach"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="/swimming-pool-red-swimsuit.jpg"
                    alt="swimming-pool-red-swimsuit"
                />
            </Carousel.Item>
        </Carousel>
    );
}

export default MyCarousel;