import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import type { SiteContent } from "./types";
import { defaultContent } from "./defaults";

function deepMerge<T>(base: T, override: Partial<T>): T {
  if (override === null || override === undefined) return base as T;
  if (Array.isArray(base)) {
    // For arrays, prefer override if provided, otherwise base
    return ((Array.isArray(override) ? override : base) as unknown) as T;
  }
  if (typeof base === "object" && base) {
    const result: any = Array.isArray(base) ? [] : { ...base };
    for (const key of Object.keys(base as any)) {
      const b: any = (base as any)[key];
      const o: any = (override as any)?.[key];
      if (o === undefined) {
        result[key] = b;
      } else if (typeof b === "object" && b !== null && !Array.isArray(b)) {
        result[key] = deepMerge(b, o ?? {});
      } else {
        result[key] = o;
      }
    }
    // Include any extra keys from override not in base
    for (const key of Object.keys(override as any)) {
      if (!(key in (base as any))) (result as any)[key] = (override as any)[key];
    }
    return result as T;
  }
  return ((override as unknown as T) ?? base) as T;
}

type ContentContextValue = {
  content: SiteContent;
  setContent: (next: SiteContent) => void;
  update: (updater: (prev: SiteContent) => SiteContent) => void;
  reset: () => void;
  exportJson: () => string;
  importJson: (json: string) => void;
};

const STORAGE_KEY = "mingo_site_content_v1";

const ContentContext = createContext<ContentContextValue | undefined>(undefined);

export function ContentProvider({ children }: { children: React.ReactNode }) {
  const [content, setContentState] = useState<SiteContent>(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return defaultContent;
      const stored = JSON.parse(raw) as Partial<SiteContent>;
      // Migrate by deep-merging stored over defaults so all new fields exist
      return deepMerge(defaultContent, stored);
    } catch {
      return defaultContent;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(content));
    } catch {
      // ignore
    }
  }, [content]);

  const setContent = useCallback((next: SiteContent) => setContentState(next), []);

  const update = useCallback((updater: (prev: SiteContent) => SiteContent) => {
    setContentState((prev) => updater(prev));
  }, []);

  const reset = useCallback(() => setContentState(defaultContent), []);

  const exportJson = useCallback(() => JSON.stringify(content, null, 2), [content]);

  const importJson = useCallback((json: string) => {
    const parsed = JSON.parse(json) as SiteContent;
    setContentState(parsed);
  }, []);

  const value = useMemo<ContentContextValue>(
    () => ({ content, setContent, update, reset, exportJson, importJson }),
    [content, setContent, update, reset, exportJson, importJson]
  );

  return <ContentContext.Provider value={value}>{children}</ContentContext.Provider>;
}

export function useContent() {
  const ctx = useContext(ContentContext);
  if (!ctx) throw new Error("useContent must be used within ContentProvider");
  return ctx;
}


