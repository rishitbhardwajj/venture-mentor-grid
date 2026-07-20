import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHeader } from "@/components/site/PageShell";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Users, MessageSquare, Sparkles } from "lucide-react";

export const Route = createFileRoute("/communities")({
  head: () => ({
    meta: [
      { title: "Communities — MentorConnect" },
      { name: "description", content: "Join niche communities in AI, Web Dev, Cyber Security, Cloud, UI/UX and more." },
      { property: "og:title", content: "Communities — MentorConnect" },
      { property: "og:description", content: "Learn together with peers who share your goals." },
    ],
  }),
  component: CommunitiesPage,
});

const communities = [
  { name: "AI Community", members: "12.4k", posts: 3200, tag: "AI/ML", color: "from-violet-500 to-fuchsia-500" },
  { name: "Web Dev", members: "18.9k", posts: 5800, tag: "Frontend/Backend", color: "from-sky-500 to-blue-500" },
  { name: "Open Source", members: "6.2k", posts: 1400, tag: "Contribute", color: "from-emerald-500 to-teal-500" },
  { name: "Competitive Programming", members: "9.7k", posts: 4100, tag: "DSA", color: "from-amber-500 to-orange-500" },
  { name: "UI / UX", members: "4.8k", posts: 900, tag: "Design", color: "from-rose-500 to-pink-500" },
  { name: "Cyber Security", members: "5.5k", posts: 1750, tag: "Security", color: "from-red-500 to-rose-500" },
  { name: "Cloud Computing", members: "7.1k", posts: 2100, tag: "Cloud/DevOps", color: "from-indigo-500 to-blue-500" },
  { name: "Product Management", members: "3.9k", posts: 820, tag: "PM", color: "from-purple-500 to-indigo-500" },
];

function CommunitiesPage() {
  return (
    <PageShell>
      <PageHeader title="Communities" subtitle="Find your people. Learn together. Build faster." />

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {communities.map(c => (
            <Card key={c.name} className="mentor-card p-6 relative overflow-hidden">
              <div className={`h-16 w-16 rounded-2xl bg-gradient-to-br ${c.color} grid place-items-center text-white mb-4`}>
                <Sparkles className="h-7 w-7" />
              </div>
              <h3 className="font-semibold">{c.name}</h3>
              <p className="text-xs text-muted-foreground mt-1">{c.tag}</p>
              <div className="mt-4 flex items-center gap-4 text-xs text-muted-foreground">
                <span className="flex items-center gap-1"><Users className="h-3.5 w-3.5" /> {c.members}</span>
                <span className="flex items-center gap-1"><MessageSquare className="h-3.5 w-3.5" /> {c.posts}</span>
              </div>
              <Button size="sm" className="mt-5 w-full btn-gradient border-0">Join</Button>
            </Card>
          ))}
        </div>
      </section>

      <section className="py-16 bg-card/40 border-y border-border">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-baseline justify-between mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold">Leaderboard</h2>
            <Badge className="bg-primary/10 text-primary border-0">This month</Badge>
          </div>
          <Card className="divide-y divide-border">
            {[
              { name: "Ankit R.", role: "Top Learner", score: "1,420 XP", badge: "🏆" },
              { name: "Priya S.", role: "Top Mentor", score: "84 sessions", badge: "🌟" },
              { name: "Dev M.", role: "Top Contributor", score: "312 answers", badge: "🔥" },
              { name: "Sana T.", role: "Rising Star", score: "30-day streak", badge: "🎯" },
            ].map((u) => (
              <div key={u.name} className="flex items-center gap-4 p-5">
                <div className="text-2xl">{u.badge}</div>
                <div className="flex-1 min-w-0">
                  <div className="font-semibold truncate">{u.name}</div>
                  <div className="text-xs text-muted-foreground">{u.role}</div>
                </div>
                <div className="text-sm font-semibold text-primary">{u.score}</div>
              </div>
            ))}
          </Card>
        </div>
      </section>
    </PageShell>
  );
}
