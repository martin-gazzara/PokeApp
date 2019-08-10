import React from 'react';
import {View, Text, Button, StyleSheet, Image, Alert} from 'react-native';
import { withNavigation } from 'react-navigation';
import { connect } from 'react-redux';
import SearchBar from '../components/SearchBar';
import Loader from '../components/Loader';
import PokemonList from '../components/PokemonList';
import { getAllPokemon, retrySearch } from '../store/actions'

class HomeScreen extends React.Component{

  componentDidMount(){
    this.fetchData();
  }

  fetchData(){
    this.props.getAllPokemon();
  }

  retryData(){
    this.fetchData();
  }

  render(){
    const { results, error, loading } = this.props;
    return(
      <View style={styles.container}>
        <Image
          source={require('../../assets/images/logo.png')}
          resizeMode="contain"
          resizeMethod="resize"
          style={styles.logo}
        />
        <SearchBar/>
        <Loader isLoading={loading} failed={error} retry={() => this.retryData()}>
          <PokemonList data={results}/>
        </Loader>
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
  results: state.results,
  loading: state.loading,
  error: state.error,
  searchError: state.searchError,
  searchLoading: state.searchLoading,
  searchResult: state.searchResult
})

const mapDispatchToProps = {
  getAllPokemon,
  retrySearch
}

const ConnectedComponent = connect(mapStateToProps, mapDispatchToProps)(HomeScreen);

export default withNavigation(ConnectedComponent);