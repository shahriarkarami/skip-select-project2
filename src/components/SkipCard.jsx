import React from 'react';
import { motion } from 'framer-motion';

const SkipCard = ({ skip, selected, onSelect }) => {
    return (
        <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`bg-white shadow-lg rounded-lg p-4 flex flex-col items-center border-2 ${selected ? 'border-green-500' : 'border-transparent'}` }>
            <h2 className="text-xl font-semibold text-gray-800">{skip.name}</h2>
            <p className="text-gray-600 text-sm">{skip.description}</p>
            <span className="mt-2 text-lg font-bold text-blue-600">£{skip.price}</span>
            <motion.button
                onClick={onSelect}
                className={`mt-4 px-4 py-2 font-bold rounded-lg transition ${selected ? 'bg-green-500 text-white' : 'bg-blue-500 hover:bg-blue-600 text-white'}`}
                whileHover={{ scale: 1.1 }}
            >
                {selected ? 'Selected' : 'Select'}
            </motion.button>
        </motion.div>
    );
};

export default SkipCard;