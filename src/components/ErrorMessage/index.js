import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated, Easing } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';



class ErrorMessage extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      scale: new Animated.ValueXY(0),
      opacity: new Animated.Value(0)
    }
  }

  componentDidMount(){
      Animated.timing(
        this.state.scale,
        {
          toValue: 1,
          duration: 400,
          easing: Easing.bounce
        }
    ).start();
    
  }

  render(){
    const {retry} = this.props;
    return(
      <TouchableOpacity onPress={retry}>
        <Animated.View style={[styles.container, {
          opacity: this.state.scale.x.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 1]
          }),
          transform: [
            {scaleX: this.state.scale.x},
            {scaleY: this.state.scale.y}
        ]}]}>
          <Icon name={'refresh'} color={'#c00'} size={30}/>
          <Text style={styles.messageText}>Oops!{'\n'}Something went wrong{'\n'}Press to try again.</Text>
        </Animated.View>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    width: 200,
    height: 200,
    borderRadius: 30,
    marginTop: 50,
    transform: [{scale: {x: 0, y: 0}}]
  },
  messageText:{
    fontFamily: 'pixAntiqua',
    textAlign: 'center',
    marginTop: 20,
    color: '#c00'
  }
});

export default ErrorMessage;