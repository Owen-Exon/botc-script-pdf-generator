interface UploadSectionProps {
  hasScript: boolean;
  onFileUpload: (event: Event) => void;
  onLoadExample: () => void;
  onLoadExampleTeensyville: () => void;
}

export function UploadSection({ onFileUpload }: UploadSectionProps) {
  const isMac = navigator.userAgent.includes("Mac");
  return (
    <>
      <div className="upload-section">
        <label htmlFor="file-upload" className="upload-label">
          Upload JSON
        </label>
        <input
          id="file-upload"
          type="file"
          accept=".json,.json5"
          onChange={onFileUpload}
          className="file-input"
        />
        <div className="or">or</div>
        <div className="paste-hint">
          Paste directly with {isMac ? "⌘" : "ctrl"}+V
        </div>
      </div>
    </>
  );
}
