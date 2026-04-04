import { useCallback, useEffect, useMemo, useState } from "react";
import { DESKTOP_WALLPAPER_URL } from "../config/wallpaper";
import { desktopFolders } from "../data/portfolio";
import { useWindows } from "../context/WindowContext";
import { DesktopIcon } from "./DesktopIcon";
import { Taskbar } from "./Taskbar";
import { WindowLayer } from "./WindowLayer";
import {
  POSITIONS_STORAGE_KEY,
  buildDefaultPositions,
  clampIconPosition,
  loadSavedPositions,
  mergePositions,
} from "../utils/desktopIconPositions";

export function Desktop() {
  const { openFolder, openWelcome, openFigma, openGame } = useWindows();
  const [recycleMsg, setRecycleMsg] = useState(false);

  const [positions, setPositions] = useState(() =>
    mergePositions(buildDefaultPositions(), loadSavedPositions())
  );

  useEffect(() => {
    openFigma();
  }, [openFigma]);

  useEffect(() => {
    try {
      localStorage.setItem(POSITIONS_STORAGE_KEY, JSON.stringify(positions));
    } catch {
      /* ignore quota / private mode */
    }
  }, [positions]);

  const clampAll = useCallback(() => {
    setPositions((prev) => {
      const next = { ...prev };
      let changed = false;
      for (const key of Object.keys(next)) {
        const p = next[key];
        const c = clampIconPosition(p.left, p.top);
        if (c.left !== p.left || c.top !== p.top) {
          next[key] = c;
          changed = true;
        }
      }
      return changed ? next : prev;
    });
  }, []);

  useEffect(() => {
    window.addEventListener("resize", clampAll);
    return () => window.removeEventListener("resize", clampAll);
  }, [clampAll]);

  const moveIcon = useCallback((id: string, left: number, top: number) => {
    setPositions((prev) => ({
      ...prev,
      [id]: clampIconPosition(left, top),
    }));
  }, []);

  const defaults = useMemo(() => buildDefaultPositions(), []);

  const computerPos = positions.computer ?? defaults.computer;
  const recyclePos = positions.recycle ?? defaults.recycle;
  const figmaPos = positions["app:figma"] ?? defaults["app:figma"];
  const gamePos = positions["app:game"] ?? defaults["app:game"];

  const folderPositions = useMemo(() => {
    return desktopFolders.map((f) => {
      const key = `folder:${f.id}`;
      return positions[key] ?? defaults[key];
    });
  }, [positions, defaults]);

  return (
    <div className="desktop">
      <div
        className="wallpaper"
        aria-hidden
        style={{
          backgroundImage: `url(${JSON.stringify(DESKTOP_WALLPAPER_URL)})`,
        }}
      />
      <main className="desktop-surface">
        <div className="desktop-icons">
          <DesktopIcon
            label="My Computer"
            variant="computer"
            onOpen={openWelcome}
            left={computerPos.left}
            top={computerPos.top}
            onMove={(l, t) => moveIcon("computer", l, t)}
          />
          {desktopFolders.map((folder, i) => (
            <DesktopIcon
              key={folder.id}
              label={folder.name}
              variant="folder"
              onOpen={() => openFolder(folder)}
              left={folderPositions[i]?.left ?? 24}
              top={folderPositions[i]?.top ?? 120}
              onMove={(l, t) => moveIcon(`folder:${folder.id}`, l, t)}
            />
          ))}
          <DesktopIcon
            label="Figma"
            variant="figma"
            onOpen={openFigma}
            left={figmaPos.left}
            top={figmaPos.top}
            onMove={(l, t) => moveIcon("app:figma", l, t)}
          />
          <DesktopIcon
            label="Game"
            variant="game"
            onOpen={openGame}
            left={gamePos.left}
            top={gamePos.top}
            onMove={(l, t) => moveIcon("app:game", l, t)}
          />
          <DesktopIcon
            label="Recycle Bin"
            variant="bin"
            onOpen={() => setRecycleMsg((v) => !v)}
            left={recyclePos.left}
            top={recyclePos.top}
            onMove={(l, t) => moveIcon("recycle", l, t)}
          />
        </div>
        {recycleMsg && (
          <div className="recycle-toast" role="status">
            Recycle Bin is empty. Nothing to delete in this demo.
          </div>
        )}
        <WindowLayer />
      </main>
      <Taskbar />
    </div>
  );
}
