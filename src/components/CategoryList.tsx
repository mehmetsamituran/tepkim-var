import React from 'react';

interface Category {
    id: number;
    name: string;
}

interface CategoryListProps {
    categories: Category[];
    onUpdate: (id: number, updatedData: any) => void;
}

const CategoryList: React.FC<CategoryListProps> = ({ categories, onUpdate }) => {
    const handleUpdate = (id: number) => {
        const updatedName = prompt('Enter new category name:');
        if (updatedName) {
            onUpdate(id, { name: updatedName });
        }
    };

    return (
        <div className="category-list">
            <ul>
                {categories.map((category) => (
                    <li key={category.id}>
                        {category.name}{' '}
                        <button onClick={() => handleUpdate(category.id)}>Edit</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CategoryList;