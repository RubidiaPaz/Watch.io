import { View, Text, Image, TextInput, SafeAreaView, ScrollView, TouchableOpacity, FlatList} from 'react-native'
import React, {useLayoutEffect} from 'react'
import { useNavigation } from '@react-navigation/native'
import loginImages from '../assets/loginImages'
import { LinearGradient } from 'expo-linear-gradient';

const Data = [
    {
        id: '1',
        image: loginImages.spiderMan
    },
    {
        id: '2',
        image: loginImages.blackAdam
    },
    {
        id: '3',
        image: loginImages.bladeRunner
    },
    {
        id: '4',
        image: loginImages.bladeRunner
    },
    {
        id: '5',
        image: loginImages.bladeRunner
    }
]

const Card = ({item}) => {
    return(
        <TouchableOpacity className='p-3 h-64 w-1/2'>
            <View>
                <Image className='w-full h-full' source={item.image}/>
            </View>
        </TouchableOpacity>
    )
}

const SearchScreen = () => {
    const navigation = useNavigation();
  
    useLayoutEffect(() => {
        navigation.setOptions({
        headerShown: false
        })
    }, []);

  return (
    <SafeAreaView className='mt-5 w-full h-full bg-black'>
        <View className='mt-5 bg-white opacity-20 flex flex-row rounded-xl'>
            <Image className='w-8 h-8 m-1' source={loginImages.search} />
            <TextInput 
                className='text-white text-xl w-full'
                placeholder='Buscar'
                placeholderTextColor={'#FFFFFF'}
            />
        </View>

        <View className='m-3'>
            <Text className='text-white text-xl'>Peliculas nuevas</Text>
            <LinearGradient
                colors={['#082EB4', '#640707']}
                start={{x: 0.0, y: 1.0}} end={{x: 1.0, y: 1.0}}
                className='w-full h-1 mt-2 border'
            >
            </LinearGradient>
        </View>
        <FlatList
            data={Data}
            keyExtractor={(item) => item.id}
            renderItem={Card}
            numColumns={2}
        />
    </SafeAreaView>
  )
}

export default SearchScreen