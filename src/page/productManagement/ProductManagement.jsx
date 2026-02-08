import React, { useState } from 'react';
import ProductForm from './ProductForm';
import ProductTable from './ProductTable';

const ProductManagement = () => {
    const [products, setProducts] = useState([]);
    

    const handleAddProduct = (product) => {
        setProducts([...products, product]);
    }

    return (
        <div className="p-8 bg-gray-50 min-h-screen">
            <h1 className="text-3xl font-bold mb-8">Product Management</h1>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-1">
                    <ProductForm handleAddProduct={handleAddProduct} />
                </div>
                <div className="lg:col-span-2">
                    <ProductTable products={products} />
                </div>
            </div>
        </div>
    );
};

export default ProductManagement;