import React from "react";
import Header from "./components/header";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <h1>Welcome to My Website</h1>
        <p>This is the home page</p>
      </main>
      <Footer />
    </div>
  );
}

export default App;
