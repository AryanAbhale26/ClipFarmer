"use client";

import { CursorProvider, Cursor } from "@/components/animate-ui/components/animate/cursor";

export function GlobalCursor() {
  return (
    <CursorProvider global={true}>
      <Cursor />
    </CursorProvider>
  );
}
