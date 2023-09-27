import Header from "@/components/Header/Header";
import TeamView from "../Team/TeamView";
import S from "./Home.styled";

const Home = () => {
  return (
    <S.PageWrapper>
      <Header />
      <TeamView />
    </S.PageWrapper>
  );
};

export default Home;
