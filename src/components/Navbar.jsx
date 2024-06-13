import { logo } from "../assets";

const Navbar = ({ searchTerm, onSearch }) => {
  const handleInputChange = (e) => {
    onSearch(e.target.value);
  };

  return (
    <nav className="bg-gray-900 border-gray-200">
      <div className="flex flex-wrap items-center justify-between max-w-screen-xl p-4 mx-auto">
        <a href="/" className="flex items-center">
          <img src={logo} className="h-12" alt="Logo" />
          <span className="self-center text-2xl font-semibold text-white whitespace-nowrap">
            PokéHub
          </span>
        </a>
        <div className="flex md:order-2">
          <button
            type="button"
            data-collapse-toggle="navbar-search"
            aria-controls="navbar-search"
            aria-expanded="false"
            className="md:hidden text-gray-400  hover:bg-gray-700 focus:outline-none focus:ring-4  focus:ring-gray-700 rounded-lg text-sm p-2.5 mr-1"
          >
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
            <span className="sr-only">Search</span>
          </button>
          <div className="relative hidden md:block">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
              <span className="sr-only">Search icon</span>
            </div>
            <input
              type="text"
              id="search-navbar"
              className="block w-full p-2 pl-10 text-sm text-white placeholder-gray-400 bg-gray-700 border border-gray-600 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              placeholder="Search..."
              value={searchTerm}
              onChange={handleInputChange}
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
