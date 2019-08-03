import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

class SearchBar extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      value: ''
    }
  }

  render(){
    return(
      <View style={styles.container}>
        <Icon name="search" size={30} color="#900" style={styles.icon}/>
        <TextInput 
          placeholder="Search"
          onChangeText={ text => this.setState({value: text})}
          value={this.state.value}
          style={styles.textInput}
        />
      </View>
    )
  }

}

const styles = StyleSheet.create({
  container:{
    flexDirection: 'row',
    alignItems: 'center',
    width: '90%',
    backgroundColor: '#fff',
    borderRadius: 20,
    elevation: 5
  },
  icon:{
    margin: 10
  },
  textInput:{
    flexGrow: 1
  }
})

export default SearchBar;