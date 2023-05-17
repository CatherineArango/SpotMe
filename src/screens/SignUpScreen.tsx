import { useNavigation } from '@react-navigation/native';
import React from 'react'
import {View,Text, Keyboard} from 'react-native'
import { useForm } from '../hooks/useForm';

export const SignUpScreen = () => {
    const navigation = useNavigation();

    const{email,password,onChange}= useForm({
        email:'',
        password:''
    });

    const onLogin = ()=>{
        console.log(email,password);
        Keyboard.dismiss();
        navigation.navigate('HomeScreen');
    } 

    return (
        <View>
            <Text>SignUpScreen</Text>
        </View>
    )
}
