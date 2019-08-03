import React from 'react';
import {View, Text, Button, StyleSheet, Image} from 'react-native';
import { connect } from 'react-redux';
import SearchBar from '../components/SearchBar';

class HomeScreen extends React.Component{

  static navigationOptions = {
    header: null
  }

  render(){
    const { items } = this.props;
    return(
      <View style={styles.container}>
        <Image
          source={require('../../assets/images/logo.png')}
          resizeMode={"contain"}
          resizeMethod="resize"
          style={styles.logo}
        />
        <SearchBar/>
      </View>
    )
  }

}

const styles = StyleSheet.create({
  container:{
    flex: 1, 
    justifyContent: 'flex-start', 
    alignItems: 'center',
    backgroundColor: '#c00' 
  },
  textStyles:{
    color: '#fff',
    fontFamily: "pixAntiqua"
  },
  logo:{
    width: 200, 
    height: 100
  }
})

const mapStateToProps = (state) => ({
  items: state.items
})

export default connect(mapStateToProps)(HomeScreen);