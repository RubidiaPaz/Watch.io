import { Text, View, Image, ScrollView,SafeAreaView} from 'react-native'
import React, { Component } from 'react'
import ListView from '../components/ListView'
import * as comedia from '../movies/comedia.json';
import * as accion from '../movies/accion.json';
import * as romance from '../movies/romance.json';

// import { ref, child, get,set } from "firebase/database";
// import { database, authentication } from "../firebase-config";

// const dbRef = ref(database);
//   let userId='eqwewqeqw'
//   set(ref(database, 'usuario/' + userId), {
//     username: userId
//   });

// get(child(dbRef, `usuario/`))
//   .then((snapshot) => {
//     if (snapshot.exists()) {
//       console.log(snapshot.val());
//     } else {
//       console.log("No data available");
//     }
//   })
//   .catch((error) => {
//     console.error(error);
//   });



const PeliculaScreen = ({ navigation }) => {
  return (
    <SafeAreaView className="flex  bg-white">
      <ScrollView>
        <View className=" items-center w-96 h-52">
          {/* <Text className="text-red-500">tesadsada</Text> */}
          {/* <Image  className="w-96 h-52"  source={require('../assets/streaming.jpg')}/> */}
        </View>
        <View>
          <Text className="text-lg mt-4 font-semibold  mx-4">Comedia</Text>
          <ListView data={comedia} />
        </View>
        <View>
          <Text className="text-lg mt-4 font-semibold  mx-4">Acción</Text>
          <ListView data={accion} />
        </View>
        <View>
          <Text className="text-lg mt-4 font-semibold  mx-4">Romance</Text>
          <ListView data={romance} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PeliculaScreen