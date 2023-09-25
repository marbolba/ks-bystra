import Header from "@/components/Header/Header";
import TeamView from "../Team/TeamView";
import S from "./Home.styled";

const Home = () => {
  return (
    <S.GlobalBackground>
      <S.PageWrapper>
        <Header />
        <TeamView />
      </S.PageWrapper>
    </S.GlobalBackground>
  );
};

export default Home;
