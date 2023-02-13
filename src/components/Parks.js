import React from "react";

const Parks = ({ parks }) => {
  return (
    <div class="bg-light text-dark font-open-sans px-24">
      <ul class="grid grid-flow-row grid-cols-1 gap-12 justify-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {parks.map((park) => (
          <li
            class="flex flex-col rounded-lg  hover:shadow-xl shadow-lg hover:cursor-pointer"
            key={park.id}
          >
            <img
              class="object-cover h-48 rounded-t rounded-lg"
              src={park.images[0].url}
              alt={park.images[0].title}
            />
            <p class="p-4 pl-4">{park.fullName}</p>
          </li>
        ))}
      </ul>
      <footer>
        <div class="flex justify-between items-center bg-slate-100 p-4">
            <div class="flex items-center">
                <a href="https://www.flaticon.com/free-icons/national-park" title="National Park icons">National Park icons created by mangsaabguru - Flaticon</a>
            </div>
            </div>
      </footer>
    </div>
  );
};

export default Parks;
