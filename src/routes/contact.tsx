import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHeader } from "@/components/site/PageShell";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, MessageCircle, MapPin } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — MentorConnect" },
      { name: "description", content: "Get in touch with the MentorConnect team." },
      { property: "og:title", content: "Contact — MentorConnect" },
      { property: "og:description", content: "We'd love to hear from you." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <PageShell>
      <PageHeader title="Get in touch" subtitle="Questions, partnerships, or feedback — we'd love to hear from you." />
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-[1fr_360px] gap-10">
          <Card className="p-8">
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-sm font-medium mb-2 block">First name</label>
                  <Input placeholder="Ada" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Last name</label>
                  <Input placeholder="Lovelace" />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Email</label>
                <Input type="email" placeholder="ada@example.com" />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Message</label>
                <textarea
                  rows={5}
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                  placeholder="How can we help?"
                />
              </div>
              <Button className="btn-gradient border-0 h-11 px-6">Send message</Button>
            </form>
          </Card>

          <div className="space-y-4">
            <Card className="p-6">
              <Mail className="h-5 w-5 text-primary mb-2" />
              <h4 className="font-semibold">Email</h4>
              <p className="text-sm text-muted-foreground mt-1">hello@mentorconnect.io</p>
            </Card>
            <Card className="p-6">
              <MessageCircle className="h-5 w-5 text-primary mb-2" />
              <h4 className="font-semibold">Live chat</h4>
              <p className="text-sm text-muted-foreground mt-1">Mon–Fri, 10am–7pm IST</p>
            </Card>
            <Card className="p-6">
              <MapPin className="h-5 w-5 text-primary mb-2" />
              <h4 className="font-semibold">HQ</h4>
              <p className="text-sm text-muted-foreground mt-1">Bengaluru, India</p>
            </Card>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
