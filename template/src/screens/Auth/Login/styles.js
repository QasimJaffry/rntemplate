import { StyleSheet } from 'react-native';
import { hp, wp } from '@utils';

const createStyles = theme => {
  const styles = StyleSheet.create({
    mainContainer: {
      flexGrow: 1,
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
      fontSize: theme.size.xlarge,
      fontFamily: theme.family.bold,
      alignSelf: 'center',
    },
    subText: {
      alignSelf: 'center',
      marginBottom: hp(6),
    },
    forgotBtn: {
      height: hp(4),
      backgroundColor: 'transparent',
      marginHorizontal: wp(5),
      marginBottom: hp(8),
    },
    forgotText: {
      color: theme.color.secondaryText,
      fontFamily: theme.family.book,
    },
    arabicForgot: {
      alignSelf: 'flex-end',
    },
    englishForgot: {
      alignSelf: 'flex-start',
    },
    bottomText: {
      marginVertical: hp(4),
      alignSelf: 'center',
      textAlign: 'center',
      width: wp(70),
      color: theme.color.subTertiaryText,
    },
    termsText: {
      color: theme.color.secondaryText,
    },
  });
  return styles;
};
export default createStyles;
