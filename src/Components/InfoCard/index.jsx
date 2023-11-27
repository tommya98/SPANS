import styled from "@emotion/styled";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

const InfoCard = ({ speed, latitude, longitude, altitude }) => {
  const card = (
    <CardContent>
      <Typography variant="body2">{`속도: ${speed.toFixed(2)}km/h`}</Typography>
      <Typography variant="body2">{`위도: ${latitude.toFixed(4)}°`}</Typography>
      <Typography variant="body2">{`경도: ${longitude.toFixed(
        4
      )}°`}</Typography>
      <Typography variant="body2">{`고도: ${altitude.toFixed(2)}m`}</Typography>
    </CardContent>
  );

  return (
    <CardBox>
      <Card variant="outlined">{card}</Card>
    </CardBox>
  );
};

const CardBox = styled(Box)`
  position: absolute;
  left: 0;
  top: 64px;
  opacity: 0.8;
`;

export default InfoCard;
