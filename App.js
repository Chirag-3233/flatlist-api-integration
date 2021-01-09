
import React, { Component } from 'react';
import {
  AppRegistry,
  SafeAreaView,
  ActivityIndicator,
  StyleSheet,
  Image,
  ScrollView,
  View,
  Text,
  StatusBar,
  FlatList,
} from 'react-native';

export default class App extends Component{
  constructor(){
    super()
    this.state={
      dataSource:[],
      isLoading:true
    }
  }
  // renderItem=({item}) =>{
  //     <View style={{flex:1,flexDirection:'row',marginBottom:3}}>
  //       <Image  style={{width:80,height:80,margin:5}}
  //       source={{uri:item.image}}/>
  //       <View style={{flex:1,justifyContent:'center',marginLeft:5}}>
  //         <Text style={{fontSize:18,color:'green',marginBottom:15}}>
  //           {item.name}
  //         </Text>
  //         <Text style={{fontSize:18,color:'red'}}>
  //           {item.price}
  //         </Text>
  //       </View>
  //     </View>
  // }
  renderSeparator=()  =>{
    return(
      <View style={{height:1,width:'100%',backgroundColor:'black'}}></View>
    )
  }
  componentDidMount(){
    const url ='https://randomuser.me/api/?&results=20'
    fetch(url)
      .then((response) =>  response.json())
      .then((responseJson)  =>  {
        this.setState({
          dataSource:responseJson.results,
          isLoading:false
        })
      })
      .catch((error)  =>  {
        console.log(error)
      })
  }
  render(){
    return(
      this.state.isLoading?
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <ActivityIndicator size="large" color="#330066" animating/>
      </View>
      :
      <View style={styles.container}>
          <FlatList
          data={this.state.dataSource}
          renderItem={this.renderItem}
          renderItem={({ item, index }) => (
           
     <View style={{flex:1,flexDirection:'row',marginBottom:3}}>
        <Image  style={{width:80,height:80,margin:5}}
        source={{uri:item.picture.thumbnail}}/>
        <View style={{flex:1,justifyContent:'center',marginLeft:5}}>
          <Text style={{fontSize:18,color:'green',marginBottom:15}}>
           Name:{item.name.first}
          </Text>
          <Text style={{fontSize:18,color:'red'}}>
            Quantity:{item.email}
          </Text>
          <Text style={{fontSize:18,color:'green'}}>
            Price:{item.phone}
          </Text>
        </View>
      </View>

          )}
          // keyExtractor={(item,index)  => index}
          ItemSeparatorComponent={this.renderSeparator}
          />
      </View>
    );
  }
}
const styles =StyleSheet.create({
  container:{
    flex:1,
    // justifyContent:'center',
    // alignItems:'center',
    backgroundColor:'#F5FCFF'
  }
})