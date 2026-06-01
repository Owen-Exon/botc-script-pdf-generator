import { ScriptOptions } from "botc-character-sheet";

export type InlineJinxIconsMode = "none" | "primary" | "both";

interface CharacterSheetOptionsProps {
  options: ScriptOptions;
  onOptionChange: <K extends keyof ScriptOptions>(
    key: K,
    value: ScriptOptions[K],
  ) => void;
}

export function CharacterSheetOptions({ options }: CharacterSheetOptionsProps) {
  return (
    <>
      <div>{options}</div>
      {/* <Select
        label="Overleaf:"
        value={options.overleaf}
        options={[
          { value: "backingSheet", label: "Backing Sheet" },
          // { value: "infoSheet", label: "Info Sheet" },
          // { value: "none", label: "None" },
        ]}
        onChange={(value) => onOptionChange("overleaf", value as OverleafType)}
      /> */}

      {/* <Toggle
        label="Show Author"
        checked={options.showAuthor}
        onChange={(value) => onOptionChange("showAuthor", value)}
      /> */}

      {/* <Toggle
        label="Show Logo"
        checked={options.showLogo}
        onChange={(value) => onOptionChange("showLogo", value)}
      /> */}

      {/* <Toggle
        label="Show Title"
        checked={options.showTitle}
        onChange={(value) => onOptionChange("showTitle", value)}
      /> */}

      {/* <Toggle
        label="Show Swirls"
        checked={options.showSwirls}
        onChange={(value) => onOptionChange("showSwirls", value)}
      /> */}

      {/* <Select
        label="Inline Jinx Icons:"
        value={options.inlineJinxIcons}
        options={[
          { value: "none", label: "None" },
          { value: "primary", label: "Primary Character Only" },
          { value: "both", label: "Both Characters" },
        ]}
        onChange={(value) =>
          onOptionChange("inlineJinxIcons", value as InlineJinxIconsMode)
        }
      /> */}

      {/* <Toggle
        label="Use Old Jinxes"
        checked={options.useOldJinxes}
        onChange={(value) => onOptionChange("useOldJinxes", value)}
      />

      <Toggle
        label="Solid Title"
        checked={options.solidTitle}
        onChange={(value) => onOptionChange("solidTitle", value)}
      /> */}
    </>
  );
}
