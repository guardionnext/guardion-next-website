export type CaseStudy = {
  reference: string;
  sector: string;
  headline: string;
  situation: string;
  approach: string;
  outcome: string;
};

export type CaseStudyLabels = {
  caseWord: string;
  ref: string;
  situation: string;
  approach: string;
  outcome: string;
};

const DEFAULT_LABELS: CaseStudyLabels = {
  caseWord: "Case",
  ref: "Ref.",
  situation: "Situation",
  approach: "Approach",
  outcome: "Outcome",
};

export function CaseStudyCard({
  study,
  index,
  labels = DEFAULT_LABELS,
}: {
  study: CaseStudy;
  index: number;
  labels?: CaseStudyLabels;
}) {
  return (
    <article className="border border-border bg-surface p-8 md:p-12">
      <div className="flex flex-wrap items-center gap-4 text-[10px] uppercase tracking-[0.22em] text-text-mute">
        <span className="tabular-nums">{labels.caseWord} 0{index + 1}</span>
        <span className="h-px w-8 bg-border" />
        <span>{study.sector}</span>
        <span className="h-px w-8 bg-border" />
        <span className="font-mono normal-case tracking-normal text-foreground/60">
          {labels.ref} {study.reference}
        </span>
      </div>
      <h3 className="mt-6 max-w-[36ch] font-serif text-2xl leading-[1.15] text-foreground md:text-[28px]">
        {study.headline}
      </h3>
      <div className="mt-10 grid gap-px overflow-hidden border border-border bg-border md:grid-cols-3">
        {[
          { label: labels.situation, body: study.situation },
          { label: labels.approach, body: study.approach },
          { label: labels.outcome, body: study.outcome },
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
