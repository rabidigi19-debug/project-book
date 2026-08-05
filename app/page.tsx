import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Categories from "@/components/Categories";
import FeaturedBooks from "@/components/FeaturedBooks";
import Features from "@/components/Features";
import Membership from "@/components/Membership";
import Testimonials from "@/components/Testimonials";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Categories />
        <FeaturedBooks />
        <Features />
        <Membership />
        <Testimonials />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
