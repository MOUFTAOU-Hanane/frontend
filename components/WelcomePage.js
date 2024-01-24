import React, { useState } from 'react';
import { View, Text,ImageBackground, Switch , Button,Image, StyleSheet, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const WelcomePage = () => {
    const [isSignIn, setIsSignIn] = useState(true);
    const navigation = useNavigation();

    
        const handleSignInPress = () =>{
            navigation.navigate('SignUp');
          };
          const handleSignUpPress = () =>{
            navigation.navigate('SignIn');
          };
  
    return (
        <View style={styles.container}>
            <ImageBackground
                  source={require('../assets/game.jpg')} 
                  style={styles.image}>
            </ImageBackground>
       
            <View style={styles.divider}>
                <Text style={styles.titrePrinc}>Hey, Welcome to FindMyMate.</Text>
                <Text style={styles.p}>Join ours community, find yours mate, join or create IRL events with people from around the world</Text>
                <View style={styles.contentBtn}>
                  <TouchableOpacity style={styles.buttonContainer} onPress={handleSignInPress} >
                        <Text style={styles.buttonText}>Sign up</Text>
                  </TouchableOpacity> 

                  <TouchableOpacity style={styles.buttonContainerSignIn} onPress={handleSignUpPress}>
                        <Text style={styles.buttonTextSignIn}>Sign in</Text>
                  </TouchableOpacity>
                
                    
                
               
               
                 </View>
               
               
            </View>
                    

       
        </View>
            


    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column', // Par défaut, mais juste pour clarifier
    },
    image: {
      flex: 1, // Occupe la moitié de l'écran
      resizeMode: 'cover', // Ajuste la taille de l'image pour couvrir la zone
    },
    divider: {
      flex: 1, // Occupe l'autre moitié de l'écran
      backgroundColor: 'white', 
      padding:50,
    },
    overlay: {
        ...StyleSheet.absoluteFillObject, // Remplit la totalité du parent (ici, l'image)
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fond semi-transparent
        justifyContent: 'center',
        alignItems: 'center',
      },
    titrePrinc:{
        fontSize: 50,
        fontWeight: 'bold',
    },
    contentBtn:{
        display:'flex',
        flexDirection:'row',
        width:310,
        height:46,
        borderColor:'black',       
        borderWidth:1,
        borderColor:'#6E4AB5',
        justifyContent:'space-between',
        borderRadius: 40,
    },
    p:{
        paddingTop:20,
        paddingBottom:100,
        fontSize: 15,


    },
    buttonContainer: {
        backgroundColor: '#6E4AB5',
        padding: 10,
        borderRadius: 40,
        width:126,
      },

      buttonContainerSignIn: {
        padding: 10,
        borderRadius: 40,
        width:126,
      },
      buttonText: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center',      },
      buttonTextSignIn: {
            color: '#6E4AB5',
            fontSize: 16,
            textAlign: 'center',      },
    
  });
  

export default WelcomePage;
