import { ScriptOptions } from "botc-character-sheet";
import { ColorPicker } from "./ColorPicker";

interface AppearanceOptionsProps {
  options: ScriptOptions;
  onColorChange: (color: string[]) => void;
  onColorAngleChange: (angle: number) => void;
  onColorArrayChange: (index: number, color: string) => void;
  onAddColor: (index: number) => void;
  onRemoveColor: (index: number) => void;
  onLogoChange: (logo: string) => void;
}

export function AppearanceOptions({
  options,
  onColorChange,
  onColorAngleChange,
  onColorArrayChange,
  onAddColor,
  onRemoveColor,
}: AppearanceOptionsProps) {
  return (
    <>
      <ColorPicker
        options={options}
        onColorChange={onColorChange}
        onColorAngleChange={onColorAngleChange}
        onColorArrayChange={onColorArrayChange}
        onAddColor={onAddColor}
        onRemoveColor={onRemoveColor}
      />

      <div className="color-presets-container">
        {Object.keys(options.presetColors).map((id) => (
          <button
            className="secondary-button"
            onClick={(e) => {
              navigator.clipboard.writeText(`${options.presetColors[id]}`);
              const element = e.target as HTMLElement;
              element.innerHTML = "Coppied!";
              setTimeout(
                (element: HTMLElement, id: string) => {
                  element.innerHTML = id;
                },
                1500,
                element,
                id,
              );
            }}
          >
            {id}
          </button>
        ))}
      </div>

      {/* <div className="form-control">
        <label className="form-control-label">
          <span className="form-control-text">Logo URL</span>
          <input
            type="text"
            value={options.logo}
            placeholder="https://example.com/logo.png"
            onInput={(e) => onLogoChange((e.target as HTMLInputElement).value)}
            className="text-input"
          />
        </label>
        {options.logo && (
          <button
            type="button"
            className="delete-button"
            onClick={() => onLogoChange("")}
            title="Clear logo"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="3 6 5 6 21 6"></polyline>
              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
            </svg>
          </button>
        )}
      </div>
      {options.iconUrlTemplate !== DEFAULT_OPTIONS.iconUrlTemplate && (
        <div>
          <div className="form-control">
            <label className="form-control-label">
              <span className="form-control-text">Icon URL Template</span>
              <input
                type="text"
                value={options.iconUrlTemplate}
                placeholder="https://example.com/icons/{id}.png"
                onInput={(e) =>
                  onOptionChange(
                    "iconUrlTemplate",
                    (e.target as HTMLInputElement).value,
                  )
                }
                className="text-input"
              />
            </label>
          </div>
          <p className="print-options-hint">
            Icon URL set by script metadata. Uses <code>{"{id}"}</code> as a
            placeholder for the character ID.
          </p>
        </div>
      )} */}
      {/* <Toggle
        label="Include Night Sheet"
        checked={options.showNightSheet}
        onChange={(value) => onOptionChange("showNightSheet", value)}
      /> */}

      {/* <Toggle
        label="Include Night Order"
        checked={options.displayNightOrder}
        onChange={(value) => onOptionChange("displayNightOrder", value)}
      /> */}

      {/* <Toggle
        label="Include Player Counts"
        checked={options.displayPlayerCounts}
        onChange={(value) => onOptionChange("displayPlayerCounts", value)}
      /> */}
    </>
  );
}
