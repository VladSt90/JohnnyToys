import styled from 'styled-components/native';
import {PlusButton} from '../../components/plus-button/plus-button.component';

export const PositionedPlusButton = styled(PlusButton)`
  position: absolute;
  bottom: 50px;
  left: 50px;
`;

export const ToyListItemPlate = styled.TouchableOpacity`
  border-width: 1px;
  border-radius: 5px;
  height: 75px;
  justify-content: center;
  padding-left: 20px;
  margin-bottom: 20px;
`;

export const ToyListItemName = styled.Text`
  font-size: 20px;
  font-weight: bold;
`;
