// src/pages/CategoryBooks.jsx
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const CategoryBooks = () => {
  const { category } = useParams();
  const { books } = useSelector((state) => state.books);

  const filteredBooks = books.filter(
    (book) => book.category?.toLowerCase() === category.toLowerCase()
  );

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Books in "{category}" Category</h2>
      {filteredBooks.length ? (
        <ul className="grid md:grid-cols-3 gap-4">
          {filteredBooks.map((book) => (
            <li key={book.id} className="border p-4 rounded shadow bg-white">
              <h3 className="font-bold text-lg">{book.title}</h3>
              <p className="text-sm text-gray-600">by {book.author}</p>
              <p className="text-xs text-gray-500">ISBN: {book.isbn}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No books found in this category.</p>
      )}
    </div>
  );
};

export default CategoryBooks;
