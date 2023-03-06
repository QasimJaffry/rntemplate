import { StyleSheet } from 'react-native';
import { hp, wp } from '../../../utils';

const createStyles = theme => {
  const styles = StyleSheet.create({
    mainContainer: {
      flexGrow: 1,
    },
    statusbar: {
      backgroundColor: theme.color.primaryColor,
    },
    logoStyle: {
      height: wp(30),
      width: wp(30),
    },
    logoContainerStyle: {
      alignSelf: 'center',
      marginTop: hp(7),
      marginBottom: hp(5),
    },
    innerContainer: {
      flexGrow: 1,
      marginHorizontal: wp(4),
    },
    welcomeText: {
      fontSize: theme.size.xLarge,
      fontFamily: theme.family.bold,
      alignSelf: 'center',
      marginBottom: hp(6),
    },
    verifyBtn: {
      marginVertical: hp(6),
    },
  });
  return styles;
};
export default createStyles;
