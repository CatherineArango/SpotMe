import { useNavigation } from '@react-navigation/native';
import React from 'react'
import {View,Text, Keyboard, TextInput, TouchableOpacity} from 'react-native'
import { useForm } from '../hooks/useForm';
import { loginStyles } from '../theme/loginTheme';
import { Background } from '../components/Background';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { signUpStyles } from '../theme/signUpTheme';

export const SignUpScreen = () => {
    const navigation = useNavigation();

    const{email,password, confirmPassword, onChange}= useForm({
        email:'',
        password:'',
        confirmPassword:''

    });

    const createAccount = ()=>{

        if(password === confirmPassword){

            console.log(email,password, confirmPassword);
            Keyboard.dismiss();
            navigation.navigate('HomeScreen');
         
        }
       
    } 

    return (

        <KeyboardAwareScrollView style={{flex: 1}}>

            <Background>
            
                <View style={loginStyles.formContainer}>

                    <Text style={loginStyles.title}>Vamos a crear tu cuenta</Text>
                    <TextInput
                        placeholder="Email"
                        keyboardType="email-address"
                        style={[loginStyles.inputField, {color: 'black'}]}
                        placeholderTextColor='black'
                        selectionColor="white"
                        autoCapitalize="none"
                        autoCorrect={false}
                        onChangeText={(value)=> onChange(value, 'email')}
                        value={email}
                        onSubmitEditing={createAccount}
                    ></TextInput>
                    <TextInput
                        placeholder="contraseña"
                        keyboardType="email-address"
                        style={[loginStyles.inputField, {color: 'black'}]}
                        placeholderTextColor='black'
                        selectionColor="white"
                        autoCapitalize="none"
                        autoCorrect={false}
                        onChangeText={(value)=> onChange(value, 'password')}
                        value={password}
                        onSubmitEditing={createAccount}
                        secureTextEntry
                    ></TextInput>
                       <TextInput
                        placeholder="Repite contraseña"
                        keyboardType="email-address"
                        style={[loginStyles.inputField, {color: 'black'}]}
                        placeholderTextColor='black'
                        selectionColor="white"
                        autoCapitalize="none"
                        autoCorrect={false}
                        onChangeText={(value)=> onChange(value, 'confirmPassword')}
                        value={confirmPassword}
                        onSubmitEditing={createAccount}
                        secureTextEntry
                    ></TextInput>
            

                    <TouchableOpacity
                        activeOpacity={0.8}
                        style={signUpStyles.button}
                        onPress={createAccount}>
                            <Text style={loginStyles.buttonText}>Crear cuenta</Text>
                    </TouchableOpacity>

                  
                
                </View>  
    
            </Background>
        </KeyboardAwareScrollView>
    )
}
