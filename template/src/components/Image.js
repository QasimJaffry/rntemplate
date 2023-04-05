import React from 'react';
import {StyleSheet} from 'react-native';
import FastImage from 'react-native-fast-image';

const styles = StyleSheet.create({

});

function Image(props) {
  return (
    <FastImage
      style={[props.style]}
      source={props.source}
      resizeMode="contain"
      {...props}
    />
  );
}

export default Image;
