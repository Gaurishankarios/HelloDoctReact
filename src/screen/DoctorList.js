//DoctorList

import React, { useState } from 'react'
import { View, StyleSheet, Alert, Image, ScrollView, Dimensions, FlatList, TouchableOpacity } from 'react-native'
import { Text, Input, Button } from 'react-native-elements'
import Spacer from '../component/Spacer'
import { CardViewWithIcon, CardViewWithImage } from "react-native-simple-card-view";

const DoctorList = ({ navigation }) => {

   
    const products = [
        { id: 101, name: 'Vinod Talla', rate: 1000, qualification: "MBBS, MD", imageURL: "doc.png", location: "Mumbai", Languahe: ["English, ","Hindi"], exp: "20 years" },
        { id: 102, name: 'Chai Takalikar', rate: 500, qualification: 'MBBS', imageURL: "doc.png", location: "Pune" , Languahe: ["English, ","Hindi"], exp: "7 years"},
        { id: 101, name: 'Ismil Nadaf', rate: 400, qualification: 'MBBS', imageURL: "doc.png", location: "Pune", Languahe: ["English, ","Hindi"], exp: "5 years" },
        { id: 101, name: 'Gaurishankar', rate: 600, qualification: 'MBBS', imageURL: "doc.png", location: "Pune", Languahe: ["English, ","Hindi"], exp: "7 years" },
    ];


    return (

        // <ScrollView style={{ marginBottom: 40 }}> 
        <View style={styles.container}>
            <View style={{ alignItems: "center", flexDirection: "row", flexWrap: 'wrap', backgroundColor: '#01C1AD', justifyContent: 'center' }}>
                {/* <CardViewWithImage
                        // width={(200}
                        // source={require('../assests/doctor-icon.jpg')}
                        title={'ENT'}
                        roundedImage={false}
                        style={miniCardStyle}
                        width={(Dimensions.get("window").width / 2) - 20}
                    />

                    <CardViewWithImage
                        // width={(200}
                        // source={require('../assests/Pills-blue.png')}
                        // content={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. At aut distinctio!'}
                        title={'Psychiatry'}
                        // imageWidth={100}
                        // imageHeight={100}
                        roundedImage={false}
                        style={miniCardStyle}
                        width={(Dimensions.get("window").width / 2) - 20}
                    /> */}


                <FlatList
                    data={products}
                    renderItem={({ item }) => {
                        return (
                            <TouchableOpacity style={styles.touchView} 
                            onPress={() => { navigation.navigate('Problem') }} >


                                <View style={{ flexDirection: 'row', }}>
                                    <Image
                                        source={require('../assests/doc.png')}
                                        style={{ width: 150, height: 150 }}
                                    />
                                    <View style={{ flexDirection: 'column' }}>
                                        <View style={{ flexDirection: 'row' }}>
                                            <Text style={styles.textnamestyle}>Name:- </Text>
                                            <Text style={styles.textnamestyle1}>{item.name}</Text>
                                        </View>

                                       

                                        <View style={{ flexDirection: 'row' }}>
                                            <Text style={styles.textnamestyle}>Degree:- </Text>
                                            <Text style={styles.textnamestyle1}>{item.qualification}</Text>
                                        </View>

                                        <View style={{ flexDirection: 'row' }}>
                                            <Text style={styles.textnamestyle}>Location:- </Text>
                                            <Text style={styles.textnamestyle1}>{item.location}</Text>
                                        </View>

                                        <View style={{ flexDirection: 'row' }}>
                                            <Text style={styles.textnamestyle}>Speaks:- </Text>
                                            <Text style={styles.textnamestyle1}>{item.Languahe}</Text>
                                        </View>

                                        <View style={{ flexDirection: 'row' }}>
                                            <Text style={styles.textnamestyle}>Experince:- </Text>
                                            <Text style={styles.textnamestyle1}>{item.exp}</Text>
                                        </View>

                                        <View style={{ flexDirection: 'row' }}>
                                            <Text style={styles.textnamestyle}>Fee:- </Text>
                                            <Text style={styles.textnamestyle1}>{item.rate}</Text>
                                        </View>


                                    </View>


                                </View>

                                {/* <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Text style={styles.textnamestyle}>Price:- </Text>
                                        <Text style={styles.textnamestyle1}>{item.rate}</Text>
                                    </View>
                                    
                                </View> */}
                            </TouchableOpacity>
                        )
                    }}
                />

            </View>
        </View>

        // </ScrollView>

    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        alignItems: "center",
        backgroundColor: '#01C1AD',
        // paddingBottom: 50,

    },

    touchView: {
        margin: 5,
        marginHorizontal: 10,
        padding: 10,
        backgroundColor: 'white',
        minHeight: 70,
        maxHeight: 180,
        justifyContent: 'center',
    },
    textnamestyle: {
        fontSize: 16,
        fontWeight: "bold",
        color: '#03106E',
        padding: 2,
    },
    textnamestyle1: {
        fontSize: 15,
        fontWeight: "bold",
        color: '#FF8001',
        padding: 2,
        alignItems: 'flex-end'
    },

});

export default DoctorList;