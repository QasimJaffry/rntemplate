import React from 'react';
import { StyleSheet } from 'react-native';
import ReactNativeModal from 'react-native-modal';
import { useThemeAwareObject } from '../theme';

function CustomModal(props) {
  const createStyles = theme => {
    const themeStyles = StyleSheet.create({});
    return themeStyles;
  };
  const styles = useThemeAwareObject(createStyles);

  return (
    <ReactNativeModal
      isVisible={props.visible}
      onBackButtonPress={props.close}
      onBackdropPress={props.close}
      hasBackdrop
      style={props.style}
      backdropOpacity={0.7}
      backdropColor="rgba(0,0,0,1)"
    >
      {props.children}
    </ReactNativeModal>
  );
}

export default CustomModal;
