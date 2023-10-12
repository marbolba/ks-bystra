import PatronSlider from "@/components/PatronSlider/PatronSlider";

const PatronsSlider = () => (
  <PatronSlider
    patronsImages={[
      <img src="public/images/sponsor1.png" key={1} />,
      <img src="public/images/sponsor2.png" key={2} />,
      <img src="public/images/sponsor3.png" key={3} />,
      <img src="public/images/sponsor4.png" key={4} />,
      <img src="public/images/sponsor5.png" key={5} />,
    ]}
  ></PatronSlider>
);

export default PatronsSlider;
