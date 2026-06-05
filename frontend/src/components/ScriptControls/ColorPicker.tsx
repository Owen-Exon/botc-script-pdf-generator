import { randomColor } from "../../types/options";

interface ColorPickerProps {
  color: string | string[];
  onColorChange: (color: string | string[]) => void;
  onColorArrayChange: (index: number, color: string) => void;
  onAddColor: (index:number) => void;
  onRemoveColor: (index: number) => void;
}

export function ColorPicker({
  color,
  onColorChange,
  onColorArrayChange,
  onAddColor,
  onRemoveColor,
}: ColorPickerProps) {
  const isGradient = Array.isArray(color);

  return (
    <div className="color-picker-section">
      <label className="color-label">
        {isGradient ? "Gradient Colours:" : "Colour:"}
      </label>
      {!isGradient ? (
        <div className="color-picker-row">
          <input
            id="sidebar-color"
            type="color"
            value={color as string}
            onInput={(e) => onColorChange((e.target as HTMLInputElement).value)}
            className="color-input"
          />
          <button
            onClick={() => onColorChange(randomColor())}
            className="update-button color-picker-icon-button"
          >
            🎲
          </button>
          <button
            onClick={() => onAddColor(0)}
            className="update-button color-picker-action-button"
            title="Add another color"
          >
            +
          </button>
        </div>
      ) : (
        <div className="color-picker-gradient">
          {color.map((c, index) => (
            <div key={index} className="color-picker-row">
              <input
                type="color"
                value={c}
                onInput={(e) =>
                  onColorArrayChange(
                    index,
                    (e.target as HTMLInputElement).value,
                  )
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
      )}
      <div className="color-picker-row">
        <button
        onClick={() => onAddColor((color as string[]).length)}
        className="update-button color-picker-action-button"
        title="Add another color"
        >
          +
        </button>
      </div>
    </div>
  );
}
