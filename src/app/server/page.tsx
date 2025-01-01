import React from "react";

interface IBook {
  id: number;
  name: string; // Corrected based on API
  type: string;
  available: boolean;
}

const Page = async () => {
  const response = await fetch("https://simple-books-api.glitch.me/books/");
  const parsedResponse: IBook[] = await response.json();

  console.log("Books >>>", parsedResponse);

  return (
    <div>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6 bg-gray-50 min-h-screen">
      {parsedResponse.map((book) => (
        <div
          key={book.id}
          className="border border-gray-200 rounded-lg shadow-md bg-white p-4 hover:shadow-lg transition-shadow flex flex-row items-center justify-center"
        >
          {/* Book Content */}
          <div className="space-y-3 capitalize">

            {/* Book Name */}
            <p className="text-gray-500 text-sm">
              <span className="font-semibold text-gray-700 text-2xl">Name:</span> {book.name}
            </p>

            {/* Book Type */}
            <p className="text-gray-500 text-sm">
              <span className="font-semibold text-gray-700 text-2xl">Type:</span> {book.type}
            </p>

            {/* Availability */}
            <p className="text-gray-500 text-sm">
              <span className="font-semibold text-gray-700 text-2xl">Available:</span>{" "}
              {book.available ? "Yes" : "No"}
            </p>

            {/* Button */}
            <button className="bg-blue-600 text-white w-full py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors">
              View Details
            </button>
          </div>
        </div>
      ))}

    </div>
    <a href="/" className="bg-green-400 px-6 py-3 rounded-lg text-white font-semibold flex justify-center mt-3">GO BACK TO HOME</a>
    </div>
  );
};

export default Page;
