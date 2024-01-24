
import React, { useEffect } from 'react';
import { View, Image ,StyleSheet} from 'react-native';


const LogoPage = ({ navigation }) => {
  // useEffect pour déclencher la navigation après un délai
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('WelcomePage'); // Remplace la page actuelle par AuthPage
    }, 9000); // Délai de 2 secondes

    // Nettoie le timer lors du démontage du composant
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image source={require('../assets/logo.png')} 
       style={styles.centeredImage}

      />  

    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      backgroundColor:'white',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      
    },
    centeredImage: {
      width: 250, // ajustez la largeur selon vos besoins
      height: 200, // ajustez la hauteur selon vos besoins
    },
  });
  
  

export default LogoPage;
