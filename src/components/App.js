import React from "react";
import Card from "./Card";
import HeaderHero from "./HeaderHero";
import Navbar from "./Navbar";
import Title from "./Title";
import { data } from "./../data";

function App() {
  return (
    <div>
      <Navbar />
      <HeaderHero />
      <main className="p-5">
        <Title
          title="Online experiences"
          text="Join unique interactive activities led by one-of-the-kind hosts-all without leaving home."
        />
        <section className="flex flex-row overflow-x-scroll md:grid md:grid-cols-4 md:gap-4 lg:overflow-x-hidden">
          {data.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </section>
      </main>
    </div>
  );
}

export default App;
