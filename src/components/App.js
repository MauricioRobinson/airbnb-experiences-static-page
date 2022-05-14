import React from "react";
import HeaderHero from "./HeaderHero";
import Navbar from "./Navbar";
import Title from "./Title";

function App() {
  return (
    <div>
      <Navbar />
      <HeaderHero />
      <main className="p-8">
        <Title
          title="Online experiences"
          text="Join unique interactive activities led by one-of-the-kind hosts-all without leaving home."
        />
      </main>
    </div>
  );
}

export default App;
