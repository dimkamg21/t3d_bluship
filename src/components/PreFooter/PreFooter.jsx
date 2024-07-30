import { BookButton } from "../BookButton/BookButton";
import "./PreFooter.scss";

export const PreFooter = () => (
  <div className="prefooter">
    <div className="prefooter_text-section">
      <h2>
        “Bluship delivered services in our campaign that{" "}
        <span>Positively Impacted</span> our ROI“
      </h2>

      <p className="prefooter_text">— Christian Kok, EarlyAccess Pass</p>

      <BookButton />
    </div>
  </div>
);
