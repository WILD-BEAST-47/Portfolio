import { useEffect, useState } from "react";
import { XP_LOGO_URL } from "../config/xpLogo";
import { useWindows } from "../context/WindowContext";
import { StartMenu } from "./StartMenu";

export function Taskbar() {
  const { windows, restore, focus, openWelcome } = useWindows();
  const [startOpen, setStartOpen] = useState(false);
  const [clock, setClock] = useState("");

  useEffect(() => {
    function tick() {
      const d = new Date();
      setClock(
        d.toLocaleTimeString(undefined, { hour: "numeric", minute: "2-digit" })
      );
    }
    tick();
    const id = window.setInterval(tick, 30_000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <div className="taskbar">
      <StartMenu open={startOpen} onClose={() => setStartOpen(false)} />
      <button
        type="button"
        className={`start-btn ${startOpen ? "start-btn-active" : ""}`}
        onClick={() => setStartOpen((v) => !v)}
        aria-expanded={startOpen}
        aria-haspopup="true"
      >
        <img
          src={XP_LOGO_URL}
          alt=""
          className="start-flag"
          width={18}
          height={18}
          draggable={false}
        />
        <span className="start-text">start</span>
      </button>
      <div className="taskbar-tasks">
        <button
          type="button"
          className="task-pill task-pill-static"
          onClick={() => openWelcome()}
        >
          My Computer
        </button>
        {windows.map((w) => (
          <button
            key={w.id}
            type="button"
            className={`task-pill ${w.minimized ? "task-pill-min" : ""}`}
            onClick={() => {
              if (w.minimized) restore(w.id);
              else focus(w.id);
            }}
          >
            {w.title.replace(" - Notepad", "").slice(0, 22)}
            {w.title.length > 22 ? "…" : ""}
          </button>
        ))}
      </div>
      <div className="tray">
        <span className="tray-clock">{clock}</span>
      </div>
    </div>
  );
}
