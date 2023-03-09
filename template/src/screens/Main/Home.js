import Button from '@components/Button';
import { setToken } from '@slices/userSlice';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Text, View } from 'react-native';
import { useDispatch } from 'react-redux';

const Home = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  return (
    <View>
      <Text>Home</Text>
      <Button
        title1={t('signin')}
        onPress={() => dispatch(setToken(false))}
        style={[]}
        loading={false}
      />
    </View>
  );
};

export default Home;
