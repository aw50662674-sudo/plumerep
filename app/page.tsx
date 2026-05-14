import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Filters from "../components/Filters";
import ProductCard from "../components/ProductCard";

export default function HomePage() {

  return (

    <main className="bg-black min-h-screen text-white">

      <Navbar />

      <Hero />

      <Filters />

      <section className="max-w-7xl mx-auto px-4 pb-20">

        <div className="grid grid-cols-5 gap-6">

          <ProductCard
            title="Nike Dunk Low"
            image="https://images.unsplash.com/photo-1542291026-7eec264c27ff"
          />

          <ProductCard
            title="Essentials Hoodie"
            image="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab"
          />

          <ProductCard
            title="Jordan 4"
            image="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519"
          />

          <ProductCard
            title="Stussy Hoodie"
            image="https://images.unsplash.com/photo-1503342217505-b0a15ec3261c"
          />

          <ProductCard
            title="Chrome Hearts Tee"
            image="https://images.unsplash.com/photo-1512436991641-6745cdb1723f"
          />

        </div>

      </section>

    </main>

  );
}