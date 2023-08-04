import { Dropdown, DropdownButton } from 'react-bootstrap';

const CategorySection = ({ options, selectedCategory, onSelectCategory }) => {
    return (
        <div className="my-3">
            <DropdownButton id="category-dropdown" title="Select Category">
                {options.map((option) => (
                    <Dropdown.Item
                        key={option.name}
                        onClick={() => onSelectCategory(option.name)}
                    >
                        <h5>{option.name}</h5>
                        <p>{option.description}</p>
                    </Dropdown.Item>
                ))}
            </DropdownButton>
        </div>
    );
};

export default CategorySection;
