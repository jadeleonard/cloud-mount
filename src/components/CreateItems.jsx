import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import axios from 'axios';

const CreateItems = () => {
    const apiUrl = 'vercel-cloud-backend-git-main-lukabartos-projects.vercel.app/api/createitems';
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');
    const [price, setPrice] = useState('');
    const [seller, setSeller] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent default form submission

        try {
            const response = await axios.post(apiUrl, {
                name,
                description,
                image,
                price,
                seller
            });

            if (response.ok) {
                // Handle success
                console.log(response.data); // Assuming the response contains JSON data
            }
        } catch (error) {
            // Handle error
            console.error('Error:', error);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <Input value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
                <Input value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" />
                <Input value={image} onChange={(e) => setImage(e.target.value)} placeholder="Image URL" />
                <Input value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Price" />
                <Input value={seller} onChange={(e) => setSeller(e.target.value)} placeholder="Seller" />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default CreateItems;
