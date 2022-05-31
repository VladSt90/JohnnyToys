import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  padding-horizontal: 30px;
  padding-vertical: 10px
  align-self: center;
  border-radius: 10px;
`;

export const PrimaryContainer = styled(Container)`
  background-color: deepskyblue;
`;

export const SecondaryContainer = styled(Container)`
  background-color: red;
`;

export const Title = styled.Text`
  font-size: 30px;
  color: white;
`;
