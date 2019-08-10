import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import { connect } from 'react-redux';
import { searchPokemon } from '../../store/actions';
import Avatar from './Avatar';

class PokemonListItem extends React.Component{

  handlePress(){
    const { name, searchPokemon  } = this.props;
    searchPokemon(name);
    this.props.navigation.navigate('Info');
  }

  render(){
    const { name, url } = this.props;
    return(
      <TouchableOpacity onLongPress={this.handlePress.bind(this)}>
        <View style={styles.container}>
          <Avatar getAvatarFrom={url}/>
          <Text style={styles.textStyle}>{name}</Text>
        </View>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flexDirection: 'row',
    backgroundColor: '#fff',
    margin: 5,
    height: 80,
    elevation: 5,
    borderRadius: 10,
    padding: 10,
    overflow: 'hidden'
  },
  textStyle:{
    fontFamily: 'pixAntiqua',
    fontSize: 18,
    textTransform: 'capitalize',
    alignSelf: 'center'
  }
})

const mapDispatchToProps = {
  searchPokemon
}

const ConnectedComponent = connect(null, mapDispatchToProps)(PokemonListItem);

export default withNavigation(ConnectedComponent);