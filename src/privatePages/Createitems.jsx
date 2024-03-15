import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import {Button} from "@/components/ui/button";
import axios from "axios"
const CreateItems = () => {
    const apiUrl = process.env.REACT_APP_API;
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');
    const [price, setPrice] = useState('');
    const [seller, setSeller] = useState('');

    const handleSubmit = async () => {
         // Prevent default form submission

        try {
            const response = await axios.get(apiUrl, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name,
                    description,
                    image,
                    price,
                    seller
                })
            });

            if (response.status === 201) {
                // Handle success and redirect
                console.log('Item created successfully');
                // Redirect to another page or route
                // For example, if you're using React Router:
                // history.push('/success');
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
                <Button type="submit">Submit</Button>
            </form>
        </div>
    );
};

export default CreateItems;
