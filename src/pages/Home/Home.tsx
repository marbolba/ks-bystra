import Header from "@/components/Header/Header";
import S from "./Home.styled";
import Footer from "@/components/Footer/Footer";

const Home = () => {
  return (
    <S.PageWrapper>
      <Header />
      <Footer />
    </S.PageWrapper>
  );
};

export default Home;
