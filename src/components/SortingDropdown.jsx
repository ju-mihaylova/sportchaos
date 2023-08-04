import { Dropdown, DropdownButton } from 'react-bootstrap';

const SortingDropdown = ({ onSelectSort }) => {
    return (
        <div className="d-flex justify-content-end my-3">
            <DropdownButton id="sorting-dropdown" title="Sort by">
                <Dropdown.Item onClick={() => onSelectSort('alpha-asc')}>
                    Alphabetical A-Z
                </Dropdown.Item>
                <Dropdown.Item onClick={() => onSelectSort('alpha-desc')}>
                    Alphabetical Z-A
                </Dropdown.Item>
                <Dropdown.Item onClick={() => onSelectSort('price-asc')}>
                    Price Ascending
                </Dropdown.Item>
                <Dropdown.Item onClick={() => onSelectSort('price-desc')}>
                    Price Descending
                </Dropdown.Item>
            </DropdownButton>
        </div>
    );
};

export default SortingDropdown;
