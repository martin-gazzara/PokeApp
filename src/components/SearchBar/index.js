import React from 'react';
import { View, TextInput, StyleSheet, ToastAndroid } from 'react-native';
import { connect } from 'react-redux';
import { withNavigation } from 'react-navigation';
import {searchPokemon} from '../../store/actions';
import Icon from 'react-native-vector-icons/FontAwesome';
import { TouchableOpacity } from 'react-native-gesture-handler';

class SearchBar extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      value: ''
    }

    this.initSearching = this.initSearching.bind(this);
  }

  initSearching(){
    if (this.state.value.length){
      this.props.searchPokemon(this.state.value);
      this.props.navigation.navigate('Info');
      this.setState({value: ''});
    }else{
      ToastAndroid.show('You must write some if you want to search', ToastAndroid.SHORT);
    }
  }

  render(){
    return(
      <View style={styles.container}>
        <TouchableOpacity onPress={() => this.initSearching()}>
          <Icon name="search" size={30} color="#900" style={styles.icon}/>
        </TouchableOpacity>
        <TextInput 
          placeholder="Search"
          onChangeText={ text => this.setState({value: text})}
          value={this.state.value}
          style={styles.textInput}
          onSubmitEditing={() => this.initSearching()}
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

const mapDispatchToProps = {
  searchPokemon
}

const ConnectedComponent = connect(null, mapDispatchToProps)(SearchBar);

export default withNavigation(ConnectedComponent);