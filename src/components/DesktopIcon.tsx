import {
  useCallback,
  useRef,
  useState,
  type CSSProperties,
  type KeyboardEvent,
  type PointerEvent as ReactPointerEvent,
} from "react";
import { FIGMA_DESK_ICON_URL } from "../config/figmaDeskIcon";
import {
  DRAG_THRESHOLD_PX,
  clampIconPosition,
} from "../utils/desktopIconPositions";

type Props = {
  label: string;
  variant: "folder" | "bin" | "computer" | "figma" | "game";
  onOpen: () => void;
  left: number;
  top: number;
  onMove: (left: number, top: number) => void;
};

export function DesktopIcon({
  label,
  variant,
  onOpen,
  left,
  top,
  onMove,
}: Props) {
  const [dragging, setDragging] = useState(false);
  const dragRef = useRef<{
    startX: number;
    startY: number;
    origLeft: number;
    origTop: number;
    pointerId: number;
  } | null>(null);
  const movedRef = useRef(false);

  const onKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onOpen();
    }
  };

  const onPointerDown = (e: ReactPointerEvent<HTMLButtonElement>) => {
    if (e.button !== 0) return;
    movedRef.current = false;
    dragRef.current = {
      startX: e.clientX,
      startY: e.clientY,
      origLeft: left,
      origTop: top,
      pointerId: e.pointerId,
    };
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const onPointerMove = useCallback(
    (e: ReactPointerEvent<HTMLButtonElement>) => {
      if (!dragRef.current || e.pointerId !== dragRef.current.pointerId) return;
      const { startX, startY, origLeft, origTop } = dragRef.current;
      const dx = e.clientX - startX;
      const dy = e.clientY - startY;
      if (
        !movedRef.current &&
        (Math.abs(dx) > DRAG_THRESHOLD_PX || Math.abs(dy) > DRAG_THRESHOLD_PX)
      ) {
        movedRef.current = true;
        setDragging(true);
      }
      if (movedRef.current) {
        const p = clampIconPosition(origLeft + dx, origTop + dy);
        onMove(p.left, p.top);
      }
    },
    [onMove]
  );

  const endDrag = (e: ReactPointerEvent<HTMLButtonElement>) => {
    if (!dragRef.current || e.pointerId !== dragRef.current.pointerId) return;
    dragRef.current = null;
    setDragging(false);
    if (movedRef.current) {
      e.preventDefault();
    }
  };

  const onPointerUp = (e: ReactPointerEvent<HTMLButtonElement>) => {
    endDrag(e);
  };

  const onPointerCancel = (e: ReactPointerEvent<HTMLButtonElement>) => {
    endDrag(e);
  };

  const onClickCapture = (e: React.MouseEvent) => {
    if (movedRef.current) {
      e.preventDefault();
      e.stopPropagation();
      movedRef.current = false;
    }
  };

  const style: CSSProperties = {
    position: "absolute",
    left,
    top,
    zIndex: dragging ? 9999 : "auto",
  };

  const picStyle: CSSProperties | undefined =
    variant === "figma"
      ? { backgroundImage: `url(${FIGMA_DESK_ICON_URL})` }
      : undefined;

  return (
    <button
      type="button"
      className={`desk-icon ${dragging ? "desk-icon-dragging" : ""}`}
      title="Drag to move. Double-click to open."
      onDoubleClick={onOpen}
      onClickCapture={onClickCapture}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerCancel}
      onKeyDown={onKeyDown}
      style={style}
    >
      <span
        className={`desk-icon-pic desk-icon-${variant}`}
        style={picStyle}
        aria-hidden
      />
      <span className="desk-icon-label">{label}</span>
    </button>
  );
}
