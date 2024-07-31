import { BookButton } from "../BookButton/BookButton";
import "./PreFooter.scss";

export const PreFooter = () => (
  <div className="prefooter">
    <img src="../img/prefooter_illustration.png" alt="Background Illustration" className="prefooter_background" />
      <div className="wrapper">
      <div className="container prefooter_fixer">
        <div className="prefooter_text-section">
          <h2>
            “Bluship delivered services in our campaign that{" "}
            <span>Positively Impacted</span> our ROI“
          </h2>
          <p className="prefooter_text">— Christian Kok, EarlyAccess Pass</p>
          <BookButton />
        </div>
      </div>
    </div>
  </div>
);
