import { View, Text,FlatList,Image,TouchableOpacity } from 'react-native'


const ListView = ({data,setReference}) => {

  const renderItem = ({ item }) => (
    <TouchableOpacity className=" items-center justify-center w-[140px] h-56 bg-white rounded-lg ">
      <View className="flex w-[140px] items-center py-4">
        <Image  className="w-full h-52 mb-2"  source={{
          uri: item.i.imageUrl}}/>
      </View>
    </TouchableOpacity>
  );

  return (
    <View className="mt-2 mr-3 ml-3 ">
       
        <FlatList
        showsHorizontalScrollIndicator={false}
          ItemSeparatorComponent={() => (
            <View className="w-2 " />
          )}
          horizontal={true}
          data={data.d}
          renderItem={renderItem}
          keyExtractor={data => data.id}
        />

    </View>
  )
}

export default ListView