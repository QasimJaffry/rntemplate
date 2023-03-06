import {Image} from '@rneui/themed';
import {Formik} from 'formik';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {ImageBackground, View} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import * as yup from 'yup';
import Button from '../../../components/Button';
import Header from '../../../components/Header';
import Input from '../../../components/InputField';
import Snackbar from '../../../components/Snackbar';
import Text from '../../../components/Text';
import {forgotPassword} from '../../../endpoints';
import {usePostApiMutation} from '../../../services/service';
import {useThemeAwareObject} from '../../../theme/index';
import createStyles from './styles';

export default function ForgotPassword(props) {
  const styles = useThemeAwareObject(createStyles);
  const {t, i18n} = useTranslation();
  const [forgotCall, forgotResponse] = usePostApiMutation();

  const validationSchema = yup.object().shape({
    email: yup
      .string(t('email_required'))
      .email(t('invalid_email'))
      .required(t('email_required')),
  });

  async function handleForgot(values) {
    let form = new FormData();
    form.append('email', values.email);
    let apiData = {
      url: forgotPassword,
      method: 'POST',
      data: form,
    };
    try {
      let res = await forgotCall(apiData).unwrap();
      if (res.status == 200) {
        props.navigation.navigate('RecoverPassword', {
          email: values.email,
          otp: res.data.client.otp,
        });
      } else {
        Snackbar(res.message, true);
      }
    } catch (e) {
      Snackbar(e?.error ?? e?.data?.message, true);
    }
  }

  return (
    <ImageBackground
      source={require('../../../../assets/images/Background.png')}
      style={styles.mainContainer}>
      <Header
        statusbar={styles.statusbar}
        barStyle="dark-content"
        containerStyle={{height: 0}}
      />
      <KeyboardAwareScrollView
        style={{height: 0}}
        contentContainerStyle={styles.innerContainer}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="always">
        <Image
          source={require('../../../../assets/images/Logo.png')}
          style={styles.logoStyle}
          containerStyle={styles.logoContainerStyle}
        />
        <Text style={styles.welcomeText}>{t('forgot')}</Text>
        <Formik
          initialValues={{
            email: '',
          }}
          onSubmit={values => handleForgot(values)}
          validateOnChange={false}
          validateOnBlur={false}
          validationSchema={validationSchema}>
          {({handleChange, handleSubmit, handleBlur, errors, values}) => {
            return (
              <View style={styles.fieldContainer}>
                <Input
                  placeholder={t('email')}
                  value={values.email}
                  onChangeText={handleChange('email')}
                  error={errors.email}
                  keyboardType="email-address"
                />
                <Button
                  title1={t('verify')}
                  onPress={handleSubmit}
                  style={[styles.verifyBtn]}
                  loading={forgotResponse.isLoading}
                />
              </View>
            );
          }}
        </Formik>
      </KeyboardAwareScrollView>
    </ImageBackground>
  );
}
