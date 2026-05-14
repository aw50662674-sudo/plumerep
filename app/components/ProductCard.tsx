type Props = {
  title: string;
  image: string;
};

export default function ProductCard({
  title,
  image
}: Props) {

  return (

    <div className="bg-zinc-900 rounded-2xl overflow-hidden">

      <img
        src={image}
        className="w-full aspect-square object-cover"
      />

      <div className="p-4">

        <h3 className="font-semibold text-lg">

          {title}

        </h3>

        <div className="flex flex-wrap gap-2 mt-4">

          <button className="bg-white text-black px-3 py-2 rounded-lg text-sm">

            Eastmallbuy

          </button>

          <button className="bg-zinc-800 px-3 py-2 rounded-lg text-sm">

            Oopbuy

          </button>

          <button className="bg-zinc-800 px-3 py-2 rounded-lg text-sm">

            Kakobuy

          </button>

        </div>

      </div>

    </div>

  );
}