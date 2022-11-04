import { authentication } from "../firebase-config";

function checkSesion(navigation) {
  const user = authentication.currentUser;
  if (user) {
    return true
  } else {
    navigation.navigate("Login");
  }
}
export default checkSesion
