import { Size } from "../../components/Display/media-query";
import { Fade } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import { AppFont, layoutbgcolor } from "components/Display/feutures";
// Images //

import { ServiceList } from "components/Display/feutures";

export const ServicesSub = () => {
  const size = Size();
  const isResponsiveSize = ["XS", "SM", "MD", "L"].includes(size);

  return (
    <Fade in={true} timeout={1800}>
      <div
        style={{
          backgroundColor: "black",
          paddingLeft: "15pt",
          paddingRight: "15pt",
        }}
      >
        <div
          style={{ color: "white" }}
          className="text-2xl font-bold text-center justify-center pt-5 pb-5"
        >
          Services
        </div>
        <div
          className={`grid grid-${
            isResponsiveSize ? "rows-1" : "cols-3"
          } gap-2`}
        >
          {ServiceList.map((service, i) => (
            <Card key={i}>
              <img src={service.image} />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {service.service}
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  {service.text}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Read more</Button>
              </CardActions>
            </Card>
          ))}
        </div>
      </div>
    </Fade>
  );
};

export const ServicesSubMain = () => {
  const size = Size();
  const isResponsiveSize = ["XS", "SM", "MD", "L"].includes(size);

  return (
    <Fade in={true} timeout={1800}>
      <div
        style={{
          backgroundColor: "black",
          paddingLeft: "15pt",
          paddingRight: "15pt",
        }}
      >
        <div
          style={{ color: "white" }}
          className="text-2xl font-bold text-center justify-center pt-20 pb-5"
        >
          Services
        </div>
        <div
          className={`grid grid-${
            isResponsiveSize ? "rows-1" : "cols-3"
          } gap-2`}
        >
          {ServiceList.map((service, i) => (
            <Card key={i}>
              <img src={service.image} />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {service.service}
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  {service.text}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Read more</Button>
              </CardActions>
            </Card>
          ))}
        </div>
      </div>
    </Fade>
  );
};
