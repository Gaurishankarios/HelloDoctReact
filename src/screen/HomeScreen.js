import React from 'react'
import { View, StyleSheet, Alert, Image, ScrollView, Dimensions, TouchableOpacity, FlatList, SafeAreaView } from 'react-native'
import { CardViewWithIcon, CardViewWithImage } from "react-native-simple-card-view";
import { Text, Input, Button } from 'react-native-elements'

import { DrawerNavigator } from 'react-navigation';

const HomeScreen = ({ navigation }) => {

    const miniCardStyle = {
        shadowColor: '#000000',
        shadowOffsetWidth: 5,
        shadowOffsetHeight: 5,
        shadowOpacity: 0.1,
        hadowRadius: 10,
        bgColor: '#ffffff',
        padding: 5,
        margin: 10,
        borderRadius: 3,
        elevation: 5,
        borderRadius: 15,
        // width: (Dimensions.get("window").width / 2) - 30,
        width: 100,
        height: 120,

    };

    const products = [
        { id: 101, name: 'Vinod Talla', rate: 1000, qualification: "MBBS, MD", imageURL: require("../assests/DocImg.jpg"), location: "Mumbai", Languahe: ["English, ", "Hindi"], exp: "20 years" },
        { id: 102, name: 'Chai Takalikar', rate: 500, qualification: 'MBBS', imageURL: require("../assests/DocImg.jpg"), location: "Pune", Languahe: ["English, ", "Hindi"], exp: "7 years" },
        { id: 104, name: 'Ismil Nadaf', rate: 400, qualification: 'MBBS', imageURL: require("../assests/DocImg.jpg"), location: "Pune", Languahe: ["English, ", "Hindi"], exp: "5 years" },
        { id: 105, name: 'Gaurishankar', rate: 600, qualification: 'MBBS', imageURL: require("../assests/DocImg.jpg"), location: "Pune", Languahe: ["English, ", "Hindi"], exp: "7 years" },
    ];



    toggleDrawer = () => {

        console.log("here");

        navigation.toggleDrawer();
        // navigation.navigate('DrawerOpen');

    }


    return (


        <SafeAreaView>
            <ScrollView>

                <TouchableOpacity style={{marginLeft: 15}} onPress={this.toggleDrawer.bind(this)} >

                    <Image
                        source={{ uri: 'https://reactnativecode.com/wp-content/uploads/2018/04/hamburger_icon.png' }}
                        style={{ width: 25, height: 25, marginLeft: 5 }}
                    />

                </TouchableOpacity>


                <Text style={{ fontSize: 18, margin: 18, marginTop: 20, marginBottom: 5 }}>What you are looking for?</Text>
                <ScrollView style={{ height: 200 }}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}>


                    <TouchableOpacity style={styles.miniCardStyle1} onPress={() => navigation.navigate('FindDr')}>
                        <Image style={{ width: 110, height: 110 }}
                            source={require('../assests/testdoctor.png')}
                            resizeMode={true} />
                        <Text style={{ color: 'white', fontSize: 16, alignItems: 'center', textAlign: 'center' }}>Find a Doctor</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.miniCardStyleAppoinment}>
                        <Image style={{ width: 100, height: 110 }}
                            source={require('../assests/RequestanAppointment.png')}
                            resizeMode={true} />
                        <Text style={{ color: 'white', fontSize: 16, alignItems: 'center', textAlign: 'center' }}>Request an Appointment</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.miniCardStyleHealthPackg}>
                        <Image style={{ width: 100, height: 100 }}
                            source={require('../assests/BookHealthPackage.png')}
                            resizeMode={true} />
                        <Text style={{ color: 'white', fontSize: 16, textAlign: 'center' }}>Book Health Package</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.miniCardStyleLabReport}>
                        <Image style={{ width: 100, height: 100 }}
                            source={require('../assests/ViewLabReports.png')}
                            resizeMode={true} />
                        <Text style={{ color: 'white', fontSize: 16, textAlign: 'center' }}>View Lab Reports</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.miniCardStyleInternational}>
                        <Image style={{ width: 100, height: 100 }}
                            source={require('../assests/InternationalPatientsAssistance.png')}
                            resizeMode={true} />
                        <Text style={{ color: 'white', fontSize: 16, textAlign: 'center' }}>International Patients Assistance</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.miniCardStylePrevation}>
                        <Image style={{ width: 100, height: 100, textAlign: 'center' }}
                            source={require('../assests/Prevention.png')}
                            resizeMode={true} />
                        <Text style={{ color: 'white', fontSize: 16 }}>Prevention</Text>
                    </TouchableOpacity>

                </ScrollView>

                <Text style={{ fontSize: 18, margin: 18, marginTop: 20, marginBottom: 5 }}>Specialities</Text>

                <ScrollView style={{ height: 140, marginHorizontal: 10, }}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}>

                    <CardViewWithImage
                        source={require('../assests/test80.png')}  //ENT-01
                        imageWidth={80}
                        imageHeight={80}
                        resizeMode={true}
                        title={'ENT'}
                        roundedImage={false}
                        style={miniCardStyle}
                        titleFontSize={11}
                        width={100}
                    // onPress={() => navigation.navigate('DoctorList')}
                    />

                    <CardViewWithImage
                        source={require('../assests/Psychiatry-01.png')}
                        imageWidth={80}
                        imageHeight={80}
                        resizeMode={true}
                        title={'Psychiatry'}
                        roundedImage={false}
                        style={miniCardStyle}
                        titleFontSize={11}
                        width={100}
                    />

                    <CardViewWithImage
                        // width={(200}
                        source={require('../assests/Ayurveda-01.png')}
                        title={'Ayurveda'}
                        roundedImage={false}
                        style={miniCardStyle}
                        width={100}
                        imageWidth={80}
                        imageHeight={80}
                        titleFontSize={11}
                    />

                    <CardViewWithImage
                        // width={(200}
                        source={require('../assests/Paediatrician-01.png')}
                        title={'Paediatrician'}
                        roundedImage={false}
                        style={miniCardStyle}
                        width={100}
                        imageWidth={80}
                        imageHeight={80}
                        titleFontSize={11}
                    />

                    <CardViewWithImage
                        source={require('../assests/Orthopedist-01.png')}
                        title={'Orthopedist'}
                        roundedImage={false}
                        style={miniCardStyle}
                        width={100}
                        imageWidth={80}
                        imageHeight={80}
                        titleFontSize={11}
                    />

                    <CardViewWithImage
                        // width={(200}
                        source={require('../assests/Caediologist-01.png')}
                        title={'Cardiologist'}
                        roundedImage={false}
                        style={miniCardStyle}
                        width={100}
                        imageWidth={80}
                        imageHeight={80}
                        titleFontSize={11}
                    />

                    <CardViewWithImage
                        source={require('../assests/general-physician-01.png')}
                        title={'General Physician'}
                        roundedImage={false}
                        style={miniCardStyle}
                        width={100}
                        imageWidth={80}
                        imageHeight={80}
                        titleFontSize={11}
                    />

                    <CardViewWithImage
                        source={require('../assests/Gastroenterologis-01.png')}
                        title={'Gastroenterologis'}
                        roundedImage={false}
                        style={miniCardStyle}
                        width={100}
                        imageWidth={80}
                        imageHeight={80}
                        titleFontSize={11}
                    />


                </ScrollView>

                <Text style={{ fontSize: 18, margin: 18, marginTop: 20 }}>Get to know more our team experts</Text>


                <FlatList
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    data={products}
                    renderItem={({ item }) => {
                        return (
                            <TouchableOpacity style={styles.miniCardStyleScroll}>
                                <Image style={{ width: 90, height: 100, borderRadius: 50 }}
                                    source={item.imageURL}
                                    resizeMode={true} />
                                <Text style={{ color: 'black', fontSize: 16, alignItems: 'center', textAlign: 'center' }}>{item.name}</Text>
                                <Text style={{ color: 'black', fontSize: 16, alignItems: 'center', textAlign: 'center' }}>{item.exp}</Text>
                            </TouchableOpacity>
                        )
                    }}
                />
            </ScrollView>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({

    miniCardStyle1: {
        shadowColor: '#000000',
        shadowOpacity: 0.1,
        backgroundColor: '#00DBD4',
        padding: 10,
        margin: 18,
        borderRadius: 3,
        elevation: 5,
        borderRadius: 20,
        width: (Dimensions.get("window").width / 2) - 25,
        justifyContent: 'center',
        alignItems: 'center'

    },

    miniCardStyleAppoinment: {
        shadowColor: '#000000',
        shadowOpacity: 0.1,
        backgroundColor: '#9DD692',
        padding: 10,
        margin: 18,
        marginLeft: 0,
        borderRadius: 3,
        elevation: 5,
        borderRadius: 20,
        width: (Dimensions.get("window").width / 2) - 25,
        justifyContent: 'center',
        alignItems: 'center'
    },  //#BB9695
    miniCardStyleHealthPackg: {
        shadowColor: '#000000',
        shadowOpacity: 0.1,
        backgroundColor: '#BB9695',
        padding: 10,
        margin: 18,
        marginLeft: 0,
        borderRadius: 3,
        elevation: 5,
        borderRadius: 20,
        width: (Dimensions.get("window").width / 2) - 25,
        justifyContent: 'center',
        alignItems: 'center'
    },
    miniCardStyleLabReport: {
        shadowColor: '#000000',
        shadowOpacity: 0.1,
        backgroundColor: '#D1AC8C',
        padding: 10,
        margin: 18,
        marginLeft: 0,
        borderRadius: 3,
        elevation: 5,
        borderRadius: 20,
        width: (Dimensions.get("window").width / 2) - 25,
        justifyContent: 'center',
        alignItems: 'center'
    },
    miniCardStyleInternational: {
        shadowColor: '#000000',
        shadowOpacity: 0.1,
        backgroundColor: '#A07CC2',
        padding: 10,
        margin: 18,
        marginLeft: 0,
        borderRadius: 3,
        elevation: 5,
        borderRadius: 20,
        width: (Dimensions.get("window").width / 2) - 25,
        justifyContent: 'center',
        alignItems: 'center'
    },  // #7C90C9
    miniCardStylePrevation: {
        shadowColor: '#000000',
        shadowOpacity: 0.1,
        backgroundColor: '#7C90C9',
        padding: 10,
        margin: 18,
        marginLeft: 0,
        borderRadius: 3,
        elevation: 5,
        borderRadius: 20,
        width: (Dimensions.get("window").width / 2) - 25,
        justifyContent: 'center',
        alignItems: 'center'

    },

    miniCardStyleScroll: {
        shadowColor: '#000000',
        shadowOpacity: 0.1,
        backgroundColor: 'white',
        padding: 10,
        marginLeft: 18,
        borderRadius: 3,
        elevation: 5,
        borderRadius: 20,
        width: (Dimensions.get("window").width / 2) - 25,
        justifyContent: 'center',
        alignItems: 'center'

    },


});


// HomeScreen.navigationOptions = () => {
//     return {
//         header: null,
//         headerVisible: false,
//     };
// };

HomeScreen.navigationOptions = ({ /*navigation*/ }) => {
    return {
        header: null
    }
}



export default HomeScreen;

