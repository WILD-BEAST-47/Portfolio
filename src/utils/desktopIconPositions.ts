import { desktopFolders } from "../data/portfolio";

export const DESKTOP_ICON_TASKBAR_H = 30;
export const DESKTOP_ICON_W = 92;
/** Approximate total height (icon + label area) for clamping */
export const DESKTOP_ICON_H = 112;
export const DRAG_THRESHOLD_PX = 5;
export const POSITIONS_STORAGE_KEY = "xp-desktop-icon-positions-v1";

export function scatterFolderIndex(index: number) {
  const cols = 4;
  const row = Math.floor(index / cols);
  const col = index % cols;
  const jitter = ((index * 17) % 9) - 4;
  const left = 24 + col * 108 + jitter;
  const top = 24 + row * 96 + ((index * 11) % 7);
  return { left, top };
}

export function recycleDefaultPosition(): { left: number; top: number } {
  const margin = 8;
  const w = typeof window !== "undefined" ? window.innerWidth : 1200;
  const h = typeof window !== "undefined" ? window.innerHeight : 800;
  return {
    left: Math.max(margin, w - DESKTOP_ICON_W - margin),
    top: Math.max(margin, h - DESKTOP_ICON_TASKBAR_H - DESKTOP_ICON_H - margin),
  };
}

export function clampIconPosition(
  left: number,
  top: number
): { left: number; top: number } {
  const margin = 8;
  const maxX = window.innerWidth - DESKTOP_ICON_W - margin;
  const maxY =
    window.innerHeight - DESKTOP_ICON_TASKBAR_H - DESKTOP_ICON_H - margin;
  return {
    left: Math.max(margin, Math.min(left, maxX)),
    top: Math.max(margin, Math.min(top, maxY)),
  };
}

export function buildDefaultPositions(): Record<
  string,
  { left: number; top: number }
> {
  const positions: Record<string, { left: number; top: number }> = {
    computer: { left: 24, top: 24 },
    recycle: recycleDefaultPosition(),
  };
  desktopFolders.forEach((f, i) => {
    positions[`folder:${f.id}`] = scatterFolderIndex(i);
  });
  return positions;
}

export function loadSavedPositions(): Record<
  string,
  { left: number; top: number }
> | null {
  try {
    const raw = localStorage.getItem(POSITIONS_STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as Record<string, { left: number; top: number }>;
    if (typeof parsed !== "object" || parsed === null) return null;
    return parsed;
  } catch {
    return null;
  }
}

export function mergePositions(
  defaults: Record<string, { left: number; top: number }>,
  saved: Record<string, { left: number; top: number }> | null
): Record<string, { left: number; top: number }> {
  if (!saved) return { ...defaults };
  const merged = { ...defaults };
  for (const key of Object.keys(saved)) {
    const p = saved[key];
    if (
      p &&
      typeof p.left === "number" &&
      typeof p.top === "number" &&
      !Number.isNaN(p.left) &&
      !Number.isNaN(p.top)
    ) {
      merged[key] = clampIconPosition(p.left, p.top);
    }
  }
  return merged;
}
