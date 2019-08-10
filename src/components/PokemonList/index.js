import React from 'react';
import { FlatList, View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { getNextPokemonList } from '../../store/actions';
import PokemonListItem from './PokemonListItem';

class PokemonList extends React.Component {

  render(){
    const { data, loading } = this.props;
    return(
      <FlatList
        data={data}
        renderItem={ ({item}) => <PokemonListItem {...item}/>}
        keyExtractor={(item, index) => item.id.toString()}
        style={styles.scrollStyle}
        onEndReached={() => this.props.getNextPokemonList()}
        ListFooterComponent={loading && <ActivityIndicator color='#fff' style={styles.activityIndicator}/>}
      />
    )
  }
}

const styles = StyleSheet.create({
  scrollStyle:{
    flex: 1,
    width: '100%',
    marginTop: 10,
  },
  scrollContainer:{
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  activityIndicator:{
    marginVertical: 10
  }
})

const mapStateToProps = (state) => ({
  loading: state.nextLoading
})

const mapDispatchToProps = {
  getNextPokemonList
}

export default connect(mapStateToProps, mapDispatchToProps)(PokemonList);
