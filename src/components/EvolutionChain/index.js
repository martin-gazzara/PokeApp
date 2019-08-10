import React from 'react';
import { View, StyleSheet } from 'react-native';
import EvolutionChainItem from './EvolutionChainItem';

class EvolutionChain extends React.Component{

  render(){
    const { chain } = this.props;
    return(
      <View style={styles.container}>
        {chain.length && chain.map( (chainItem, index) => 
          <EvolutionChainItem key={index} {...chainItem}/>)}
      </View>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 50
  }
})

export default EvolutionChain;