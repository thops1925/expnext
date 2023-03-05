import Movie from "./Movie";

export default async function Home() {
  const data = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`);
  const res = await data.json();
  return (
    <main>
      <h1 className="">Hello Next</h1>
      <div className="grid gap-16 grid-cols-fluid mx-8">
        {res.results.map((movie: any) => (
          <Movie key={movie.id} id={movie.id} poster_path={movie.poster_path} title={movie.title} release_data={movie.release_data} />
        ))}
      </div>
    </main>
  );
}
