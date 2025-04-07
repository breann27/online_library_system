import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Home = () => {
  const { books } = useSelector((state) => state.books);

  const categories = ["Fiction", "Non-Fiction", "Sci-Fi", "Biography", "History"];
  const popularBooks = books.slice(0, 3); // Just pick first 3 for now

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4 text-center">Welcome to the Online Library 📖</h1>

      <section className="my-6">
        <h2 className="text-2xl font-semibold mb-2">Book Categories</h2>
        <ul className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((category, index) => (
            <li key={index}>
              <Link
                to={`/books/${category}`}
                className="block bg-gray-100 p-4 rounded shadow hover:bg-blue-100 transition"
              >
                {category}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="my-6">
        <h2 className="text-2xl font-semibold mb-2">Popular Books</h2>
        <ul className="grid md:grid-cols-3 gap-4">
          {popularBooks.map((book) => (
            <li key={book.id} className="border p-4 rounded shadow bg-white">
              <h3 className="font-bold text-lg">{book.title}</h3>
              <p className="text-sm text-gray-600">by {book.author}</p>
              <Link
                to={`/book/${book.id}`}
                className="text-blue-600 mt-2 inline-block"
              >
                View Details →
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Home;
