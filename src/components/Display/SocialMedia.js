import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

export const SocialMediaIcons = () => {
    return (
      <div className="flex align-center justify-center">
        <div className="grid grid-cols-4 gap-7 my-auto">
          <InstagramIcon fontSize={"large"} style={{ color: "whitesmoke" }} />
          <FacebookIcon fontSize={"large"} style={{ color: "whitesmoke" }} />
          <LocalPhoneIcon fontSize={"large"} style={{ color: "whitesmoke" }} />
          <WhatsAppIcon fontSize={"large"} style={{ color: "whitesmoke" }} />
        </div>
      </div>
    );
  };