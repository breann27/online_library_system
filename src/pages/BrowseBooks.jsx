import { useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { useState } from "react";

const BrowseBooks = () => {
  const { books } = useSelector((state) => state.books);
  const { category } = useParams(); // e.g., /books/Fiction
  const [searchTerm, setSearchTerm] = useState("");

  const filteredBooks = books.filter((book) => {
    const matchesCategory = category ? book.category === category : true;
    const matchesSearch =
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4 text-center">Browse Books 📚</h1>

      <div className="max-w-md mx-auto mb-6">
        <input
          type="text"
          placeholder="Search by title or author..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full border rounded p-2"
        />
      </div>

      {filteredBooks.length === 0 ? (
        <p className="text-center text-gray-500">No books found.</p>
      ) : (
        <ul className="grid md:grid-cols-3 gap-4">
          {filteredBooks.map((book) => (
            <li key={book.id} className="border p-4 rounded shadow bg-white">
              <h3 className="font-bold text-lg">{book.title}</h3>
              <p className="text-sm text-gray-600">by {book.author}</p>
              <p className="text-sm text-gray-500">Category: {book.category}</p>
              <Link
                to={`/book/${book.id}`}
                className="text-blue-600 mt-2 inline-block"
              >
                View Details →
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default BrowseBooks;
