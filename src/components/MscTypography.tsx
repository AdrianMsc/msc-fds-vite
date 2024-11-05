interface MscTypographyProps {
  text: string;
}

const MscTypography: React.FC<MscTypographyProps> = ({ text }) => {
  return (
    <>
      <h1>{text}</h1>
      <h2>{text}</h2>
      <h3>{text}</h3>
      <h4>{text}</h4>
      <h5>{text}</h5>
      <h6>{text}</h6>
    </>
  );
};

export default MscTypography;
