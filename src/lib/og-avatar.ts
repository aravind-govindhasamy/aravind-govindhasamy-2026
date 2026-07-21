import fs from "fs/promises";
import path from "path";

// Uses fs.readFile instead of fetch(new URL(..., import.meta.url)) — the latter
// is an edge-runtime-only pattern that doesn't work in Node.js static export.
export async function getOgAvatar(): Promise<string | undefined> {
  try {
    const avatarPath = path.join(process.cwd(), "public", "me.jpg");
    const bytes = await fs.readFile(avatarPath);
    return `data:image/jpeg;base64,${bytes.toString("base64")}`;
  } catch (error) {
    console.error("Failed to load OG avatar:", error);
    return undefined;
  }
}
