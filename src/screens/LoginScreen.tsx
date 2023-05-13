import React from 'react';
import { StyleSheet, View, Text, TextInput, Dimensions, Platform, SafeAreaView, KeyboardAvoidingView } from 'react-native';
import { Background } from '../components/Background';
import { loginStyles } from '../theme/loginTheme';
import { TouchableOpacity } from 'react-native-gesture-handler';

const { width, height } = Dimensions.get('window');
export { width, height };

export const LoginScreen = () => {
    return (
        <Background>
            <View style={loginStyles.centeredContent}>
                {/* Aquí puedes agregar tu contenido */}
                <View style={loginStyles.centeredCenter}>
                    <Text style={loginStyles.title}>Bienvenido a SpotMe</Text>
                </View>
                <KeyboardAvoidingView 
                style={{flex:1}}
                behavior={(Platform.OS==='ios') ? 'padding' : 'height'}>
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
                    ></TextInput>

                    <View style={loginStyles.buttonContainer}>
                        <TouchableOpacity
                        activeOpacity={0.8}
                        style={loginStyles.button}>
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
                </KeyboardAvoidingView>

            </View>  
        </Background>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});