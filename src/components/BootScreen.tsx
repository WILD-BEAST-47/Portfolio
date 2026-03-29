import { useEffect, useState } from "react";
import { XP_LOGO_URL } from "../config/xpLogo";

type Props = { onDone: () => void };

export function BootScreen({ onDone }: Props) {
  const [pct, setPct] = useState(0);

  useEffect(() => {
    const t = window.setInterval(() => {
      setPct((p) => {
        if (p >= 100) {
          window.clearInterval(t);
          return 100;
        }
        return p + 4;
      });
    }, 45);
    const done = window.setTimeout(() => onDone(), 2200);
    return () => {
      window.clearInterval(t);
      window.clearTimeout(done);
    };
  }, [onDone]);

  return (
    <div className="boot-screen">
      <div className="boot-brand">
        <img
          src={XP_LOGO_URL}
          alt=""
          className="boot-flag"
          width={36}
          height={36}
          draggable={false}
        />
        <span className="boot-title">Windows XP</span>
      </div>
      <p className="boot-sub">Professional</p>
      <div className="boot-bar-wrap">
        <div className="boot-bar" style={{ width: `${pct}%` }} />
      </div>
      <p className="boot-hint">© 1985–2001 Microsoft Corp.</p>
    </div>
  );
}
