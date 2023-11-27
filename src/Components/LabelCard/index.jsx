import styled from "@emotion/styled";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

const LabelCard = () => {
  const card = (
    <CardContent>
      <Wrapper>
        <img src="/blue-marker.svg" alt="blue-marker" />
        <Typography variant="body2">출발지</Typography>
        <span></span>
        <img src="/red-marker.svg" alt="red-marker" />
        <Typography variant="body2">목적지</Typography>
      </Wrapper>
      <Wrapper>
        <img src="/blue-line.svg" alt="blue-line" />
        <Typography variant="body2">이동경로</Typography>
        <span></span>
        <img src="/red-line.svg" alt="red-line" />
        <Typography variant="body2">예상경로</Typography>
      </Wrapper>
    </CardContent>
  );

  return (
    <LabelBox>
      <Card variant="outlined">{card}</Card>
    </LabelBox>
  );
};

const LabelBox = styled(Box)`
  position: absolute;
  right: 0;
  top: 64px;
  opacity: 0.8;
`;

const Wrapper = styled(Box)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;

export default LabelCard;
