import { useWindows } from "../context/WindowContext";
import { XpWindow } from "./XpWindow";
import { ExplorerBody } from "./ExplorerBody";
import { NotepadBody } from "./NotepadBody";
import { MyComputerBody } from "./MyComputerBody";
import { FigmaBody } from "./FigmaBody";
import { GameBody } from "./GameBody";

export function WindowLayer() {
  const { windows, getFolder } = useWindows();

  return (
    <>
      {windows.map((win) => {
        if (win.kind === "explorer" && win.folderId) {
          const folder = getFolder(win.folderId);
          if (!folder) return null;
          return (
            <XpWindow key={win.id} win={win}>
              <ExplorerBody folder={folder} />
            </XpWindow>
          );
        }
        if (win.kind === "notepad" && win.file) {
          return (
            <XpWindow key={win.id} win={win}>
              <NotepadBody file={win.file} />
            </XpWindow>
          );
        }
        if (win.kind === "welcome") {
          return (
            <XpWindow key={win.id} win={win}>
              <MyComputerBody />
            </XpWindow>
          );
        }
        if (win.kind === "figma") {
          return (
            <XpWindow key={win.id} win={win}>
              <FigmaBody />
            </XpWindow>
          );
        }
        if (win.kind === "game") {
          return (
            <XpWindow key={win.id} win={win}>
              <GameBody />
            </XpWindow>
          );
        }
        return null;
      })}
    </>
  );
}
