import React, {useState} from 'react';
import {Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import * as Styled from './toy-edit-screen.styles';
import {
  ScreenContainer,
  Spacer,
} from '../../components/common-layout-components';
import {editToy, removeToy} from '../../store/toys.slice';
import {useNavigation, useRoute} from '@react-navigation/native';
import {SCREEN_NAMES} from '../../app';
import {BUTTON_VARIANT} from '../../components/button/button.component';

export const ToyEditScreen = () => {
  const {
    params: {toyToEditId},
  } = useRoute();
  const toy = useSelector(state =>
    state.toys.find(toy => toy.id === toyToEditId),
  );

  const [toyName, setToyName] = useState(toy.name);
  const [toyDescription, setToyDescription] = useState(toy.description);
  const navigation = useNavigation();

  const dispatch = useDispatch();

  const onUpdatePress = () => {
    dispatch(
      editToy({
        id: toyToEditId,
        name: toyName,
        description: toyDescription,
      }),
    );

    navigation.navigate(SCREEN_NAMES.toysList);
  };

  const onRemovePress = () => {
    dispatch(
      removeToy({
        toyIdToRemove: toyToEditId,
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
      <Styled.SaveButton title="Update" onPress={onUpdatePress} />
      <Styled.RemoveButton
        title="Remove"
        onPress={onRemovePress}
        variant={BUTTON_VARIANT.SECONDARY}
      />
    </ScreenContainer>
  );
};
