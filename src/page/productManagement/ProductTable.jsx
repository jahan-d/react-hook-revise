
import { useEffect, useState } from "react";

const ProductTable = ({ products: localProducts }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    /**
     * fetching this way leads the component waiting while data is fetching ..
    👉 Components must return JSX immediately, not wait for data. 
    *React only asks:
    “Is this side effect happening during render?”
    If yes → ❌
    If after render → ✅
     */
    // const products = fetch('http://localhost:3000/products')
    // .then(res => res.json()).then(data => data.products)
    // .catch(err => console.error(err));

    
    // to handle this side effect we need to use useEffect

    const handleDelete = async (id) => {
        try {
            await fetch(`http://localhost:3000/products/${id}`, {
                method: "DELETE",
            });
            setProducts((prev) => prev.filter((p) => p._id !== id));
        } catch (err) {
            console.error(err);
        }
    }

    // const handleEdit = (id) => {
    //     // navigate to edit page with id
    //     try {

    //     }

    // }


    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const res = await fetch("http://localhost:3000/products");
                const data = await res.json();
                setProducts(data);
            } catch (err) {
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    useEffect(() => {
        if (localProducts.length) {
            setProducts((prev) => [...prev, ...localProducts]);
        }
    }, [localProducts]);

    if (loading) {
        return (
            <div className="bg-white rounded-xl shadow-md p-6">
                Loading products...
            </div>
        );
    }

    return (
        <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">
                Products ({products.length})
            </h2>

            <table className="w-full border text-sm text-gray-800">
                <thead className="bg-gray-100">
                    <tr>
                        <th className="border p-2">#</th>
                        <th className="border p-2">Name</th>
                        <th className="border p-2">Price</th>
                        <th className="border p-2">Qty</th>
                        <th className="border p-2">Actions</th>
                    </tr>
                </thead>

                <tbody>
                    {products.length === 0 ? (
                        <tr>
                            <td colSpan="5" className="p-4 text-center">
                                No products found
                            </td>
                        </tr>
                    ) : (
                        products.map((p, i) => (
                            <tr key={p._id || i} className="hover:bg-gray-50">
                                <td className="border p-2">{i + 1}</td>
                                <td className="border p-2">{p.name}</td>
                                <td className="border p-2">${p.price}</td>
                                <td className="border p-2">{p.quantity}</td>
                                <td className="border p-2 space-x-2">
                                    <button onClick={() => handleEdit(p._id)} className="px-3 py-1 bg-blue-500 text-white rounded">
                                        Edit
                                    </button>
                                    <button onClick={() => handleDelete(p._id)} className="px-3 py-1 bg-red-500 text-white rounded">
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default ProductTable;
