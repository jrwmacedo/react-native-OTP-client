import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import OTP from 'otp-client';
import ProgressCircle from 'react-native-progress-circle';
 
const secret = 'TPQDAHVBZ5NBO5LFEQKC7V7UPATSSMFY';
const otpOptions = {
    algorithm: "sha256",
    digits: 6,
    period: 30
  }
  const otp = new OTP(secret,otpOptions);
const currentPeriod = 10;
export default class TokenManagement extends Component {

    constructor(props){
        super(props);
        this.state = { timer : otp.getTimeUntilNextTick(),
        token: otp.getToken()   }
    }

 componentDidMount = () =>{
    this.interval = setInterval(
        () => this.setState((prevState)=> ({ timer: otp.getTimeUntilNextTick() })),
        1000
      );
 }

 componentDidUpdate = () =>{
    if(this.state.token != otp.getToken()){ 
        const newToken = otp.getToken();
        const secondsUntilNextTokenGetGenerated = otp.getTimeUntilNextTick();
        this.setState({timer: secondsUntilNextTokenGetGenerated, token: newToken});
      }
 }

render = () => {
   return( <View style={styles.container}>
        <Text style={styles.token}>{this.state.token}</Text>
        <ProgressCircle
            percent={(this.state.timer * 100) / otpOptions.period }
            radius={50}
            borderWidth={8}
            color="#fff"
            shadowColor="#dc082a"
            bgColor="#dc082a"
        >
            <Text style={{ fontSize: 18, color:'#fff' }}>{this.state.timer}</Text>
        </ProgressCircle>
    </View>)
}

};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#dc082a',
    },
    token: {
        color:'#fff',
        fontSize:50,
        marginBottom: 50
    }
})