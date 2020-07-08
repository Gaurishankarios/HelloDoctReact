
import React, { useState } from 'react'
import { View, StyleSheet, Alert, Image, ScrollView, Dimensions, FlatList, TouchableOpacity, SafeAreaView, TextInput } from 'react-native'
import { Text, Input, Button } from 'react-native-elements'
import Spacer from '../component/Spacer'
import { CardViewWithIcon, CardViewWithImage } from "react-native-simple-card-view";
// import { Searchbar } from 'react-native-paper';
// import { SearchBar } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialIcons'
import SearchBar from 'react-native-search-bar';



const FindADoctor = ({ navigation }) => {


    const [seachtext, setsearchtext] = useState('')
    // const products = [
    //     { id: 101, name: 'Akshay ', rate: 700, qualification: "Sexology", imageURL: "doc.png", location: "26-May", Languahe: ["English, ", "Hindi"], exp: "7 years" },
    //     { id: 102, name: 'Kiran', rate: 500, qualification: 'General Medicine', imageURL: "doc.png", location: "20-May", Languahe: ["English, ", "Hindi"], exp: "7 years" },
    //     { id: 101, name: 'Shweta', rate: 600, qualification: 'Hair Scalp Care', imageURL: "doc.png", location: "10-April", Languahe: ["English, ", "Hindi"], exp: "7 years" },
    //     { id: 101, name: 'Gaurishankar', rate: 600, qualification: 'General Medicine', imageURL: "doc.png", location: "31-March ", Languahe: ["English, ", "Hindi"], exp: "7 years" },
    // ];
    const products = [
        { id: 101, name: 'Vinod Talla', rate: 1000, qualification: "MBBS, MD", imageURL: require("../assests/DocImg.jpg"), location: "Mumbai", Languahe: ["English, ", "Hindi"], exp: "20 years" },
        { id: 102, name: 'Chai Takalikar', rate: 500, qualification: 'MBBS', imageURL: require("../assests/DocImg.jpg"), location: "Pune", Languahe: ["English, ", "Hindi"], exp: "7 years" },
        { id: 104, name: 'Ismil Nadaf', rate: 400, qualification: 'MBBS', imageURL: require("../assests/DocImg.jpg"), location: "Pune", Languahe: ["English, ", "Hindi"], exp: "5 years" },
        { id: 105, name: 'Gaurishankar', rate: 600, qualification: 'MBBS', imageURL: require("../assests/DocImg.jpg"), location: "Pune", Languahe: ["English, ", "Hindi"], exp: "7 years" },
    ];

    updateSearch = (search) => {
        // this.setsearchtext({ search });
        setsearchtext(search)
    };

    Icon.loadFont();





    return (


        <SafeAreaView>
            <ScrollView>
                <TouchableOpacity style={{ backgroundColor: '#61BFFF', height: 250, borderBottomLeftRadius: 60, borderBottomRightRadius: 60 }} onPress={this.toggleDrawer.bind(this)} >

                    <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
                        {/* <Button title='Back'/> */}
                        <Text style={{ fontSize: 18, marginTop: 20, color: 'white', fontWeight: 'bold' }}>FIND A DOCTOR</Text>
                    </View>

                    <View style={{ flex: 1, paddingTop: 20 }}>

                        <View
                            style={{
                                height: 50,
                                backgroundColor: 'white',
                                flexDirection: 'row',
                                padding: 5,
                                alignItems: 'center',
                                borderRadius: 10,
                                margin: 20
                            }}>
                            <Icon name="search" style={{ fontSize: 25 }} />
                            <TextInput placeholder="Search" style={{ fontSize: 25, paddingLeft: 15 }} />
                        </View>

                        <View
                            style={{
                                height: 50,
                                backgroundColor: 'white',
                                flexDirection: 'row',
                                padding: 5,
                                alignItems: 'center',
                                borderRadius: 10,
                                margin: 20,
                                marginTop: 0,
                            }}>
                            <TextInput placeholder="Search category" style={{ fontSize: 25, paddingLeft: 15 }} />
                        </View>
                    </View>





                </TouchableOpacity>

                <View>
                    <FlatList
                        // horizontal={true}
                        // showsHorizontalScrollIndicator={false}
                        data={products}
                        numColumns={2}
                        renderItem={({ item }) => {
                            return (
                                <TouchableOpacity style={styles.miniCardStyleScroll}>
                                    <Image style={{ width: 100, height: 100, borderRadius: 50 }}
                                        source={item.imageURL}
                                        resizeMode={true} />
                                    <Text style={{ color: 'black', fontSize: 16, alignItems: 'center', textAlign: 'center' }}>{item.name}</Text>
                                    <Text style={{ color: 'black', fontSize: 16, alignItems: 'center', textAlign: 'center' }}>{item.exp}</Text>

                                    {/* <Button title="View Profile" /> */}

                                    <View style={{flexDirection: 'row',}}>
                                        <TouchableOpacity style={{
                                            backgroundColor: '#05486B', height: 30, borderRadius: 5,
                                            justifyContent: 'center', alignItems: 'center', margin: 5
                                        }}
                                        onPress={() => navigation.navigate("Profile")} 
                                        >
                                            <Text style={{ color: "white", fontSize: 10, padding: 5 }}>View Profile</Text>

                                        </TouchableOpacity>

                                        <TouchableOpacity style={{
                                            backgroundColor: 'white', height: 30, borderRadius: 5, borderColor: 'black', borderWidth: 1,
                                            justifyContent: 'center', alignItems: 'center', margin: 5
                                        }} 
                                        onPress={() => navigation.navigate("Book")} 
                                        >
                                            <Text style={{ color: "#61BFFF", fontSize: 10, padding: 5  }}>Book Now</Text>

                                        </TouchableOpacity>

                                    </View>
                                </TouchableOpacity>
                            )
                        }}
                    />
                </View>

            </ScrollView>
        </SafeAreaView>


        // <View style={styles.container}>
        //     <View style={{ alignItems: "center", flexDirection: "row", flexWrap: 'wrap', backgroundColor: '#01C1AD', justifyContent: 'center' }}>



        //         <FlatList
        //             data={products}
        //             renderItem={({ item }) => {
        //                 return (
        //                     <TouchableOpacity style={styles.touchView}
        //                     // onPress={() => { navigation.navigate('Problem') }} 
        //                     >


        //                         <View style={{ flexDirection: 'row', }}>
        //                             <Image
        //                                 source={require('../assests/doc.png')}
        //                                 style={{ width: 100, height: 100 }}
        //                             />
        //                             <View style={{ flexDirection: 'column' }}>
        //                                 <View style={{ flexDirection: 'row' }}>
        //                                     <Text style={styles.textnamestyle}>Name:- </Text>
        //                                     <Text style={styles.textnamestyle1}>{item.name}</Text>
        //                                 </View>



        //                                 <View style={{ flexDirection: 'row' }}>
        //                                     <Text style={styles.textnamestyle}>Speciality:- </Text>
        //                                     <Text style={styles.textnamestyle1}>{item.qualification}</Text>
        //                                 </View>

        //                                 <View style={{ flexDirection: 'row' }}>
        //                                     <Text style={styles.textnamestyle}>Last consulted on:- </Text>
        //                                     <Text style={styles.textnamestyle1}>{item.location}</Text>
        //                                 </View>
        //                             </View>
        //                         </View>
        //                     </TouchableOpacity>
        //                 )
        //             }}
        //         />

        //     </View>
        // </View>

    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: '#01C1AD',
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
    miniCardStyleScroll: {
        shadowColor: '#000000',
        shadowOpacity: 0.1,
        backgroundColor: 'white',
        padding: 10,
        // marginLeft: 15,
        margin: 15,
        marginRight: 0,
        borderRadius: 3,
        elevation: 5,
        borderRadius: 20,
        width: (Dimensions.get("window").width / 2) - 25,
        justifyContent: 'center',
        alignItems: 'center'

    },

});

FindADoctor.navigationOptions = () => {
    return {
        header: null,
        title: null,
        
    };
};

export default FindADoctor;