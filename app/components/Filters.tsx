export default function Filters() {

  return (

    <section className="max-w-7xl mx-auto px-4 mb-10">

      <div className="grid grid-cols-4 gap-4">

        <input
          placeholder="Search products..."
          className="bg-zinc-900 rounded-xl p-3"
        />

        <select className="bg-zinc-900 rounded-xl p-3">

          <option>All Brands</option>

        </select>

        <select className="bg-zinc-900 rounded-xl p-3">

          <option>All Categories</option>

        </select>

        <select className="bg-zinc-900 rounded-xl p-3">

          <option>Newest</option>

        </select>

      </div>

    </section>

  );
}