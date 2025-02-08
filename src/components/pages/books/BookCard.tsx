const BookCard = () => {
  return (
    <div className="rounded-2xl border bg-white shadow-sm duration-300">
      <div className="relative">
        <img
          className="h-64 w-full object-cover"
          src="https://via.placeholder.com/400x600"
          alt="Book Cover"
        />
      </div>

      <div className="p-6">
        <h2 className="mb-2 text-2xl font-bold text-gray-800">
          The Great Novel
        </h2>
        <p className="mb-4 text-sm text-gray-600">By John Doe</p>
        <p className="mb-4 text-gray-700">
          A captivating story of love, loss, and redemption. Dive into the world
          of unforgettable characters and breathtaking landscapes.
        </p>
      </div>
    </div>
  );
};

export default BookCard;
