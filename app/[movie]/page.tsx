import Image from "next/image";

export default async function MovieDetails({ params }: any) {
  const { movie } = params;
  const imagePath = "https://image.tmdb.org/t/p/original";
  const baseURL = "https://api.themoviedb.org/3/";
  const data = await fetch(`${baseURL}movie/${movie}?api_key=${process.env.API_KEY}`);
  const res = await data.json();
  return (
    <div className="flex">
      <div className="">
        <h1 className="flex justify-center text-4xl">{res.title}</h1>
        <Image src={imagePath + res.poster_path} width={1000} height={1000} alt={res} className="" />
        <h2>{res.overview}</h2>
      </div>
    </div>
  );
}
