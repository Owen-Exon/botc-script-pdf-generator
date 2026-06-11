/**
 * Downloads a blob as a file by creating a temporary link and clicking it.
 */
export async function downloadBlob(
  blob: Blob,
  filename: string
): Promise<void> {
  const handle = await (window as any).showSaveFilePicker({
    suggestedName: filename,
  });

  const writable = await handle.createWritable();
  await writable.write(blob);
  await writable.close();
}
