"use client";

import { useRef, useState } from "react";
import Image from "next/image";

export default function HeroPhoto({ alt }: { alt: string }) {
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;

    if (previewUrl) URL.revokeObjectURL(previewUrl);
    setPreviewUrl(URL.createObjectURL(file));
  }

  return (
    <div className="mx-auto w-full max-w-sm sm:max-w-none">
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="hidden"
      />
      <button
        type="button"
        onClick={() => inputRef.current?.click()}
        aria-label="Upload photo"
        className="block aspect-square w-full overflow-hidden rounded-3xl border border-card-border bg-card shadow-lg shadow-black/5"
      >
        {previewUrl ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={previewUrl}
            alt={alt}
            className="h-full w-full object-cover"
          />
        ) : (
          <Image
            src="/images/rk-photo.png"
            alt={alt}
            width={640}
            height={640}
            className="h-full w-full object-cover"
            priority
          />
        )}
      </button>
    </div>
  );
}
