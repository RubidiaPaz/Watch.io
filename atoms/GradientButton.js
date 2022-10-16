import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';

const GradientButton = ({text,onPressed}) => {
  return (
    <View className="px-8">
         <LinearGradient
            colors={['#082EB4', '#640707']}
            start={{x: 0.0, y: 1.0}} end={{x: 1.0, y: 1.0}}
            className="w-full rounded-full items-center justify-center p-[2px]"
            >
            <TouchableOpacity className="w-full  items-center rounded-full bg-[#171719]" onPress={onPressed}>
                <Text className="text-white text-lg p-1 ">{text}</Text>
            </TouchableOpacity>
            
          </LinearGradient>
    </View>
  )
}

export default GradientButton