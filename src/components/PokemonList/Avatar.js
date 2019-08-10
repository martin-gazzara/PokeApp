import React from 'react';
import { View, Image, ActivityIndicator } from 'react-native';

class Avatar extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      url: null,
      loading: false,
    }

    this.getAvatar = this.getAvatar.bind(this);
  }

  async getAvatar(url){
    return fetch(url)
      .then(res => res.json())
      .then(data => data.sprites)
      .then(sprites => sprites.front_default ? this.setState({url: sprites.front_default, loading: false}) : this.setState({loading: false}))
      .catch( err => this.setState({loading: false}));
  }

  componentDidMount(){
    this.setState({loading: true}, () => this.getAvatar(this.props.getAvatarFrom))
  }

  render(){
    const {loading, url} = this.state;
    return(
      <View style={{width: 50, height: 50, marginRight: 10}}>
        <Image 
          source={url ? {uri: url} : require('../../../assets/images/unavailable.jpg')}
          style={{height: 48, width: 48}}
        />
        {loading &&
        <ActivityIndicator
          size={'small'}
          color='#f00'
          style={{position: 'absolute', top: 15, left: 13}}
        />
        }
      </View>
    )
  }

}

export default Avatar;