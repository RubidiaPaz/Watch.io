import { View, Text, Image } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from "@react-navigation/native";

const Splash = () => {
    const navigation = useNavigation();
    // setTimeout(()=>{
    //     navigation.navigate("Inicio")
    // },3000)

    useLayoutEffect(() => {
        navigation.setOptions({
          headerShown: false,
        });
      }, []);
  return (
    <View>
        <Image
            source={{ uri:'https://i.pinimg.com/originals/bb/2e/9f/bb2e9f14807c1c33f38c81e612c2068c.gif' }}
        />
    </View>
  )
}

export default Splash