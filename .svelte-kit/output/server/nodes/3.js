

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/about/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.Br9cqOZd.js","_app/immutable/chunks/disclose-version.BFfpCDGn.js","_app/immutable/chunks/runtime.DZhlGAzU.js","_app/immutable/chunks/legacy.D1AcKqOy.js"];
export const stylesheets = [];
export const fonts = [];
