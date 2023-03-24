import { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import * as reviewService from "./services/reviewService.js";

import { Header } from "./components/Header/Header.js";
import { Footer } from "./components/Footer/Footer.js";
import { Create } from "./components/Create/Create.js";
import { Register } from "./components/Register/Register.js";
import { Login } from "./components/Login/Login.js";
import { Home } from "./components/Home/Home.js";
import { Reviews } from "./components/Reviews/Reviews.js";

function App() {
  const navigate = useNavigate();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    reviewService.getAll().then((result) => {
      console.log(result);
      setReviews(result);
    });
  }, []);
  const onCreateReviewSubmit = async (data) => {
    const newReview = await reviewService.create(data);
    console.log(data);
    setReviews((state) => [...state, newReview]);

    navigate("/reviews");
  };

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/reviews" element={<Reviews reviews={reviews} />}></Route>
        <Route
          path="/create"
          element={<Create onCreateReviewSubmit={onCreateReviewSubmit} />}
        ></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
