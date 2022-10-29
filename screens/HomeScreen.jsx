import { View, Text, Image, SafeAreaView, TouchableOpacity, ScrollView, FlatList } from 'react-native'
import React,{useLayoutEffect} from 'react'
import loginImages from '../assets/loginImages';
import { useNavigation } from '@react-navigation/native';

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
    }
]


const HomeScreen = () => {
    const navigation = useNavigation();
  
    useLayoutEffect(() => {
        navigation.setOptions({
        headerShown: false
        })
    }, []);

    return (
        <SafeAreaView className='bg-black h-full mt-6 w-full'>
            <View className='mt-3'>
                        <View className='flex flex-row justify-between'>
                            <View className='ml-2'>
                                <Image className="w-16 h-16 ml-5" tintColor='#DC2626' source={loginImages.videoCamera}/>
                            </View>
                            <View className='mr-5'>
                                <TouchableOpacity>
                                    <Image className="w-14 h-14 ml-5" tintColor='#DC2626' source={loginImages.perfil}/>
                                </TouchableOpacity>
                            </View>
                        </View>
                <View className='h-96'>
                    <Image className='w-full h-full' source={loginImages.spiderMan}/>
                    <View className='absolute bottom-3 w-full'>
                        <Text className='text-slate-50 text-center mb-1 font-bold text-3xl'>Spider-Man</Text>
                        <Text className='text-slate-50 text-center mb-2 text-xl font-bold'>Accion</Text>
                        <TouchableOpacity className='relative'>
                            <View className='w-3/12 bg-white rounded-md flex flex-row mx-auto justify-center py-1'>
                                <Image className='w-6 h-6 my-auto mr-2' source={loginImages.videoplays}/>
                                <Text className='text-lg font-bold'>Play</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
                <View>
                    <Text className='text-white text-lg m-2'>Los mas populares de watch.io</Text>
                    <FlatList
                        horizontal
                        data={Data}
                        renderItem={renderItem}
                        keyExtractor={(item) => item.id}
                        
                    />
                </View>
            </View>
        </SafeAreaView>
    )
}

const renderItem = ({item}) => {
    return(
        <TouchableOpacity>
            <View className='w-40 h-60 mr-1'>
                <Image className='w-full h-full' source={item.image}/>
            </View>
        </TouchableOpacity>
    )
}

export default HomeScreen