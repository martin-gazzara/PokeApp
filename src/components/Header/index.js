import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { withNavigation } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';

class Header extends React.Component{

  render(){
    const { headerTitle, leftButton, rightButton  } = this.props;
    return(
      <View style={styles.container}>

        <View style={styles.leftButtonContainer}>
        { leftButton ? leftButton :
        <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
          <Icon name={'chevron-left'} color={'#fff'} size={30}/>
        </TouchableOpacity>
        }
        </View>

        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>{headerTitle}</Text>
        </View>

        <View style={styles.rightButtonContainer}>
        {rightButton ? rightButton : null}
        </View>
      </View>
    )
  }

}

const styles = StyleSheet.create({
  container:{
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
  },
  leftButtonContainer:{
    width: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },
  headerContainer:{
    flexGrow: 1
  },
  headerText:{
    fontFamily: 'pixAntiqua',
    color: '#fff',
    fontSize: 20
  },
  rightButtonContainer:{

  }

})

export default withNavigation(Header);