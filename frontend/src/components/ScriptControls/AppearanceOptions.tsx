import { ScriptOptions } from "botc-character-sheet";
import { ColorPicker } from "./ColorPicker";
import { Toggle, Select, Slider } from "../ui";
import { AppearanceLevel } from "../../types/options";

interface AppearanceOptionsProps {
  options: ScriptOptions;
  onOptionChange: <K extends keyof ScriptOptions>(
    key: K,
    value: ScriptOptions[K],
  ) => void;
  onColorChange: (color: string | string[]) => void;
  onColorArrayChange: (index: number, color: string) => void;
  onAddColor: (index:number) => void;
  onRemoveColor: (index: number) => void;
  onLogoChange: (logo: string) => void;
}

export function AppearanceOptions({
  options,
  onOptionChange,
  onColorChange,
  onColorArrayChange,
  onAddColor,
  onRemoveColor,
}: AppearanceOptionsProps) {
  return (
    <>
      <ColorPicker
        color={options.color}
        onColorChange={onColorChange}
        onColorArrayChange={onColorArrayChange}
        onAddColor={onAddColor}
        onRemoveColor={onRemoveColor}
      />

      <div className="color-presets-container">
        {Object.keys(options.presetColors).map((id) => (
          <button
            className="secondary-button"
            onClick={
              () => {
                options.color = options.presetColors[id]; onColorChange(options.color)
              }
            }
          >
            {id}
          </button>
        ))}
      </div>

      <hr/>
      

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

      <div className="scaleOptionContainer">
        <Select
          label="Sizing:"
          value={options.appearance}
          options={[
            { value: "normal", label: "Normal" },
            { value: "compact", label: "Small" },
            { value: "super-compact", label: "Smaller" },
            { value: "mega-compact", label: "Smallest" },
          ]}
          onChange={(value) =>
            onOptionChange("appearance", value as AppearanceLevel)
          }
        />
        <button
          className="secondary-button"
          onClick={
            () => {
              onOptionChange("appearance", "mega-compact" as AppearanceLevel);
              setTimeout(
                () => onOptionChange("appearance", "normal" as AppearanceLevel),
                100,
              );
            }
          }
        >
          Maximise
        </button>
      </div>

      <Slider
        label="Icon Scale"
        value={options.iconScale}
        min={0.5}
        max={3}
        step={0.1}
        displayValue={options.iconScale.toFixed(1)}
        onChange={(value) => onOptionChange("iconScale", value)}
      />

      <hr/>

      <Toggle
        label="Teensy Mode"
        checked={options.teensy}
        onChange={(value) => onOptionChange("teensy", value)}
      />

      <Toggle
        label="Show Jinxes"
        checked={options.showJinxes}
        onChange={(value) => onOptionChange("showJinxes", value)}
      />

      <Toggle
        label="Show Fabled / Loric"
        checked={options.showfabledAndLoric}
        onChange={(value) => onOptionChange("showfabledAndLoric", value)}
      />

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

      {options.overleaf === "backingSheet" && (
        <Toggle
          label="Shrink Minor Words"
          checked={options.formatMinorWords}
          onChange={(value) => onOptionChange("formatMinorWords", value)}
        />
      )}
    </>
  );
}
