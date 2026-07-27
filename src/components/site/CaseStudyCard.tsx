export type CaseStudy = {
  reference: string;
  sector: string;
  headline: string;
  situation: string;
  approach: string;
  outcome: string;
};

export function CaseStudyCard({ study, index }: { study: CaseStudy; index: number }) {
  return (
    <article className="border border-border bg-surface p-8 md:p-12">
      <div className="flex flex-wrap items-center gap-4 text-[10px] uppercase tracking-[0.22em] text-text-mute">
        <span className="tabular-nums">Case 0{index + 1}</span>
        <span className="h-px w-8 bg-border" />
        <span>{study.sector}</span>
        <span className="h-px w-8 bg-border" />
        <span className="font-mono normal-case tracking-normal text-foreground/60">
          Ref. {study.reference}
        </span>
      </div>
      <h3 className="mt-6 max-w-[36ch] font-serif text-2xl leading-[1.15] text-foreground md:text-[28px]">
        {study.headline}
      </h3>
      <div className="mt-10 grid gap-px overflow-hidden border border-border bg-border md:grid-cols-3">
        {[
          { label: "Situation", body: study.situation },
          { label: "Approach", body: study.approach },
          { label: "Outcome", body: study.outcome },
        ].map((block) => (
          <div key={block.label} className="bg-surface p-6 md:p-8">
            <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.22em] text-text-mute">
              <span className="h-2 w-2 bg-accent" aria-hidden />
              {block.label}
            </div>
            <p className="mt-5 text-sm leading-relaxed text-text-mute">{block.body}</p>
          </div>
        ))}
      </div>
    </article>
  );
}
