import { useState } from "react";
import { XP_LOGO_URL } from "../config/xpLogo";
import { desktopFolders, profile } from "../data/portfolio";
import { useWindows } from "../context/WindowContext";

const MENUS = ["File", "Edit", "View", "Favorites", "Tools", "Help"] as const;

const DOC_FIRST = profile.displayName.split(/\s+/)[0] ?? profile.displayName;
const DOCS_LABEL = `${DOC_FIRST}'s Documents`;

type McItem = {
  id: string;
  label: string;
  details: string;
  variant: "folder" | "drive" | "cd";
  onOpen: () => void;
};

export function MyComputerBody() {
  const { openFolder } = useWindows();
  const [selectedId, setSelectedId] = useState<string>("mycomputer");

  const about = desktopFolders.find((f) => f.id === "about")!;
  const projects = desktopFolders.find((f) => f.id === "projects")!;
  const experience = desktopFolders.find((f) => f.id === "experience")!;
  const skills = desktopFolders.find((f) => f.id === "skills")!;

  const items: { title: string; entries: McItem[] }[] = [
    {
      title: "Files Stored on This Computer",
      entries: [
        {
          id: "shared",
          label: "Shared Documents",
          details: "Shared Folder · Web link to portfolio sections",
          variant: "folder",
          onOpen: () => openFolder(about),
        },
        {
          id: "mydocs",
          label: DOCS_LABEL,
          details: "Your projects and design work",
          variant: "folder",
          onOpen: () => openFolder(projects),
        },
      ],
    },
    {
      title: "Hard Disk Drives",
      entries: [
        {
          id: "c",
          label: "Local Disk (C:)",
          details: "Local Disk · Work history and roles",
          variant: "drive",
          onOpen: () => openFolder(experience),
        },
      ],
    },
    {
      title: "Devices with Removable Storage",
      entries: [
        {
          id: "d",
          label: "CD Drive (D:)",
          details: "CD Drive · Training, skills & languages",
          variant: "cd",
          onOpen: () => openFolder(skills),
        },
      ],
    },
  ];

  const flatItems = items.flatMap((g) => g.entries);
  const detailInfo =
    selectedId === "mycomputer"
      ? { label: "My Computer", details: "System Folder" }
      : (flatItems.find((e) => e.id === selectedId) ?? {
          label: "My Computer",
          details: "System Folder",
        });

  return (
    <div className="mycomputer-shell">
      <div className="xp-menubar" role="menubar">
        {MENUS.map((m) => (
          <button key={m} type="button" className="xp-menubar-item">
            {m}
          </button>
        ))}
      </div>

      <div className="xp-explorer-toolbar" aria-hidden>
        <div className="xp-et-group">
          <button type="button" className="xp-et-round xp-et-back" title="Back" />
          <button type="button" className="xp-et-round xp-et-fwd xp-et-disabled" title="Forward" />
          <button type="button" className="xp-et-round xp-et-up xp-et-disabled" title="Up" />
        </div>
        <span className="xp-et-sep" />
        <div className="xp-et-group">
          <button type="button" className="xp-et-btn xp-et-search" title="Search" />
          <button type="button" className="xp-et-btn xp-et-folders" title="Folders" />
        </div>
        <span className="xp-et-sep" />
        <button type="button" className="xp-et-views" title="Views">
          <span className="xp-et-views-ico" />
          <span className="xp-et-darrow" />
        </button>
      </div>

      <div className="xp-explorer-addressbar">
        <span className="xp-explorer-address-label">Address</span>
        <div className="xp-explorer-address-field">
          <img src={XP_LOGO_URL} alt="" className="xp-explorer-address-ico" width={16} height={16} />
          <span className="xp-explorer-address-text">My Computer</span>
        </div>
        <button type="button" className="xp-explorer-go">
          Go
        </button>
      </div>

      <div className="mycomputer-split">
        <aside className="mycomputer-taskpane">
          <details className="taskpane-block" open>
            <summary className="taskpane-head">System Tasks</summary>
            <div className="taskpane-body">
              <button type="button" className="taskpane-link">
                View system information
              </button>
              <button type="button" className="taskpane-link">
                Add or remove programs
              </button>
              <button type="button" className="taskpane-link">
                Change a setting
              </button>
            </div>
          </details>
          <details className="taskpane-block" open>
            <summary className="taskpane-head">Other Places</summary>
            <div className="taskpane-body">
              <button type="button" className="taskpane-link">
                My Network Places
              </button>
              <button
                type="button"
                className="taskpane-link"
                onClick={() => openFolder(projects)}
              >
                My Documents
              </button>
              <button
                type="button"
                className="taskpane-link"
                onClick={() => openFolder(about)}
              >
                Shared Documents
              </button>
              <button type="button" className="taskpane-link">
                Control Panel
              </button>
            </div>
          </details>
          <details className="taskpane-block" open>
            <summary className="taskpane-head">Details</summary>
            <div className="taskpane-details">
              <p className="taskpane-details-name">{detailInfo.label}</p>
              <p className="taskpane-details-meta">{detailInfo.details}</p>
            </div>
          </details>
        </aside>

        <div className="mycomputer-listpane">
          {items.map((group) => (
            <section key={group.title} className="mc-group">
              <div className="mc-group-line" />
              <h3 className="mc-group-title">{group.title}</h3>
              <div className="mc-tiles">
                {group.entries.map((e) => (
                  <button
                    key={e.id}
                    type="button"
                    className={`mc-tile ${selectedId === e.id ? "mc-tile-active" : ""}`}
                    onClick={() => setSelectedId(e.id)}
                    onDoubleClick={() => e.onOpen()}
                    onKeyDown={(ev) => {
                      if (ev.key === "Enter") e.onOpen();
                    }}
                    title="Click to select · Double-click to open"
                  >
                    <span className={`mc-tile-ico mc-tile-${e.variant}`} aria-hidden />
                    <span className="mc-tile-label">{e.label}</span>
                  </button>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
