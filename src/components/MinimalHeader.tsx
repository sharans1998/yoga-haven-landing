import { Link } from "react-router-dom";

const MinimalHeader = () => {
  return (
    <header className="w-full py-4 shadow-yoga-lavender shadow-sm">
      <div className="container mx-auto flex justify-center items-center">
        <Link to="/">
          <img src="/logo.svg" alt="Yoga Haven Logo" className="h-12" />
        </Link>
      </div>
    </header>
  );
};

export default MinimalHeader;
