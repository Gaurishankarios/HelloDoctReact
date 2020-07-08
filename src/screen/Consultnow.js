//Consultnow
//SignInScreen
import React, { useState } from 'react'
import { View, StyleSheet, Alert, Image, ScrollView, Dimensions } from 'react-native'
import { Text, Input, Button } from 'react-native-elements'
import Spacer from '../component/Spacer'
import { CardViewWithIcon, CardViewWithImage } from "react-native-simple-card-view";

const Consultnow = ({ navigation }) => {

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

        <ScrollView style={{ marginBottom: 40 }}> 
            <View style={styles.container}>
                <View style={{ alignItems: "center", flexDirection: "row", flexWrap: 'wrap', backgroundColor: '#01C1AD', justifyContent: 'center' }}>
                    <CardViewWithImage
                        // width={(200}
                        source={require('../assests/ENT-01.png')}
                        title={'ENT'}
                        roundedImage={false}
                        style={miniCardStyle}
                        width={(Dimensions.get("window").width / 2) - 20}
                        onPress = {() => navigation.navigate('DoctorList')}
                    />

                    <CardViewWithImage
                        // width={(200}
                        source={require('../assests/Psychiatry-01.png')}
                        // content={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. At aut distinctio!'}
                        title={'Psychiatry'}
                        // imageWidth={100}
                        // imageHeight={100}
                        roundedImage={false}
                        style={miniCardStyle}
                        width={(Dimensions.get("window").width / 2) - 20}

                    />

                    <CardViewWithImage
                        // width={(200}
                        source={require('../assests/Ayurveda-01.png')}
                        title={'Ayurveda'}
                        roundedImage={false}
                        style={miniCardStyle}
                        width={(Dimensions.get("window").width / 2) - 20}
                    />

                    <CardViewWithImage
                        // width={(200}
                        source={require('../assests/Paediatrician-01.png')}
                        title={'Paediatrician'}
                        roundedImage={false}
                        style={miniCardStyle}
                        width={(Dimensions.get("window").width / 2) - 20}
                    />
                    <CardViewWithImage
                        // width={(200}
                        source={require('../assests/Orthopedist-01.png')}
                        title={'Orthopedist'}
                        roundedImage={false}
                        style={miniCardStyle}
                        width={(Dimensions.get("window").width / 2) - 20}
                    />

                    <CardViewWithImage
                        // width={(200}
                        source={require('../assests/Caediologist-01.png')}
                        title={'Cardiologist'}
                        roundedImage={false}
                        style={miniCardStyle}
                        width={(Dimensions.get("window").width / 2) - 20}
                    />

                    <CardViewWithImage
                        // width={(200}
                        source={require('../assests/general-physician-01.png')}
                        title={'General Physician'}
                        roundedImage={false}
                        style={miniCardStyle}
                        width={(Dimensions.get("window").width / 2) - 20}
                    />

                    {/* <CardViewWithImage
                        // width={(200}
                        // source={require('../assests/doctor-icon.jpg')}
                        title={'Radiologist'}
                        roundedImage={false}
                        style={miniCardStyle}
                        width={(Dimensions.get("window").width / 2) - 20}
                    /> */}

                    <CardViewWithImage
                        // width={(200}
                        source={require('../assests/Gastroenterologis-01.png')}
                        title={'Gastroenterologis'}
                        roundedImage={false}
                        style={miniCardStyle}
                        width={(Dimensions.get("window").width / 2) - 20}
                    />



                </View>
            </View>

        </ScrollView>

    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: "center",
        backgroundColor: '#01C1AD',
        paddingBottom: 50,

    },


});

export default Consultnow;