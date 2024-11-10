import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import About1 from "Images/about1.jpg";
import About2 from "Images/about2.jpg";
import About3 from "Images/about3.jpg";
import About4 from "Images/about4.jpg";
import About5 from "Images/about5.jpg";
import About6 from "Images/about6.jpg";
import About7 from "Images/about7.jpg";
import About8 from "Images/about8.jpg";
import About9 from "Images/about9.jpg";
import About10 from "Images/about10.jpg";
import About11 from "Images/about11.jpg";
import About12 from "Images/about12.jpg";

export const AboutUs = () => {
  return (
    <div className="flex align-center justify-center">
      <Card style={{ backgroundColor: "black" }}>
        <CardContent
          className="flex align-center justify-center"
          sx={{ color: "whitesmoke" }}
        >
          ABOUT US
        </CardContent>
        <CardContent
          className="flex text-center justify-center"
          sx={{ color: "whitesmoke" }}
        >
          At Cape Point Rigging, we are passionate about providing a complete
          suite of high-quality rigging services to our clients. With decades of
          experience in the industry and a passion for sailing, we have become a
          trusted name for boat owners and boat builders in need of rigging
          solutions.
        </CardContent>
      </Card>
    </div>
  );
};

export const AboutUsMain = ({ topBarOn,isResponsiveSize }) => {
  const WovenImageList = () => {
    return (
      <ImageList sx={{ padding: "5pt" }} variant="woven" cols={3} gap={8}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              srcSet={`${item.img}?w=161&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.img}?w=161&fit=crop&auto=format`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    );
  };

  const itemData = [
    {
      img: About1,
      title: "Bed",
    },
    {
      img: About2,
      title: "Kitchen",
    },
    {
      img: About3,
      title: "Kitchen",
    },
    {
      img: About4,
      title: "Kitchen",
    },
    {
      img: About5,
      title: "Kitchen",
    },
    {
      img: About6,
      title: "Kitchen",
    },
    {
      img: About7,
      title: "Kitchen",
    },
    {
      img: About8,
      title: "Kitchen",
    },
    {
      img: About9,
      title: "Kitchen",
    },
    {
      img: About10,
      title: "Kitchen",
    },
    {
      img: About11,
      title: "Kitchen",
    },
    {
      img: About12,
      title: "Kitchen",
    },
  ];
  return (
    <div
      style={{
        paddingTop: topBarOn
          ? isResponsiveSize
            ? "10pt"
            : "50pt"
          : isResponsiveSize
          ? "35pt"
          : "45pt",
      }}
      sx={{ backgroundColor: "black" }}
      className="rounded-md"
    >
      <div
        className="flex text-center justify-center"
        sx={{ color: "whitesmoke" }}
      >
        <div className="grid md:grid-cols-2 gap-0">
          <div style={{ color: "white" }} className="p-2">
            <div className="flex align-center justify-center text-gray-light text-xl p-2">
              An experienced and professional rigging team with decades of
              rigging experience
            </div>
            At Cape Point Rigging, we are passionate about providing a complete
            suite of high-quality rigging services to our clients. With decades
            of experience in the industry and a passion for sailing, we have
            become a trusted name for boat owners and boat builders in need of
            rigging solutions. Our services cover a wide range of rigging needs,
            from stepping and unstepping rigs to custom rope work and standing
            and running rigging. We also specialize in installing and
            uninstalling furling systems, ensuring that your yacht is equipped
            with the latest technology for smooth sailing. At Cape Point
            Rigging, we take pride in our commitment to safety and quality. We
            understand that your vessel’s rigging is critical to its performance
            and your enjoyment on the water, and we take that responsibility
            seriously. That’s why we offer comprehensive rig checks to ensure
            that all components of your rigging are in top condition and
            identify any potential issues before they become a problem. Our team
            of experts is dedicated to providing top-notch service, whether you
            need repairs, refurbishment, or new spars and rigging supply. We
            have the knowledge and skills to handle even the most complex
            rigging challenges, and we work closely with our clients to
            understand their unique needs and provide tailored solutions. At
            Cape Point Rigging, we also specialise in custom rope work. Our
            skilled team can create custom rope products to meet your specific
            needs, from spliced dock lines to halyards and sheets. We take pride
            in our attention to detail and commitment to quality, ensuring that
            every custom rope product is made to the highest standards. Whether
            you are a boat builder, seasoned sailor, a racer or a cruiser, Cape
            Point Rigging is here to help. We understand that every boat and
            every sailor is unique, and we work closely with our clients to
            provide personalised service that meets their individual needs.
            Contact us today to learn more about our services and how we can
            help you with all your rigging needs. solutions.
          </div>
          <div>
            <WovenImageList />
          </div>
        </div>
      </div>
    </div>
  );
};
