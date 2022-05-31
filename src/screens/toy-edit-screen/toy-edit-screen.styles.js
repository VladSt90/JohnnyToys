import styled from 'styled-components/native';
import {Button} from '../../components/button/button.component';

export const ToyNameInput = styled.TextInput`
  margin-top: 30px;
  font-size: 40px;
  border-bottom-width: 1px;
  padding-bottom: 5px;
  margin-bottom: 30px;
  border-color: #ccc;
`;

export const ToyDescriptionInput = styled.TextInput.attrs({
  multiline: true,
})`
  font-size: 18px;
  border-width: 1px;
  padding: 5px;
  border-radius: 5px;
  height: 200px;
  border-color: #ccc;
`;

export const SaveButton = styled(Button)`
  margin-bottom: 10px;
`;

export const RemoveButton = styled(Button)`
  margin-bottom: 50px;
`;
