import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../features/auth/authSlice";
import Hero from "../components/Hero";
import FeatureBanner from "../components/FeatureBanner";
import FeatureHero from "../components/FeatureHero";
import ExploreBanner from "../components/ExploreBanner";
import Blogs from "../components/Blogs";
import ConnectBanner from "../components/ConnectBanner";
const Home = () => {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div>
      <Hero />
      <FeatureBanner />
      <FeatureHero />
      <ExploreBanner />
      <Blogs />
      <ConnectBanner />
    </div>
  );
};

export default Home;
