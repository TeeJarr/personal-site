import NavBarBot from "../navBar/navBarBot.tsx";
import { motion as m } from "framer-motion";
import PhotoCard from "./photocard/photoCard.tsx";

function Photography() {
  return (
    <>
      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div>
          <h1 className="text-white text-5xl py-5 photo-header">
            Photography Collections
          </h1>
        </div>
        <div className="flex flex-wrap">
          <PhotoCard
            url="/src/assets/headshot.jpeg"
            title="Headshot"
            description="A headshot of me"
          />
          <PhotoCard
            url="/src/assets/headshot.jpeg"
            title="Headshot"
            description="A headshot of me"
          />
          <PhotoCard
            url="/src/assets/headshot.jpeg"
            title="Headshot"
            description="A headshot of me"
          />
          <PhotoCard
            url="/src/assets/headshot.jpeg"
            title="Headshot"
            description="A headshot of me"
          />
          <PhotoCard
            url="/src/assets/headshot.jpeg"
            title="Headshot"
            description="A headshot of me"
          />
        </div>
      </m.div>
      <NavBarBot />
    </>
  );
}

export default Photography;
