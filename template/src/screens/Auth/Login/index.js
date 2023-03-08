import Button from '@components/Button';
import { Formik } from 'formik';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import * as yup from 'yup';
import Input from '@components/InputField';
import Text from '@components/Text';
import { useThemeAwareObject } from '@theme';
import createStyles from './styles';

export default function Login() {
  const styles = useThemeAwareObject(createStyles);
  const { t } = useTranslation();
  // const dispatch = useDispatch();
  // const [loginCall, loginResponse] = usePostApiMutation();

  const validationSchema = yup.object().shape({
    username: yup.string(t('username_required')).required(t('username_required')),
    password: yup.string(t('password_required')).required(t('password_required')),
  });

  // async function handleLogin(values) {
  //   let form = new FormData();
  //   form.append('email', values.username.toLowerCase());
  //   form.append('password', values.password);
  //   let apiData = {
  //     url: login,
  //     method: 'POST',
  //     data: form,
  //   };
  //   try {
  //     let res = await loginCall(apiData).unwrap();
  //     if (res.status == 200) {
  //       dispatch(setUser(res.data.user));
  //       dispatch(setToken(res.data.access_token));
  //     } else {
  //       Snackbar(res.message, true);
  //     }
  //   } catch (e) {
  //     Snackbar(e?.error ?? e?.data?.message, true);
  //   }
  // }

  return (
    <KeyboardAwareScrollView
      contentContainerStyle={styles.innerContainer}
      showsVerticalScrollIndicator={false}
      keyboardShouldPersistTaps="always"
    >
      <Text style={styles.welcomeText}>{t('welcome')}</Text>
      <Text style={styles.subText}>{t('user_pass')}</Text>
      <Formik
        initialValues={{
          username: '',
          password: '',
        }}
        onSubmit={values => console.log(values)}
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

              <Button title1={t('signin')} onPress={handleSubmit} style={[]} loading={false} />
            </View>
          );
        }}
      </Formik>
    </KeyboardAwareScrollView>
  );
}
