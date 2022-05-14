import React from "react";

export default function Title(props) {
  return (
    <>
      <h1 className="text-3xl font-bold">{props.title}</h1>
      <p className="font-semibold text-slate-600 mt-5">{props.text}</p>
    </>
  );
}
