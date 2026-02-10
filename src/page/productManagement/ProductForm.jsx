import { useState } from "react";
import toast from "react-hot-toast";

const ProductForm = ({ handleAddProduct }) => {
  const [error, setError] = useState("");

  const handleProductSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    const name = form.name.value.trim();
    const price = Number(form.price.value);
    const quantity = Number(form.quantity.value);

    if (!name) return setError("Name cannot be empty");
    if (isNaN(price) || price < 0) return setError("Invalid price");
    if (isNaN(quantity) || quantity < 0) return setError("Invalid quantity");

    setError("");

    const product = { name, price, quantity };

    try {
      const res = await fetch("http://localhost:3000/product", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(product),
      });

      if (!res.ok) throw new Error("Failed");

      const data = await res.json();
      handleAddProduct({ ...product, _id: data.insertedId });

      toast.success("Product added");
      form.reset();
    } catch {
      toast.error("Failed to add product");
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <h2 className="text-xl font-semibold mb-4">Add Product</h2>

      <form onSubmit={handleProductSubmit} className="space-y-4">
        <input
          name="name"
          placeholder="Product Name"
          className="w-full px-4 py-2 border rounded-lg text-gray-800 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 outline-none"
        />

        <input
          name="price"
          placeholder="Price"
          className="w-full px-4 py-2 border rounded-lg text-gray-800 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 outline-none"
        />

        <input
          name="quantity"
          placeholder="Quantity"
          className="w-full px-4 py-2 border rounded-lg text-gray-800 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 outline-none"
        />

        <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
          Add Product
        </button>
      </form>

      {error && <p className="text-red-500 mt-3 text-sm">{error}</p>}
    </div>
  );
};

export default ProductForm;
