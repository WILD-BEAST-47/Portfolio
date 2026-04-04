import { FIGMA_CANVAS_IMAGE_URL } from "../config/figmaCanvasImage";
import { FIGMA_PROJECTS_URL } from "../config/figmaProjectsUrl";

function openProjects() {
  window.open(FIGMA_PROJECTS_URL, "_blank", "noopener,noreferrer");
}

export function FigmaBody() {
  return (
    <div className="figma-app">
      <header className="figma-app-top">
        <div className="figma-app-file">
          <span className="figma-app-dots" aria-hidden>
            ···
          </span>
          <span className="figma-app-file-name">Projects — Draft</span>
        </div>
        <div className="figma-app-top-actions">
          <button type="button" className="figma-app-share">
            Share
          </button>
          <span className="figma-app-avatar" title="Account" aria-hidden />
        </div>
      </header>
      <div className="figma-app-toolbar">
        <div className="figma-app-tools">
          <button type="button" className="figma-tool figma-tool-active" title="Move">
            ↖
          </button>
          <button type="button" className="figma-tool" title="Frame">
            ▢
          </button>
          <button type="button" className="figma-tool" title="Rectangle">
            ▭
          </button>
          <button type="button" className="figma-tool" title="Text">
            T
          </button>
        </div>
        <div className="figma-app-toolbar-right">
          <button type="button" className="figma-projects-btn figma-projects-btn-compact" onClick={openProjects}>
            Projects
          </button>
          <span className="figma-app-zoom">100%</span>
        </div>
      </div>
      <div className="figma-app-main">
        <aside className="figma-app-rail" aria-label="Main menu">
          <span className="figma-rail-icon figma-rail-active" title="Layers">
            ◇
          </span>
          <span className="figma-rail-icon" title="Assets">
            ◎
          </span>
        </aside>
        <aside className="figma-app-sidebar">
          <div className="figma-sidebar-head">Pages</div>
          <button type="button" className="figma-sidebar-projects" onClick={openProjects}>
            <span className="figma-sidebar-projects-icon" aria-hidden />
            <span className="figma-sidebar-projects-text">
              <span className="figma-sidebar-projects-title">Projects</span>
              <span className="figma-sidebar-projects-sub">Open file in Figma</span>
            </span>
          </button>
          <div className="figma-sidebar-list">
            <div className="figma-sidebar-item figma-sidebar-item-muted">Cover</div>
            <div className="figma-sidebar-item figma-sidebar-item-muted">About</div>
            <div className="figma-sidebar-item figma-sidebar-item-active">Portfolio</div>
          </div>
        </aside>
        <div className="figma-app-canvas-wrap">
          <div className="figma-app-canvas">
            <div className="figma-frame">
              <div className="figma-frame-label">Frame 1 — 1440 × 900</div>
              <div className="figma-frame-inner">
                <div className="figma-canvas-stage" aria-label="Canvas preview">
                  <img
                    src={FIGMA_CANVAS_IMAGE_URL}
                    alt="Portfolio — About section preview"
                    className="figma-frame-canvas-img"
                    draggable={false}
                  />
                  <div className="figma-canvas-cta">
                    <p className="figma-canvas-cta-title">View full Projects in Figma</p>
                    <p className="figma-canvas-cta-hint">Readable layout, layers, and prototypes in the browser.</p>
                    <button type="button" className="figma-canvas-cta-btn" onClick={openProjects}>
                      Open Projects file
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <p className="figma-canvas-footnote">
              Tip: hover the canvas for a quick link, or use{" "}
              <button type="button" className="figma-canvas-footnote-btn" onClick={openProjects}>
                Open in Figma
              </button>{" "}
              anytime.
            </p>
          </div>
        </div>
        <aside className="figma-app-inspector">
          <div className="figma-insp-head">Design</div>
          <div className="figma-insp-row">
            <span>Width</span>
            <span>1440</span>
          </div>
          <div className="figma-insp-row">
            <span>Height</span>
            <span>900</span>
          </div>
          <div className="figma-insp-row">
            <span>Opacity</span>
            <span>100%</span>
          </div>
        </aside>
      </div>
    </div>
  );
}
