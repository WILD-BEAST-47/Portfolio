import { useCallback } from "react";
import loginPhoto from "../../images/5fab3a85-621e-4cab-9284-b38448fdb5ee.png";
import { XP_LOGO_URL } from "../config/xpLogo";
import { profile } from "../data/portfolio";

type Props = { onLogOn: () => void };

export function LoginScreen({ onLogOn }: Props) {
  const bgStyle = {
    backgroundImage: `url(${JSON.stringify(loginPhoto)})`,
  };

  const onShutOff = useCallback(() => {
    /* Portfolio demo — no system power action */
  }, []);

  return (
    <div className="xp-login-screen">
      <div className="xp-login-bg-photo" style={bgStyle} aria-hidden />
      <div className="xp-login-bg-scrim" aria-hidden />
      <div className="xp-login-top-strip" aria-hidden />

      <div className="xp-login-body">
        <div className="xp-login-main">
          <div className="xp-login-spotlight" aria-hidden />
          <div className="xp-login-columns">
            <div className="xp-login-col-left">
              <div className="xp-login-brand">
                <img
                  className="xp-login-flag"
                  src={XP_LOGO_URL}
                  alt=""
                  width={52}
                  height={52}
                  draggable={false}
                />
                <div className="xp-login-wordmark">
                  <span className="xp-login-ms">Microsoft</span>
                  <span className="xp-login-winxp">Windows XP</span>
                </div>
              </div>
              <p className="xp-login-instruction">To begin, click your user name</p>
            </div>
            <div className="xp-login-col-divider" aria-hidden />
            <div className="xp-login-col-right">
              <ul className="xp-login-users">
                <li>
                  <button type="button" className="xp-login-user-tile xp-login-user-tile--active" onClick={onLogOn}>
                    <span className="xp-login-user-pic" aria-hidden />
                    <span className="xp-login-user-name">{profile.displayName}</span>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <footer className="xp-login-bottom">
        <div className="xp-login-bottom-orange" aria-hidden />
        <div className="xp-login-bottom-inner">
          <button type="button" className="xp-login-shutoff" onClick={onShutOff} title="Demo only — does not shut down your PC">
            <span className="xp-login-shutoff-ico" aria-hidden />
            <span className="xp-login-shutoff-text">Turn off computer</span>
          </button>
          <p className="xp-login-bottom-hint">
            After you log on, you can add or change accounts. Just go to Control Panel and click User
            Accounts.
          </p>
        </div>
      </footer>
    </div>
  );
}
