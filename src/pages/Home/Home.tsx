import Header from "@/components/Header/Header";
import Landing from "../Landing/Landing";
import S from "./Home.styled";
import Footer from "@/components/Footer/Footer";

const Home = () => {
  return (
    <S.PageWrapper>
      <Header />
      <Landing />
      <Footer />
    </S.PageWrapper>
  );
};

export default Home;
