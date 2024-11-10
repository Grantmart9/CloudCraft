import { CardContent, Card } from "@mui/material";
import { CompanyAddrr, CompanyTel } from "components/Display/feutures";

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
            Telephone: {CompanyTel}
          </div>
          <div className="flex text-center justify-center">
            Address: {CompanyAddrr}
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
            Telephone: {CompanyTel}
          </div>
          <div className="flex text-center justify-center">
            Address: {CompanyAddrr}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
