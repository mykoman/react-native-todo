import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useSelector } from 'react-redux';
import MyBtn from './AddItemBtn';
import MyModal from './myModal';


function AppSlim() {
    const handlePress=()=>{
  
    }
    const todos = useSelector(state=>state.TodoList).list; 
    return (
      <View style={styles.container}>
        
        <MyBtn />
        <MyModal />
        <View>
          {todos.map((item)=>(<View key={item} style={styles.listRow}><View style={styles.list}><Text >{item}</Text></View><View style={styles.btn}><Button  title="X" onPress={handlePress}/></View></View>))}
        </View>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      
    },
    btn:{
      //borderRadius: '3em',
      backgroundColor: 'red',
      //width: 20,
      display:'flex',
      flexDirection: 'row',
      alignItems:"center",
      justifyContent:"center",
      //padding:3,
      height:40
    },
    list:{
      width: 200,
      height: 30,
      backgroundColor: '#ccc',
      margin: 10,
      padding: 5,
  
    },
    listRow: {
      display:'flex',
      flexDirection: 'row',
      alignItems:'center',
      justifyContent: 'center',
      //height:70,
      width: 400
      
    }
  });

  export default AppSlim;