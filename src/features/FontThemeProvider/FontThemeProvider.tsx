import S from "./FontThemeProvider.styled";

type Props = {
  children: React.ReactNode;
};

const FontThemeProvider = ({ children }: Props) => {
  return <S.FontTheme>{children}</S.FontTheme>;
};

export default FontThemeProvider;
