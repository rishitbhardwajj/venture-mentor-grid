import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHeader } from "@/components/site/PageShell";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MessageSquare, ThumbsUp, Bookmark, TrendingUp, Search } from "lucide-react";

export const Route = createFileRoute("/forum")({
  head: () => ({
    meta: [
      { title: "Discussion Forum — MentorConnect" },
      { name: "description", content: "Ask questions, share wins, and learn from the community across placement, DSA, projects and more." },
      { property: "og:title", content: "Discussion Forum — MentorConnect" },
      { property: "og:description", content: "Community Q&A for aspiring engineers and PMs." },
    ],
  }),
  component: ForumPage,
});

const categories = ["Placement", "DSA", "Projects", "Hackathons", "Internships", "Career", "Open Source"];
const posts = [
  { title: "How I cracked Google SDE-1 in 6 months", cat: "Placement", author: "Ankit R.", replies: 42, votes: 218, accepted: true },
  { title: "Best resources for graph algorithms?", cat: "DSA", author: "Meera S.", replies: 18, votes: 96 },
  { title: "Feedback on my open-source project (React + AI)", cat: "Projects", author: "Yash K.", replies: 27, votes: 154 },
  { title: "SIH 2026 — team looking for backend dev", cat: "Hackathons", author: "Rina P.", replies: 9, votes: 41 },
  { title: "Cold email template that got me 3 offers", cat: "Career", author: "Dev M.", replies: 63, votes: 402, accepted: true },
  { title: "First PR to a big open-source repo — checklist", cat: "Open Source", author: "Sana T.", replies: 12, votes: 88 },
];

function ForumPage() {
  return (
    <PageShell>
      <PageHeader title="Discussion Forum" subtitle="Ask questions, help others, and grow with the community." />

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-[240px_1fr_280px] gap-8">
          <aside>
            <h4 className="font-semibold text-sm mb-3 text-muted-foreground uppercase tracking-wider">Categories</h4>
            <div className="space-y-1">
              {categories.map(c => (
                <button key={c} className="w-full text-left px-3 py-2 rounded-md text-sm hover:bg-muted transition-colors">
                  {c}
                </button>
              ))}
            </div>
          </aside>

          <div>
            <div className="flex gap-3 mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search discussions…" className="pl-10 h-11" />
              </div>
              <Button className="btn-gradient border-0 h-11">Ask a Question</Button>
            </div>

            <div className="space-y-3">
              {posts.map(p => (
                <Card key={p.title} className="mentor-card p-5">
                  <div className="flex items-start gap-4">
                    <div className="text-center min-w-[48px]">
                      <div className="text-lg font-bold text-foreground">{p.votes}</div>
                      <div className="text-[10px] uppercase tracking-wider text-muted-foreground">votes</div>
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <Badge variant="secondary" className="text-xs">{p.cat}</Badge>
                        {p.accepted && <Badge className="text-xs bg-primary/10 text-primary border-0">✓ Answered</Badge>}
                      </div>
                      <h3 className="font-semibold hover:text-primary cursor-pointer">{p.title}</h3>
                      <p className="mt-2 text-xs text-muted-foreground">by {p.author}</p>
                    </div>
                    <div className="flex flex-col items-end gap-2 text-xs text-muted-foreground shrink-0">
                      <div className="flex items-center gap-1"><MessageSquare className="h-3.5 w-3.5" /> {p.replies}</div>
                      <div className="flex items-center gap-1"><ThumbsUp className="h-3.5 w-3.5" /> Upvote</div>
                      <div className="flex items-center gap-1"><Bookmark className="h-3.5 w-3.5" /> Save</div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          <aside>
            <Card className="p-5">
              <div className="flex items-center gap-2 mb-3">
                <TrendingUp className="h-4 w-4 text-primary" />
                <h4 className="font-semibold text-sm">Trending</h4>
              </div>
              <ul className="space-y-3 text-sm">
                {posts.slice(0, 4).map(p => (
                  <li key={p.title} className="hover:text-primary cursor-pointer">{p.title}</li>
                ))}
              </ul>
            </Card>
          </aside>
        </div>
      </section>
    </PageShell>
  );
}
