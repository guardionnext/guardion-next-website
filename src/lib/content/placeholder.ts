// Deep-maps every string in a value to a "[ZH] …" placeholder, preserving the
// structure (arrays, nested objects) exactly. Used to derive a not-yet-
// translated Simplified Chinese mirror from the English source, so there is a
// single source of truth (English) and zero structural drift.
//
// When real translations arrive, provide a proper zh-Hans object for that
// page/service and it overrides the placeholder — see getServiceContent etc.

export function placeholderize<T>(value: T): T {
  if (typeof value === "string") {
    return `[ZH] ${value}` as unknown as T;
  }
  if (Array.isArray(value)) {
    return value.map((v) => placeholderize(v)) as unknown as T;
  }
  if (value && typeof value === "object") {
    const out: Record<string, unknown> = {};
    for (const [k, v] of Object.entries(value)) {
      out[k] = placeholderize(v);
    }
    return out as T;
  }
  return value;
}
