import Header from "@/components/Header/Header";
import TeamView from "../Team/TeamView";
import S from "./Home.styled";
import Footer from "@/components/Footer/Footer";

const Home = () => {
  return (
    <S.PageWrapper>
      <Header />
      <TeamView />
      <Footer />
    </S.PageWrapper>
  );
};

export default Home;
