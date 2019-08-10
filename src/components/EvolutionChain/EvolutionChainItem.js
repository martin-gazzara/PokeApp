import React from 'react';
import {View, StyleSheet, Image, ActivityIndicator} from 'react-native';

class EvolutionChainItem extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      name: this.props.name,
      sprite: null,
      loading: false,
      error: false
    }

    this.getAvatar = this.getAvatar.bind(this);
  }

  async getAvatar(){
    try{
      const pokemonData = await fetch(`https://pokeapi.co/api/v2/pokemon/${this.state.name}/`)
                                  .then(res => res.json())
                                  .then(data => data);

      this.setState({sprite: pokemonData.sprites.front_default, loading: false});

    }catch(error){
      this.setState({error: true});
    }
  }

  componentDidMount(){
    this.setState({loading: true}, () => this.getAvatar() );
  }

  render(){
    const {sprite, loading, error} = this.state;
    return(
      <View style={styles.container}>
        {!loading ? <Image source={{uri: sprite}} style={{width: 75, height: 75}}/> : !error ? <View style={{width: 75, height: 75, justifyContent: 'center', alignItems: 'center'}}><ActivityIndicator size='small' color='red' /></View> : null}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    borderColor: 'red',
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 10
  }
})

export default EvolutionChainItem;