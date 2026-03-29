import type { FileEntry } from "../data/portfolio";

type Props = { file: FileEntry };

export function NotepadBody({ file }: Props) {
  if (file.kind === "link" && file.href) {
    return (
      <div className="notepad-inner">
        <p className="notepad-para">
          <a href={file.href} className="notepad-link">
            {file.content || "Open link"}
          </a>
        </p>
      </div>
    );
  }

  if (file.kind === "list" && file.items?.length) {
    return (
      <div className="notepad-inner">
        <pre className="notepad-pre">{file.items.join("\n\n")}</pre>
      </div>
    );
  }

  return (
    <div className="notepad-inner">
      <pre className="notepad-pre">{file.content}</pre>
    </div>
  );
}
