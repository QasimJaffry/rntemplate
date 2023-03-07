import { Image } from '@rneui/themed';
import { Formik } from 'formik';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { ImageBackground, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useDispatch } from 'react-redux';
import * as yup from 'yup';
import Button from '../../../components/Button';
import Header from '../../../components/Header';
import Input from '../../../components/InputField';
import Snackbar from '../../../components/Snackbar';
import Text from '@components/Text';
import { login } from '../../../endpoints';
import { setToken, setUser } from '../../../redux/slices/userSlice';
import { usePostApiMutation } from '../../../services/service';
import { useThemeAwareObject } from '../../../theme/index';
import createStyles from './styles';

export default function Login(props) {
  const styles = useThemeAwareObject(createStyles);
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  const [loginCall, loginResponse] = usePostApiMutation();

  const validationSchema = yup.object().shape({
    username: yup.string(t('username_required')).required(t('username_required')),
    password: yup.string(t('password_required')).required(t('password_required')),
  });

  async function handleLogin(values, b, c) {
    let form = new FormData();
    form.append('email', values.username.toLowerCase());
    form.append('password', values.password);
    let apiData = {
      url: login,
      method: 'POST',
      data: form,
    };
    try {
      let res = await loginCall(apiData).unwrap();
      if (res.status == 200) {
        dispatch(setUser(res.data.user));
        dispatch(setToken(res.data.access_token));
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
      style={styles.mainContainer}
    >
      <Header statusbar={styles.statusbar} barStyle="dark-content" containerStyle={{ height: 0 }} />
      <KeyboardAwareScrollView
        contentContainerStyle={styles.innerContainer}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="always"
      >
        <Image
          source={require('../../../../assets/images/Logo.png')}
          style={styles.logoStyle}
          containerStyle={styles.logoContainerStyle}
        />
        <Text style={styles.welcomeText}>{t('welcome')}</Text>
        <Text style={styles.subText}>{t('user_pass')}</Text>
        <Formik
          initialValues={{
            username: '',
            password: '',
          }}
          onSubmit={values => handleLogin(values)}
          validateOnChange={false}
          validateOnBlur={false}
          validationSchema={validationSchema}
        >
          {({ handleChange, handleSubmit, errors, values }) => {
            return (
              <View style={styles.fieldContainer}>
                <Input
                  placeholder={t('username')}
                  value={values.username}
                  onChangeText={handleChange('username')}
                  error={errors.username}
                  keyboardType={'email-address'}
                />
                <Input
                  secure={true}
                  placeholder={t('password')}
                  value={values.password}
                  onChangeText={handleChange('password')}
                  error={errors.password}
                />

                <Text
                  style={[
                    styles.forgotBtn,
                    styles.forgotText,
                    i18n.language == 'ar' && styles.arabicForgot,
                    i18n.language == 'en' && styles.englishForgot,
                  ]}
                  onPress={() => props.navigation.navigate('ForgotPassword')}
                >
                  {t('forgot')}
                </Text>
                <Button
                  title1={t('signin')}
                  onPress={handleSubmit}
                  style={[]}
                  loading={loginResponse.isLoading}
                />
                {i18n.language == 'en' ? (
                  <Text style={styles.bottomText}>
                    {t('login_agreement')} <Text style={styles.termsText}>{t('terms')}</Text>
                  </Text>
                ) : (
                  <Text style={styles.bottomText}>
                    {t('login_agreement')} <Text style={styles.termsText}>{t('terms')}</Text>{' '}
                    {t('our_own')}
                  </Text>
                )}
              </View>
            );
          }}
        </Formik>
      </KeyboardAwareScrollView>
    </ImageBackground>
  );
}
