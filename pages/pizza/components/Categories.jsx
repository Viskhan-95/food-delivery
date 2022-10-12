import { useState } from "react";

const Categories = () => {
    const categories = ["Все", "Мясные", "Вегетерианские", "Гриль", "Острые"]

    const [activeIndex, setActiveIndex] = useState(0);

    const handleCategory = (index) => {
        setActiveIndex(index)
    }

    return (
        <div className="categories">
            <ul>
            {categories.map((category, index) => (
                <li onClick={() => handleCategory(index)}
                className = {activeIndex === index ? "active" : ""}>
                    {category}
                </li>
            ))}
            </ul>
        </div>
    );
};

export default Categories;