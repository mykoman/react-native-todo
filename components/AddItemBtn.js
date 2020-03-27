import React from 'react';
import { View, Button } from 'react-native';
import { useDispatch } from 'react-redux';
import { showModal } from '../actions/apiRequest';


const MyBtn= ()=>{
    const dispatch = useDispatch();
    const handlePress=()=>{
        dispatch(showModal());
    }
    return(<View>
        <Button title="ADD NEW" onPress={handlePress} />
    </View>)
}
export default MyBtn