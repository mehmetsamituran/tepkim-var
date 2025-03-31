import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000/api'; // Backend'inizin doğru URL'sini buraya yazın

// Mock veri
const mockCategories = [
    { id: 1, name: 'Category A' },
    { id: 2, name: 'Category B' },
];

// Fetch all brands
export const fetchBrands = async () => {
    return new Promise((resolve) => {
        setTimeout(() => resolve([
            { id: 1, name: 'Brand A', description: 'Description A' },
            { id: 2, name: 'Brand B', description: 'Description B' },
        ]), 500);
    });
};

// Fetch all categories
export const fetchCategories = async () => {
    return new Promise((resolve) => {
        setTimeout(() => resolve([
            { id: 1, name: 'Category A' },
            { id: 2, name: 'Category B' },
        ]), 500);
    });
};

// Update a specific brand
export const updateBrand = async (id: number, updatedData: any) => {
    try {
        const response = await axios.put(`${API_BASE_URL}/brands/${id}`, updatedData);
        return response.data;
    } catch (error) {
        console.error('Error updating brand:', error);
        throw error;
    }
};

// Update a specific category
export const updateCategory = async (id: number, updatedData: any) => {
    try {
        const response = await axios.put(`${API_BASE_URL}/categories/${id}`, updatedData);
        return response.data;
    } catch (error) {
        console.error('Error updating category:', error);
        throw error;
    }
};

// Add a new category
export const addCategory = async (newCategory: { name: string }) => {
    return new Promise((resolve) => {
        const newId = mockCategories.length + 1;
        const addedCategory = { id: newId, ...newCategory };
        mockCategories.push(addedCategory);
        setTimeout(() => resolve(addedCategory), 500);
    });
};

// Edit an existing category
export const editCategory = async (id: number, updatedData: { name: string }) => {
    return new Promise((resolve, reject) => {
        const categoryIndex = mockCategories.findIndex((cat) => cat.id === id);
        if (categoryIndex !== -1) {
            mockCategories[categoryIndex] = { ...mockCategories[categoryIndex], ...updatedData };
            setTimeout(() => resolve(mockCategories[categoryIndex]), 500);
        } else {
            reject(new Error('Category not found'));
        }
    });
};

// Delete a category
export const deleteCategory = async (id: number) => {
    return new Promise((resolve, reject) => {
        const categoryIndex = mockCategories.findIndex((cat) => cat.id === id);
        if (categoryIndex !== -1) {
            mockCategories.splice(categoryIndex, 1);
            setTimeout(() => resolve({ success: true }), 500);
        } else {
            reject(new Error('Category not found'));
        }
    });
};