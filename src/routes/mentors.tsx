import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHeader } from "@/components/site/PageShell";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Star, Filter, MapPin } from "lucide-react";

export const Route = createFileRoute("/mentors")({
  head: () => ({
    meta: [
      { title: "Find Mentors — MentorConnect" },
      { name: "description", content: "Browse thousands of vetted mentors across AI, Web Dev, Cyber Security, Data Science and Product Management." },
      { property: "og:title", content: "Find Mentors — MentorConnect" },
      { property: "og:description", content: "Search, filter and book sessions with top industry mentors." },
    ],
  }),
  component: MentorsPage,
});

const categories = ["AI Mentor", "Web Development", "Cyber Security", "Data Science", "Product Manager", "Cloud Engineer"];
const filters = [
  { label: "Company", options: ["Google", "Microsoft", "Amazon", "Adobe"] },
  { label: "Domain", options: ["AI/ML", "Frontend", "Backend", "Security"] },
  { label: "Experience", options: ["0–3 yrs", "3–7 yrs", "7+ yrs"] },
  { label: "Language", options: ["English", "Hindi", "Spanish"] },
  { label: "Rating", options: ["4.5+", "4.8+", "5.0"] },
  { label: "Pricing", options: ["Free", "Paid"] },
];

const mentors = Array.from({ length: 9 }).map((_, i) => ({
  id: i,
  name: ["Priya Sharma", "Rahul Verma", "Aisha Khan", "Daniel Lee", "Sara Ito", "Marco Rossi", "Neha Gupta", "Ravi Patel", "Emma Chen"][i],
  role: ["Sr. SDE", "PM", "ML Engineer", "Security Lead", "UX Lead", "Cloud Architect", "Data Scientist", "Frontend Lead", "Researcher"][i],
  company: ["Google", "Microsoft", "Amazon", "Adobe", "GeeksforGeeks", "Snowflake", "IBM", "Infosys", "Meta"][i],
  skills: [["DSA", "System Design"], ["PM", "Strategy"], ["AI/ML", "Python"], ["Security", "Network"], ["UX", "Figma"], ["AWS", "K8s"], ["SQL", "ML"], ["React", "TS"], ["NLP", "Research"]][i],
  rating: (4.6 + (i % 5) * 0.08).toFixed(1),
  sessions: 80 + i * 27,
  price: i % 3 === 0 ? "Free" : `$${20 + i * 5}/session`,
  available: i % 2 === 0,
}));

function MentorsPage() {
  return (
    <PageShell>
      <PageHeader
        title="Find your mentor"
        subtitle="Search across 5,000+ vetted professionals from the world's best companies."
      />

      <section className="py-8 border-b border-border bg-card/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              placeholder="Search by name, skill, or company…"
              className="pl-12 h-14 text-base rounded-2xl border-border"
            />
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {categories.map(c => (
              <Badge key={c} variant="secondary" className="px-4 py-2 rounded-full cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors">
                {c}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-[280px_1fr] gap-8">
          <aside className="space-y-6">
            <div className="flex items-center gap-2 text-lg font-semibold">
              <Filter className="h-5 w-5" /> Filters
            </div>
            {filters.map(f => (
              <Card key={f.label} className="p-4">
                <h4 className="font-semibold text-sm mb-3">{f.label}</h4>
                <div className="space-y-2">
                  {f.options.map(o => (
                    <label key={o} className="flex items-center gap-2 text-sm cursor-pointer">
                      <input type="checkbox" className="rounded border-border accent-primary" />
                      <span className="text-muted-foreground">{o}</span>
                    </label>
                  ))}
                </div>
              </Card>
            ))}
          </aside>

          <div>
            <div className="flex items-center justify-between mb-6">
              <p className="text-sm text-muted-foreground">Showing <span className="font-semibold text-foreground">{mentors.length}</span> of 5,000+ mentors</p>
              <select className="text-sm border border-border rounded-md px-3 py-2 bg-card">
                <option>Top rated</option>
                <option>Most sessions</option>
                <option>Price: low to high</option>
              </select>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {mentors.map(m => (
                <Card key={m.id} className="mentor-card p-5">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="h-12 w-12 rounded-full bg-gradient-to-br from-primary to-primary-glow grid place-items-center text-white font-bold shrink-0">
                        {m.name.split(" ").map(n => n[0]).join("")}
                      </div>
                      <div className="min-w-0">
                        <h3 className="font-semibold truncate">{m.name}</h3>
                        <p className="text-xs text-muted-foreground truncate">{m.role} · {m.company}</p>
                      </div>
                    </div>
                    {m.available && (
                      <Badge className="bg-primary/10 text-primary border-0 shrink-0">Today</Badge>
                    )}
                  </div>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {m.skills.map(s => <Badge key={s} variant="secondary" className="font-normal text-xs">{s}</Badge>)}
                  </div>
                  <div className="mt-4 flex items-center justify-between text-sm">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-primary text-primary" />
                      <span className="font-semibold">{m.rating}</span>
                      <span className="text-muted-foreground text-xs">· {m.sessions}</span>
                    </div>
                    <span className="text-xs font-medium text-foreground">{m.price}</span>
                  </div>
                  <div className="mt-4 flex gap-2">
                    <Button size="sm" className="btn-gradient border-0 flex-1">Book</Button>
                    <Button size="sm" variant="outline" className="flex-1">Profile</Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
