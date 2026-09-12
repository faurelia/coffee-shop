import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { MapPin, Mail, Instagram, Facebook, Twitter } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — Copper Kettle Coffee" },
      {
        name: "description",
        content:
          "Get in touch with Copper Kettle Coffee — find our address, email, socials, and store locations.",
      },
      { property: "og:title", content: "Contact Us — Copper Kettle Coffee" },
      {
        property: "og:description",
        content: "Reach out, find a store, or just say hello.",
      },
    ],
  }),
  component: ContactPage,
});

const stores = [
  {
    name: "Old Town Roastery",
    address: "12 Maple Lane, Old Town",
    hours: "Mon–Sun 7am–6pm",
  },
  {
    name: "Riverside Kiosk",
    address: "88 Riverwalk, Unit 3",
    hours: "Mon–Fri 7am–3pm",
  },
  {
    name: "Northside Cafe",
    address: "450 Birch Avenue",
    hours: "Mon–Sun 7am–5pm",
  },
];

function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <div>
      <section className="bg-espresso py-20 text-center text-primary-foreground">
        <h1 className="text-4xl font-bold md:text-5xl">Say hello.</h1>
        <p className="mx-auto mt-3 max-w-md text-primary-foreground/75">
          Questions, catering, wholesale beans, or just a compliment for the
          barista — we'd love to hear it.
        </p>
      </section>

      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 md:grid-cols-2">
        <div>
          <h2 className="text-2xl font-semibold">Find us</h2>
          <div className="mt-5 space-y-4 text-sm">
            <p className="flex items-center gap-3">
              <MapPin className="size-5 shrink-0 text-primary" />
              12 Maple Lane, Old Town
            </p>
            <p className="flex items-center gap-3">
              <Mail className="size-5 shrink-0 text-primary" />
              hello@copperkettle.coffee
            </p>
          </div>
          <div className="mt-6 flex gap-3">
            {[Instagram, Facebook, Twitter].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="Social media"
                className="flex size-10 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                <Icon className="size-4" />
              </a>
            ))}
          </div>

          <h2 className="mt-12 text-2xl font-semibold">Store locator</h2>
          <div className="mt-5 space-y-4">
            {stores.map((store) => (
              <div
                key={store.name}
                className="rounded-xl border border-border bg-card p-5 shadow-soft"
              >
                <h3 className="font-semibold">{store.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {store.address}
                </p>
                <p className="text-sm text-muted-foreground">{store.hours}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-border bg-card p-8 shadow-soft">
          <h2 className="text-2xl font-semibold">Send a message</h2>
          {sent ? (
            <p className="mt-6 rounded-lg bg-sage/15 p-4 text-sm text-foreground">
              Thanks for reaching out — we'll get back to you within a day or
              two. ☕
            </p>
          ) : (
            <form
              className="mt-6 space-y-4"
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
            >
              <div>
                <label className="mb-1.5 block text-sm font-medium">Name</label>
                <Input required placeholder="Your name" />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium">
                  Email
                </label>
                <Input required type="email" placeholder="you@example.com" />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium">
                  Message
                </label>
                <Textarea
                  required
                  rows={5}
                  placeholder="What's on your mind?"
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-full bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
              >
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
