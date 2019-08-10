import React from 'react';
import {View, Text, Button, ScrollView, StyleSheet, Image} from 'react-native';
import { addItem } from '../store/actions';
import { connect } from 'react-redux'
import Icon from 'react-native-vector-icons/SimpleLineIcons'

import Loader from '../components/Loader';
import Header from '../components/Header';
import StatsTable from '../components/StatsTable';
import EvolutionChain from '../components/EvolutionChain';

class InfoScreen extends React.Component{

  render(){
    const { searchLoading, searchError, searchResult } = this.props;
    return(
      <View style={styles.screenStyle}>
        <Header headerTitle="PokeData"/>
        <Loader isLoading={searchLoading} failed={searchError} retry={() => {}}>
          { !searchResult ? null : 
          <View style={styles.container}>

            <View style={styles.row}>
              <Image 
                source={searchResult.sprite} 
                style={styles.sprite}/>
              
              <View styles={styles.column}>

                <View style={styles.dataGroup}>
                  <Text style={styles.label}>id</Text>
                  <Text style={styles.textStyle}>#{searchResult && searchResult.id}</Text>
                </View>

                <View style={styles.dataGroup}>
                  <Text style={styles.label}>name</Text>
                  <Text style={styles.textStyle}>{searchResult && searchResult.name}</Text>
                </View>

                <View style={styles.dataGroup}>
                <Text style={styles.label}>weight</Text>
                <Text style={[styles.textStyle, styles.nonTransformText]}>{searchResult && searchResult.weight}</Text>
              </View>

              </View>

            </View>

            <View style={[styles.row, {justifyContent: 'space-between'}]}>

              <View style={styles.dataGroup}>
                <Text style={styles.label}>height</Text>
                <Text style={[styles.textStyle, styles.nonTransformText]}>{searchResult && searchResult.height}</Text>
              </View>

              <View style={styles.dataGroup}>
                <Text style={styles.label}>types</Text>
                <Text style={styles.textStyle}>{searchResult && searchResult.types}</Text>
              </View>

            </View>

            {searchResult.stats && searchResult.stats.length && <StatsTable stats={searchResult.stats}/>}

            {searchResult.chain && searchResult.chain.length && <EvolutionChain chain={searchResult.chain} />}

          </View>
          }
        </Loader>
      </View>
    )
  }

}

const styles = StyleSheet.create({
  screenStyle:{
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center'
  },
  container:{
    flex: 1,
    margin: 10,
    padding: 10,
    width: '95%',
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 5
  },
  sprite:{
    borderWidth: 1,
    borderColor: '#ccc',  
    borderRadius: 10,
    height: 150,
    width: 150,
  },
  dataGroup:{
    marginHorizontal: 10,
    marginVertical: 5
  },
  label:{
    color: '#bbb',
    textTransform: 'uppercase'
  },
  textStyle:{
    fontFamily: 'pixAntiqua',
    fontSize: 20,
    textTransform: 'capitalize',
  },
  nonTransformText:{
    textTransform: 'none'
  },
  row:{
    flexDirection: 'row'
  },
  column:{
    flexDirection: 'column'
  }
})

const mapStateToProps = (state) => ({
  searchResult: state.searchResult,
  searchLoading: state.searchLoading,
  searchError: state.searchError
})

export default connect(mapStateToProps)(InfoScreen)