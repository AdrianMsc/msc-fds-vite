const SkeletonMenu = () => {
  return (
    <>
      <strong className="mt-2 py-2 bg-gray-200 rounded-full w-1/2 animate-pulse mb-1 ml-4"></strong>
      <ul className="flex flex-col animate-pulse pl-6 mb-4">
        {[1, 2, 3, 4, 5].map((_, idx) => (
          <li
            key={idx}
            className="my-1 bg-gray-200 rounded-full w-10/12 py-2"
          ></li>
        ))}
      </ul>
    </>
  );
};

export default SkeletonMenu;
