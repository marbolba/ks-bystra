import SectionApplyForm from "./SectionApplyForm/SectionApplyForm";
import MediumGapSection from "../MediumGapSection/MediumGapSection";
import S from "./SectionApply.styled";
import { Typography } from "@mui/material";

const SectionApply = () => {
  return (
    <>
      <S.Paper>
        <MediumGapSection>
          <Typography variant="h3">
            Wypełnij poniższy formularz zapisu, aby dołączyć do Klubu Sportowego
            Bystra
          </Typography>
          <SectionApplyForm />
        </MediumGapSection>
      </S.Paper>
    </>
  );
};

export default SectionApply;
