import React, {useState} from 'react';
import {Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import * as Styled from './toy-creation-screen.styles';
import {
  ScreenContainer,
  Spacer,
} from '../../components/common-layout-components';
import {addToy} from '../../store/toys.slice';
import {useNavigation} from '@react-navigation/native';
import {SCREEN_NAMES} from '../../app';

export const ToyCreationScreen = () => {
  const [toyName, setToyName] = useState('');
  const [toyDescription, setToyDescription] = useState('');
  const navigation = useNavigation();

  const dispatch = useDispatch();

  const onSavePress = () => {
    dispatch(
      addToy({
        name: toyName,
        description: toyDescription,
      }),
    );

    navigation.navigate(SCREEN_NAMES.toysList);
  };

  return (
    <ScreenContainer>
      <Styled.ToyNameInput
        onChangeText={setToyName}
        value={toyName}
        placeholder="Toy name"
      />
      <Styled.ToyDescriptionInput
        onChangeText={setToyDescription}
        value={toyDescription}
        placeholder="Toy description"
      />
      <Spacer />
      <Styled.SaveButton title="Save" onPress={onSavePress} />
    </ScreenContainer>
  );
};
