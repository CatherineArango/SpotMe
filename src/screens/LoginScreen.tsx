import React from 'react';
import { StyleSheet, View, Text, TextInput, Dimensions, Platform, SafeAreaView, KeyboardAvoidingView, Keyboard } from 'react-native';
import { Background } from '../components/Background';
import { loginStyles } from '../theme/loginTheme';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useForm } from '../hooks/useForm';
import { useRoute, useNavigation } from '@react-navigation/native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

interface LoginScreenProps {
    onLoginStack: () => void; // define el tipo para onLogin como una función que no devuelve nada
  }
  
const { width, height } = Dimensions.get('window');
export { width, height };

//interface Props extends StackScreenProps<any,any>

export const LoginScreen = ({  onLoginStack }: LoginScreenProps) => {
    //const navigation = useNavigation();

    const{email,password,onChange}= useForm({
        email:'',
        password:''
    });
    const onLogin = ()=>{
        console.log(email,password);
        Keyboard.dismiss();
        onLoginStack();
    } 
    
    const onSignUp = ()=>{
        Keyboard.dismiss();
        //navigation.navigate('SignUpScreen');
    }
    return (

    <KeyboardAwareScrollView style={{flex: 1}}>

        <Background>
        
            <View style={loginStyles.formContainer}>

                <Text style={loginStyles.title}>Bienvenido a SpotMe</Text>
                <TextInput
                    placeholder="Email"
                    keyboardType="email-address"
                    style={[loginStyles.inputField, Platform.OS === 'ios' && loginStyles.inputFieldIOS,
                         {color: 'black'}]}
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
                    style={[loginStyles.inputField, Platform.OS === 'ios' && loginStyles.inputFieldIOS, 
                            {color: 'black'}]}
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
                        <Text style={loginStyles.buttonText}>Log in</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    activeOpacity={0.8}
                    style={loginStyles.button}
                    onPress={onSignUp}>
                        <Text style={loginStyles.buttonText}>Sign Up</Text>
                </TouchableOpacity>
               
            </View>  
 
        </Background>
    </KeyboardAwareScrollView>

    );
}
