import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHeader } from "@/components/site/PageShell";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code2, Brain, Globe, Cloud, BarChart3, LayoutGrid } from "lucide-react";

export const Route = createFileRoute("/roadmaps")({
  head: () => ({
    meta: [
      { title: "Career Roadmaps — MentorConnect" },
      { name: "description", content: "Semester-wise roadmaps, projects, courses and certifications for every tech career." },
      { property: "og:title", content: "Career Roadmaps — MentorConnect" },
      { property: "og:description", content: "Follow a clear path to your dream role." },
    ],
  }),
  component: RoadmapsPage,
});

const roadmaps = [
  { title: "Software Engineer", desc: "DSA, System Design, and open-source contributions.", icon: Code2, color: "from-emerald-500 to-teal-500" },
  { title: "AI Engineer", desc: "Math, ML frameworks, and MLOps foundations.", icon: Brain, color: "from-violet-500 to-fuchsia-500" },
  { title: "Web Developer", desc: "HTML, CSS, JS, React, Node, and full-stack projects.", icon: Globe, color: "from-sky-500 to-blue-500" },
  { title: "Cloud Engineer", desc: "AWS/GCP, Docker, Kubernetes, CI/CD pipelines.", icon: Cloud, color: "from-amber-500 to-orange-500" },
  { title: "Data Analyst", desc: "SQL, Python, dashboards, and storytelling.", icon: BarChart3, color: "from-rose-500 to-pink-500" },
  { title: "Product Manager", desc: "Discovery, roadmapping, and stakeholder alignment.", icon: LayoutGrid, color: "from-indigo-500 to-purple-500" },
];

const timeline = [
  { sem: "Semester 1", title: "Foundations", items: ["Programming basics", "Git & GitHub", "Linux essentials"] },
  { sem: "Semester 2", title: "Core CS", items: ["DSA I", "OOP", "Discrete Math"] },
  { sem: "Semester 3", title: "Systems", items: ["DBMS", "Operating Systems", "Networks"] },
  { sem: "Semester 4", title: "Specialization", items: ["Chosen track deep-dive", "Team project", "Open source"] },
  { sem: "Semester 5", title: "Interview Prep", items: ["System Design", "Mock interviews", "Behavioral"] },
  { sem: "Semester 6", title: "Placement", items: ["Applications", "Offers & negotiation", "Onboarding prep"] },
];

function RoadmapsPage() {
  return (
    <PageShell>
      <PageHeader title="Career Roadmaps" subtitle="Semester-wise plans, projects, and certifications for every path." />

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {roadmaps.map(r => (
              <Card key={r.title} className="mentor-card p-6 group cursor-pointer">
                <div className={`h-12 w-12 rounded-xl bg-gradient-to-br ${r.color} grid place-items-center text-white mb-4`}>
                  <r.icon className="h-6 w-6" />
                </div>
                <h3 className="font-semibold text-lg">{r.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{r.desc}</p>
                <div className="mt-4 inline-flex items-center text-sm font-medium text-primary group-hover:gap-2 gap-1 transition-all">
                  Open roadmap <ArrowRight className="h-4 w-4" />
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-card/40 border-y border-border">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Badge className="bg-primary/10 text-primary border-0 mb-3">Sample</Badge>
          <h2 className="text-2xl sm:text-3xl font-bold">Software Engineer — 6-semester plan</h2>
          <div className="mt-10 relative">
            <div className="absolute left-4 top-0 bottom-0 w-px bg-border" />
            <div className="space-y-8">
              {timeline.map((t, i) => (
                <div key={t.sem} className="relative pl-12">
                  <div className="absolute left-0 top-1 h-8 w-8 rounded-full btn-gradient grid place-items-center text-xs font-bold text-white">
                    {i + 1}
                  </div>
                  <Card className="p-5">
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <h3 className="font-semibold">{t.title}</h3>
                      <span className="text-xs text-muted-foreground">{t.sem}</span>
                    </div>
                    <ul className="mt-3 grid sm:grid-cols-3 gap-2 text-sm text-muted-foreground">
                      {t.items.map(i => <li key={i} className="flex items-center gap-2">• {i}</li>)}
                    </ul>
                  </Card>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-10 text-center">
            <Button className="btn-gradient border-0">Get personalized roadmap</Button>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
