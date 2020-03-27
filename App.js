import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import {Provider, useSelector} from 'react-redux';
import StoreConfig from './store/StoreConfig';
import MyBtn from './components/AddItemBtn';
import MyModal from './components/myModal';
import AppSlim from './components/AppSlim';


const store = StoreConfig();


const App =()=>{ 
  return (<Provider store={store}>
  <AppSlim />
</Provider>);
}

export default App;
