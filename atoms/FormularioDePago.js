import React from "react";
import { View, Alert, StyleSheet } from "react-native";
import Button from "./Button";
import { useNavigation } from "@react-navigation/native";
import {
  StripeProvider,
  useConfirmPayment,
  CardField,
} from "@stripe/stripe-react-native";

const API_URL = "https://shy-opalescent-bactrosaurus.glitch.me";
const PUBLISHABLE_KEY =
  "pk_test_51Ho4m5A51v44wNexXNFEg0MSAjZUzllhhJwiFmAmJ4tzbvsvuEgcMCaPEkgK7RpXO1YI5okHP08IUfJ6YS7ulqzk00O2I0D1rT";

const FormularioDePago = ({ plan }) => {
  const { confirmPayment, loading } = useConfirmPayment();

  const navigation = useNavigation();

  const fetchPaymentIntentClientSecret = async () => {
    const response = await fetch(`${API_URL}/create-payment-intent`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        currency: "usd",
        amount: 7,
        items: [{ id: "id" }],
      }),
    });
    const { clientSecret } = await response.json();

    return clientSecret;
  };

  const onSubmit = async () => {
    // 1. fetch Intent Client Secret from backend
    const clientSecret = await fetchPaymentIntentClientSecret();

    const billingDetails = {
      email: "email@stripe.com",
      phone: "+48888000888",
      addressCity: "Houston",
      addressCountry: "US",
      addressLine1: "1459  Circle Drive",
      addressLine2: "Texas",
      addressPostalCode: "77063",
    }; // mocked data for development account

    const { error, paymentIntent } = await confirmPayment(clientSecret, {
      paymentMethodType: "Card",
      billingDetails,
    });

    if (error) {
      Alert.alert(`Lo sentimos no pudimos procesar su pago -${error}`);
    } else if (paymentIntent) {
      navigation.navigate("pagoExitoso", {
        planId: plan,
      });
    }
  };

  return (
    <StripeProvider publishableKey={PUBLISHABLE_KEY}>
      <View style={styles.container}>
        <CardField
          postalCodeEnabled={false}
          autofocus
          style={styles.cardField}
          cardStyle={{
            textColor: "#1c1c1c",
          }}
        />
        {!loading && <Button onSubmit={onSubmit} text="Procesar" />}
      </View>
    </StripeProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cardField: {
    height: 40,
  },
});
export default FormularioDePago;
