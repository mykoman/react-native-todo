import React, { useState } from 'react';
import { Modal, View, TextInput, Button, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, hideModal } from '../actions/apiRequest';

const MyModal = ()=>{
    const [myState, setMyState] = useState({todoItemValue: '', showModal: true});
    let showModal= useSelector(state=>state.GeneralReducer).showModal;
    const handleChange=(e)=>{
        //alert(e.target.value)
        // console.log(e.nativeEvent.text)
        setMyState({...myState, todoItemValue: e.nativeEvent.text});
       //alert(todoItemValue);
    }
const dispatch= useDispatch();
    const handlePress=()=>{
        setMyState({...myState, showModal: false, todoItemValue: '' })
        dispatch(addTodo(myState.todoItemValue));
        dispatch(hideModal());
        
    };

    const handleCancel=()=>{
        setMyState({...myState, todoItemValue: '' })
    };
    return(<Modal visible={showModal} >
        <View style={styleSheet.modal}>
            <View>
                <TextInput value={myState.todoItemValue} type="text" onChange={handleChange} placeholder="Enter item" style={styleSheet.textInput} />
            </View>
            <View style={styleSheet.button} >
                <Button onPress={handleCancel} title="Cancel" color="red" /> 
                <Button onPress={handlePress} title="Add" />
            </View>
        </View>
    </Modal>)
}

const styleSheet= StyleSheet.create({
textInput: {
    width: "80%",

},
button:{
    flexDirection: 'row',
    justifyContent: 'space-between'
},
modal: {
    flex:1,
    justifyContent: "center",
    alignItems: "center",
    margin: 20 
}
});

export default MyModal;