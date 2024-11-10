import { CardContent, Card } from "@mui/material";

export const ContactUs = () => {
  return (
    <div className="flex align-center justify-center">
      <Card sx={{ backgroundColor: "black" }}>
        <CardContent
          className="flex align-center justify-center"
          sx={{ color: "whitesmoke" }}
        >
          CONTACT US
        </CardContent>
        <CardContent
          className="grid grid-flow-row gap0-2"
          sx={{ color: "whitesmoke" }}
        >
          <div className="flex text-center justify-center">
            Telephone: + 27 21 555 3340
          </div>
          <div className="flex text-center justify-center">
            Address: 22 Bolt Avenue, Montague Gardens, Cape Town
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export const ContactUsMain = ({topBarOn,isResponsiveSize}) => {
  return (
    <div
      
      className="flex align-center justify-center"
    >
      <Card sx={{ backgroundColor: "black" }}>
        <CardContent
          className="grid grid-flow-row gap0-2"
          sx={{ color: "whitesmoke" }}
        >
          <div className="flex text-center justify-center">
            Telephone: + 27 21 555 3340
          </div>
          <div className="flex text-center justify-center">
            Address: 22 Bolt Avenue, Montague Gardens, Cape Town
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
