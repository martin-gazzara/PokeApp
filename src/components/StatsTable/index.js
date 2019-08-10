import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { setIcon } from '../../utils';

export default function StatsTable({stats}){
  return (
    <View style={styles.container}>
      {stats && stats.length && stats.map( (statsItem, index) => 
      <View style={styles.statsItem} key={index}>
        <View style={styles.iconContainer}>
          {setIcon(statsItem.name, styles.icon)}
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.text}>{statsItem.baseStat}</Text>
        </View>
      </View>)}
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  statsItem:{
    width: 45,
    height: 75,
    borderColor: 'red',
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 10,
    overflow: 'hidden'
  },
  iconContainer:{
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    height: 40
  },
  icon:{
    color: '#fff',
    fontSize: 25,
  },
  textContainer:{
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text:{
    fontFamily: 'pixAntiqua',
  }
});