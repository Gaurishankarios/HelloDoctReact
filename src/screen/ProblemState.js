//ProblemState
//SignInScreen
import React, { useState } from 'react'
import { View, StyleSheet, Alert, Image, ScrollView, Dimensions, TouchableOpacity, TextInput } from 'react-native'
import { Text, Input, Button, } from 'react-native-elements'
import Spacer from '../component/Spacer'
import { CardViewWithIcon, CardViewWithImage } from "react-native-simple-card-view";
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';


const ProblemState = ({ navigation }) => {

    var radio_props = [
        { label: 'Myself ', value: 0 },
        { label: 'Spouse ', value: 1 },
        { label: 'Son/Daughter ', value: 2 },
        // { label: 'Son ', value: 2 },
        // { label: 'Husband', value: 2 },
        { label: 'Other', value: 3 },

    ];

    var radio_gender = [
        { label: 'Male  ', value: 0 },
        { label: 'Female  ', value: 1 },

    ];

    var value = 0

    return (

        //#01C1AD
        <ScrollView style={{ backgroundColor: "white" }}>
            <View style={styles.container}>


                <TouchableOpacity style={styles.touchView}
                // onPress={() => { navigation.navigate('Problem') }}
                >


                    <View style={{ flexDirection: 'row', }}>
                        <Image
                            source={require('../assests/doc.png')}
                            style={{ width: 150, height: 150 }}
                        />
                        <View style={{ flexDirection: 'column' }}>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={styles.textnamestyle}>Name:- </Text>
                                <Text style={styles.textnamestyle1}>DoctorName</Text>
                            </View>



                            <View style={{ flexDirection: 'row' }}>
                                <Text style={styles.textnamestyle}>Degree:- </Text>
                                <Text style={styles.textnamestyle1}>MBBS,MD</Text>
                            </View>

                            <View style={{ flexDirection: 'row' }}>
                                <Text style={styles.textnamestyle}>Location:- </Text>
                                <Text style={styles.textnamestyle1}>Pune</Text>
                            </View>

                            <View style={{ flexDirection: 'row' }}>
                                <Text style={styles.textnamestyle}>Speaks:- </Text>
                                <Text style={styles.textnamestyle1}>English, Hindi</Text>
                            </View>

                            <View style={{ flexDirection: 'row' }}>
                                <Text style={styles.textnamestyle}>Experince:- </Text>
                                <Text style={styles.textnamestyle1}>8 years</Text>
                            </View>

                            <View style={{ flexDirection: 'row' }}>
                                <Text style={styles.textnamestyle}>Fee:- </Text>
                                <Text style={styles.textnamestyle1}>700</Text>
                            </View>


                        </View>


                    </View>


                </TouchableOpacity>

                <TextInput multiline style={{ height: 100, backgroundColor: 'white', margin: 10, borderColor: "black", borderWidth: 2,  }}
                    placeholder="Write your problem" />


                <Text style={{ fontSize: 20, margin: 10 }}>Who is the patient?</Text>

                <ScrollView horizontal={true} style={{ margin: 10 }}>
                    <RadioForm
                        radio_props={radio_props}
                        margin={10}
                        initial={0}
                        formHorizontal={true}
                        // labelHorizontal={true}
                        buttonColor={'green'}
                        animation={true}
                        onPress={(value) => { ({ value: value }) }}
                    />
                </ScrollView>


                <Input
                    labelStyle={{ color: 'grey', fontWeight: 'normal' }}
                    label="Name" //value={employeeId}
                    value="Mr. XYZ PQR"
                    //onChangeText={setemployeeId}
                    autoCapitalize='none'
                    autoCorrect={false}
                    // keyboardType='number-pad'
                    returnKeyType='done'
                    maxLength={10}
                    clearButtonMode="always"


                />

                {/* <View style={{ flexDirection: 'row', justifyContent: "center", alignContent: "center" }}>
                    <Input
                        labelStyle={{ color: 'grey', fontWeight: 'normal', width:'30%' }}
                        label="Age" //value={employeeId}
                        //onChangeText={setemployeeId}
                        autoCapitalize='none'
                        autoCorrect={false}
                        keyboardType='number-pad'
                        returnKeyType='done'
                        maxLength={3}
                        clearButtonMode="always"
                        
                    />
                    <Input
                        labelStyle={{ color: 'grey', fontWeight: 'normal', width:'30%' }}
                        label="Gender" //value={employeeId}
                        //onChangeText={setemployeeId}
                        autoCapitalize='none'
                        autoCorrect={false}
                        // keyboardType='number-pad'
                        returnKeyType='done'
                        maxLength={10}
                        clearButtonMode="always"
                        

                    />
                </View> */}
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'flex-start',
                    margin: 5,
                    height: 60
                }}>
                    <View style={styles.inputWrap}>
                        <Text style={styles.label} >Age</Text>
                        <TextInput style={styles.inputDate}
                            value="27" />
                    </View>

                    <View style={styles.inputWrap}>
                        <Text style={styles.label}>Gender</Text>
                        {/* <TextInput style={styles.inputCvv} maxLength={10}
                            value="Male" /> */}

                        <RadioForm
                            radio_props={radio_gender}
                            margin={10}
                            initial={0}
                            formHorizontal={true}
                            // labelHorizontal={true}
                            buttonColor={'green'}
                            animation={true}
                            onPress={(value) => { ({ value: value }) }}
                        />
                    </View>
                </View>

                <Input
                    labelStyle={{ color: 'grey', fontWeight: 'normal' }}
                    label="Allergic to" //value={employeeId}
                    value="Dust"
                    //onChangeText={setemployeeId}
                    autoCapitalize='none'
                    autoCorrect={false}
                    // keyboardType='number-pad'
                    returnKeyType='done'
                    maxLength={10}
                    clearButtonMode="always"


                />
                <Text style={{ fontSize: 20, margin: 10 }}>How would you like to contact?</Text>
                <View style={{ flexDirection: 'row', justifyContent: "space-around", alignContent: "center", margin: 10 }}>
                    <Button title="Video Call" />
                    <Button title="Audio Call" />
                </View>




            </View>

        </ScrollView>



    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: "center",
        // backgroundColor: '#01C1AD',
        // paddingBottom: 50,

    },

    touchView: {
        margin: 10,
        padding: 2,
        backgroundColor: 'white',
        minHeight: 70,
        maxHeight: 180,
        // justifyContent: 'center',
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
    inputWrap: {
        flex: 1,
        justifyContent: 'space-between',
        flexDirection: 'column',
        margin: 10,
    },
    inputDate: {
        flex: 1,
        // backgroundColor: '#108c96',
    },
    inputCvv: {
        flex: 1,
        // backgroundColor: '#6fa511',

    }



});

export default ProblemState;