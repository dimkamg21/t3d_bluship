/* eslint-disable react/prop-types */
import { useState, useEffect, useRef } from "react";
import { SectionTitle } from "../SectionTitle/SectionTitle";
import "./Team.scss";

export const Team = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 1439);
  const [translateX, setTranslateX] = useState(0);
  const containerRef = useRef(null);
  const cardRef = useRef(null); // Ref to get the card width

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 1439);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handlePrevClick = () => {
    if (cardRef.current) {
      const cardWidth = cardRef.current.offsetWidth + 12; // Card width plus gap
      setTranslateX((prev) => Math.min(prev + cardWidth, 0));
    }
  };

  const handleNextClick = () => {
    if (containerRef.current && cardRef.current) {
      const containerWidth = containerRef.current.offsetWidth;
      const cardWidth = cardRef.current.offsetWidth + 12; // Card width plus gap
      const totalCardsWidth = cardWidth * employees.length;
      const maxTranslateX = Math.min(containerWidth - totalCardsWidth, 0);

      setTranslateX((prev) => Math.max(prev - cardWidth, maxTranslateX));
    }
  };

  return (
    <div className="team">
      <div className="team_gradient-line" />
      <div className="team_caption">
        <SectionTitle>Team</SectionTitle>

        <div className="team_text-section">
          {isSmallScreen ? (
            <h2>Dedicated Growth Team</h2>
          ) : (
            <h2>Your Dedicated Growth Team</h2>
          )}

          <p className="team_text">
            Bluship only partners with a select number of clients, enabling us
            to prioritize your business & provide the attention it deserves.
            Wouldn&#39;t it be fantastic to have a team of highly experienced
            CMOs on board without breaking the bank? The good news is, we&#39;ve
            got you covered.
          </p>
        </div>
      </div>

      <div className="team_employees-container" ref={containerRef}>
        <div className="team_employees" style={{ transform: `translateX(${translateX}px)` }}>
          {employees.map((employee, index) => (
            <EmployeeCard
              key={index}
              src={employee.src}
              name={employee.name}
              position={employee.position}
              cardRef={index === 0 ? cardRef : null} // Assign ref to the first card only
            />
          ))}
        </div>
      </div>

    {isSmallScreen && (
        <div className="team_navigation">
          <button onClick={handlePrevClick}> &lt; </button>
          <button onClick={handleNextClick}> &gt; </button>
        </div>
    )}

    </div>
  );
};

const EmployeeCard = ({ src, name, position, cardRef }) => (
  <div className="employee-card" ref={cardRef}>
    <div className="inner-card">
      <img src={src} alt={name} />
      <div className="gradient-overlay"></div>
      <div className="employee-info">
        <h3>{name}</h3>
        <div className="role-badge"><p>{position}</p></div>
      </div>
    </div>
  </div>
);

const employees = [
  {
    src: "../team/chris.jpg",
    name: "Christopher Hartsook",
    position: "CEO",
  },
  {
    src: "../team/jack.jpg",
    name: "Jack Milton",
    position: "CMO",
  },
  {
    src: "../team/joe.jpg",
    name: "Joe Sainsbury",
    position: "PROJECT MANAGER",
  },
  {
    src: "../team/billy.jpg",
    name: "Billy Jarvis",
    position: "COLLAB MANAGER",
  },
  {
    src: "../team/arnold.jpg",
    name: "Arnold Paran",
    position: "DISCORD MANAGER",
  },
];