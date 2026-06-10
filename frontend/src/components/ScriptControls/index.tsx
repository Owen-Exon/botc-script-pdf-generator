import { ScriptOptions } from "botc-character-sheet";
import { CollapsibleSection } from "../ui";
import { UploadSection } from "./UploadSection";
import { AppearanceOptions } from "./AppearanceOptions";
import { FontOptions } from "./FontOptions";
import { PrintOptions } from "./PrintOptions";
import { ActionButtons } from "./ActionButtons";
import { ScriptEditor } from "../ScriptEditor";
import { CharacterSheetOptions } from "./CharacterSheetOptions";

interface ScriptControlsProps {
  hasScript: boolean;
  options: ScriptOptions;
  isScriptSorted: boolean;
  scriptText: string;
  error: string | null;
  onFileUpload: (event: Event) => void;
  onLoadExample: () => void;
  onLoadExampleTeensyville: () => void;
  onColorChange: (color: string[]) => void;
  onColorAngleChange: (angle: number) => void;
  onColorArrayChange: (index: number, color: string) => void;
  onAddColor: (index: number) => void;
  onRemoveColor: (index: number) => void;
  onLogoChange: (logo: string) => void;
  onOptionChange: <K extends keyof ScriptOptions>(
    key: K,
    value: ScriptOptions[K],
  ) => void;
  onSort: () => void;
  onGeneratePDF: () => void;
  onGenerateImages: () => void;
  onPrint: () => void;
  onShare: () => void;
  isSharing: boolean;
  shareUrl: string | null;
  shareError: string | null;
  onScriptChange: (text: string) => void;
  onSave: () => void;
  savedScriptsCount: number;
  onShowLibrary: () => void;
  onSaveToLibrary: () => void;
}

export function ScriptControls({
  hasScript,
  options,
  isScriptSorted,
  scriptText,
  error,
  onFileUpload,
  onLoadExample,
  onLoadExampleTeensyville,
  onColorChange,
  onColorAngleChange,
  onColorArrayChange,
  onAddColor,
  onRemoveColor,
  onLogoChange,
  onOptionChange,
  onSort,
  onGeneratePDF,
  onGenerateImages,
  onPrint,
  onShare,
  isSharing,
  shareUrl,
  shareError,
  onScriptChange,
  onSave,
  savedScriptsCount,
  onShowLibrary,
  onSaveToLibrary,
}: ScriptControlsProps) {
  return (
    <>
      <div className="control-panel">
        <UploadSection
          hasScript={hasScript}
          onFileUpload={onFileUpload}
          onLoadExample={onLoadExample}
          onLoadExampleTeensyville={onLoadExampleTeensyville}
        />

        {hasScript && (
          <>
            <ActionButtons
              isScriptSorted={isScriptSorted}
              error={error}
              onSort={onSort}
              onGeneratePDF={onGeneratePDF}
              onGenerateImages={onGenerateImages}
              onPrint={onPrint}
              onShare={onShare}
              isSharing={isSharing}
              shareUrl={shareUrl}
              shareError={shareError}
              savedScriptsCount={savedScriptsCount}
              onShowLibrary={onShowLibrary}
              onSaveToLibrary={onSaveToLibrary}
            />

            <CollapsibleSection title="Color">
              <AppearanceOptions
                options={options}
                onOptionChange={onOptionChange}
                onColorChange={onColorChange}
                onColorAngleChange={onColorAngleChange}
                onColorArrayChange={onColorArrayChange}
                onAddColor={onAddColor}
                onRemoveColor={onRemoveColor}
                onLogoChange={onLogoChange}
              />
            </CollapsibleSection>

            <CollapsibleSection title="Layout">
              <CharacterSheetOptions
                options={options}
                onOptionChange={onOptionChange}
              />
            </CollapsibleSection>

            <CollapsibleSection title="Font">
              <FontOptions
                titleStyle={options.titleStyle}
                onTitleStyleChange={(key, value) =>
                  onOptionChange("titleStyle", {
                    ...options.titleStyle,
                    [key]: value,
                  })
                }
              />
            </CollapsibleSection>

            <CollapsibleSection title="Print Options">
              <PrintOptions options={options} onOptionChange={onOptionChange} />
            </CollapsibleSection>

            <CollapsibleSection title="Edit Script JSON" defaultOpen={false}>
              <ScriptEditor
                scriptText={scriptText}
                onScriptChange={onScriptChange}
                onSave={onSave}
              />
            </CollapsibleSection>
          </>
        )}
      </div>
    </>
  );
}
