import React, { useEffect, useState } from 'react';
import { fetchBrands } from '../services/api';
import { Brand } from '../types';

const BrandList: React.FC = () => {
    const [brands, setBrands] = useState<Brand[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const loadBrands = async () => {
            try {
                const data = await fetchBrands();
                setBrands(data);
            } catch (err) {
                setError('Failed to load brands');
            } finally {
                setLoading(false);
            }
        };

        loadBrands();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div>
            <h2>Boycott Brands</h2>
            <ul>
                {brands.map((brand) => (
                    <li key={brand.id}>
                        <span>{brand.name}</span>
                        <p>{brand.description}</p>
                        <button>Vote to Boycott</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BrandList;