import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SkipCard from '../components/SkipCard';
import { motion } from 'framer-motion';

const SkipSelectPage = () => {
    const [skips, setSkips] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedSkip, setSelectedSkip] = useState(null);

    useEffect(() => {
        axios.get('https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft')
            .then(response => {
                setSkips(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                setLoading(false);
            });
    }, []);

    if (loading) return <p className="text-center text-lg font-semibold">Loading skips...</p>;

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="container mx-auto p-4"
        >
            <h1 className="text-3xl font-bold mb-6 text-center">Select Your Skip</h1>

            <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, staggerChildren: 0.2 }}
            >
                {skips.map(skip => (
                    <SkipCard key={skip.id} skip={skip} selected={selectedSkip === skip.id} onSelect={() => setSelectedSkip(skip.id)} />
                ))}
            </motion.div>

            {selectedSkip && (
                <motion.div
                    className="mt-6 text-center"
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.3 }}
                >
                    <p className="text-lg font-semibold text-green-600">Selected Skip ID: {selectedSkip}</p>
                </motion.div>
            )}
        </motion.div>
    );
};

export default SkipSelectPage;
