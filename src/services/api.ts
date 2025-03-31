import axios from 'axios';

const API_BASE_URL = 'https://your-api-url.com/api'; // Replace with your actual API URL

export const fetchBrands = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/brands`);
        return response.data;
    } catch (error) {
        console.error('Error fetching brands:', error);
        throw error;
    }
};

export const submitVote = async (voteData) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/votes`, voteData);
        return response.data;
    } catch (error) {
        console.error('Error submitting vote:', error);
        throw error;
    }
};

export const fetchCategories = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/categories`);
        return response.data;
    } catch (error) {
        console.error('Error fetching categories:', error);
        throw error;
    }
};

export const manageCategory = async (categoryData) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/categories`, categoryData);
        return response.data;
    } catch (error) {
        console.error('Error managing category:', error);
        throw error;
    }
};