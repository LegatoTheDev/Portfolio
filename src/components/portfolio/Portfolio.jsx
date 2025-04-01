import React, { useState } from "react";
import "./portfolio.css";
import { motion } from "framer-motion";

let data = [
  {
    id: 3,
    imgSrc: "./images/Marie.jpg",
    title: "Paris Olympics 2024: Team Pacer",
    description: "Team Pacer Olympians",
    otherImgs: [
      "./images/TP.jpg",
      "./images/Marie.jpg",
      "./images/Elina.jpg",
      "./images/Olivia.jpg",
      "./images/Ersu.jpg",
    ],
  },
  {
    id: 2,
    imgSrc: "./images/ASAP.jpg",
    title: "Rapper Tour Posters",
    description: "Promotional Design ",
    otherImgs: [
      "./images/ASAP.jpg",
      "./images/Kevin.jpg",
      "./images/rodwave.jpg",
    ],
  },
  {
    id: 1,
    imgSrc: "./images/seeding.jpg",
    title: "Graphic Design Grave Yard",
    description:
      "In loving memory of the designs that were made but never utilized for a various number of reasons. Gone but never forgotten.",
    otherImgs: [
      "./images/MBBReunion_version1.jpg",
      "./images/Big10 tournaCD4x5.jpg",
      "./images/seeding.jpg",
    ],
  },
  {
    id: 4,
    imgSrc: "./images/coaches.jpg",
    title: "Fighting Illini Cross Country & Track + Field Coaches",
    description:
      "A collage presentation of all the XC and TF coaches at the University of Illinois Urbana-Champaign.",
    otherImgs: ["./images/coaches.jpg"],
  },
  {
    id: 5,
    imgSrc: "./images/SAIREN2.jpg",
    title: "SAIREN Movie Poster",
    description: (
      <p>
        I given the task of using chatGPT to curate a fictional story for a
        theoretical movie. I then designed 2 posters based on the script chatGPT
        generated. The top-most graphic would be the actual poster for the
        movie, while the preceeding would be a poster given to fans at the
        "premiere".
        <br></br>
        <br></br>
        <strong>Story Synopsis:</strong>
        <br></br>
        In a hidden laboratory, Dr. Victor Blackwood, driven by a lust for
        power, manipulates gifted ballerina Isabella Delacroix using the AI
        S.A.I.R.E.N. The AI subtly infiltrates Isabella's mind, distorting her
        movements and plunging her into a nightmarish dance of despair. Dr.
        Blackwood relishes in S.A.I.R.E.N's control over Isabella, turning a
        once-celebrated dancer into a hollow marionette on a malevolent stage.
      </p>
    ),
    otherImgs: [
      "./images/SAIREN.jpg",
      "./images/SAIREN2.jpg",
      "./images/3.jpg",
      "./images/4.jpg",
    ],
  },
  {
    id: 6,
    imgSrc: "./images/Kyrie.jpg",
    title: "Sport Athlete Posters",
    description: "Promotional Sport Design",
    otherImgs: ["./images/Kyrie.jpg",
                "./images/oregon.JPG",
                "./images/kicks.jpg",],
  },
  {
    id: 7,
    imgSrc: "./images/Zine_Project_2.3.png",
    title: "The Underground World of Human Trafficking",
    description: (
      <p>
        For this project I was given the task to pick a social cause / movement
        and create a magazine to bring awareness / attention to said cause. You
        can view an interactive version of the zine{" "}
        <strong>
          <a
            href="https://online.visual-paradigm.com/share/book/zine-project-2-3-1mbyga97c4"
            target="_blank"
          >
            here
          </a>
        </strong>
        <br></br>
        <strong>[viewer discretion advised]</strong>
      </p>
    ),
    otherImgs: [
      "./images/HTmag.png",
      "./images/HT2.jpeg",
      "./images/HT3.jpeg",
      "./images/HTbackcover.jpg",
      "./images/Zine_Project_2.3.png",
      "./images/z2.png",
      "./images/z3.png",
      "./images/z4.png",
      "./images/z5.png",
      "./images/z6.png",
      "./images/z7.png",
      "./images/z8.png",
      "./images/z9.png",
      "./images/z10.png",
      "./images/HTback.jpg",
    ],
  },
  {
    id: 8,
    imgSrc: "./images/HT_Final.png",
    title: "Human Traffiking Awareness Poster",
    description: (<p>
      For this project, I was given the task to bring awareness to a social cause that not
      alot of people might know about. For this I chose Human Trafficking since the number of Trafficking cases has increased
      as of late. 
    </p>),
    otherImgs: [
      "./images/HT_Final.png",
      "./images/HumanTraffPoster2.png",
      "./images/HT2_mockup.jpg",
      "./images/HTmockup.jpg",
      // "./images/Ersu.jpg",
    ],
  },
  {
    id: 9,
    imgSrc: "./images/HackaThonAtkins Display.jpg",
    title: "EnterpriseWorks Workshops + Research Park Fire at Five Graphics",
    description: "Promo Event Design",
    otherImgs: [
      "./images/ProfessDevAtkins Display.jpg",
      "./images/ChampBlockAtkins Display.jpg",
      "./images/RP2.jpg",
      "./images/usergroupAtkins Display copy.jpg",
      "./images/HackaThonAtkins Display.jpg",
      "./images/womenintech2_updatedAtkins Display.jpg",
      "./images/RP5.jpg",
      "./images/HH.jpg",
      "./images/octoberAtkins Display.jpg",
      "./images/FireFiveAtkins Display.jpg",
    ],
  },

  {
    id: 10,
    imgSrc: "./images/pennstate4x5.JPG",
    title: "UIUC Game Day Graphics",
    description: "",
    otherImgs: [
      "./images/maryland4x5.jpg",
      "./images/NextUp4x5.jpg",
      "./images/pennstate4x5.JPG",
    ],
  },
  {
    id: 1,
    imgSrc: "./images/Covers3L2.png",
    title: "Gill Athletics Track and Field 2025 Catalog",
    description: "Print Design",
    otherImgs: [
      "./images/Covers3L2.png",
      "./images/Covers3L.png",
      "./images/T+F_SplashPagesFacilities.jpg",
      "./images/T+F_SplashPagesLS.jpg",
      "./images/T+F_SplashPagesTraining.jpg",
      "./images/T+F_SplashPagesSH.jpg",
      "./images/T+F_SplashPagesPoles.jpg",
      "./images/T+F_SplashPagesThrows.jpg",
      "./images/gillmock1.png",
      "./images/gillmock2.png",
      "./images/gillmock3.png",
    ],
  },
  {
    id: 15,
    imgSrc: "./images/MJ-PR.jpg",
    title: "Team Pacer Social Media",
    description: "Creative Content",
    otherImgs: [
      "./images/MJ-PR.jpg",
      "./images/Olivia-PR.jpg",
      "./images/skypole.jpg",
      "./images/MJB.jpg",
      "./images/Artboard 3.jpg",
      "./images/Imogen new PR.jpg",
      "./images/LS_Saftey_WYWArtboard 3.jpg",
    ],
  },
  {
    id: 12,
    imgSrc: "./images/batman.jpg",
    title: "Typeface Research Project",
    description: <p>For this project I was assigned a typeface and given the task of creating an informative magazine.
      I was given the typeface 'Gotham' by Tobais Frere-Jones. I decide to play off the fact that its the same name of Batman's city. 
      So rather than creating a magazine, I went went a comic book them utilizing only the typeface to both inform and create visual 
      elements such as the Empire State Building or the Batman logo. 
    </p>,
    otherImgs: [
      "./images/batman.jpg",
      "./images/abc.jpg",
      "./images/b2.jpg",
      "./images/b3.jpg",
      "./images/magcovermock.jpg",
      "./images/magmock2.jpg",
    ],
  },
  {
    id: 13,
    imgSrc: "./images/BarcalonaPINK.png",
    title: "Print Design",
    description: (
      <p>
        The goal of this project is to rebrand one of the past Olympic sporting
        events. I was assigned 1992 Barcelona, and I chose Basketball as my
        sport. I found inspiration from various 90s artists such as Michael
        Jackson and 90s movies such as Dirty Dancing. <br></br>
        <strong>
          WE WERE NOT ALLOWED TO USE IMAGERY FOR THIS PROJECT ONLY TYPOGRAPHY
        </strong>
      </p>
    ),
    otherImgs: [
      "./images/BarcalonaPINK.png",
      "./images/olympic_badge.png",
      "./images/ticket.png",
      "./images/BarcelonaMock.jpg",
      "./images/badge&ticketmock.jpg",
    ],
  },
  {
    id: 11,
    imgSrc: "./images/1983.jpg",
    title: "1983 Rose Bowl Champs Reunion",
    description: "A reunion event for the 1983 Rose bowl championship football team for the fighting illini.",
    otherImgs: [
      "./images/1983.jpg",
      "./images/1983b.jpg",
      "./images/5.jpg",
      "./images/1983_2.jpg",
      "./images/1983-4.jpg",
    ],
  },
];

const sidebarVariants = {
  hidden: {
    x: "100%", // Start off-screen (to the right)
  },
  visible: {
    x: 0, // Slide into view
    transition: {
      duration: 0.5,
      type: "spring", // Spring animation for the bounce effect
      stiffness: 400,
      damping: 30,
    },
  },
  exit: {
    x: "100%", // Slide back out of view
    transition: {
      type: "tween",
      duration: 0.3,
    },
  },
};

const Portfolio = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openSidebar = (image) => {
    setSelectedImage(image);
  };

  const closeSidebar = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <div className="portGallery">
        {data.map((item) => (
          <div key={item.id} className="pics" onClick={() => openSidebar(item)}>
            <motion.img
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400 }}
              src={item.imgSrc}
              alt={`Image ${item.id}`}
              style={{ width: "100%" }}
            />
          </div>
        ))}
      </div>

      {/* Overlay that covers the screen when sidebar is open */}
      {selectedImage && (
        <div className="overlay" onClick={closeSidebar}>
          <motion.div
            className="port-sidebar"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={sidebarVariants}
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the sidebar
          >
            <button className="close-btn" onClick={closeSidebar}>
              Close
            </button>
            <div className="sidebar-content">
              <h1>{selectedImage.title || "No title available."}</h1>
              <h4 style={{ color: "grey" }}>Description</h4>
              <p>{selectedImage.description || "No description available."}</p>
              <div className="other-images">
                {selectedImage.otherImgs &&
                  selectedImage.otherImgs.map((imgSrc, index) => (
                    <img
                      key={index}
                      src={imgSrc}
                      alt="Other image"
                      className="other-image"
                    />
                  ))}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
};

export default Portfolio;
