import { Image } from '@rneui/themed';
import { Formik } from 'formik';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Alert, ImageBackground, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import * as yup from 'yup';
import Button from '../../../components/Button';
import Header from '../../../components/Header';
import Input from '../../../components/InputField';
import Text from '../../../components/Text';
import { setPassword, verifyOtp } from '../../../endpoints';
import { usePostApiMutation } from '../../../services/service';
import { useThemeAwareObject } from '../../../theme/index';
import createStyles from './styles';
import Snackbar from '../../../components/Snackbar';

export default function RecoverPassword(props) {
  const styles = useThemeAwareObject(createStyles);
  const { t, i18n } = useTranslation();
  const [verifyCall, verifyResponse] = usePostApiMutation();

  const validationSchema = yup.object().shape({
    code: yup
      .string(t('code_required'))
      .required(t('code_required'))
      .min(4, ({}) => t('code_length')),
    password: yup
      .string(t('password_required'))
      .required(t('password_required'))
      .min(8, ({}) => t('password_length'))
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[+£\_\-&\(\)/*"'\:;?!@#\$%\^&\*])(?=.{8,})/,
        t('password_length'),
      ),
    confirm: yup
      .string(t('confirm_required'))
      .required(t('confirm_required'))
      .min(8, ({}) => t('password_length'))
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[+£\_\-&\(\)/*"'\:;?!@#\$%\^&\*])(?=.{8,})/,
        t('password_length'),
      )
      .oneOf([yup.ref('password'), null], t('password_match')),
  });

  async function verifyCode(values) {
    let form = new FormData();
    form.append('email', props.route.params.email);
    form.append('otp', values.code);
    let apiData = {
      url: verifyOtp,
      method: 'POST',
      data: form,
    };
    try {
      let res = await verifyCall(apiData).unwrap();
      if (res.status == 200) {
        changePassword(values);
      } else {
        Snackbar(res.message, true);
      }
    } catch (e) {
      Snackbar(e?.error ?? e?.data?.message, true);
    }
  }

  async function changePassword(values) {
    let form = new FormData();
    form.append('email', props.route.params.email);
    form.append('new_password', values.password);
    form.append('new_password_confirmation', values.confirm);
    let apiData = {
      url: setPassword,
      method: 'POST',
      data: form,
    };
    try {
      let res = await verifyCall(apiData).unwrap();
      if (res.status == 200) {
        Snackbar(res.message);
        props.navigation.reset({
          index: 0,
          routes: [
            {
              name: 'Login',
            },
          ],
        });
      } else {
        Snackbar(res.message, true);
      }
    } catch (e) {
      Snackbar(e?.error ?? e?.data?.message, true);
    }
  }

  useEffect(() => {
    Alert.alert('OTP', `${props.route.params.otp}`, [
      { text: 'OK', onPress: () => console.log('OK Pressed') },
    ]);
  }, []);

  return (
    <ImageBackground
      source={require('../../../../assets/images/Background.png')}
      style={styles.mainContainer}
    >
      <Header
        statusbar={styles.statusbar}
        barStyle="dark-content"
        containerStyle={{ height: 0 }}
      />
      <KeyboardAwareScrollView
        style={{ height: 0 }}
        contentContainerStyle={styles.innerContainer}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="always"
      >
        <Image
          source={require('../../../../assets/images/Logo.png')}
          style={styles.logoStyle}
          containerStyle={styles.logoContainerStyle}
        />
        <Text style={styles.welcomeText}>{t('recover_password')}</Text>
        <Formik
          initialValues={{
            code: '',
            password: '',
            confirm: '',
          }}
          onSubmit={values => verifyCode(values)}
          validateOnChange={false}
          validateOnBlur={false}
          validationSchema={validationSchema}
        >
          {({ handleChange, handleSubmit, handleBlur, errors, values }) => {
            return (
              <View style={styles.fieldContainer}>
                <Input
                  placeholder={t('code')}
                  value={values.code}
                  onChangeText={handleChange('code')}
                  error={errors.code}
                  keyboardType={'number-pad'}
                />
                <Input
                  placeholder={t('password')}
                  secure
                  value={values.password}
                  onChangeText={handleChange('password')}
                  error={errors.password}
                />
                <Input
                  placeholder={t('confirm_password')}
                  value={values.confirm}
                  secure
                  onChangeText={handleChange('confirm')}
                  error={errors.confirm}
                />
                <Button
                  title1={t('recover')}
                  onPress={handleSubmit}
                  style={[styles.verifyBtn]}
                  loading={verifyResponse.isLoading}
                />
              </View>
            );
          }}
        </Formik>
      </KeyboardAwareScrollView>
    </ImageBackground>
  );
}
