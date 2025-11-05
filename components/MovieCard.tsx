import { View, Text } from 'react-native'
// import { Movie } from ""

export default function MovieCard({id, title, poster_path, vote_average, release_date}: Movie) {
    return (
        <View>
            <Text className="text-white text-md">
                MovieCard
            </Text>
        </View>
    )
}