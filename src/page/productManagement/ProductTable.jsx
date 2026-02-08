const ProductTable = ({ products }) => {
    return (
        <div className="p-6">
            <h3 className="text-xl font-bold mb-4">Products: {products.length}</h3>
            <table className="w-full border-collapse border border-gray-300">
                <thead className="bg-gray-100">
                    <tr>
                        <th className="border border-gray-300 p-2 text-left text-gray-700">No.</th>
                        <th className="border border-gray-300 p-2 text-left text-gray-700">Product</th>
                        <th className="border border-gray-300 p-2 text-left text-gray-700">Price</th>
                        <th className="border border-gray-300 p-2 text-left text-gray-700">Quantity</th>
                        <th className="border border-gray-300 p-2 text-left text-gray-700 ">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product, index) => (
                        <tr key={index} className="hover:bg-gray-50 hover:text-gray-900">
                            <td className="border border-gray-300 p-2 text-gray-700">{index + 1}</td>
                            <td className="border border-gray-300 p-2 text-gray-700">{product.name}</td>
                            <td className="border border-gray-300 p-2 text-gray-700">{product.price}</td>
                            <td className="border border-gray-300 p-2 text-gray-700">{product.quantity}</td>
                            <td className="border border-gray-300 p-2">
                                <button className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded mr-2">Edit</button>
                                <button className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded">Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ProductTable;
