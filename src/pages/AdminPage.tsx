import React, { useEffect, useState } from 'react';
import { fetchBrands, fetchCategories } from '../services/api';
import BrandList from '../components/BrandList';
import CategoryList from '../components/CategoryList';
import PageLayout from '../components/PageLayout';

const AdminPage: React.FC = () => {
  interface Brand {
    id: number;
    name: string;
    description: string;
  }

  interface Category {
    id: number;
    name: string;
  }

  const [brands, setBrands] = useState<Brand[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadBrands = async () => {
      try {
        const brandData = await fetchBrands();
        if (Array.isArray(brandData)) {
          setBrands(brandData as Brand[]);
        } else {
          setError('Invalid data format for brands.');
        }
      } catch (err) {
        setError('Failed to fetch brands.');
      }
    };

    const loadCategories = async () => {
      try {
        const categoryData = await fetchCategories();
        if (Array.isArray(categoryData)) {
          setCategories(categoryData as Category[]);
        } else {
          setError('Invalid data format for categories.');
        }
      } catch (err) {
        setError('Failed to fetch categories.');
      }
    };

    loadBrands();
    loadCategories();
  }, []);

  return (
    <PageLayout title="Admin Panel">
      {error && <div style={{ color: 'red' }}>Error: {error}</div>}
      <h2>Manage Brands</h2>
      <BrandList 
        brands={brands} 
        onUpdate={(id, updatedData) => {
          setBrands(prevBrands => 
            prevBrands.map(brand => 
              brand.id === id ? { ...brand, ...updatedData } : brand
            )
          );
        }} 
      />
      <h2>Manage Categories</h2>
      <CategoryList 
        categories={categories} 
        onUpdate={(id, updatedData) => {
          setCategories(prevCategories => 
            prevCategories.map(category => 
              category.id === id ? { ...category, ...updatedData } : category
            )
          );
        }} 
      />
    </PageLayout>
  );
};

export default AdminPage;