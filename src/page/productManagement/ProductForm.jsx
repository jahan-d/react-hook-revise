import React from 'react';
import toast from 'react-hot-toast';

const ProductForm = ({ handleAddProduct }) => {
    const [error, setError] = useState('');

    const handleProductSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const price = form.price.value;
        const quantity = form.quantity.value;
        // console.log(name, price, quantity);

        if(name.length === 0){
            setError('Name cannot be empty');
            return;
        }else if(price.length === 0){
            setError('Price cannot be empty');
            return;
        }else if(isNaN(price) || price < 0){
            setError('Price must be a valid positive number');
            return;
        }else if(quantity.length === 0){
            setError('Quantity cannot be empty');
            return;
        }else if(isNaN(quantity) || quantity < 0){
            setError('Quantity must be a valid positive number');
            return;
        }else{
            setError('');
        }

        const product = { name, price, quantity };
        handleAddProduct(product);
    toast.success(`${product.name} - $${product.price} Quantity: ${product.quantity} added successfully!`);

    }

    return (
        <div className="p-5 bg-gray-900 text-white">
            <form className="flex flex-col gap-3 max-w-sm" onSubmit={handleProductSubmit}>
                <input required type="text" name='name' placeholder='Product Name' className="p-2 bg-gray-800 text-white border border-gray-600 rounded placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                <br />
                <input required type="text" name='price' placeholder='Price' className="p-2 bg-gray-800 text-white border border-gray-600 rounded placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                <br />
                <input required type="text" name='quantity' placeholder='Product Quantity' className="p-2 bg-gray-800 text-white border border-gray-600 rounded placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                <br />
                <input type="submit" value="submit" className="p-2 bg-blue-500 text-white rounded cursor-pointer hover:bg-blue-600 transition-colors" />
            </form>
            <p className="text-red-500"><small>{error}</small></p>
        </div>
    );
};

export default ProductForm;