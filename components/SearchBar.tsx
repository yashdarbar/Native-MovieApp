import { View, TextInput, Image } from 'react-native'

import { icons } from '@/constants/icons'

interface SearchProps {
    onPress: () => void;
    placeholder: string
}

export default function SearchBar({onPress, placeholder}: SearchProps) {
    return (
        <View className="flex-row items-center bg-dark-200 rounded-full px-5 py-4">
            <Image source={icons.search} className="size-5" resizeMode="contain" tintColor="#ab8bff"/>
            <TextInput
                placeholder={placeholder}
                value=""
                onPress={onPress}
                onChangeText={()=>{}}
                className="flex-1 ml-2 text-white"
                placeholderTextColor="#A8B5D8"
            />
        </View>
    )
}