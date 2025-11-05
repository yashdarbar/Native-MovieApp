import { View, Image, ScrollView, ActivityIndicator, Text, FlatList } from "react-native";
import { useRouter } from "expo-router";
import "../globals.css";

import { fetchMovies } from "@/services/api";
import useFetch from "@/services/useFetch";
import { images } from "@/constants/images";
import { icons } from "@/constants/icons";
// import { Link } from 'expo-router';
import SearchBar from "../../components/SearchBar";
import MovieCard from "../../components/MovieCard"

export default function Index() {
    const router = useRouter();
    const {
        data: movies,
        loading: moviesLoading,
        error: moviesError,
    } = useFetch(() =>
        fetchMovies({
            query: "",
        })
    );

    return (
        <View className="flex-1 bg-primary">
            <Image source={images.bg} className="absolute w-full z-0" />
            <ScrollView
                className="flex-1 px-5"
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    minHeight: "100%",
                    paddingBottom: 10,
                }}
            >
                <Image
                    source={icons.logo}
                    className="w-12 h-10 mt-20 mb-5 mx-auto"
                />
                {moviesLoading ? (
                    <ActivityIndicator
                        size="large"
                        color="#000ff"
                        className="mt-10 self-center"
                    />
                ) : moviesError ? (
                    <Text className="text-white">
                        Error: {moviesError?.message}
                    </Text>
                ) : (
                    <View className="flex-1 mt-5">
                        <SearchBar
                            onPress={() => {
                                router.push("/search");
                            }}
                            placeholder={"Search"}
                        />
                        <>
                            <Text className="text-lg text-white font-bold mt-5 mb-3">
                                Latest Movies
                            </Text>
                            <FlatList
                                scrollEnabled={false}
                                data={movies}
                                numColumns={3}
                                renderItem={({ item }) => (
                                    <MovieCard {...item}/>
                                    // <View>
                                    //     <Text
                                    //         className="text-white text-sm"
                                    //         numberOfLines={1}
                                    //         ellipsizeMode="tail"
                                    //     >
                                    //         {item.title}
                                    //     </Text>
                                    // </View>
                                )}
                                keyExtractor={(item) => item.id.toString()}
                                columnWrapperStyle={{
                                    justifyContent: "flex-start", // fixed typo here
                                    paddingRight: 5, // numbers, not strings
                                    gap: 20,
                                    marginBottom: 10,
                                }}
                                className="mt-2 pb-32"
                            />
                        </>
                    </View>
                )}
            </ScrollView>
        </View>
    );
}
