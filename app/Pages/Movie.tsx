import Image from "next/image";
import Link from "next/link";

export default function Movie({ title, id, release_data, poster_path }: { title: string; id: string; release_data: number; poster_path: string }) {
  const imagePath = "https://image.tmdb.org/t/p/original";
  return (
    <div key={id} className="">
      <h1 className="text-2xl">{title}</h1>
      <h2>{release_data}</h2>
      <Link href={`/${id}`}>
        <Image src={imagePath + poster_path} alt={title} width={800} height={800} />
      </Link>
    </div>
  );
}
