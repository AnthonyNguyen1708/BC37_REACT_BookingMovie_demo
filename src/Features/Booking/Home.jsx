import Header from "components/Header";
import React, { useEffect } from "react";
import HomeCarousel from "./components/HomeCarousel";
import { useDispatch } from "react-redux";
import { fetchBannerAction } from "./redux/action";
import MovieList from "./components/MovieList";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    //Khi load trang home, call api
    // 1. Lấy ds banner
    dispatch(fetchBannerAction);
  }, []); // để dependency rỗng vì chỉ cần call api 1 lần duy nhất

  return (
    <div>
      <Header />
      <HomeCarousel />
      <MovieList />
    </div>
  );
};

export default Home;
