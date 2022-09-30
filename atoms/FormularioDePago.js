import React from "react";
import { Text, View, StyleSheet, TextInput } from "react-native";
import Button from "./Button";
import { useNavigation } from "@react-navigation/native";
import { useForm, Controller } from "react-hook-form";

const FormularioDePago = () => {
  const navigation = useNavigation();
  const {
    handleSubmit,
    control,

    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    navigation.navigate("pagoExitoso");
  };

  return (
    <View>
      <Text style={styles.label}>Número de tarjeta</Text>
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            onBlur={onBlur}
            onChangeText={(value) => onChange(value)}
            value={value}
            placeholder="**** **** ****"
            style={styles.input}
            placeholderTextColor="rgba(255, 255, 255, 0.5)"
          />
        )}
        name="tarjeta"
        rules={{ required: true }}
      />

      <View style={styles.shortInputContainer}>
        <View>
          <Text style={styles.label}>Vencimiento</Text>
          <View style={styles.monthYearContainer}>
            <View>
              <Controller
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    onBlur={onBlur}
                    onChangeText={(value) => onChange(value)}
                    value={value}
                    placeholder="MM"
                    style={styles.monthInput}
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
                    style={styles.specialShortInput}
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
          <Text style={styles.label}>Cvv</Text>
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                onBlur={onBlur}
                onChangeText={(value) => onChange(value)}
                value={value}
                placeholder="CVV"
                style={styles.shortInput}
                placeholderTextColor="rgba(255, 255, 255, 0.5)"
              />
            )}
            name="cvv"
            rules={{ required: true }}
          />
        </View>
      </View>
      <Text style={styles.label}>Titular</Text>
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            onBlur={onBlur}
            onChangeText={(value) => onChange(value)}
            value={value}
            placeholder="Nombre del propietario"
            style={styles.input}
            placeholderTextColor="rgba(255, 255, 255, 0.5)"
          />
        )}
        name="nombre"
        rules={{ required: true }}
      />
      <View>
        <Button text="Procesar" onSubmit={handleSubmit(onSubmit)} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    color: "white",
    margin: 20,
    marginLeft: 0,
    fontSize: 16,
  },

  input: {
    backgroundColor: "black",
    borderColor: "rgba(77, 127, 174, 0.5)",
    borderBottomWidth: 2,
    height: 28,
    padding: 5,
    color: "white",
  },
  shortInput: {
    backgroundColor: "black",
    borderColor: "rgba(77, 127, 174, 0.5)",
    borderBottomWidth: 2,
    height: 28,
    padding: 5,
    color: "white",
    width: 124,
  },
  specialShortInput: {
    backgroundColor: "black",
    borderColor: "rgba(77, 127, 174, 0.5)",
    borderBottomWidth: 2,
    height: 28,
    padding: 5,
    color: "white",
    width: 60,
  },
  monthInput: {
    backgroundColor: "black",
    borderColor: "rgba(77, 127, 174, 0.5)",
    borderBottomWidth: 2,
    height: 28,
    padding: 5,
    color: "white",
    width: 40,
  },
  shortInputContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  monthYearContainer: {
    display: "flex",
    flexDirection: "row",
  },
});

export default FormularioDePago;
