import React from "react";

const Parks = ({ parks }) => {
  if (!parks) return <h1>Loading...</h1>;
  return (
    <div className="bg-light text-dark font-open-sans px-24">
      <ul className="grid grid-flow-row grid-cols-1 gap-12 justify-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {parks.map((park) => (
          <li
            className="flex flex-col rounded-lg  hover:shadow-xl shadow-lg hover:cursor-pointer"
            key={park.id}
          >
            <img
              className="object-cover h-48 rounded-t"
              src={park.images[0].url}
              alt={park.images[0].title}
            />
            <p className="p-4 pl-4">{park.fullName}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Parks;
