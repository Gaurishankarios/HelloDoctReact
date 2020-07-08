//DoctorProfile
import React from 'react'
import { StyleSheet, View, Button, Text, TouchableOpacity, SafeAreaView, ScrollView, Image } from 'react-native'
// import { create } from 'domain';

const DoctorProfile = ({ navigation }) => {
    return (
        <SafeAreaView>
            {/* <ScrollView> */}
            <TouchableOpacity style={{ backgroundColor: '#61BFFF', height: 250, borderBottomLeftRadius: 50, borderBottomRightRadius: 50 }} onPress={this.toggleDrawer.bind(this)} >

                <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
                    {/* <Button title='Back'/> */}
                    <Text style={{ fontSize: 18, marginTop: 20, color: 'white', fontWeight: 'bold' }}>Profile</Text>
                </View>
            </TouchableOpacity>

            <View
                style={{
                    height: "70%",
                    // flex: 5,
                    backgroundColor: 'white',
                    flexDirection: 'column',
                    // justifyContent: 'center',
                    padding: 5,
                    // alignItems: 'center',
                    borderRadius: 10,
                    margin: 30,
                    marginTop: -100,

                }}>

                <Image style={{
                    width: 140, height: 140, borderRadius: 70, marginTop: -80,
                    left: '30%', borderColor: "#61BFFF", borderWidth: 7
                }}
                    source={require("../assests/DocImg.jpg")}
                    resizeMode={true} />

                <View style={{ justifyContent: 'center', alignSelf: 'center', alignItems: 'center' }}>
                    <Text style={{ fontSize: 25, padding: 10 }}>Dr. Samin k. Sharma</Text>
                    <Text style={{ fontSize: 20, padding: 0, alignItems: 'center' }}>7 years of experince</Text>

                    <TouchableOpacity style={{
                        backgroundColor: 'white', height: 60, width:200, borderRadius: 15, borderColor: 'black', borderWidth: 1,
                        justifyContent: 'center', alignItems: 'center', margin: 20
                    }}
                    // onPress={() => navigation.navigate("Profile")} 
                    >
                        <Text style={{ color: "#61BFFF", fontSize: 15, padding: 5 }}>Book an appointment</Text>

                    </TouchableOpacity>

                    <Text style={{ fontSize: 15, padding: 5, alignItems: 'center' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</Text>
                </View>



            </View>
            {/* </ScrollView> */}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({

})


DoctorProfile.navigationOptions = () => {
    return {
        header: null,
        title: null,
        
    };
};
export default DoctorProfile;