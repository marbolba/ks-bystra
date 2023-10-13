/* eslint-disable react/jsx-key */
import SectionCard from "@/components/SectionCard/SectionCard";
import S from "./Landing.styled";
import LargeGapSection from "@/components/LargeGapSection/LargeGapSection";
import LabelWithBackgroundPattern from "@/components/LabelWithBackgroundPattern/LabelWithBackgroundPattern";
import SmallGapSection from "@/components/SmallGapSection/SmallGapSection";
import SectionApply from "@/components/SectionApply/SectionApply";
import { Typography } from "@mui/material";
import { LOREM_IPSUM } from "@/assets/labels/loremIpsum";
import PatronsSlider from "@/features/PatronsSlider/PatronsSlider";
import { useCallback, useEffect, useState } from "react";
import useJsonTemplates from "@/hooks/useJsonTemplates";

export type LandingLabels = {
  sectionTiles: {
    title: string;
    description: string;
    action: string;
    href: string;
  }[];
  joinUs: string;
  aboutUs: string;
  becomePatron: string;
};

export type LandingData = {
  config: {};
  labels: LandingLabels;
};

const Landing = () => {
  const { fetchLandingData } = useJsonTemplates();
  const [landingData, setLandingData] = useState<LandingData | null>(null);

  const initializeLanding = useCallback(async () => {
    const landingData = await fetchLandingData;
    setLandingData(landingData);
  }, []);

  useEffect(() => {
    initializeLanding();
  }, []);

  if (!landingData) {
    return null;
  }

  const { labels } = landingData;

  return (
    <S.ViewWrapper>
      <LargeGapSection>
        <S.SectionsWrapper>
          {labels.sectionTiles.map(
            ({ title, description, action, href }, idx) => (
              <SectionCard
                title={title}
                description={description}
                action={action}
                href={href}
                key={idx}
              />
            )
          )}
        </S.SectionsWrapper>

        <SmallGapSection>
          <LabelWithBackgroundPattern label="Dołącz do nas" />
          <Typography variant="body1">{LOREM_IPSUM}</Typography>
          <SectionApply />
        </SmallGapSection>

        <SmallGapSection>
          <LabelWithBackgroundPattern label="Zostań patronem" />
          <Typography variant="body1">{LOREM_IPSUM}</Typography>
          <PatronsSlider />
        </SmallGapSection>
      </LargeGapSection>
    </S.ViewWrapper>
  );
};

export default Landing;
