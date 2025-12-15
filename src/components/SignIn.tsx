import { Link } from "react-router-dom";
import "../styles/SignIn.css";
import HeaderSupSin from "./HedearSupSin";
import { useTranslation } from "react-i18next";

export function SignIn() {
  const { t } = useTranslation();

  return (
    <>
      <HeaderSupSin />
      <div className="flex items-center justify-center mt-20">
        <div className="card" role="region" aria-label="Sign in card">

          <div className="hero">
            <div className="brand">
              <div className="logo">
                <img src="images/logoo.png" alt="" />
              </div>
              <div>
                <h1 className="font-bold text-left">Devoria</h1>
                <div
                  style={{
                    color: "var(--text-light)",
                    fontWeight: 600,
                    fontSize: ".95rem"
                  }}
                >
                  {t("signin.welcomeBack")}
                </div>
              </div>
            </div>

            <p>{t("signin.description")}</p>

            <p
              style={{
                marginTop: "8px",
                color: "var(--text-light)",
                fontSize: ".95rem"
              }}
            >
              <strong>{t("signin.tip")}</strong>
            </p>
          </div>

          <hr />

          <div className="form-side">
            <form action="#" className="signin-page" method="post" noValidate>
              <h2 className="font-semibold">{t("signin.signinTitle")}</h2>
              <div className="muted">{t("signin.enterDetails")}</div>

              <div className="field">
                <label htmlFor="email">{t("signin.email")}</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@domain.com"
                  required
                />
              </div>

              <div className="field">
                <label htmlFor="password">{t("signin.password")}</label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="••••••••"
                  required
                  minLength={6}
                />
              </div>

              <div className="actions">
                <label className="remember">
                  <input type="checkbox" name="remember" /> {t("signin.remember")}
                </label>
                <a className="forgot" href="#">
                  {t("signin.forgot")}
                </a>
              </div>

              <button className="btn" type="submit">
                {t("signin.submit")}
              </button>

              <div className="alt">
                {t("signin.noAccount")}{" "}
                <Link className="small-link" to="/signup">
                  {t("signin.signup")}
                </Link>
              </div>
            </form>
          </div>

        </div>
      </div>
    </>
  );
}
