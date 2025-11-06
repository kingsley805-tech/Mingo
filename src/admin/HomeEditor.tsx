import React, { useState } from "react";
import { useContent } from "@/content/store";
import type { HomeContent } from "@/content/types";
import { Button } from "@/components/ui/button";

export default function HomeEditor() {
  const { content, update, exportJson, importJson, reset } = useContent();
  const [jsonText, setJsonText] = useState("");

  const home = content.home;

  const setHome = (next: Partial<HomeContent>) => {
    update((prev) => ({ ...prev, home: { ...prev.home, ...next } }));
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>, field: keyof HomeContent | string) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      const dataUrl = reader.result as string;
      if (field === "heroImage") setHome({ heroImage: { url: dataUrl, alt: home.heroImage.alt } });
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="space-y-8">
      <section className="space-y-3">
        <h2 className="text-lg font-semibold">Hero</h2>
        <div className="grid sm:grid-cols-2 gap-3">
          <input className="border rounded px-3 py-2" value={home.heroTitleLine1} onChange={(e) => setHome({ heroTitleLine1: e.target.value })} />
          <input className="border rounded px-3 py-2" value={home.heroTitleEmphasis} onChange={(e) => setHome({ heroTitleEmphasis: e.target.value })} />
          <input className="border rounded px-3 py-2" value={home.heroTitleLine2} onChange={(e) => setHome({ heroTitleLine2: e.target.value })} />
          <input className="border rounded px-3 py-2" value={home.heroVideoUrl} onChange={(e) => setHome({ heroVideoUrl: e.target.value })} placeholder="Hero video URL" />
          <textarea className="border rounded px-3 py-2 sm:col-span-2" value={home.heroDescription} onChange={(e) => setHome({ heroDescription: e.target.value })} />
        </div>
        <div className="flex items-center gap-3">
          <img src={home.heroImage.url} alt="hero" className="w-24 h-16 object-cover rounded border" />
          <input type="file" accept="image/*" onChange={(e) => handleImageUpload(e, "heroImage")} />
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold">Stats</h2>
        <div className="space-y-2">
          {home.stats.map((s, i) => (
            <div key={i} className="grid grid-cols-3 gap-2">
              <input className="border rounded px-2 py-2" value={s.value} onChange={(e) => setHome({ stats: home.stats.map((x, ix) => (ix === i ? { ...x, value: e.target.value } : x)) })} />
              <input className="border rounded px-2 py-2" value={s.label} onChange={(e) => setHome({ stats: home.stats.map((x, ix) => (ix === i ? { ...x, label: e.target.value } : x)) })} />
              <input className="border rounded px-2 py-2" value={s.icon ?? ""} onChange={(e) => setHome({ stats: home.stats.map((x, ix) => (ix === i ? { ...x, icon: e.target.value } : x)) })} placeholder="Icon name (optional)" />
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold">Features</h2>
        <div className="space-y-2">
          {home.features.map((f, i) => (
            <div key={i} className="grid sm:grid-cols-3 gap-2">
              <input className="border rounded px-2 py-2" value={f.title} onChange={(e) => setHome({ features: home.features.map((x, ix) => (ix === i ? { ...x, title: e.target.value } : x)) })} />
              <input className="border rounded px-2 py-2" value={f.icon ?? ""} onChange={(e) => setHome({ features: home.features.map((x, ix) => (ix === i ? { ...x, icon: e.target.value } : x)) })} placeholder="Icon name" />
              <textarea className="border rounded px-2 py-2 sm:col-span-1" value={f.description} onChange={(e) => setHome({ features: home.features.map((x, ix) => (ix === i ? { ...x, description: e.target.value } : x)) })} />
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold">Subjects</h2>
        <div className="space-y-2">
          {home.subjects.map((s, i) => (
            <div key={s.id} className="grid sm:grid-cols-4 gap-2 items-center">
              <input className="border rounded px-2 py-2" value={s.name} onChange={(e) => setHome({ subjects: home.subjects.map((x, ix) => (ix === i ? { ...x, name: e.target.value } : x)) })} />
              <input className="border rounded px-2 py-2" value={s.designation} onChange={(e) => setHome({ subjects: home.subjects.map((x, ix) => (ix === i ? { ...x, designation: e.target.value } : x)) })} />
              <input className="border rounded px-2 py-2" value={s.image.url} onChange={(e) => setHome({ subjects: home.subjects.map((x, ix) => (ix === i ? { ...x, image: { ...x.image, url: e.target.value } } : x)) })} />
              <input type="file" accept="image/*" onChange={(e) => {
                const file = e.target.files?.[0];
                if (!file) return;
                const reader = new FileReader();
                reader.onload = () =>
                  setHome({ subjects: home.subjects.map((x, ix) => (ix === i ? { ...x, image: { ...x.image, url: reader.result as string } } : x)) });
                reader.readAsDataURL(file);
              }} />
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold">Leadership</h2>
        <div className="grid sm:grid-cols-3 gap-2">
          <input className="border rounded px-2 py-2" value={home.leadership.youtubeEmbedUrl} onChange={(e) => setHome({ leadership: { ...home.leadership, youtubeEmbedUrl: e.target.value } })} />
          <input className="border rounded px-2 py-2" value={home.leadership.name} onChange={(e) => setHome({ leadership: { ...home.leadership, name: e.target.value } })} />
          <input className="border rounded px-2 py-2" value={home.leadership.title} onChange={(e) => setHome({ leadership: { ...home.leadership, title: e.target.value } })} />
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold">CTA</h2>
        <div className="grid sm:grid-cols-2 gap-2">
          <input className="border rounded px-2 py-2" value={home.cta.heading} onChange={(e) => setHome({ cta: { ...home.cta, heading: e.target.value } })} />
          <input className="border rounded px-2 py-2" value={home.cta.primaryText} onChange={(e) => setHome({ cta: { ...home.cta, primaryText: e.target.value } })} />
          <input className="border rounded px-2 py-2" value={home.cta.secondaryText} onChange={(e) => setHome({ cta: { ...home.cta, secondaryText: e.target.value } })} />
          <textarea className="border rounded px-2 py-2 sm:col-span-2" value={home.cta.description} onChange={(e) => setHome({ cta: { ...home.cta, description: e.target.value } })} />
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold">Testimonials</h2>
        <div className="space-y-2">
          {home.testimonials.map((t, i) => (
            <div key={i} className="grid sm:grid-cols-4 gap-2">
              <input className="border rounded px-2 py-2" value={t.name} onChange={(e) => setHome({ testimonials: home.testimonials.map((x, ix) => (ix === i ? { ...x, name: e.target.value } : x)) })} />
              <input className="border rounded px-2 py-2" value={t.role} onChange={(e) => setHome({ testimonials: home.testimonials.map((x, ix) => (ix === i ? { ...x, role: e.target.value } : x)) })} />
              <input className="border rounded px-2 py-2" value={t.rating} onChange={(e) => setHome({ testimonials: home.testimonials.map((x, ix) => (ix === i ? { ...x, rating: Number(e.target.value) } : x)) })} />
              <textarea className="border rounded px-2 py-2" value={t.content} onChange={(e) => setHome({ testimonials: home.testimonials.map((x, ix) => (ix === i ? { ...x, content: e.target.value } : x)) })} />
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold">Import / Export</h2>
        <div className="flex flex-wrap gap-2">
          <Button onClick={() => setJsonText(exportJson())}>Export JSON</Button>
          <Button variant="outline" onClick={() => importJson(jsonText)}>Import JSON</Button>
          <Button variant="outline" onClick={() => reset()}>Reset Defaults</Button>
        </div>
        <textarea className="w-full h-40 border rounded px-3 py-2" placeholder="Paste JSON here" value={jsonText} onChange={(e) => setJsonText(e.target.value)} />
      </section>
    </div>
  );
}


