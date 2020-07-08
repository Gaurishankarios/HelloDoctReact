//Followup
import React, { useState } from 'react'
import { View, StyleSheet, Alert, Image, ScrollView, Dimensions } from 'react-native'
import { Text, Input, Button } from 'react-native-elements'
import Spacer from '../component/Spacer'
import { CardViewWithIcon, CardViewWithImage } from "react-native-simple-card-view";

const Followup = ({ navigation }) => {

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

        <View style={styles.container}>
            <View style={{ alignItems: "center", flexDirection: "row", flexWrap: 'wrap', backgroundColor: '#01C1AD', justifyContent: 'center' }}>
                <CardViewWithImage
                    // width={(200}
                    source={require('../assests/doctor-icon.jpg')}
                    title={'Consult now'}
                    roundedImage={false}
                    style={miniCardStyle}
                    width={(Dimensions.get("window").width / 2) - 20}
                    onPress = {() => navigation.navigate('Consult')}
                />

                <CardViewWithImage
                    // width={(200}
                    source={require('../assests/Pills-blue.png')}
                    // content={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. At aut distinctio!'}
                    title={'Follow up'}
                    // imageWidth={100}
                    // imageHeight={100}
                    roundedImage={false}
                    style={miniCardStyle}
                    width={(Dimensions.get("window").width / 2) - 20}

                />



            </View>
        </View>



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

export default Followup;