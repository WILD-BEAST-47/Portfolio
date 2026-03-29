import { useWindows } from "../context/WindowContext";
import { desktopFolders, profile } from "../data/portfolio";

type Props = { open: boolean; onClose: () => void };

export function StartMenu({ open, onClose }: Props) {
  const { openFolder, openWelcome } = useWindows();

  if (!open) return null;

  return (
    <>
      <button type="button" className="start-menu-backdrop" aria-label="Close menu" onClick={onClose} />
      <div className="start-menu" role="menu">
        <div className="start-menu-head">
          <div className="start-menu-user-ico" aria-hidden />
          <div className="start-menu-user-name">{profile.displayName}</div>
        </div>
        <div className="start-menu-cols">
          <div className="start-menu-left">
            <div className="start-menu-section">Pinned</div>
            <button
              type="button"
              className="start-menu-item"
              onClick={() => {
                openWelcome();
                onClose();
              }}
            >
              <span className="smi-ico smi-computer" aria-hidden />
              My Computer
            </button>
            {desktopFolders.map((f) => (
              <button
                key={f.id}
                type="button"
                className="start-menu-item"
                onClick={() => {
                  openFolder(f);
                  onClose();
                }}
              >
                <span className="smi-ico smi-folder" aria-hidden />
                {f.name}
              </button>
            ))}
          </div>
          <div className="start-menu-right">
            <div className="start-menu-section">Places</div>
            <button
              type="button"
              className="start-menu-item smi-muted"
              onClick={() => {
                const p = desktopFolders.find((f) => f.id === "projects");
                if (p) openFolder(p);
                onClose();
              }}
            >
              <span className="smi-ico smi-docs" aria-hidden />
              My Documents
            </button>
            <button type="button" className="start-menu-item smi-muted" onClick={onClose}>
              <span className="smi-ico smi-pics" aria-hidden />
              My Pictures
            </button>
          </div>
        </div>
        <div className="start-menu-foot">
          <button type="button" className="start-logoff" onClick={onClose}>
            Log Off
          </button>
          <button type="button" className="start-shut" onClick={onClose}>
            Turn Off
          </button>
        </div>
      </div>
    </>
  );
}
