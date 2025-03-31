import React, { useState, useEffect } from 'react';
import { fetchCategories, addCategory, editCategory, deleteCategory } from '../services/api';
import { Category } from '../types';


const CategoryManager: React.FC = () => {
    const [categories, setCategories] = useState<Category[]>([]);
    const [newCategory, setNewCategory] = useState<string>('');
    const [editingCategoryId, setEditingCategoryId] = useState<number | null>(null);
    const [editingCategoryName, setEditingCategoryName] = useState<string>('');
    const [error, setError] = useState<string | null>(null); // Hata mesajı için state

    useEffect(() => {
        const loadCategories = async () => {
            try {
                const fetchedCategories = await fetchCategories();
                if (Array.isArray(fetchedCategories)) {
                    setCategories(fetchedCategories as Category[]);
                } else {
                    throw new Error('Invalid data format');
                }
                setCategories(fetchedCategories);
                setError(null); // Hata varsa temizle
            } catch (error) {
                setError('Failed to fetch categories. Please try again later.');
                console.error('Error fetching categories:', error);
            }
        };
        loadCategories();
    }, []);

    const handleAddCategory = async () => {
        if (newCategory.trim()) {
            try {
                const addedCategory = await addCategory({ name: newCategory });
                if (typeof addedCategory === 'object' && addedCategory !== null && 'id' in addedCategory && 'name' in addedCategory) {
                    setCategories([...categories, addedCategory as Category]);
                } else {
                    throw new Error('Invalid category data returned from server');
                }
                setCategories([...categories, addedCategory as Category]);
                setNewCategory('');
                setError(null); // Hata varsa temizle
            } catch (error) {
                setError('Failed to add category. Please try again.');
                console.error('Error adding category:', error);
            }
        }
    };

    const handleEditCategory = async () => {
        if (editingCategoryId !== null && editingCategoryName.trim()) {
            try {
                const updatedCategory = await editCategory(editingCategoryId, { name: editingCategoryName });
                setCategories(categories.map(cat => (Number(cat.id) === editingCategoryId ? updatedCategory as Category : cat)));
                setEditingCategoryId(null);
                setEditingCategoryName('');
                setError(null); // Hata varsa temizle
            } catch (error) {
                setError('Failed to edit category. Please try again.');
                console.error('Error editing category:', error);
            }
        }
    };

    const handleDeleteCategory = async (id: number) => {
        try {
            await deleteCategory(id);
            setCategories(categories.filter(cat => Number(cat.id) !== id));
            setError(null); // Hata varsa temizle
        } catch (error) {
            setError('Failed to delete category. Please try again.');
            console.error('Error deleting category:', error);
        }
    };

    return (
        <div>
            <h2>Category Manager</h2>
            {error && <div style={{ color: 'red', marginBottom: '10px' }}>{error}</div>} {/* Hata mesajı */}
            <input
                type="text"
                value={newCategory}
                onChange={(e) => setNewCategory(e.target.value)}
                placeholder="Add new category"
            />
            <button onClick={handleAddCategory}>Add Category</button>

            <ul>
                {categories.map(category => (
                    <li key={category.id}>
                        {editingCategoryId === Number(category.id) ? (
                            <>
                                <input
                                    type="text"
                                    value={editingCategoryName}
                                    onChange={(e) => setEditingCategoryName(e.target.value)}
                                />
                                <button onClick={handleEditCategory}>Save</button>
                                <button onClick={() => setEditingCategoryId(null)}>Cancel</button>
                            </>
                        ) : (
                            <>
                                {category.name}
                                <button onClick={() => {
                                    setEditingCategoryId(Number(category.id));
                                    setEditingCategoryName(category.name);
                                }}>Edit</button>
                                <button onClick={() => handleDeleteCategory(Number(category.id))}>Delete</button>
                            </>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CategoryManager;