import Image from "next/image";
import Link from "next/link";

export default function Movie({ title, id, release_data, poster_path }: { title: string; id: string; release_data: number; poster_path: string }) {
  const imagePath = "https://image.tmdb.org/t/p/original";
  return (
    <div key={id}>
      <h1>{title}</h1>
      <h2>{release_data}</h2>
      <Link href={imagePath + poster_path}>
        <Image src={imagePath + poster_path} alt={title} width={800} height={800} />
      </Link>
    </div>
  );
}
