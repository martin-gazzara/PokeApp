import React from 'react';
import {View, Text, Button, StyleSheet, Image} from 'react-native';
import { connect } from 'react-redux';
import SearchBar from '../components/SearchBar';
import Loader from '../components/Loader';
import { thisExpression } from '@babel/types';

class HomeScreen extends React.Component{

  static navigationOptions = {
    header: null
  }

  constructor(props){
    super(props);
    this.state = {
      loading: false,
      error: false
    }

    this.fetching = this.fetching.bind(this);
    this.retry = this.retry.bind(this);
  }

  componentDidMount(){
    this.fetching();
  }

  fetching(){
    this.setState({loading: true}, () => setTimeout( () => this.setState({loading: false, error: true}), 3000))
  }

  retry(){
    this.setState({error: false}, () => this.fetching());
  }

  render(){
    const { items } = this.props;
    const {loading, error} = this.state;
    return(
      <View style={styles.container}>
        <Image
          source={require('../../assets/images/logo.png')}
          resizeMode="contain"
          resizeMethod="resize"
          style={styles.logo}
        />
        <SearchBar/>
        <Loader isLoading={loading} failed={error} retry={this.retry}>
          <View>
            <Text>Hello world</Text>
          </View>
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
  items: state.items
})

export default connect(mapStateToProps)(HomeScreen);