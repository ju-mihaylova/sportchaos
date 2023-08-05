import { Form, Dropdown } from 'react-bootstrap';

const Sidebar = ({ onSelectColor, onSelectPrice }) => {
    const colors = ['Red', 'Blue', 'Green', 'Yellow'];
    const priceRanges = [
        { label: 'All', min: 0, max: Infinity },
        { label: 'Under $55', min: 0, max: 55 },
        { label: '$56 - $58', min: 56, max: 58 },
        { label: '$59 - $60', min: 59, max: 60 },
        { label: '$61 - $62', min: 61, max: 62 },
        { label: '$63 - $64', min: 63, max: 64 },
    ];

    return (
        <div>
            <div className="mb-3">
                <strong>Filters</strong>
            </div>
            <Form>
                <Form.Group controlId="colorFilter">
                    <Form.Label className="text-info fw-bold fs-4">
                        Colors
                    </Form.Label>
                    <Form.Control
                        as="select"
                        onChange={(e) => onSelectColor(e.target.value)}
                    >
                        <option value="">All</option>
                        {colors.map((color, index) => (
                            <option key={index} value={color}>
                                {color}
                            </option>
                        ))}
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId="priceFilter">
                    <Form.Label className="text-info fw-bold fs-4">
                        Price Range
                    </Form.Label>
                    <Dropdown>
                        <Dropdown.Toggle variant="light" id="dropdown-price">
                            Select Price Range
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            {priceRanges.map((range, index) => (
                                <Dropdown.Item
                                    key={index}
                                    onClick={() =>
                                        onSelectPrice({
                                            min: range.min,
                                            max: range.max,
                                        })
                                    }
                                >
                                    {range.label}
                                </Dropdown.Item>
                            ))}
                        </Dropdown.Menu>
                    </Dropdown>
                </Form.Group>
            </Form>
        </div>
    );
};

export default Sidebar;
