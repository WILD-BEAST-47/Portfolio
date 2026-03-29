import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import type { FileEntry, FolderEntry } from "../data/portfolio";
import { desktopFolders } from "../data/portfolio";

export type WinKind = "explorer" | "notepad" | "welcome";

export type WindowState = {
  id: string;
  kind: WinKind;
  title: string;
  x: number;
  y: number;
  w: number;
  h: number;
  z: number;
  minimized: boolean;
  maximized: boolean;
  folderId?: string;
  file?: FileEntry;
};

type Ctx = {
  windows: WindowState[];
  focusedId: string | null;
  openFolder: (folder: FolderEntry) => void;
  openFile: (file: FileEntry) => void;
  openWelcome: () => void;
  close: (id: string) => void;
  minimize: (id: string) => void;
  toggleMaximize: (id: string) => void;
  focus: (id: string) => void;
  bringToFront: (id: string) => void;
  move: (id: string, x: number, y: number) => void;
  resize: (id: string, w: number, h: number) => void;
  restore: (id: string) => void;
  getFolder: (id: string) => FolderEntry | undefined;
};

const WindowCtx = createContext<Ctx | null>(null);

let zCounter = 10;

function nextZ() {
  zCounter += 1;
  return zCounter;
}

const DEFAULT_W = 420;
const DEFAULT_H = 340;
const NOTEPAD_W = 480;
const NOTEPAD_H = 380;

export function WindowProvider({ children }: { children: ReactNode }) {
  const [windows, setWindows] = useState<WindowState[]>([]);
  const [focusedId, setFocusedId] = useState<string | null>(null);

  const getFolder = useCallback((id: string) => desktopFolders.find((f) => f.id === id), []);

  const openFolder = useCallback((folder: FolderEntry) => {
    setWindows((prev) => {
      const existing = prev.find(
        (w) => w.kind === "explorer" && w.folderId === folder.id
      );
      if (existing) {
        setFocusedId(existing.id);
        return prev.map((w) =>
          w.id === existing.id ? { ...w, minimized: false, z: nextZ() } : w
        );
      }
      const offset = prev.length * 28;
      const id = `explorer-${folder.id}-${Date.now()}`;
      const z = nextZ();
      setFocusedId(id);
      return [
        ...prev,
        {
          id,
          kind: "explorer",
          title: folder.name,
          folderId: folder.id,
          x: 80 + offset,
          y: 60 + offset,
          w: DEFAULT_W,
          h: DEFAULT_H,
          z,
          minimized: false,
          maximized: false,
        },
      ];
    });
  }, []);

  const openFile = useCallback((file: FileEntry) => {
    setWindows((prev) => {
      const offset = prev.length * 22;
      const id = `notepad-${file.id}-${Date.now()}`;
      const z = nextZ();
      setFocusedId(id);
      return [
        ...prev,
        {
          id,
          kind: "notepad",
          title: `${file.name} - Notepad`,
          file,
          x: 120 + offset,
          y: 90 + offset,
          w: NOTEPAD_W,
          h: NOTEPAD_H,
          z,
          minimized: false,
          maximized: false,
        },
      ];
    });
  }, []);

  const openWelcome = useCallback(() => {
    setWindows((prev) => {
      const existing = prev.find((w) => w.kind === "welcome");
      if (existing) {
        setFocusedId(existing.id);
        return prev.map((w) =>
          w.id === existing.id ? { ...w, minimized: false, z: nextZ() } : w
        );
      }
      const id = `welcome-${Date.now()}`;
      const z = nextZ();
      setFocusedId(id);
      return [
        ...prev,
        {
          id,
          kind: "welcome",
          title: "My Computer",
          x: 72,
          y: 48,
          w: 720,
          h: 520,
          z,
          minimized: false,
          maximized: false,
        },
      ];
    });
  }, []);

  const close = useCallback((id: string) => {
    setWindows((prev) => prev.filter((w) => w.id !== id));
    setFocusedId((cur) => (cur === id ? null : cur));
  }, []);

  const minimize = useCallback((id: string) => {
    setWindows((prev) =>
      prev.map((w) => (w.id === id ? { ...w, minimized: true } : w))
    );
  }, []);

  const toggleMaximize = useCallback((id: string) => {
    setWindows((prev) =>
      prev.map((w) => (w.id === id ? { ...w, maximized: !w.maximized } : w))
    );
  }, []);

  const focus = useCallback((id: string) => {
    setFocusedId(id);
    setWindows((prev) =>
      prev.map((w) => (w.id === id ? { ...w, z: nextZ() } : w))
    );
  }, []);

  const bringToFront = focus;

  const move = useCallback((id: string, x: number, y: number) => {
    setWindows((prev) =>
      prev.map((w) => (w.id === id ? { ...w, x, y, maximized: false } : w))
    );
  }, []);

  const resize = useCallback((id: string, w: number, h: number) => {
    setWindows((prev) =>
      prev.map((win) =>
        win.id === id
          ? { ...win, w: Math.max(280, w), h: Math.max(200, h), maximized: false }
          : win
      )
    );
  }, []);

  const restore = useCallback((id: string) => {
    setWindows((prev) =>
      prev.map((w) => (w.id === id ? { ...w, minimized: false, z: nextZ() } : w))
    );
    setFocusedId(id);
  }, []);

  const value = useMemo(
    () => ({
      windows,
      focusedId,
      openFolder,
      openFile,
      openWelcome,
      close,
      minimize,
      toggleMaximize,
      focus,
      bringToFront,
      move,
      resize,
      restore,
      getFolder,
    }),
    [
      windows,
      focusedId,
      openFolder,
      openFile,
      openWelcome,
      close,
      minimize,
      toggleMaximize,
      focus,
      bringToFront,
      move,
      resize,
      restore,
      getFolder,
    ]
  );

  return <WindowCtx.Provider value={value}>{children}</WindowCtx.Provider>;
}

export function useWindows() {
  const ctx = useContext(WindowCtx);
  if (!ctx) throw new Error("useWindows must be used within WindowProvider");
  return ctx;
}
