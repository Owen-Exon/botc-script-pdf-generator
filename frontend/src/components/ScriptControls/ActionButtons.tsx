interface ActionButtonsProps {
  isScriptSorted: boolean;
  error: string | null;
  onSort: () => void;
  onGeneratePDF: () => void;
  onGenerateImages: () => void;
  onPrint: () => void;
  onShare: () => void;
  isSharing: boolean;
  shareUrl: string | null;
  shareError: string | null;
  savedScriptsCount: number;
  onShowLibrary: () => void;
  onSaveToLibrary: () => void;
}

export function ActionButtons({
  error,
  onGeneratePDF,
}: ActionButtonsProps) {
  return (
    <div className="action-buttons-section">
      <div className="action-buttons">
        <button onClick={onGeneratePDF} className="print-button primary">
          Generate PDF
        </button>
      </div>

      {error && <div className="error-message">{error}</div>}
    </div>
  );
}
