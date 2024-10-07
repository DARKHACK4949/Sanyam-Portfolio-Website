import { motion } from "framer-motion";

const designs = [
  {
    image: "./images/ui-1.png", 
    title: "E-Bike Homepage",
    link: "https://www.figma.com/proto/bNlZXZglgDoIePwHkXeso0/E-Bike-Homepage?page-id=0%3A1&node-id=1-3&node-type=canvas&viewport=499%2C339%2C0.46&t=UONQBN6dHJS4FJx1-1&scaling=scale-down&content-scaling=fixed",
  },
  {
    image: "./images/ui-2.png", 
    title: "Website Landing Page",
    link: "https://www.figma.com/proto/tEgIdHoWnFHDHkhJqWWTVn/Responsive-Landing-Page-Design-%7C-Website-Home-Page-Design-%7C-Agency-Website-UI-Design?page-id=0%3A1&node-id=5-573&node-type=canvas&viewport=394%2C1002%2C0.38&t=WjphnViuePXoCxUZ-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=5%3A573",
  },
  {
    image: "./images/ui-3.png", 
    title: "Gaming Console",
    link: "https://www.figma.com/proto/788MAFB7WPQbb17obDR4o1/Gaming-Console?page-id=0%3A1&node-id=1-2&node-type=canvas&viewport=588%2C206%2C0.52&t=Rc2jhQmWtdjjyIFZ-1&scaling=scale-down&content-scaling=fixed",
  },
  {
    image: "./images/ui-4.png", 
    title: "Homepage Parallax",
    link: "https://www.figma.com/proto/S9mcKEw2mKaKJ9iBLs0vTi/Parallex-Effect-Homepage?page-id=0%3A1&node-id=1-9&node-type=canvas&viewport=526%2C370%2C0.3&t=qotfTgU9r4ToUsH1-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=1%3A69",
  },
  {
    image: "./images/ui-5.png", 
    title: "Immersive Parallax",
    link: "https://www.figma.com/proto/yGVsuCXDyloxo5GnU5TUDS/Immersive-Parallex-landing-page?page-id=0%3A1&node-id=1-3457&node-type=canvas&viewport=526%2C366%2C0.13&t=Se5XoEBvxLIZGdvQ-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=1%3A3377",
  },
  {
    image: "./images/ui-6.png", 
    title: "Fruity Corousel",
    link: "https://www.figma.com/proto/2gZCn1b2koLaptACJ4KAY9/Fruity-3D-corousel?page-id=0%3A1&node-id=1-372&node-type=canvas&viewport=526%2C358%2C0.22&t=kwcl1LMdcnxK1a8O-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=1%3A372",
  },
  {
    image: "./images/ui-7.png", 
    title: "Restaurant Menu",
    link: "https://www.figma.com/proto/g8Tuz9SUcWRQBsPLnN8jX7/Restaurant-Menu--till-details?page-id=0%3A1&node-id=1-636&node-type=canvas&viewport=526%2C370%2C0.31&t=c4Ypq5IwIuHhnVm3-1&scaling=min-zoom&content-scaling=fixed",
  },
  {
    image: "./images/ui-8.png", 
    title: "E-Commerce",
    link: "https://www.figma.com/proto/6lubJAcQZBfRNLcLhPu2ro/Ecommerce-Homepage?page-id=0%3A1&node-id=1-388&node-type=canvas&viewport=540%2C1973%2C0.67&t=33raNuS5wfrj3V0I-1&scaling=min-zoom&content-scaling=fixed",
  },
];

const Design = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        UI Designs
      </motion.h2>
      
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-center"
      >
        {designs.map((design, index) => (
          <motion.a
            href={design.link}
            target="_blank"
            rel="noopener noreferrer"
            key={index}
            className="relative rounded-2xl border-4 border-neutral-800 overflow-hidden"
            whileHover={{ scale: 1.1 }} 
            transition={{ duration: 0.3 }}
          >
            <img
              src={design.image}
              alt={design.title}
              loading="lazy" // Lazy loading for performance
              className="w-full h-full object-cover rounded-lg"
            />
            <motion.div
              className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-lg text-white text-xl font-semibold opacity-0"
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              {design.title}
            </motion.div>
          </motion.a>
        ))}
      </motion.div>
    </div>
  );
};

export default Design;
