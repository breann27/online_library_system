import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white px-6 py-4 shadow">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">
          📚 Online Library
        </Link>
        <div className="space-x-4">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "font-semibold underline" : ""
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/browse"
            className={({ isActive }) =>
              isActive ? "font-semibold underline" : ""
            }
          >
            Browse Books
          </NavLink>
          <NavLink
            to="/add"
            className={({ isActive }) =>
              isActive ? "font-semibold underline" : ""
            }
          >
            Add Book
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
