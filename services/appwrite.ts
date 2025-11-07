import { Client, TablesDB, ID, Databases, Query } from "react-native-appwrite"

const DATABASE_ID = process.env.EXPO_PUBLIC_APPWRITE_DATABASE_ID!;
// const COLLECTION_ID = process.env.EXPO_PUBLIC_APPWRITE_COLLECTION_ID!;
const COLLECTION_ID = "metrics"
const TABLE_ID = "metrics"

const client = new Client()
    .setEndpoint("https://cloud.appwrite.io/v1")
    .setProject(process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID!);

const tablesDB = new Databases(client);

export const updateSearchCount = async (query: string, movie: Movie) => {
    try {
        const results = await tablesDB.listDocuments(
        DATABASE_ID,
        COLLECTION_ID,
        [Query.equal("searchTerm", [query])],
    );
        // console.log(query)
        console.log("resultss", results)

    if (results.documents.length > 0) {
        const existingMovie = results.documents[0];
        await tablesDB.updateDocument(
            DATABASE_ID,
            COLLECTION_ID,
            existingMovie.$id,
            {
                count: existingMovie.count + 1,
            }
        );
    } else {
        await tablesDB.createDocument(DATABASE_ID, COLLECTION_ID, ID.unique(), {
            searchTerm: query,
            movie_id: movie.id,
            title: movie.title,
            count: 1,
            poster_url: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
        });
    }
    } catch (error) {
        console.error("Error updating search count:", error);
        throw error;
    }
}

export const getTrendingMovies = async (): Promise<TrendingMovie[] | undefined> => {
    try {
        const result = await tablesDB.listDocuments(
        DATABASE_ID,
        COLLECTION_ID,
        [
            Query.limit(5),
            Query.orderDesc("count"),
        ]
    );

    return result.documents as unknown as TrendingMovie[];
    } catch (error) {
        console.error("Error while getting trending movies:", error)
        return undefined;
    }
}