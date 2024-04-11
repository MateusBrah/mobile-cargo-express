import styled from 'styled-components/native';
import theme from '../../theme';

export const Container = styled.TouchableOpacity`
  background-color: ${({ theme }: any) => theme.COLORS.BRAND_LIGHT};
  flex: 1;
  min-height: 56px;
  max-height: 56px;
  border-radius: 6px;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  font-size: ${({ theme }: any) => theme.FONT_SIZE.MD}px;
  font-family: ${({ theme }: any) => theme.FONT_FAMILY.BOLD};
`;

export const Loading = styled.ActivityIndicator`

`;