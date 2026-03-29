import { useCallback, useState } from "react";
import { WindowProvider } from "./context/WindowContext";
import { BootScreen } from "./components/BootScreen";
import { LoginScreen } from "./components/LoginScreen";
import { Desktop } from "./components/Desktop";

type Phase = "boot" | "login" | "desktop";

export default function App() {
  const [phase, setPhase] = useState<Phase>("boot");

  const finishBoot = useCallback(() => setPhase("login"), []);
  const finishLogin = useCallback(() => setPhase("desktop"), []);

  return (
    <div className="app-root">
      {phase === "boot" && <BootScreen onDone={finishBoot} />}
      {phase === "login" && <LoginScreen onLogOn={finishLogin} />}
      {phase === "desktop" && (
        <WindowProvider>
          <Desktop />
        </WindowProvider>
      )}
    </div>
  );
}
