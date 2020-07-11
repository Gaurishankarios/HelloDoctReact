//BookNow
//DoctorProfile
import React, { useState } from 'react'
import { StyleSheet, View, Button, Text, TouchableOpacity, SafeAreaView, ScrollView, Image, FlatList, RefreshControl } from 'react-native'
// import { create } from 'domain';
import moment from 'moment';
import CalendarStrip from 'react-native-calendar-strip';
import { NavigationEvents } from 'react-navigation';
// import moment from 'moment-timezone';  // only if timezone is needed


const timeslote = [
    { id: 1, timefree: "10:00AM", color: 'green' },
    { id: 2, timefree: "11:00AM", color: 'green' },
    { id: 3, timefree: "12:00PM", color: 'green' },
    { id: 4, timefree: "1:00PM", color: 'green' },
    { id: 5, timefree: "2:00PM", color: 'green' },
    { id: 6, timefree: "3:00PM", color: 'green' },
    { id: 7, timefree: "4:00PM", color: 'red' },
    { id: 8, timefree: "5:00PM", color: 'green' },
    { id: 9, timefree: "6:00PM", color: 'green' },
    { id: 10, timefree: "7:00PM", color: 'green' },
    { id: 11, timefree: "8:00PM", color: 'green' },
    { id: 12, timefree: "9:00PM", color: 'green' },
];

var arr = [];
var tmparr = [false, false, false, false, false, false, false, false, false, false, false, false];
const BookNow = ({ navigation }) => {


    const [on, seton] = useState()
    let datesWhitelist = [
        {
            start: moment(),
            end: moment().add(30, 'days'), // total 4 days enabled
        },
    ];
    let datesBlacklist = [moment().add(0, 'days')]; // 1 day disabled

    const [date, setdate] = useState(false);

    console.log(date);

    const onDateSelected = (date) => {
        // this.setState({daySelected: date});
        console.log(date);
    }

    const actionItem = (item, index) => {
        console.log(item, index, timeslote[index].color)
        item.color = "black"
        timeslote[index].color = "#61BFFF"

        arr.push(index);
        console.log(arr)
        if (arr.length > 1) {
            timeslote[arr[0]].color = "green"
            //  arr.pop[0];
            // arr.splice(index, 1);
            // if (index > -1) {
            arr = [arr[1]]
            console.log(arr)
        }
        // RefreshControl=""
        seton(on => !on)



    }


    return (
        <SafeAreaView>
            <ScrollView>
                <TouchableOpacity style={{ backgroundColor: '#61BFFF', height: 250, borderBottomLeftRadius: 50, borderBottomRightRadius: 50 }} onPress={this.toggleDrawer.bind(this)} >

                    <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
                        {/* <Button title='Back' onPress={() => navigation.pop()}/> */}
                        {/* <Button title="Back"/> */}
                        <Text style={{ fontSize: 18, marginTop: 20, color: 'white', fontWeight: 'bold' }}>BookNow</Text>
                        {/* <Button title="    "/> */}
                    </View>
                </TouchableOpacity>

                <View
                    style={{
                        // height: "70%",
                        flex: 1,
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
                    </View>

                    <CalendarStrip
                        calendarAnimation={{ type: 'sequence', duration: 30 }}
                        daySelectionAnimation={{
                            type: 'border',
                            duration: 200,
                            borderWidth: 1.5,
                            borderHighlightColor: 'black',

                        }}
                        style={{ height: 100, paddingTop: 20, paddingBottom: 10, marginVertical: 15, marginHorizontal: -5, }}
                        calendarHeaderStyle={{ color: 'black' }}
                        calendarColor={'#EDF0F2'}
                        dateNumberStyle={{ color: 'black' }}
                        dateNameStyle={{ color: 'black' }}
                        highlightDateNumberStyle={{ color: 'green' }}
                        highlightDateNameStyle={{ color: 'green' }}
                        disabledDateNameStyle={{ color: 'purpol' }}
                        disabledDateNumberStyle={{ color: 'purpol' }}
                        datesWhitelist={datesWhitelist}
                        // datesBlacklist={datesBlacklist}
                        iconContainer={{ flex: 0.05 }}
                        selectedDate={new Date()}
                        // selectedDate={moment(this.props.startDateFormatted)}
                        onDateSelected={date => onDateSelected(date)}
                    // onDateSelected={setdate => console.log(setdate)}

                    />
                    <Text style={{ margin: 0, height: 20 }}>
                        Morning
                </Text>
                    <ScrollView horizontal={true} >
                        {/* <Button title="10:00"/> */}
                        <TouchableOpacity style={{
                            backgroundColor: tmparr[0]? "#61BFFF": "white", height: 30,width: 80, borderRadius: 5, borderColor: 'black', borderWidth: 1,
                            justifyContent: 'center', alignItems: 'center', margin: 5
                        }}
                        onPress={() =>{tmparr = [true, false, false, false, false, false, false, false, false, false, false, false], seton(on => !on)}}
                        >
                            <Text style={{ color: "black", fontSize: 15, padding: 5, paddingHorizontal: 10 }}>05:00</Text>

                        </TouchableOpacity>
                        <TouchableOpacity style={{
                             backgroundColor: tmparr[1]? "#61BFFF": "white", height: 30,width: 80, borderRadius: 5, borderColor: 'black', borderWidth: 1,
                            justifyContent: 'center', alignItems: 'center', margin: 5
                        }}
                        onPress={() =>{tmparr = [false, true, false, false, false, false, false, false, false, false, false, false], seton(on => !on)}}
                        >
                            <Text style={{ color: "black", fontSize: 15, padding: 5, paddingHorizontal: 10 }}>05:30</Text>

                        </TouchableOpacity>
                        <TouchableOpacity style={{
                            backgroundColor: tmparr[2]? "#61BFFF": "white", height: 30,width: 80, borderRadius: 5, borderColor: 'black', borderWidth: 1,
                            justifyContent: 'center', alignItems: 'center', margin: 5
                        }}
                        onPress={() =>{tmparr = [false, false, true, false, false, false, false, false, false, false, false, false], seton(on => !on)}}
                        >
                            <Text style={{ color: "black", fontSize: 15, padding: 5, paddingHorizontal: 10 }}>06:00</Text>

                        </TouchableOpacity>
                        <TouchableOpacity style={{
                            backgroundColor: tmparr[3]? "#61BFFF": "white", height: 30, width: 80, borderRadius: 5, borderColor: 'black', borderWidth: 1,
                            justifyContent: 'center', alignItems: 'center', margin: 5
                        }}
                            onPress={() =>{tmparr = [false, false, false, true, false, false, false, false, false, false, false, false], seton(on => !on)}}
                        >
                            <Text style={{ color: "black", fontSize: 15 , padding: 5, paddingHorizontal: 10 }}>06:30</Text>

                        </TouchableOpacity>
                        {/* <Button title="11:30" /> */}
                    </ScrollView>
                    <Text>
                        Afternoon
                </Text>
                    <ScrollView horizontal={true}>
                    <TouchableOpacity style={{
                            backgroundColor: tmparr[4]? "#61BFFF": "white", height: 30,width: 80, borderRadius: 5, borderColor: 'black', borderWidth: 1,
                            justifyContent: 'center', alignItems: 'center', margin: 5
                        }}
                        onPress={() =>{tmparr = [false, false, false, false, true, false, false, false, false, false, false, false], seton(on => !on)}}
                        >
                            <Text style={{ color: "black", fontSize: 15, padding: 5, paddingHorizontal: 10 }}>05:00</Text>

                        </TouchableOpacity>
                        <TouchableOpacity style={{
                             backgroundColor: tmparr[5]? "#61BFFF": "white", height: 30,width: 80, borderRadius: 5, borderColor: 'black', borderWidth: 1,
                            justifyContent: 'center', alignItems: 'center', margin: 5
                        }}
                        onPress={() =>{tmparr = [false, false, false, false, false, true, false, false, false, false, false, false], seton(on => !on)}}
                        >
                            <Text style={{ color: "black", fontSize: 15, padding: 5, paddingHorizontal: 10 }}>05:30</Text>

                        </TouchableOpacity>
                        <TouchableOpacity style={{
                            backgroundColor: tmparr[6]? "#61BFFF": "white", height: 30,width: 80, borderRadius: 5, borderColor: 'black', borderWidth: 1,
                            justifyContent: 'center', alignItems: 'center', margin: 5
                        }}
                        onPress={() =>{tmparr = [false, false, false, false, false, false, true, false, false, false, false, false], seton(on => !on)}}
                        >
                            <Text style={{ color: "black", fontSize: 15, padding: 5, paddingHorizontal: 10 }}>06:00</Text>

                        </TouchableOpacity>
                        <TouchableOpacity style={{
                            backgroundColor: tmparr[7]? "#61BFFF": "white", height: 30, width: 80, borderRadius: 5, borderColor: 'black', borderWidth: 1,
                            justifyContent: 'center', alignItems: 'center', margin: 5
                        }}
                            onPress={() =>{tmparr = [false, false, false, false, false, false, false, true, false, false, false, false], seton(on => !on)}}
                        >
                            <Text style={{ color: "black", fontSize: 15 , padding: 5, paddingHorizontal: 10 }}>06:30</Text>

                        </TouchableOpacity>
                    </ScrollView>

                    <Text>
                        Evening
                </Text>
                    <ScrollView horizontal={true}>
                    <TouchableOpacity style={{
                            backgroundColor: tmparr[8]? "#61BFFF": "white", height: 30,width: 80, borderRadius: 5, borderColor: 'black', borderWidth: 1,
                            justifyContent: 'center', alignItems: 'center', margin: 5
                        }}
                        onPress={() =>{tmparr = [false, false, false, false, false, false, false, false, true, false, false, false], seton(on => !on)}}
                        >
                            <Text style={{ color: "black", fontSize: 15, padding: 5, paddingHorizontal: 10 }}>05:00</Text>

                        </TouchableOpacity>
                        <TouchableOpacity style={{
                             backgroundColor: tmparr[9]? "#61BFFF": "white", height: 30,width: 80, borderRadius: 5, borderColor: 'black', borderWidth: 1,
                            justifyContent: 'center', alignItems: 'center', margin: 5
                        }}
                        onPress={() =>{tmparr = [false, false, false, false, false, false, false, false, false, true, false, false], seton(on => !on)}}
                        >
                            <Text style={{ color: "black", fontSize: 15, padding: 5, paddingHorizontal: 10 }}>05:30</Text>

                        </TouchableOpacity>
                        <TouchableOpacity style={{
                            backgroundColor: tmparr[10]? "#61BFFF": "white", height: 30,width: 80, borderRadius: 5, borderColor: 'black', borderWidth: 1,
                            justifyContent: 'center', alignItems: 'center', margin: 5
                        }}
                        onPress={() =>{tmparr = [false, false, false, false, false, false, false, false, false, false, true, false], seton(on => !on)}}
                        >
                            <Text style={{ color: "black", fontSize: 15, padding: 5, paddingHorizontal: 10 }}>06:00</Text>

                        </TouchableOpacity>
                        <TouchableOpacity style={{
                            backgroundColor: tmparr[11]? "#61BFFF": "white", height: 30, width: 80, borderRadius: 5, borderColor: 'black', borderWidth: 1,
                            justifyContent: 'center', alignItems: 'center', margin: 5
                        }}
                            onPress={() =>{tmparr = [false, false, false, false, false, false, false, false, false, false, false, true], seton(on => !on)}}
                        >
                            <Text style={{ color: "black", fontSize: 15 , padding: 5, paddingHorizontal: 10 }}>06:30</Text>

                        </TouchableOpacity>
                    </ScrollView>

                    {/* <FlatList
                    data={timeslote}
                    numColumns={3}
                    keyExtractor={item => item.id}
                    renderItem={({ item, index }) => {
                        return (
                            <View style={{ flex: 1, alignItems: 'center' }} >
                                <TouchableOpacity style={{
                                    width: 100, height: 50, borderWidth: 1, alignItems: 'center', justifyContent: 'space-evenly', margin: 10,
                                    backgroundColor: item.color
                                }}
                                    onPress={() => { actionItem(item, index), console.log(item.color) }} >
                                    <Text style={{ color: 'black', fontSize: 16, alignItems: 'center', textAlign: 'center' }}>{item.timefree}</Text>
                                </TouchableOpacity>
                            </View>
                        )
                    }} /> */}

                </View>
                <View style={{ alignItems: 'center', marginTop: 0 }}>
                    <TouchableOpacity style={{
                        backgroundColor: 'white', height: 50, width: 200, borderRadius: 15, borderColor: 'black', borderWidth: 1,
                        justifyContent: 'center', alignItems: 'center',
                    }}
                        onPress={() => alert("Your appointment is booked")}
                    >
                        <Text style={{ color: "#61BFFF", fontSize: 15, padding: 5 }}>Book an appointment</Text>

                    </TouchableOpacity>
                </View>

            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({

})

BookNow.navigationOptions = () => {
    return {
        header: null,
        title: null,

    };
};

export default BookNow;