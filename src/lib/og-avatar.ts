// Bundles the local avatar into the edge OG routes (same pattern as the fonts)
// so they don't depend on the deployed site already serving the image.
export async function getOgAvatar(): Promise<string | undefined> {
  try {
    const res = await fetch(new URL("../../public/me.jpg", import.meta.url));
    const bytes = new Uint8Array(await res.arrayBuffer());
    let binary = "";
    for (let i = 0; i < bytes.length; i += 8192) {
      binary += String.fromCharCode(...bytes.subarray(i, i + 8192));
    }
    return `data:image/jpeg;base64,${btoa(binary)}`;
  } catch (error) {
    console.error("Failed to load OG avatar:", error);
    return undefined;
  }
}
