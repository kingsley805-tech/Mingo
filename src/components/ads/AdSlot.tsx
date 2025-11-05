import React from "react";
import { ensureAdSenseLoaded } from "@/lib/adsense";

type Props = {
  slot: string; // Your AdSense ad unit ID (data-ad-slot)
  format?: "auto" | "fluid";
  layoutKey?: string; // for in-article or in-feed formats if needed
  style?: React.CSSProperties;
  className?: string;
};

export default function AdSlot({ slot, format = "auto", layoutKey, style, className }: Props) {
  const containerRef = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    ensureAdSenseLoaded();

    const tryPush = () => {
      try {
        // @ts-ignore
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch {
        // ignore
      }
    };

    const id = window.setTimeout(tryPush, 300);
    return () => window.clearTimeout(id);
  }, [slot]);

  return (
    <div ref={containerRef} className={className}>
      <ins
        className="adsbygoogle"
        style={style || { display: "block" }}
        data-ad-client="ca-pub-6312347683462417"
        data-ad-slot={slot}
        data-ad-format={format}
        {...(layoutKey ? { "data-ad-layout-key": layoutKey } : {})}
      />
    </div>
  );
}


