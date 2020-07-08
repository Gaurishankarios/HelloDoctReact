//SignInScreen
import React, { useState } from 'react'
import { View, StyleSheet, Alert, Image, ScrollView, ImageBackground, SafeAreaView, KeyboardAvoidingView } from 'react-native'
import { Text, Input, Button } from 'react-native-elements'
import Spacer from '../component/Spacer'
import LinearGradient from "react-native-linear-gradient";
import IntlPhoneInput from 'react-native-intl-phone-input';
import { Keyboard } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

// import { Text, Input, Button } from 'react-native-elements'

const SignInScreen = ({ navigation }) => {

    const [emailId, setemailId] = useState('');
    const [password, setPassword] = useState('');
    const [mobile, setmobile] = useState();

    const btnSignInPress = () => {
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        if (emailId == '' && password == '') {
            alert('Please enter credentials')
        }
        else {
            if (reg.test(emailId) === false) {
                console.log("Email is Not Correct");
                alert("Please enter valid emailid")
                return false;
            } else {
                console.log("Email is  Correct");
                if (password == '') {
                    alert("Please enter password")
                } else {

                    let regpass = /^(?=.*[A-Z])/;
                    if (regpass.test(password) === false) {
                        alert("Password must contains 1 Upper case letter")
                    } else {
                        // console.log("password contains UPPER LATER")
                        if ((emailId == 'clarion@clarion.com') && (password == 'Clarion123')) {
                            // console.log("Valid data");
                            var pieces = emailId.split("@");
                            navigation.navigate('Welcome', { name: pieces[0] })

                        } else {
                            alert('Please enter valid credentials')
                            console.log("data is ", emailId, password)
                        }
                    }


                }
            }
        }

    }


    onChangeText = ({ dialCode, unmaskedPhoneNumber, phoneNumber, isVerified }) => {
        console.log(dialCode, unmaskedPhoneNumber, phoneNumber, isVerified);
        if (phoneNumber.length == 11) {
            console.log("close key ")
            Keyboard.dismiss()
            navigation.navigate('Home')
        }
    };

    return (


        <ImageBackground source={require('../assests/backHomescreen.png')}
            style={styles.backgroundImage}>

            <KeyboardAwareScrollView
                //   style={{ backgroundColor: '#4c69a5' }}
                resetScrollToCoords={{ x: 0, y: 0 }}
                contentContainerStyle={styles.container}
                scrollEnabled={false}
            >

                <View style={styles.container} >
                    <View style={{ alignItems: 'center', marginTop: 60, }}>
                        <Text style={{ color: "white", fontSize: 20, }}>Consult top doctor from {"\n"}     the best hospital</Text>
                    </View>
                    <View style={{ justifyContent: 'center', alignItems: 'center', margin: 30, }}>
                        <Text h1 h1Style={styles.setColorBlue}>Ethernal{"\n"}Hospital</Text>
                    </View>
                </View >


                <View style={{
                    marginBottom: 120, flexDirection: 'row',
                    marginHorizontal: 30, height: 50, backgroundColor: 'white', borderRadius: 15,
                }}>

                    <Image style={{
                        margin: 10,
                        marginLeft: 15,
                        // alignSelf: 'center',
                        justifyContent: "flex-start",
                        height: '60%',
                        width: 40
                    }}
                        resizeMode="contain"
                        source={require('../assests/mobileno.png')}
                    />
                    <View style={{
                        height: 40, backgroundColor: 'black', width: 0.7, margin: 5
                    }}></View>

                    <View style={{ flex: 1 }}>
                        <IntlPhoneInput onChangeText={this.onChangeText}
                            // placeholder="Enter mobile number"
                            // onChangeText={setmobile}
                            defaultCountry="IN" />
                    </View>
                </View>

            </KeyboardAwareScrollView>
        </ImageBackground>




    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: "center",
        // backgroundColor: '#01C1AD',
        paddingBottom: 50,
    },
    setColorBlue: {
        color: '#05486B',
        fontWeight: "bold",
    },
    backgroundImage: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'cover'
    },

});

SignInScreen.navigationOptions = () => {
    return {
        header: null
    };
};

export default SignInScreen;



// <LinearGradient
        //     style={styles.container}
        //     colors={[
        //         "#00d2ff",
        //         "#3a7bd5"
        //     ]}  >

