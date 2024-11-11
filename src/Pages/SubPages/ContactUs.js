import { CardContent, Card } from "@mui/material";
import {
  CompanyAddrr,
  CompanyTel,
  layoutbgcolor,
  textcolor,
} from "components/Display/AppControl";

export const ContactUs = () => {
  return (
    <div className="flex align-center justify-center">
      <Card sx={{ backgroundColor: layoutbgcolor, boxShadow: "none" }}>
        <CardContent
          className="flex align-center justify-center"
          sx={{ color: textcolor }}
        >
          CONTACT US
        </CardContent>
        <CardContent
          className="grid grid-flow-row gap0-2"
          sx={{ color: textcolor }}
        >
          <div className="flex text-center justify-center">{CompanyTel}</div>
          <div className="flex text-center justify-center">{CompanyAddrr}</div>
        </CardContent>
      </Card>
    </div>
  );
};

export const ContactUsMain = () => {
  return (
    <div className="flex align-center justify-center">
      <Card sx={{ backgroundColor: layoutbgcolor,boxShadow:"none" }}>
        <CardContent
          className="grid grid-flow-row gap0-2"
          sx={{ color: textcolor }}
        >
          <div className="flex text-center justify-center">{CompanyTel}</div>
          <div className="flex text-center justify-center">{CompanyAddrr}</div>
        </CardContent>
      </Card>
    </div>
  );
};
