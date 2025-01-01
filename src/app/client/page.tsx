"use client";
import { useEffect, useState } from "react";

export default function Products() {
  const [products, setProducts] = useState([]); // State to store products
  const [loading, setLoading] = useState(true); // State to track loading

  useEffect(() => {
    // Fetch data from the API
    fetch("https://fakestoreapi.com/products")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        return response.json();
      })
      .then((data) => {
        setProducts(data); // Set fetched products
        setLoading(false); // Stop loading
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setLoading(false); // Stop loading on error
      });
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-xl font-semibold text-gray-700">Loading products...</p>
      </div>
    );
  }

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-center mb-8">Product List</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="border border-gray-300 rounded-lg p-4 flex flex-col items-center text-center shadow-md hover:shadow-lg transition-shadow"
          >
            {/* Product Image */}
            <img
              src={product.image}
              alt={product.title}
              className="w-48 h-48 object-contain mb-4"
            />

            {/* Product Title */}
            <h3 className="text-lg font-semibold mb-2">{product.title}</h3>

            {/* Product Price */}
            <p className="text-gray-500 text-sm mb-2">${product.price}</p>

            {/* Reviews */}
            <div className="flex items-center mb-4">
              <div className="flex text-yellow-500">
                {Array.from({ length: Math.round(product.rating.rate || 0) }, (_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 .587l3.668 7.429 8.164 1.191-5.91 5.758 1.396 8.125L12 18.902l-7.318 3.849 1.396-8.125-5.91-5.758 8.164-1.191z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-500 text-sm ml-2">
                ({product.rating?.count || 0} reviews)
              </p>
            </div>

            {/* Buy Now Button */}
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Buy Now
            </button>
          </div>
        ))}
      </div>
      <a href="/" className="bg-green-400 px-6 py-3 rounded-lg text-white font-semibold flex justify-center mt-3">GO BACK TO HOME</a>

    </div>
  );
}
