import Head from "next/head";
import { Footer } from "../src/components/Footer";
import Header from "../src/components/Header";
import { Hero } from "../src/components/Hero";
import { FeaturedCourse } from "../src/components/sections/FeaturedCourse";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <FeaturedCourse/>
      <Footer/>
    </>
  );
}
