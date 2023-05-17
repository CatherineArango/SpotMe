import React from 'react';
import { StyleSheet, View, Text, TextInput, Dimensions, Platform, SafeAreaView, KeyboardAvoidingView, Keyboard } from 'react-native';
import { Background } from '../components/Background';
import { loginStyles } from '../theme/loginTheme';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useForm } from '../hooks/useForm';
import { useRoute, useNavigation } from '@react-navigation/native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';



const { width, height } = Dimensions.get('window');
export { width, height };

//interface Props extends StackScreenProps<any,any>
export const LoginScreen = () => {
    const{email,password,onChange}= useForm({
        email:'',
        password:''
    });
    const onLogin = ()=>{
        console.log(email,password);
        Keyboard.dismiss();
    }
    return (

    <KeyboardAwareScrollView style={{flex: 1}}>

        <Background>
        
            <View style={loginStyles.formContainer}>

                <Text style={loginStyles.title}>Bienvenido a SpotMe</Text>
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
                    onSubmitEditing={onLogin}
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
                    onSubmitEditing={onLogin}
                    secureTextEntry
                ></TextInput>
                 <View style={loginStyles.forgotPassword}>
                    <TouchableOpacity activeOpacity={0.8}>
                        <Text style={loginStyles.buttonText2}>¿Olvidaste tu contraseña?</Text>
                    </TouchableOpacity>
                </View>


                <TouchableOpacity
                    activeOpacity={0.8}
                    style={loginStyles.button}
                    onPress={onLogin}>
                        <Text style={loginStyles.buttonText}>Login</Text>
                </TouchableOpacity>
               
            </View>  
 
        </Background>
    </KeyboardAwareScrollView>

    );
}
