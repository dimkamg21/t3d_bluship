import { useState, useEffect } from "react";
import { BookButton } from "../BookButton/BookButton";
import "./PreFooter.scss";

export const PreFooter = () => {
  const [isSmall, setIsSmall] = useState(window.innerWidth < 758);

  useEffect(() => {
    const handleResize = () => {
      setIsSmall(window.innerWidth < 758);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div className="prefooter">
      {isSmall ? (
        <img
          src="../img/prefooter_illustration-mobile.png"
          alt="Background Illustration"
          className="prefooter_background"
        />
      ) : (
        <img
          src="../img/prefooter_illustration.png"
          alt="Background Illustration"
          className="prefooter_background"
        />
      )}
      <div className="wrapper wrapper_fixer">
        <div className="container prefooter_fixer">
          <div className="prefooter_text-section">
            <h2>
              “Bluship Delivered Services In Our Campaign That{" "}
              <span>Positively Impacted</span> Our ROI“
            </h2>
            <p className="prefooter_text">— Christian Kok, EarlyAccess Pass</p>
            <BookButton />
          </div>
        </div>
      </div>
    </div>
  );
};
