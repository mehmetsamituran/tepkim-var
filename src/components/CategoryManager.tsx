import React, { useState, useEffect } from 'react';
import { fetchCategories, addCategory, editCategory, deleteCategory } from '../services/api';
import { Category } from '../types';

const CategoryManager: React.FC = () => {
    const [categories, setCategories] = useState<Category[]>([]);
    const [newCategory, setNewCategory] = useState<string>('');
    const [editingCategoryId, setEditingCategoryId] = useState<number | null>(null);
    const [editingCategoryName, setEditingCategoryName] = useState<string>('');

    useEffect(() => {
        const loadCategories = async () => {
            const fetchedCategories = await fetchCategories();
            setCategories(fetchedCategories);
        };
        loadCategories();
    }, []);

    const handleAddCategory = async () => {
        if (newCategory.trim()) {
            const addedCategory = await addCategory(newCategory);
            setCategories([...categories, addedCategory]);
            setNewCategory('');
        }
    };

    const handleEditCategory = async () => {
        if (editingCategoryId !== null && editingCategoryName.trim()) {
            const updatedCategory = await editCategory(editingCategoryId, editingCategoryName);
            setCategories(categories.map(cat => (cat.id === editingCategoryId ? updatedCategory : cat)));
            setEditingCategoryId(null);
            setEditingCategoryName('');
        }
    };

    const handleDeleteCategory = async (id: number) => {
        await deleteCategory(id);
        setCategories(categories.filter(cat => cat.id !== id));
    };

    return (
        <div>
            <h2>Category Manager</h2>
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
                        {editingCategoryId === category.id ? (
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
                                    setEditingCategoryId(category.id);
                                    setEditingCategoryName(category.name);
                                }}>Edit</button>
                                <button onClick={() => handleDeleteCategory(category.id)}>Delete</button>
                            </>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CategoryManager;