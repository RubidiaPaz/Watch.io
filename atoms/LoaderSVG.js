import * as React from 'react';
import { ActivityIndicator, View, StyleSheet } from 'react-native';
import { SvgUri } from 'react-native-svg';
import { authentication } from '../firebase-config';
export default function LoaderSVG() {
  const [loading, setLoading] = React.useState(true);

  const onError = (e) => {
    console.log(e.message);
    setLoading(false);
  };
  const onLoad = () => {
    console.log('Svg loaded!');
    setLoading(false);
  };
  return (
    <>
      <SvgUri
        width="100"
        height="100"
        uri={authentication?.currentUser?.photoURL}
        onError={onError}
        onLoad={onLoad}
      />
 
    </>
  );
}