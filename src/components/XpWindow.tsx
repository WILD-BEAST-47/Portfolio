import {
  useCallback,
  useEffect,
  useRef,
  type CSSProperties,
  type PointerEvent as ReactPointerEvent,
  type ReactNode,
} from "react";
import { XP_LOGO_URL } from "../config/xpLogo";
import type { WindowState } from "../context/WindowContext";
import { useWindows } from "../context/WindowContext";

type Props = {
  win: WindowState;
  children: ReactNode;
};

const TASKBAR_H = 30;
const MIN_MARGIN = 4;

export function XpWindow({ win, children }: Props) {
  const {
    focus,
    close,
    minimize,
    toggleMaximize,
    move,
    resize,
    bringToFront,
    focusedId,
  } = useWindows();
  const focused = focusedId === win.id;
  const drag = useRef<{ dx: number; dy: number } | null>(null);
  const resizeDrag = useRef<{
    edge: "se";
    startX: number;
    startY: number;
    startW: number;
    startH: number;
  } | null>(null);

  const onTitlePointerDown = useCallback(
    (e: ReactPointerEvent) => {
      if (win.maximized) return;
      e.preventDefault();
      bringToFront(win.id);
      (e.target as HTMLElement).setPointerCapture(e.pointerId);
      drag.current = { dx: e.clientX - win.x, dy: e.clientY - win.y };
    },
    [bringToFront, win.id, win.maximized, win.x, win.y]
  );

  const onResizePointerDown = useCallback(
    (e: ReactPointerEvent) => {
      if (win.maximized) return;
      e.preventDefault();
      e.stopPropagation();
      bringToFront(win.id);
      (e.target as HTMLElement).setPointerCapture(e.pointerId);
      resizeDrag.current = {
        edge: "se",
        startX: e.clientX,
        startY: e.clientY,
        startW: win.w,
        startH: win.h,
      };
    },
    [bringToFront, win.id, win.maximized, win.h, win.w]
  );

  useEffect(() => {
    function onMove(e: PointerEvent) {
      if (drag.current && !win.maximized) {
        const nx = e.clientX - drag.current.dx;
        const ny = e.clientY - drag.current.dy;
        const maxX = window.innerWidth - win.w - MIN_MARGIN;
        const maxY = window.innerHeight - TASKBAR_H - win.h - MIN_MARGIN;
        move(
          win.id,
          Math.max(MIN_MARGIN, Math.min(nx, maxX)),
          Math.max(MIN_MARGIN, Math.min(ny, maxY))
        );
      }
      if (resizeDrag.current) {
        const dw = e.clientX - resizeDrag.current.startX;
        const dh = e.clientY - resizeDrag.current.startY;
        resize(win.id, resizeDrag.current.startW + dw, resizeDrag.current.startH + dh);
      }
    }
    function onUp() {
      drag.current = null;
      resizeDrag.current = null;
    }
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);
    window.addEventListener("pointercancel", onUp);
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
      window.removeEventListener("pointercancel", onUp);
    };
  }, [move, resize, win.id, win.maximized, win.w, win.h]);

  if (win.minimized) return null;

  const maxW = window.innerWidth - MIN_MARGIN * 2;
  const maxH = window.innerHeight - TASKBAR_H - MIN_MARGIN * 2;
  const style: CSSProperties = win.maximized
    ? {
        left: MIN_MARGIN,
        top: MIN_MARGIN,
        width: maxW,
        height: maxH,
        zIndex: win.z,
      }
    : {
        left: win.x,
        top: win.y,
        width: win.w,
        height: win.h,
        zIndex: win.z,
      };

  return (
    <div
      className={`xp-window ${focused ? "xp-window-focused" : ""}`}
      style={style}
      onPointerDown={() => focus(win.id)}
      role="dialog"
      aria-label={win.title}
    >
      <div
        className="xp-titlebar"
        onPointerDown={onTitlePointerDown}
        onDoubleClick={() => toggleMaximize(win.id)}
      >
        <img
          src={XP_LOGO_URL}
          alt=""
          className="xp-titlebar-icon"
          width={16}
          height={16}
          draggable={false}
        />
        <span className="xp-titlebar-text">{win.title}</span>
        <div className="xp-titlebar-btns">
          <button
            type="button"
            className="xp-cbox xp-min"
            title="Minimize"
            onPointerDown={(e) => e.stopPropagation()}
            onClick={() => minimize(win.id)}
          />
          <button
            type="button"
            className="xp-cbox xp-max"
            title="Maximize"
            onPointerDown={(e) => e.stopPropagation()}
            onClick={() => toggleMaximize(win.id)}
          />
          <button
            type="button"
            className="xp-cbox xp-close"
            title="Close"
            onPointerDown={(e) => e.stopPropagation()}
            onClick={() => close(win.id)}
          />
        </div>
      </div>
      <div className="xp-window-body">{children}</div>
      {!win.maximized && (
        <button
          type="button"
          className="xp-resize-se"
          aria-label="Resize"
          onPointerDown={onResizePointerDown}
        />
      )}
    </div>
  );
}
