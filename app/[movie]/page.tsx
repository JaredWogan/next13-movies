import Image from "next/image";

// export const revalidate = 0;

export async function generateStaticParams() {
    const data = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}&language=en-US&page=1`,
        { next: { revalidate: 0 } }
    );
    const response = await data.json();

    return response.results.map((movie: any) => ({
        params: { movie: movie.id.toString() },
    }));
}

export default async function MovieDetail({ params: { movie } }: any) {
    const image_path = "https://image.tmdb.org/t/p/original";
    const data = await fetch(
        `https://api.themoviedb.org/3/movie/${movie}?api_key=${process.env.API_KEY}`
        // { next: { revalidate: 0 } }
    );
    const response = await data.json();
    return (
        <div>
            <div>
                <h2 className="text-2xl">{response.title}</h2>
                <h2 className="text-lg">{response.release_date}</h2>
                <h2 className="text-lg">Runtime: {response.runtime} minutes</h2>
                <h2 className="text-lg">
                    Rating: {response.vote_average} / 10
                </h2>
                <h2
                    className={`text-lg ${
                        response.status == "Released"
                            ? "text-green-500"
                            : "text-red-500"
                    }`}
                >
                    {response.status ? "Released" : "Unreleased"}
                </h2>
                <h2 className="text-sm">{response.overview}</h2>
                <Image
                    className="my-12 w-full"
                    src={image_path + response.backdrop_path}
                    width={1000}
                    height={1000}
                    priority={true}
                    alt={response.title}
                />
            </div>
        </div>
    );
}
