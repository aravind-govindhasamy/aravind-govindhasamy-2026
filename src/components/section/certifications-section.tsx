/* eslint-disable @next/next/no-img-element */
import { DATA } from "@/data/resume";
import BlurFade from "@/components/magicui/blur-fade";

const BLUR_FADE_DELAY = 0.04;

export default function CertificationsSection() {
  return (
    <div className="flex min-h-0 flex-col gap-y-6">
      <BlurFade delay={BLUR_FADE_DELAY * 14}>
        <h2 className="text-xl font-bold">Certifications</h2>
      </BlurFade>
      <div className="flex flex-col gap-8">
        {DATA.certifications.map((certification, index) => (
          <BlurFade
            key={certification.title + certification.date}
            delay={BLUR_FADE_DELAY * 15 + index * 0.05}
          >
            <div className="flex items-center gap-x-3 justify-between">
              <div className="flex items-center gap-x-3 flex-1 min-w-0">
                {certification.image ? (
                  <img
                    src={certification.image}
                    alt={certification.title}
                    className="size-8 md:size-10 p-1 border rounded-full shadow ring-2 ring-border overflow-hidden object-contain flex-none"
                  />
                ) : (
                  <div className="size-8 md:size-10 p-1 border rounded-full shadow ring-2 ring-border bg-muted flex-none" />
                )}
                <div className="flex-1 min-w-0 flex flex-col gap-0.5">
                  <div className="font-semibold leading-none">
                    {certification.title}
                  </div>
                  <div className="font-sans text-sm text-muted-foreground">
                    {certification.issuer}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-1 text-xs tabular-nums text-muted-foreground text-right flex-none">
                <span>{certification.date}</span>
              </div>
            </div>
          </BlurFade>
        ))}
      </div>
    </div>
  );
}
