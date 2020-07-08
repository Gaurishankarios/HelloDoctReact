//SignInScreen
import React, { useState } from 'react'
import { View, StyleSheet, Alert, Image, ScrollView, Dimensions, ImageBackground, SafeAreaView, TextInput, TouchableOpacity } from 'react-native'
import { Text, Input, Button } from 'react-native-elements'
import Spacer from '../component/Spacer'
    import { CardViewWithIcon, CardViewWithImage } from "react-native-simple-card-view";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

const HomeDocs = ({ navigation }) => {

    const miniCardStyle = {
        shadowColor: '#000000',
        shadowOffsetWidth: 5,
        shadowOffsetHeight: 5,
        shadowOpacity: 0.1,
        hadowRadius: 10,
        bgColor: '#ffffff',
        padding: 10,
        margin: 10,
        borderRadius: 3,
        elevation: 5,
        width: (Dimensions.get("window").width / 2) - 20
    };


    return (

        //backcommon
        // <SafeAreaView style={styles.container}>

        <ImageBackground source={require('../assests/backcommon.png')}
            style={styles.backgroundImage}>

            <KeyboardAwareScrollView
                //   style={{ backgroundColor: '#4c69a5' }}
                resetScrollToCoords={{ x: 0, y: 0 }}
                contentContainerStyle={styles.container}
                scrollEnabled={false}
            >

                <View style={styles.container} >

                    <View style={{ justifyContent: 'center', alignItems: 'center', margin: 30, }}>
                        <Text h1 h1Style={styles.setColorBlue}>Please Enter{"\n"}Your Details</Text>
                    </View>

                    <TextInput
                        placeholder="Name"
                        style={styles.input}
                    />
                    <TextInput
                        placeholder="Gender"
                        style={styles.input}
                    />
                    <TextInput
                        placeholder="Age"
                        style={styles.input}
                    />
                    <View style={{ alignItems: 'center'}} >
                    <TouchableOpacity style={{
                        backgroundColor: '#05486B', height: 60, 
                        borderRadius: 15, justifyContent: 'center', alignItems: 'center', marginVertical: 30
                    }} onPress ={() => navigation.navigate("Main")} >
                        <Text style={{ color: "white", fontSize: 20, paddingHorizontal: 70, }}>Login</Text>

                    </TouchableOpacity>
                    </View>
                </View >
            </KeyboardAwareScrollView>
        </ImageBackground>

        // </SafeAreaView>

    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        // alignItems: "center",
        // backgroundColor: '#01C1AD',
        paddingBottom: 50,

    },
    backgroundImage: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'cover'
    },
    setColorBlue: {
        color: '#05486B',
        fontWeight: "bold",
    },
    input: {
        height: 50,
        backgroundColor: 'white',
        marginHorizontal: 20,
        marginVertical: 10,
        textAlign: "center",
        borderRadius: 10,
        fontSize: 20,
    }


});

HomeDocs.navigationOptions = () => {
    return {
        header: null
    };
};

export default HomeDocs;