import React from 'react';

interface Brand {
    id: number;
    name: string;
    description: string;
}

interface BrandListProps {
    brands: Brand[];
    onUpdate: (id: number, updatedData: any) => void;
}

const BrandList: React.FC<BrandListProps> = ({ brands, onUpdate }) => {
    const handleUpdate = (id: number) => {
        const updatedName = prompt('Enter new brand name:');
        const updatedDescription = prompt('Enter new brand description:');
        if (updatedName && updatedDescription) {
            onUpdate(id, { name: updatedName, description: updatedDescription });
        }
    };

    return (
        <div className="brand-list">
            <ul>
                {brands.map((brand) => (
                    <li key={brand.id}>
                        {brand.name} - {brand.description}{' '}
                        <button onClick={() => handleUpdate(brand.id)}>Edit</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BrandList;