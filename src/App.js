import React from "react";
import Header from "./components/Header/Header";
import Content from "./components/Content/Content";
import Footer from "./components/Footer/Footer";
import "./index.modal.css";
const App = () => {
    return (
        <div className="background-animation">
            <Header />
            <Content />
            <Footer />
        </div>
    );
};

export default App;
