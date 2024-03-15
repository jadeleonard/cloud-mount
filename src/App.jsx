import React from 'react';










import { useState,useEffect } from 'react';
import { Routes, Route, useParams } from 'react-router-dom';
import LandingPage from './publicPages/LandingPage';
import PrivateRoutes from './auth/privateRoutes';
import Dashboard from './privatePages/Dashboard';
import Createitems from './privatePages/Createitems';
import Details from './privatePages/Details';
import { ThemeProvider } from "@/components/theme-provider"
// Details component using useParams hook to get itemId
const DetailsComponent = () => {
  const { itemId } = useParams(); // Get itemId from URL params
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchItemDetails = async () => {
      try {
        // Make an HTTP GET request to fetch item details
        const response = await fetch(`https://your-api.com/items/${itemId}`);
        if (response.ok) {
          const itemData = await response.json();
          setItem(itemData);
        } else {
          setError('Error fetching item details');
        }
      } catch (error) {
        console.error('Error fetching item details:', error);
        setError('Error fetching item details');
      } finally {
        setLoading(false);
      }
    };

    fetchItemDetails();
  }, [itemId]); // Re-fetch item details whenever itemId changes

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
      <p>Description: {item.description}</p>
      <p>Price: ${item.price}</p>
      {/* Display other item details */}
    </div>
  );
};

const App = () => {
  return (
    <Routes>
      
      <Route path='/' element={<LandingPage />} />
      <Route element={<PrivateRoutes />}>
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/createitem' element={<Createitems />} />
        {/* Define route for DetailsComponent */}
        <Route path='/details/:itemId' element={<DetailsComponent />} />
        <Route path='/createitem' element={<Createitems />} />
      </Route>
      
    </Routes>
  );
};

export default App;
