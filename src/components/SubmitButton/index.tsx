import { Container, Loading, Title } from './styles';

type SubmitButtonPropsT = {
  title: string;
  isLoading: boolean;
  onPress: () => void;
};

export function SubmitButton({ title, isLoading, onPress }: Readonly<SubmitButtonPropsT>) {
  return (
    <Container
      activeOpacity={0.7}
      disabled={isLoading}
      onPress={onPress}
    >
      {isLoading ? (
        <Loading />
      ) : (
        <Title>
          {title}
        </Title>
      )}
    </Container>
  );
}