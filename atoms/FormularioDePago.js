import React from "react";
import { Text, View, TextInput } from "react-native";
import Button from "./Button";
import { useNavigation } from "@react-navigation/native";
import { useForm, Controller } from "react-hook-form";

const FormularioDePago = ({plan}) => {
  const navigation = useNavigation();
  const {
    handleSubmit,
    control,

    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // console.log(data);
     navigation.navigate("pagoExitoso", {
       planId: plan,
     });
  };



  return (
    <View>
      <Text className="text-base text-white mx-0 my-5">Número de tarjeta</Text>
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            onBlur={onBlur}
            onChangeText={(value) => onChange(value)}
            value={value}
            placeholder="**** **** ****"
            className="bg-black	border-b-[#4D7FAE]  border border-y-500	text-white p-[5px] h-7"
            placeholderTextColor="rgba(255, 255, 255, 0.5)"
          />
        )}
        name="tarjeta"
        rules={{ required: true }}
      />

      <View className="flex flex-row justify-between">
        <View>
          <Text className="text-base text-white mx-0 my-5">Vencimiento</Text>
          <View className="flex flex-row">
            <View>
              <Controller
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    onBlur={onBlur}
                    onChangeText={(value) => onChange(value)}
                    value={value}
                    placeholder="MM"
                    className="bg-black	border-b-[#4D7FAE]  border border-y-500	text-white p-[5px] h-7 w-[40px]"
                    placeholderTextColor="rgba(255, 255, 255, 0.5)"
                  />
                )}
                name="mes"
                rules={{ required: true }}
              />
            </View>
            <View>
              <Controller
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    onBlur={onBlur}
                    onChangeText={(value) => onChange(value)}
                    value={value}
                    placeholder="/YYYY"
                    className="bg-black	border-b-[#4D7FAE]  border border-y-500	text-white p-[5px] h-7 w-[60px]"
                    placeholderTextColor="rgba(255, 255, 255, 0.5)"
                  />
                )}
                name="año"
                rules={{ required: true }}
              />
            </View>
          </View>
        </View>
        <View>
          <Text className="text-base text-white mx-0 my-5">Cvv</Text>
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                onBlur={onBlur}
                onChangeText={(value) => onChange(value)}
                value={value}
                placeholder="CVV"
                className="bg-black	border-b-[#4D7FAE]  border border-y-500	text-white p-[5px] h-7 w-[124px]"
                placeholderTextColor="rgba(255, 255, 255, 0.5)"
              />
            )}
            name="cvv"
            rules={{ required: true }}
          />
        </View>
      </View>
      <Text className="text-base text-white mx-0 my-5">Titular</Text>
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            onBlur={onBlur}
            onChangeText={(value) => onChange(value)}
            value={value}
            placeholder="Nombre del propietario"
            className="bg-black	border-b-[#4D7FAE]  border border-y-500	text-white p-[5px] h-7"
            placeholderTextColor="rgba(255, 255, 255, 0.5)"
          />
        )}
        name="nombre"
        rules={{ required: true }}
      />
      <View>
        <Button text="Procesar" onSubmit={onSubmit} />
      </View>
    </View>
  );
};

export default FormularioDePago;
