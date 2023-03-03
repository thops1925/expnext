export default async function Home() {
  const data = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`);
  const res = await data.json();
  console.log(res);
  return (
    <main>
      <h1 className="">Hello Next</h1>
      <div>
        {res.results.map((movie: any) => (
          <div>
            <h1>{movie.title}</h1>
          </div>
        ))}
      </div>
    </main>
  );
}
