import React from 'react';
import LottieView from 'lottie-react-native';
import ErrorMessage from '../ErrorMessage';

const Loader = ({children, isLoading, failed, retry}) => {
  return (isLoading ? <LottieView source={require('../../../assets/animations/loader.json')} autoPlay loop style={{width: 150, height: 150}}/> : 
          failed ? <ErrorMessage retry={retry}/> :
          children)
}

export default Loader;