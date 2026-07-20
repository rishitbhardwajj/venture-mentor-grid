import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHeader } from "@/components/site/PageShell";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Target, Users, Sparkles, Heart } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — MentorConnect" },
      { name: "description", content: "MentorConnect helps students turn ambition into careers with 1:1 mentorship from industry leaders." },
      { property: "og:title", content: "About — MentorConnect" },
      { property: "og:description", content: "Our mission is to democratize career mentorship." },
    ],
  }),
  component: AboutPage,
});

const values = [
  { icon: Target, title: "Purpose-driven", desc: "Every session ties back to a clear career goal." },
  { icon: Users, title: "Community-first", desc: "We grow together — mentors, students, alumni." },
  { icon: Sparkles, title: "Quality-obsessed", desc: "Every mentor is vetted for expertise and empathy." },
  { icon: Heart, title: "Accessible", desc: "Free and paid options so everyone can grow." },
];

function AboutPage() {
  return (
    <PageShell>
      <PageHeader
        title="Democratizing career mentorship"
        subtitle="We believe every student deserves a mentor who's walked the path they want to take."
      />
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-neutral">
          <p className="text-lg text-muted-foreground leading-relaxed">
            MentorConnect started with a simple observation: talent is universal, but access to great mentors is not.
            Today we connect 10,000+ students with 5,000+ mentors from 100+ leading companies — through 1:1 sessions,
            live cohorts, and vibrant communities.
          </p>
        </div>
      </section>

      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map(v => (
            <Card key={v.title} className="p-6">
              <div className="h-11 w-11 rounded-xl bg-primary/10 grid place-items-center mb-4">
                <v.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-semibold">{v.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{v.desc}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold">Join the movement</h2>
          <p className="mt-3 text-muted-foreground">Whether you're seeking guidance or ready to give back, there's a place for you here.</p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Button size="lg" className="btn-gradient border-0">Find a Mentor</Button>
            <Button size="lg" variant="outline">Become a Mentor</Button>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
