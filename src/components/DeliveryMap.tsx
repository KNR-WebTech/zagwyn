"use client";

import dynamic from "next/dynamic";

const DeliveryMapInner = dynamic(() => import("./DeliveryMapInner"), {
  ssr: false,
  loading: () => (
    <div className="h-full w-full flex items-center justify-center text-charcoal/40 text-sm">
      Loading map…
    </div>
  ),
});

export function DeliveryMap() {
  return (
    <div className="relative w-full aspect-[16/10] border border-charcoal/15 bg-offwhite-dark overflow-hidden">
      <DeliveryMapInner />
    </div>
  );
}
