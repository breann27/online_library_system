import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";

const BookDetails = () => {
  const { id } = useParams();
  const { books } = useSelector((state) => state.books);

  const book = books.find((b) => b.id === id);

  if (!book) {
    return (
      <div className="p-6 text-center">
        <h2 className="text-2xl font-semibold mb-4">Book Not Found 😢</h2>
        <Link to="/browse" className="text-blue-600 underline">
          Go back to Browse Books
        </Link>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-3xl mx-auto bg-white rounded shadow">
      <h1 className="text-3xl font-bold mb-2">{book.title}</h1>
      <h2 className="text-xl text-gray-700 mb-2">by {book.author}</h2>
      <p className="mb-4 text-gray-600">Category: {book.category}</p>
      <p className="mb-4">{book.description}</p>
      <p className="font-semibold">Rating: ⭐ {book.rating}</p>
      <Link
        to="/browse"
        className="mt-6 inline-block text-blue-600 underline"
      >
        ← Back to Browse
      </Link>
    </div>
  );
};

export default BookDetails;
