import {Divider} from '@rneui/themed';
import React from 'react';
import {Dimensions, StyleSheet} from 'react-native';
import {useThemeAwareObject} from '../theme';

function CustomDivider(props) {
  const {width, height} = Dimensions.get('window');
  const createStyles = theme => {
    const themeStyles = StyleSheet.create({});
    return themeStyles;
  };
  const styles = useThemeAwareObject(createStyles);
  return <Divider color={props.dividerColor} style={props.style} />;
}

export default CustomDivider;
