import { randomColor } from "../../types/options";

interface ColorPickerProps {
  color: string[];
  onColorChange: (color: string[]) => void;
  onColorArrayChange: (index: number, color: string) => void;
  onAddColor: (index: number) => void;
  onRemoveColor: (index: number) => void;
}

export function ColorPicker({
  color,
  onColorChange,
  onColorArrayChange,
  onAddColor,
  onRemoveColor,
}: ColorPickerProps) {
  const colRegex = /^#[0-9A-Fa-f]{6}(?:\s*,\s*#[0-9A-Fa-f]{6})*$/;
  return (
    <div className="color-picker-section">
      <div className="color-picker-gradient">
        {color.map((c, index) => (
          <div key={index} className="color-picker-row">
            <input
              type="color"
              value={c}
              onInput={(e) =>
                onColorArrayChange(index, (e.target as HTMLInputElement).value)
              }
              className="color-input"
            />
            <button
              onClick={() => onColorArrayChange(index, randomColor())}
              className="update-button color-picker-icon-button"
              title="Randomize this color"
            >
              🎲
            </button>
            <button
              onClick={() => onAddColor(index)}
              className="update-button color-picker-action-button"
              title="Add another color"
            >
              +
            </button>
            <button
              onClick={() => onRemoveColor(index)}
              className="update-button color-picker-action-button"
              title="Remove this color"
            >
              ×
            </button>
          </div>
        ))}
      </div>
      <div className="color-picker-row">
        <button
          onClick={() => navigator.clipboard.writeText(`${color}`)}
          className="update-button color-picker-action-button"
          title="Copy Color to Clipboard"
        >
          Copy
        </button>
        <span style="flex-grow:1"></span>
        <button
          onClick={() => onAddColor((color as string[]).length)}
          className="update-button color-picker-action-button"
          title="Add another color"
        >
          +
        </button>
      </div>
      <div className="color-picker-row">
        <textarea
          className={`color-textarea`}
          value={color.toString()}
          onChange={(e) => {
            const thisValue = (e.target as HTMLInputElement).value;
            if (colRegex.test(thisValue)) {
              onColorChange(thisValue.split(","));
            }
          }}
          rows={1}
          spellcheck={false}
        />
      </div>
    </div>
  );
}
