import Link from "next/link";
import { PageHero } from "@/components/shared/PageHero";
import type { LegalDoc as Doc } from "@/data/legal";

/** Renders [label](/path) links inside a legal paragraph. */
function RichText({ text }: { text: string }) {
  const parts = text.split(/(\[[^\]]+\]\([^)]+\))/g);
  return (
    <>
      {parts.map((part, i) => {
        const m = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
        return m ? (
          <Link key={i} href={m[2]}>
            {m[1]}
          </Link>
        ) : (
          part
        );
      })}
    </>
  );
}

/** Privacy Policy, Booking Terms or Cookie Policy, from data/legal.ts. */
export function LegalDoc({ doc }: { doc: Doc }) {
  return (
    <main id="main">
      <PageHero eyebrow="Legal" title={doc.title} />
      <section className="container-x pb-24">
        <div className="prose-dzong legal">
          <p>
            {"Last updated"}: {doc.updated}
          </p>
          {doc.sections.map((s) => (
            <section key={s.h}>
              <h2>{s.h}</h2>
              {s.p.map((p) => (
                <p key={p}>
                  <RichText text={p} />
                </p>
              ))}
              {s.table && (
                <div className="my-6 overflow-x-auto">
                  <table className="w-full border-collapse text-left text-[15px] leading-snug">
                    <thead>
                      <tr>
                        {s.table.head.map((c) => (
                          <th key={c} scope="col" className="border-b border-current/30 py-2 pr-4 align-bottom font-medium">
                            {c}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {s.table.rows.map((r) => (
                        <tr key={r.join("|")}>
                          {r.map((c, i) => (
                            <td key={i} className="border-b border-current/15 py-2 pr-4 align-top">
                              {c}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
              {s.after?.map((p) => (
                <p key={p}>
                  <RichText text={p} />
                </p>
              ))}
            </section>
          ))}
        </div>
      </section>
    </main>
  );
}
