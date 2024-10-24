import React, { useState, useEffect, useCallback } from "react";
import Fade from "@mui/material/Fade";
import { Size } from "media-query";
import {
  cardbgcolor,
  textcolor,
  pagetitlecolor,
  cardtitlecolor,
  pagebgcolor,
  fontType,
} from "components/Display/feutures";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import web1 from "Images/website1.png";
import web2 from "Images/website2.png";
import web3 from "Images/website3.png";
import web4 from "Images/website4.png";
import webVid1 from "Videos/web1.mp4";

const SolutionContext = () => {
  return (
    <div>
      <Card sx={{ bgcolor: "#7d9db5" }}>
        <div className="grid md:grid-cols-4 p-2">
          <CardMedia sx={{ height: 250 }} image={web1} />
          <CardMedia sx={{ height: 250 }} image={web2} />
          <CardMedia sx={{ height: 250 }} image={web3} />
          <CardMedia sx={{ height: 250 }} image={web4} />
        </div>
        <CardContent>
          <Typography variant="body1">
            At CloudCraft, we pride ourselves on being at the forefront of web
            development, combining cutting-edge technologies with a deep
            understanding of your business goals. Our team is proficient in a
            diverse tech stack that includes JavaScript and TypeScript for
            dynamic and robust web applications, alongside Node.js and Angular
            to create responsive and interactive user experiences. We leverage
            Python3 for powerful back-end solutions and PostgreSQL for reliable
            data management, ensuring your applications are both high-performing
            and scalable. Our design approach emphasizes user experience,
            utilizing frameworks like Tailwind, Material UI, and PrimeNG to
            craft intuitive and visually appealing interfaces. With a strong
            focus on collaboration, we employ GIT for version control,
            streamlining our development processes and fostering a culture of
            continuous improvement. In the realm of cloud computing, we harness
            the power of AWS, utilizing services such as EC2, ECS, EKS, and
            Lambda to build and deploy applications that are not only scalable
            but also cost-effective. Our expertise in Elastic Load Balancing,
            CloudWatch, EventBridge, Auto Scaling, and VPC enables us to create
            resilient infrastructures that adapt to your changing needs.
          </Typography>
        </CardContent>
        <video
          className="w-screen p-2 rounded-md"
          autoPlay
          loop
          src={webVid1}
          type="video/mp4"
        />
      </Card>
    </div>
  );
};

export const Solutions = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="block h-auto">
      <Fade in={true} timeout={1000}>
        <h1
          style={{ color: pagetitlecolor, fontFamily: fontType }}
          className="text-center font-bold text-3xl mt-16 pt-2"
        >
          Solutions
        </h1>
      </Fade>
      <Fade in={true} timeout={1500}>
        <div className="flex text-center justify-center p-2">
          <SolutionContext />
        </div>
      </Fade>
    </div>
  );
};
