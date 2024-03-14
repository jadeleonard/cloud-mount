import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Details = () => {
    const { uuid } = useParams(); // Extract the ID from the URL params
    const [item, setItem] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://vercel-cloud-backend-git-main-lukabartos-projects.vercel.app/api/getitems/${uuid}}`);
                if (response.ok) {
                    const jsonData = await response.json();
                    setItem(jsonData);
                } else {
                    setError('Error fetching item details');
                }
            } catch (error) {
                setError('Error fetching item details');
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [uuid]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!item) {
        return <div>No item found</div>;
    }

    return (
        <div>
            <h2>{item.name}</h2>
            {id}
            <p>Price: ${item.price}</p>
            <img src={item.image} alt={item.name} />
            {/* Add more details here as needed */}
        </div>
    );
};

export default Details;
