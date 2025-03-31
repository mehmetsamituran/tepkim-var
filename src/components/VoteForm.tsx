import React, { useState } from 'react';

const VoteForm: React.FC = () => {
    const [email, setEmail] = useState('');
    const [category, setCategory] = useState('');
    const [comment, setComment] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Here you would typically handle the form submission,
        // such as sending the data to an API.
        console.log({ email, category, comment });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </div>
            <div>
                <label htmlFor="category">Category:</label>
                <select
                    id="category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    required
                >
                    <option value="">Select a category</option>
                    {/* Categories should be populated dynamically */}
                    <option value="sustainability">Sustainability</option>
                    <option value="ethical">Ethical Practices</option>
                    <option value="labor">Labor Practices</option>
                </select>
            </div>
            <div>
                <label htmlFor="comment">Comment:</label>
                <textarea
                    id="comment"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                />
            </div>
            <button type="submit">Submit Vote</button>
        </form>
    );
};

export default VoteForm;