type Props = {
  fill?: string;
};

const BackIcon = ({ fill = "white" }: Props) => (
  <svg
    width="34"
    height="35"
    viewBox="0 0 34 35"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M11.0897 15.8333L28.3334 15.8333V18.6666H11.0897L18.6887 26.2656L16.6856 28.2688L5.66675 17.25L16.6856 6.23113L18.6887 8.2343L11.0897 15.8333Z"
      fill={fill}
    />
  </svg>
);

export default BackIcon;
