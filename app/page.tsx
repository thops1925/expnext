import Movie from "./Pages/Movie";
import URL from "../utils/URL";
import Nav from "./Pages/Nav";

export default async function Home() {
  const data = await getData();
  console.log(data);
  return (
    <main className="">
      <h1 className="text-4xl">Movie List</h1>
      <Nav />
      <div className="grid gap-8 grid-cols-fluid my-8 md:mx-12">
        {data.results.map((movie: any) => (
          <Movie key={movie.id} id={movie.id} poster_path={movie.poster_path} title={movie.title || movie.name} release_data={movie.release_data} />
        ))}
      </div>
    </main>
  );
}

async function getData() {
  const data = await fetch(`https://api.themoviedb.org/3${URL.fetchTrending.url}`);
  return data.json();
}
