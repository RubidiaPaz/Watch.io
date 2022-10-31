import React, { useLayoutEffect } from 'react'
import { Image, SafeAreaView, TouchableOpacity, View, Text, ScrollView } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import loginImages from '../assets/loginImages';
import { LinearGradient } from 'expo-linear-gradient';

const MovieDetails = () => {
    const navigation = useNavigation();
  
    useLayoutEffect(() => {
        navigation.setOptions({
        headerShown: false
        })
    }, []);

    return (
        <SafeAreaView className='h-full w-full bg-black'>
            <View className='w-full h-14 bg-black opacity-30 absolute z-10'></View>
            <TouchableOpacity className='absolute z-50'>
                <Image className='w-12 top-3 left-1 sticky' source={loginImages.backicon} />
            </TouchableOpacity>
            <ScrollView>

                <View className='bg-white h-96'>
                    <Image className='w-full h-full' source={loginImages.spiderMan} resizeMode='stretch' />
                    <View className='absolute w-full h-full'>

                        <TouchableOpacity className='w-16 h-16 rounded-full -bottom-8 right-2 absolute'>
                            <LinearGradient
                                colors={['#082EB4', '#640707']}
                                start={{x: 0.25, y: 0.25}} end={{x: 0.85, y: 0.85}}
                                className='w-16 h-16 rounded-full absolute'
                            >
                                <Image className='w-8 h-8 m-auto' tintColor='white' source={loginImages.videoplays}/>
                                
                            </LinearGradient>
                        </TouchableOpacity>
                    </View>
                </View>

                <View className='mt-6 mx-2 pb-2 border-b border-slate-600'>
                    <Text className='text-white text-3xl font-bold'>Spider-Man</Text>
                    <Text className='text-white text-sm mt-1 mb-2'>year - category - duration</Text>
                    <Text className='text-white text-base leading-5 text-justify'>After Peter Parker's secret identity as Spider-Man is discovered, the young man's life turns crazy. Peter asks Doctor Strange for help in getting his life back, but something goes wrong, causing a fracture in the multiverse.</Text>
                </View>

                <View className='mt-4 mx-2'>
                    <Text className='text-white text-2xl font-bold'>Elenco</Text>
                    {/*actors cards container */}
                    <View className='flex flex-row flex-wrap'>
                        <ActorCard />
                        <ActorCard />
                        <ActorCard />
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

// Actor Card
const ActorCard = () => {
    return(
        <View className='w-1/2 h-16 flex-row mt-1.5 '>
            <View className='w-16 h-16 rounded-full border-4 border-black ml-1'>
                <Image className='w-full h-full rounded-full'  source={loginImages.bladeRunner} resizeMode='stretch'/>  
            </View>
            <View className='w-4/5 h-12 rounded-2xl bg-neutral-700 absolute top-2 right-0 -z-10 justify-center items-end'>
                <Text className='w-full pl-9 text-white leading-4'>Rayn Gosling</Text>
            </View>
        </View>
    )
}

export default MovieDetails