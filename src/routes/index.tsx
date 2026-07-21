import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { PageShell } from "@/components/site/PageShell";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Target, Briefcase, Video, Handshake, BookOpen, Trophy,
  Search, Calendar, Star, ArrowRight, CheckCircle2, Sparkles,
} from "lucide-react";
import heroImg from "@/assets/hero-illustration.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "MentorConnect — Learn. Connect. Grow." },
      { name: "description", content: "Connecting students with industry leaders from Google, Microsoft, Amazon and more to build future careers through 1:1 mentorship." },
      { property: "og:title", content: "MentorConnect — Learn. Connect. Grow." },
      { property: "og:description", content: "Connecting students with industry leaders from Google, Microsoft, Amazon and more to build future careers through 1:1 mentorship." },
    ],
  }),
  component: Home,
});

const companies = ["Google", "Microsoft", "Amazon", "Adobe", "GeeksforGeeks", "Snowflake", "IBM", "Infosys"];

const features = [
  { icon: Target, title: "Career Guidance", desc: "1:1 sessions with mentors who've walked your path.", emoji: "🎯" },
  { icon: Briefcase, title: "Resume Reviews", desc: "Get expert feedback and ATS-optimized suggestions.", emoji: "💼" },
  { icon: Video, title: "Live Mentorship", desc: "HD video sessions with screen share and recording.", emoji: "🎥" },
  { icon: Handshake, title: "Industry Networking", desc: "Grow your circle across top tech companies.", emoji: "🤝" },
  { icon: BookOpen, title: "Learning Roadmaps", desc: "Semester-wise plans for every career track.", emoji: "📚" },
  { icon: Trophy, title: "Placement Prep", desc: "Mock interviews, DSA drills, and offer negotiation.", emoji: "🏆" },
];

const stats = [
  { value: "5,000+", label: "Mentors" },
  { value: "100+", label: "Companies" },
  { value: "10,000+", label: "Students Guided" },
];

const featuredMentors = [
  { name: "Priya Sharma", role: "Sr. SDE", company: "Google", skills: ["System Design", "DSA", "Career"], rating: 4.9, sessions: 240 },
  { name: "Rahul Verma", role: "Product Manager", company: "Microsoft", skills: ["PM Interviews", "Strategy"], rating: 4.8, sessions: 180 },
  { name: "Aisha Khan", role: "ML Engineer", company: "Amazon", skills: ["AI/ML", "Python", "Research"], rating: 5.0, sessions: 320 },
];

function Home() {
  return (
    <PageShell hero>
      {/* HERO */}
      <section className="relative overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-28">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/10 via-background to-accent/10" />
        <div className="absolute top-20 -left-24 h-72 w-72 rounded-full bg-primary/20 blur-3xl -z-10" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-accent/20 blur-3xl -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div className="min-w-0">
            <Badge className="bg-primary/10 text-primary border-0 hover:bg-primary/15 mb-5">
              <Sparkles className="h-3 w-3 mr-1" /> Mentorship reimagined
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1]">
              Find the Right Mentor.{" "}
              <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                Build the Right Career.
              </span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl">
              Connect 1:1 with engineers, PMs, and researchers from the world's best companies.
              Get personalized guidance, resume reviews, and interview prep — all in one place.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/mentors">
                <Button size="lg" className="btn-gradient border-0 h-12 px-6 text-base">
                  Find a Mentor <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="h-12 px-6 text-base border-2">
                Become a Mentor
              </Button>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-4 max-w-lg">
              {stats.map((s) => (
                <div key={s.label} className="min-w-0">
                  <div className="text-2xl sm:text-3xl font-bold text-foreground">{s.value}</div>
                  <div className="text-xs sm:text-sm text-muted-foreground mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 blur-3xl rounded-full" />
            <div className="relative glass-card rounded-3xl p-4 sm:p-6">
              <img
                src={heroImg}
                alt="Students connecting with mentors from top tech companies"
                width={1200}
                height={1000}
                className="w-full h-auto rounded-2xl"
              />
            </div>
            <div className="absolute -bottom-6 -left-4 sm:-left-8 glass-card rounded-2xl px-4 py-3 flex items-center gap-3 shadow-xl">
              <div className="h-10 w-10 rounded-full bg-primary/15 grid place-items-center">
                <CheckCircle2 className="h-5 w-5 text-primary" />
              </div>
              <div>
                <div className="text-sm font-semibold">Session booked</div>
                <div className="text-xs text-muted-foreground">with a Google SDE</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUSTED COMPANIES */}
      <section className="py-12 border-y border-border bg-card/50 overflow-hidden">
        <p className="text-center text-sm font-medium text-muted-foreground uppercase tracking-wider mb-8">
          Mentors from world-class companies
        </p>
        <div className="relative">
          <div className="flex marquee gap-14 whitespace-nowrap">
            {[...companies, ...companies].map((c, i) => (
              <span key={i} className="text-2xl sm:text-3xl font-bold text-foreground/40 hover:text-foreground transition-colors">
                {c}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* WHY MENTORCONNECT */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <Badge className="bg-accent/10 text-accent border-0 hover:bg-accent/15 mb-4">Why us</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Why MentorConnect?</h2>
            <p className="mt-4 text-muted-foreground">
              Everything you need to turn ambition into a career you love.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <Card key={f.title} className="mentor-card p-6 border-border/60">
                <div className="text-3xl mb-4">{f.emoji}</div>
                <h3 className="font-semibold text-lg">{f.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{f.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED MENTORS */}
      <section className="py-20 bg-card/40 border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Meet featured mentors</h2>
              <p className="mt-2 text-muted-foreground">Handpicked professionals ready to guide you.</p>
            </div>
            <Link to="/mentors">
              <Button variant="outline">Browse all <ArrowRight className="ml-2 h-4 w-4" /></Button>
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {featuredMentors.map((m) => (
              <Card key={m.name} className="mentor-card p-6">
                <div className="flex items-center gap-4">
                  <div className="h-14 w-14 rounded-full bg-gradient-to-br from-primary to-primary-glow grid place-items-center text-white font-bold text-lg shrink-0">
                    {m.name.split(" ").map(n => n[0]).join("")}
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-semibold truncate">{m.name}</h3>
                    <p className="text-sm text-muted-foreground truncate">{m.role} · {m.company}</p>
                  </div>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {m.skills.map(s => <Badge key={s} variant="secondary" className="font-normal">{s}</Badge>)}
                </div>
                <div className="mt-5 flex items-center justify-between text-sm">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-primary text-primary" />
                    <span className="font-semibold">{m.rating}</span>
                    <span className="text-muted-foreground">· {m.sessions} sessions</span>
                  </div>
                </div>
                <div className="mt-5 flex gap-2">
                  <Button size="sm" className="btn-gradient border-0 flex-1">Book Session</Button>
                  <Button size="sm" variant="outline" className="flex-1">View Profile</Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl p-10 sm:p-14 bg-secondary text-secondary-foreground">
            <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-primary/30 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-accent/30 blur-3xl" />
            <div className="relative grid md:grid-cols-[1fr_auto] items-center gap-6">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Start your mentorship journey today.</h2>
                <p className="mt-3 text-secondary-foreground/80 max-w-xl">
                  Join 10,000+ students accelerating their careers with expert guidance.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Button size="lg" className="btn-gradient border-0 h-12">
                  <Search className="mr-2 h-4 w-4" /> Find a Mentor
                </Button>
                <Button size="lg" variant="outline" className="h-12 bg-white/10 border-white/20 text-white hover:bg-white/20 hover:text-white">
                  <Calendar className="mr-2 h-4 w-4" /> Explore Events
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
