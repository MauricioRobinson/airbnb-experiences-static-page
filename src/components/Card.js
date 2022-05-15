import React from "react";

export default function Card({ item }) {
  let badgeText;
  if (item.isAvailable === false) {
    badgeText = "SOLD OUT";
  } else if (item.location === "Online") {
    badgeText = "ONLINE";
  }

  return (
    <div className="relative w-52 max-h-96 rounded-xl overflow-hidden my-8 shrink-0 grow-0 mr-4 md:w-full md:flex md:flex-col md:items-center md:justify-center">
      {badgeText && (
        <div className="absolute top-2 left-2 md:top-2 md:left-20 bg-white p-2 rounded-md font-bold">
          <p>{badgeText}</p>
        </div>
      )}
      <img
        src={`./images/${item.imgUrl}`}
        alt={item.alt}
        className="w-52 max-h-60 object-cover rounded-xl"
      />
      <div className="mt-2 p-1">
        <div className="text-slate-600 flex flex-row items-center space-x-1">
          <img
            src="./images/star_77949.svg"
            alt="Star icon"
            className="w-6 h-6"
          />
          <span className="font-bold">{item.average}</span>
          <span>({item.reviews})</span>
          <span>▪</span>
          <span>{item.country}</span>
        </div>
        <p className="text-sm text-slate-600 mt-2 font-semibold">
          {item.decription}
        </p>
        <p className="font-bold mt-2">
          From ${item.price}
          <span className="text-slate-600 font-medium"> / person</span>
        </p>
      </div>
    </div>
  );
}
