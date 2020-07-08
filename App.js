
import React from 'react';
// import { createStackNavigator, createAppContainer } from 'react-navigation';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SignInScreen from './src/screen/SignInScreen'
import HomeDocs from './src/screen/HomeDocs'
import Type from './src/screen/Type'
import Consultnow from './src/screen/Consultnow'
import DoctorList from './src/screen/DoctorList'
import ProblemState from './src/screen/ProblemState'
import FindADoctor from './src/screen/FindADoctor'
import HomeScreen from './src/screen/HomeScreen'
import DrawerNavigator from './src/NavigationDrawer/DrawerNavigator'
import DoctorProfile from './src/screen/DoctorProfile'
import BookNow from './src/screen/BookNow'



const switchNavigator = createSwitchNavigator({
  loginFlow: createStackNavigator({
    // Phone: PhoneAuthScreen,
    Signin: SignInScreen,
    Home: HomeDocs,
    Type: Type,
    Consult: Consultnow,
    DoctorList: DoctorList,
    Problem: ProblemState,
   FindDr: FindADoctor,
   Main: DrawerNavigator,   
   One:HomeScreen,
   Profile: DoctorProfile,
   Book: BookNow,

  }),
})

switchNavigator.navigationOptions = ({ /*navigation*/ }) => {
  return {
      header: null
  }
}
export default createAppContainer(switchNavigator);
// const App = createAppContainer(switchNavigator);

// export default () => {
//   return (
//     <BlogProvider>
//       <App />
//     </BlogProvider>
//   );
// }