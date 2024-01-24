
import React, { useState } from "react";
import { Text ,View, StyleSheet, TextInput , ScrollView} from 'react-native'; 
import {Card, Button , Title ,Paragraph } from 'react-native-paper'; 




const EventComponent = ({ event }) => {

  const handleViewDetails = () => {
    // Implement logic to navigate to the event details screen
    console.log(`View details of event:`);
  };
  const [searchText, setSearchText] = useState('');

  const handleSearch = (text) => {
    setSearchText(text);
  };
  return(
  
    <View style={Styles.containerP} >
      <View style={Styles.containerSearch}  >
      <TextInput
        style={Styles.searchBar}
        placeholder="Search"
        onChangeText={handleSearch}
        value={searchText}
      />
      </View>

    <ScrollView style={Styles.containerEvent} >
     <Card style={Styles.container}> 

    <Card.Cover source={require('../assets/game.jpg')} /> 
   <Card.Content> 
    <Paragraph>SSL 2024 Smash Bros</Paragraph> 
    <Paragraph>14 place des colonnes, Cergy</Paragraph> 
    <Paragraph>4 membres présent</Paragraph> 
    </Card.Content> 
    <Card.Actions> 
      <Button>Add To Favourites</Button> 
      <Button>View details</Button> 

    </Card.Actions> 
  </Card>
  <Card style={Styles.container}> 

    <Card.Cover source={require('../assets/game.jpg')} /> 
   <Card.Content> 
    <Paragraph>SSL 2024 Smash Bros</Paragraph> 
    <Paragraph>14 place des colonnes, Cergy</Paragraph> 
    <Paragraph>4 membres présent</Paragraph> 
    </Card.Content> 
    <Card.Actions> 
      <Button>Add To Favourites</Button> 
      <Button>View details</Button> 

    </Card.Actions> 
  </Card>
  <Card style={Styles.container}> 

    <Card.Cover source={require('../assets/game.jpg')} /> 
   <Card.Content> 
    <Paragraph>SSL 2024 Smash Bros</Paragraph> 
    <Paragraph>14 place des colonnes, Cergy</Paragraph> 
    <Paragraph>4 membres présent</Paragraph> 
    </Card.Content> 
    <Card.Actions> 
      <Button>Add To Favourites</Button> 
      <Button>View details</Button> 

    </Card.Actions> 
  </Card>
  <Card style={Styles.container}> 

    <Card.Cover source={require('../assets/game.jpg')} /> 
   <Card.Content> 
    <Paragraph>SSL 2024 Smash Bros</Paragraph> 
    <Paragraph>14 place des colonnes, Cergy</Paragraph> 
    <Paragraph>4 membres présent</Paragraph> 
    </Card.Content> 
    <Card.Actions> 
      <Button>Add To Favourites</Button> 
      <Button>View details</Button> 

    </Card.Actions> 
  </Card>
  <Card style={Styles.container}> 

    <Card.Cover source={require('../assets/game.jpg')} /> 
   <Card.Content> 
    <Paragraph>SSL 2024 Smash Bros</Paragraph> 
    <Paragraph>14 place des colonnes, Cergy</Paragraph> 
    <Paragraph>4 membres présent</Paragraph> 
    </Card.Content> 
    <Card.Actions> 
      <Button>Add To Favourites</Button> 
      <Button>View details</Button> 

    </Card.Actions> 
  </Card>
  
   </ScrollView>
 
  </View>
 
  
  
  
     
) 
};

const Styles = StyleSheet.create({ 
    container :{ 
        alignContent:'center', 
        margin:37 ,
        marginBottom:7 ,

        backgroundColor: 'white',

    } ,

     containerP :{ 
        backgroundColor: '#6E4AB5',

    } ,
    searchBar: {
      
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      margin: 10,
      backgroundColor: 'white',
      marginTop:50,
      borderRadius:40,
      width:279,
      height:54,
      paddingLeft:20,

    },
    containerEvent :{ 
        alignContent:'center', 
        borderRadius:40,
        backgroundColor: 'white',
        marginTop:40
        


    } ,
    containerSearch:{
      justifyContent:'center',
      alignItems:'center'

    }
   
})

export default EventComponent;
