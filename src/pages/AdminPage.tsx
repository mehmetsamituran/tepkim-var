import React, { useEffect, useState } from 'react';
import { fetchBrands, fetchVotes } from '../services/api';
import BrandList from '../components/BrandList';
import VoteList from '../components/VoteList';

const AdminPage: React.FC = () => {
    const [brands, setBrands] = useState([]);
    const [votes, setVotes] = useState([]);

    useEffect(() => {
        const loadBrands = async () => {
            const brandData = await fetchBrands();
            setBrands(brandData);
        };

        const loadVotes = async () => {
            const voteData = await fetchVotes();
            setVotes(voteData);
        };

        loadBrands();
        loadVotes();
    }, []);

    return (
        <div className="admin-page">
            <h1>Admin Panel</h1>
            <h2>Manage Brands</h2>
            <BrandList brands={brands} />
            <h2>View Votes</h2>
            <VoteList votes={votes} />
        </div>
    );
};

export default AdminPage;