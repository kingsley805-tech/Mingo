import React, { useEffect, useState } from "react";
import { useContent } from "@/content/store";
import { Button } from "@/components/ui/button";

type Selector<T> = (root: any) => T;
type Updater<T> = (root: any, next: T) => any;

export default function PageJsonEditor<T>({ title, select, update }: { title: string; select: Selector<T>; update: Updater<T>; }) {
  const { content, update: updateRoot, exportJson, importJson } = useContent();
  const [text, setText] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    setText(JSON.stringify(select(content), null, 2));
  }, [content]);

  const handleSave = () => {
    try {
      const parsed = JSON.parse(text) as T;
      updateRoot((prev) => update(prev, parsed));
      setError("");
    } catch (e: any) {
      setError(e?.message ?? "Invalid JSON");
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between gap-2 flex-wrap">
        <h2 className="text-lg font-semibold">{title}</h2>
        <div className="flex gap-2">
          <Button onClick={handleSave}>Save</Button>
          <Button variant="outline" onClick={() => setText(JSON.stringify(select(content), null, 2))}>Reset Edits</Button>
          <Button variant="outline" onClick={() => setText(exportJson())}>Export All</Button>
          <Button variant="outline" onClick={() => {
            try { importJson(text); setError(""); } catch (e: any) { setError(e?.message ?? "Invalid JSON"); }
          }}>Import All (paste JSON below)</Button>
        </div>
      </div>
      <textarea className="w-full h-[60vh] border rounded-md p-3 font-mono text-sm" value={text} onChange={(e) => setText(e.target.value)} />
      {error && <p className="text-sm text-red-600">{error}</p>}
      <p className="text-xs text-gray-500">This editor lets you change every detail for this page. Paste images as URLs or data URLs.</p>
    </div>
  );
}


