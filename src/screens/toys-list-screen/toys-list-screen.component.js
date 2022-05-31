import React from 'react';
import {Text, FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {PlusButton} from '../../components/plus-button/plus-button.component';
import * as Styled from './toys-list-screen.styles';
import {ScreenContainer} from '../../components/common-layout-components';
import {useNavigation} from '@react-navigation/native';
import {SCREEN_NAMES} from '../../app';

export const ToysListScreen = () => {
  const toys = useSelector(state => state.toys);
  const navigation = useNavigation();

  const createToyPressHandler = toyId => () => {
    navigation.navigate({
      name: SCREEN_NAMES.toyEdit,
      params: {toyToEditId: toyId},
    });
  };

  const renderToyItem = ({item: toy}) => (
    <Styled.ToyListItemPlate onPress={createToyPressHandler(toy.id)}>
      <Styled.ToyListItemName>{toy.name}</Styled.ToyListItemName>
    </Styled.ToyListItemPlate>
  );

  const onPlusButtonPress = () => {
    navigation.navigate(SCREEN_NAMES.toyCreation);
  };

  return (
    <ScreenContainer>
      <FlatList renderItem={renderToyItem} data={toys} />
      <Styled.PositionedPlusButton onPress={onPlusButtonPress} />
    </ScreenContainer>
  );
};
