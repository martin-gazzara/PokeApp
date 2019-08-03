import React from 'react';
import {View, TextInput, Button} from 'react-native';
import { addItem } from '../store/actions';
import { connect } from 'react-redux'

class SettingScreen extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      value: ''
    }
  }

  render(){
    return(
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <TextInput
          value={this.state.value}
          onChangeText={(text) => this.setState({value: text})}
        />
        <Button
          title={'Add item'}
          onPress={
            () => this.props.addItem(this.state.value)
          }
        />
      </View>
    )
  }

}

const mapDispatchToProps = {
  addItem
}

export default connect(null, mapDispatchToProps)(SettingScreen)