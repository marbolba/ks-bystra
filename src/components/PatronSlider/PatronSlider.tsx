import { useEffect, useMemo, useState } from "react";
import S from "./PatronSlider.styled";

type Props = { patronsImages: React.ReactNode[] };

const PatronSlider = ({ patronsImages }: Props) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const tickDistance = 100;
  const tickTimeMs = 1000;
  const repetitionCount = 100;

  const patronsEnlargedArray = useMemo(() => {
    return Array(repetitionCount).fill(patronsImages).flat(1);
  }, [patronsImages]);

  useEffect(() => {
    let nextIndex = 0;

    const interval = setInterval(() => {
      nextIndex = currentIndex + 1;

      setCurrentIndex(nextIndex);
    }, tickTimeMs);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <S.SliderContainer>
      <S.SliderContent
        style={{ transform: `translateX(-${tickDistance * currentIndex}px)` }}
        tickTimeMs={tickTimeMs}
      >
        {patronsEnlargedArray.map((image, idx) => (
          <S.SlideItem key={idx}>{image}</S.SlideItem>
        ))}
      </S.SliderContent>
    </S.SliderContainer>
  );
};

export default PatronSlider;
