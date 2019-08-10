import React from 'react';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunity from 'react-native-vector-icons/MaterialCommunityIcons';

export default function setIcon(icon, styleConfig = {fontSize: 20, color: '#000'}){
  const styles = {
    size: styleConfig.fontSize,
    color: styleConfig.color,
    style: {...styleConfig}
  };
  const iconType = icon.toLowerCase();
  switch(iconType){
    case 'speed':
      return <SimpleLineIcons name="speedometer" {...styles}/>;
    case 'special-defense':
      return <Entypo name="shield" {...styles} />;
    case 'defense':
      return <Feather name="shield" {...styles} />;
    case 'special-attack':
      return <MaterialCommunity name="sword-cross" {...styles} />;
    case 'attack':
      return <MaterialCommunity name="sword" {...styles} />;
    case 'hp':
      return <FontAwesome name="heart" {...styles} />;
    default:
      return <FontAwesome name="question" {...styles}/>;
  }
}