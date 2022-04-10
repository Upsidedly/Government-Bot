import { readdir } from "fs/promises";

export async function commands() {
    for (const dir of (await readdir('./dist/commands/'))) {
        
    }
}