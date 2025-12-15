import "./LoadingScreen.css";
import devLogo from "../../../public/images/logoo.png";

export default function LoadingScreen() {
  return (
    <div className="loading-container">
      <div className="scene">
        <img src={devLogo} className="react-logo" />

        <div className="cube">
          <div className="face left"></div>
          <div className="face right"></div>
        </div>
      </div>

      <p className="loading-text">Loading...</p>
    </div>

  );
}
