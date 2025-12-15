import { Link } from "react-router-dom";
import "../styles/SignUp.css";
import HeaderSupSin from "./HedearSupSin";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { AlertTriangle } from "lucide-react";

export function SignUp() {
  const { t } = useTranslation();
  const [showPopup, setShowPopup] = useState(false);

  return (
    <>
      <HeaderSupSin />
      <div className="flex items-center justify-center mt-20">
        <div
          className="card"
          role="region"
          aria-label={t("signup.cardAriaLabel")}
        >
          <div className="form-side">
            <form action="#" className="signup-page" method="post" noValidate>
              <h2 className="font-semibold text-3xl">{t("signup.signupTitle")}</h2>
              <div className="muted">{t("signup.tip")}</div>

              <div className="field">
                <label htmlFor="fullname">{t("signup.fullname")}</label>
                <input
                  id="fullname"
                  name="fullname"
                  type="text"
                  placeholder={t("signup.fullnamePlaceholder")}
                  required
                />
              </div>

              <div className="field">
                <label htmlFor="email">{t("signup.email")}</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder={t("signup.emailPlaceholder")}
                  required
                />
              </div>

              <div className="field">
                <label htmlFor="password">{t("signup.password")}</label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  placeholder={t("signup.passwordPlaceholder")}
                  required
                  minLength={6}
                />
              </div>

              <button className="btn" type="submit">{t("signup.submit")}</button>

              <button
                className="hack"
                type="button"
                onClick={() => setShowPopup(true)}
              >Hacker?</button>
              <div className="hack-p">In this mode, your all anonymous</div>

              <div className="alt">
                {t("signup.alreadyAccount")}
                <Link className="small-link" to="/signin">{t("signup.signin")}</Link>
              </div>
            </form>
          </div>
          <hr />

          <div className="hero">
            <div className="hero-inner">
              <div className="brand">
                <div className="logo" aria-hidden="true">
                  <img src="images/logoo.png" alt="" />
                </div>
                <div>
                  <h1 className="font-bold text-left">Devoria</h1>
                  <div
                    className="text-subtitle"
                    style={{
                      color: "var(--text-light)",
                      fontWeight: 600,
                      fontSize: ".95rem",
                    }}
                  >
                    {t("signup.welcome")}
                  </div>
                </div>
              </div>

              <p>{t("signup.description")}</p>

              <p
                style={{
                  marginTop: "8px",
                  color: "var(--text-light)",
                  fontSize: ".95rem",
                }}
              >
                <strong>{t("signup.privacyLabel")}:</strong> {t("signup.privacy")}
              </p>
            </div>
          </div>

          {showPopup && (
            <div className="popup-overlay1">
              <div className="popup1">
                <div className="flex justify-center">
                  <AlertTriangle size={60} color="white" />
                </div>
                <h2>Are you sure?</h2>
                <p>This action may be risky. Proceed with caution!</p>
                <div className="popup1-buttons">
                  <button className="btn-go" onClick={() => alert("Go clicked")}>Go</button>
                  <button className="btn-exit" onClick={() => setShowPopup(false)}>Exit</button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
