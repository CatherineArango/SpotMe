import React from 'react';
import { StyleSheet, View, Text, TextInput, Dimensions, Platform, SafeAreaView, KeyboardAvoidingView, Keyboard } from 'react-native';
import { Background } from '../components/Background';
import { loginStyles } from '../theme/loginTheme';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useForm } from '../hooks/useForm';
import { useNavigation } from '@react-navigation/native';


const { width, height } = Dimensions.get('window');
export { width, height };

//interface Props extends StackScreenProps<any,any>

export const LoginScreen = () => {
    const navigation = useNavigation();

    const{email,password,onChange}= useForm({
        email:'',
        password:''
    });
    const onLogin = ()=>{
        console.log(email,password);
        Keyboard.dismiss();
        navigation.navigate('ProtectedScreen');
    }
    return (
        <Background>
          
          <KeyboardAvoidingView 
                style={{flex:1}}
                behavior={(Platform.OS==='ios') ? 'padding' : 'height'}>
            <View style={loginStyles.centeredContent}>
                {/* Aquí puedes agregar tu contenido */}
                <View style={loginStyles.centeredCenter}>
                    <Text style={loginStyles.title}>Bienvenido a SpotMe</Text>
                </View>
                <View  style={loginStyles.centeredEnd}>
                    <Text style={loginStyles.label}>Email</Text>
                    <TextInput
                        placeholder="Email"
                        keyboardType="email-address"
                        underlineColorAndroid="white"
                        style={[loginStyles.inputField,
                        (Platform.OS ==='ios') && loginStyles.inputFieldIOS ]}
                        selectionColor="white"
                        autoCapitalize="none"
                        autoCorrect={false}
                        onChangeText={(value)=> onChange(value, 'email')}
                        value={email}
                        onSubmitEditing={onLogin}
                    ></TextInput>
                    <Text style={loginStyles.label}>contraseña</Text>
                    <TextInput
                        placeholder="*****"
                        keyboardType="email-address"
                        underlineColorAndroid="white"
                        style={[loginStyles.inputField,
                        (Platform.OS ==='ios') && loginStyles.inputFieldIOS ]}
                        selectionColor="white"
                        autoCapitalize="none"
                        autoCorrect={false}
                        onChangeText={(value)=> onChange(value, 'password')}
                        value={password}
                        onSubmitEditing={onLogin}
                        secureTextEntry
                    ></TextInput>

                    <View style={loginStyles.buttonContainer}>
                        <TouchableOpacity
                        activeOpacity={0.8}
                        style={loginStyles.button}
                        onPress={onLogin}>
                            <Text style={loginStyles.buttonText}>Login</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={loginStyles.forgotPassword}>
                        <TouchableOpacity
                            activeOpacity={0.8}>
                                <Text style={loginStyles.buttonText}>¿Olvidaste tu contraseña?</Text>
                            </TouchableOpacity>
                    </View>
                </View>

            </View>  
                
            </KeyboardAvoidingView>
                    
        </Background>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});