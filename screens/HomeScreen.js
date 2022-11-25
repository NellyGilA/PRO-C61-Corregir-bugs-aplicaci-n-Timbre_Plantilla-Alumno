import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import AppHeader from '../components/AppHeader';

export default class HomeScreen extends React.Component {
 
/*  constructor(){ //descomenta y completa
  super();
  this.state = {
    redStatus : true,
    greenStatus: true,
    blueStatus: ,
    yellowStatus: 
    }
  } */ 
 
  goToBuzzerScreen = (buzzercolor) => {
    //


    
    this.props.navigation.navigate('BuzzerScreen', { color: buzzercolor });
  };

    goToBuzzerScreen = (buzzercolor) => {
    var teamRef = db.ref('teams/'+ buzzercolor);
    teamRef.update({
      enabled: false
    });
    this.props.navigation.navigate('BuzzerScreen', { color: buzzercolor });
  };

/*  componentDidMount(){   //descomenta y completa
    var teamsref  = db.ref("teams");
    teamsref.on("value", data => {
      var teamDetails = data.val();
      this.setState({
        redStatus: teamDetails.red.enabled,
        

        
      });
    });
  } */
  
  render() {
    return (
      <View>
        <AppHeader />

        <TouchableOpacity
          //disabled= {!this.state.redStatus}
          style={[styles.button, { backgroundColor: 'red' }]}
          onPress={() => {
            this.goToBuzzerScreen('red');
          }}>
          <Text style={styles.buttonText}>Equipo 1</Text>
        </TouchableOpacity>

        <TouchableOpacity
        //
          style={[styles.button, { backgroundColor: 'green' }]}
          onPress={() => {
            this.goToBuzzerScreen('green');
          }}>
          <Text style={styles.buttonText}>Equipo 2</Text>
        </TouchableOpacity>

        <TouchableOpacity
        //
          style={[styles.button, { backgroundColor: 'blue' }]}
          onPress={() => {
            this.goToBuzzerScreen('blue');
          }}>
          <Text style={styles.buttonText}>Equipo 3</Text>
        </TouchableOpacity>

        <TouchableOpacity
        //
          style={[styles.button, { backgroundColor: 'yellow' }]}
          onPress={() => {
            this.goToBuzzerScreen('yellow');
          }}>
          <Text style={styles.buttonText}>Equipo 4</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignSelf: 'center',
    borderWidth: 2,
    borderRadius: 15,
    marginTop: 50,
    width: 200,
    height: 50,
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
  },
});
