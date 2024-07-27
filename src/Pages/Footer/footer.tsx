import FooterIcon from "./footerIcon/footerIcon.tsx";
import "./footer.css";
import { motion as m } from "framer-motion";

function Footer() {
  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="sticky bottom-0"
    >
      <footer className="w-screen flex justify-center mb-4">
        <FooterIcon
          path="/src/assets/5279114_linkedin_network_social network_linkedin logo_icon.svg"
          altText="linkedin"
          text="Linkedin"
          url="https://www.linkedin.com/feed/?trk=404_page"
        />
        {/* <FooterIcon
          path="/src/assets/2644990_media_social_twitter_icon.svg"
          altText="twitter"
          text="Twitter"
        /> */}
        {/* <FooterIcon
          path="/src/assets/2644987_media_social_youtube_icon.svg"
          altText="youtube"
          text="Youtube"
        /> */}
        <FooterIcon
          path="/src/assets/4691240_instagram_icon.svg"
          altText="instagram"
          text="Instagram"
          url="https://www.instagram.com/capturedby_tristan?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
        />

        <FooterIcon
          path="/src/assets/211904_social_github_icon.svg"
          altText="github"
          text="Github"
          url="https://github.com/TeeJarr"
        />
      </footer>
    </m.div>
  );
}

export default Footer;
