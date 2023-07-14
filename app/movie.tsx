import Link from "next/link";
import Image from "next/image";

export default function Movie({ title, id, poster_path, release_date }: any) {
    const image_path = "https://image.tmdb.org/t/p/original";
    return (
        <div>
            <h1 className="">{title}</h1>
            <h2>{release_date}</h2>
            <Link href={`/${id}`} target="_blank">
                <Image
                    src={image_path + poster_path}
                    width={400}
                    height={200}
                    alt={title}
                />
            </Link>
        </div>
    );
}
