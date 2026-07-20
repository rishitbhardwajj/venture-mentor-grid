import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHeader } from "@/components/site/PageShell";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, Users } from "lucide-react";

export const Route = createFileRoute("/events")({
  head: () => ({
    meta: [
      { title: "Events — MentorConnect" },
      { name: "description", content: "Live webinars, hackathons, AMA sessions, resume clinics and coding contests." },
      { property: "og:title", content: "Events — MentorConnect" },
      { property: "og:description", content: "Register for upcoming mentor events." },
    ],
  }),
  component: EventsPage,
});

const events = [
  { type: "Webinar", title: "System Design for FAANG Interviews", speaker: "Priya Sharma · Google", date: "Nov 24", time: "6:00 PM IST", days: 3, seats: 240 },
  { type: "Hackathon", title: "AI for Good — 48-hour Sprint", speaker: "Community + Amazon judges", date: "Nov 30", time: "48h", days: 9, seats: 800 },
  { type: "AMA", title: "Breaking Into Product Management", speaker: "Rahul Verma · Microsoft", date: "Dec 05", time: "7:30 PM IST", days: 14, seats: 500 },
  { type: "Resume Clinic", title: "Get Your Resume Reviewed Live", speaker: "5 senior mentors", date: "Dec 08", time: "5:00 PM IST", days: 17, seats: 120 },
  { type: "Contest", title: "Weekly DSA Sprint #48", speaker: "MentorConnect", date: "Dec 10", time: "8:00 PM IST", days: 19, seats: 1200 },
  { type: "Mentor Talk", title: "Career Pivots in Tech", speaker: "Aisha Khan · Amazon", date: "Dec 14", time: "6:30 PM IST", days: 23, seats: 300 },
];

function EventsPage() {
  return (
    <PageShell>
      <PageHeader title="Upcoming events" subtitle="Learn live from the best. Register early — seats fill fast." />

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {events.map(e => (
            <Card key={e.title} className="mentor-card p-6 flex flex-col">
              <div className="flex items-center justify-between">
                <Badge className="bg-accent/10 text-accent border-0">{e.type}</Badge>
                <span className="text-xs font-semibold text-primary">Starts in {e.days}d</span>
              </div>
              <h3 className="mt-4 font-semibold text-lg leading-snug">{e.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{e.speaker}</p>

              <div className="mt-5 grid grid-cols-3 gap-3 text-xs text-muted-foreground border-t border-border pt-4">
                <div className="flex flex-col gap-1"><Calendar className="h-4 w-4 text-primary" /> {e.date}</div>
                <div className="flex flex-col gap-1"><Clock className="h-4 w-4 text-primary" /> {e.time}</div>
                <div className="flex flex-col gap-1"><Users className="h-4 w-4 text-primary" /> {e.seats}</div>
              </div>

              <Button className="mt-5 btn-gradient border-0">Register</Button>
            </Card>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
