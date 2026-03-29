import type { FolderEntry } from "../data/portfolio";
import { useWindows } from "../context/WindowContext";

type Props = { folder: FolderEntry };

export function ExplorerBody({ folder }: Props) {
  const { openFile } = useWindows();

  return (
    <div className="explorer-shell">
      <div className="explorer-toolbar">
        <span className="explorer-txt">Address:</span>
        <div className="explorer-addr">
          <span className="explorer-addr-inner">{folder.name}</span>
          <button type="button" className="explorer-go">
            Go
          </button>
        </div>
      </div>
      <div className="explorer-pane">
        <div className="explorer-hint">Select an object to view its description.</div>
        <ul className="explorer-list">
          {folder.files.map((f) => (
            <li key={f.id}>
              <button
                type="button"
                className="explorer-item"
                onDoubleClick={() => openFile(f)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") openFile(f);
                }}
              >
                <span
                  className={`explorer-file-ico ${f.name.endsWith(".url") ? "url" : "txt"}`}
                  aria-hidden
                />
                <span className="explorer-item-name">{f.name}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
