import React from "react";

const MinimalFooter: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-6 bg-white shadow-yoga-lavender shadow-sm">
      <div className="container mx-auto px-4 flex flex-col items-center gap-2">
        <img src="/logo.svg" alt="Yoga Haven Logo" className="h-8" />
        <p className="text-sm text-gray-600">
          © {currentYear} Yonitara. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default MinimalFooter;
