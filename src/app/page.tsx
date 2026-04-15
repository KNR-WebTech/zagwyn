import Link from "next/link";
import { pageMetadata } from "@/lib/seo";
import { SectionHeading } from "@/components/SectionHeading";
import { PhoneCTA } from "@/components/PhoneCTA";
import { testimonials } from "@/content/testimonials";
import { products } from "@/content/products";
import { images } from "@/content/images";

export const metadata = pageMetadata({
  title: "Zagwyn Firewood",
  description:
    "Premium kiln-dried, seasoned, and green hardwood delivered across Middlesex and Worcester counties from Shirley, Massachusetts.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <ValueColumns />
      <ProductQuickSelect />
      <SocialProof />
      <CtaBanner />
    </>
  );
}

function Hero() {
  return (
    <section className="relative bg-charcoal text-offwhite overflow-hidden min-h-[72vh] sm:min-h-[80vh] flex items-center">
      <div className="absolute inset-0">
        <img
          src={images.hero}
          alt="Firewood logs stacked and ready for delivery"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/92 via-charcoal/75 to-charcoal/20" />
      </div>
      <div className="relative container-wide py-14 sm:py-20 md:py-32 w-full">
        <div className="max-w-2xl animate-fade-up">
          <div className="eyebrow mb-4">Shirley, Massachusetts</div>
          <h1 className="font-serif text-4xl md:text-6xl leading-[1.05]">
            Premium Firewood,
            <br />
            <span className="text-amber">Cut and Delivered</span> in Central
            Massachusetts.
          </h1>
          <p className="mt-5 sm:mt-6 text-base sm:text-lg md:text-xl text-offwhite/80 max-w-xl">
            Kiln-dried, seasoned, and green hardwood. Half a cord to four
            cords. Shirley, MA and the surrounding Middlesex and Worcester
            county towns.
          </p>
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-4">
            <Link href="/products" className="btn-primary">
              See Products & Pricing
            </Link>
            <Link href="/about#delivery" className="btn-outline-light">
              Check Your Delivery Area
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function ValueColumns() {
  const items = [
    {
      title: "Industrial Processing",
      body:
        "Every log runs through our processor and comes out at a consistent 16 inches. You get uniform splits that fit any stove, insert, or fireplace — no oversize chunks to re-split in the cold.",
      icon: (
        <>
          <path d="M4 20h16" />
          <path d="M6 20V9l6-5 6 5v11" />
          <path d="M10 20v-6h4v6" />
        </>
      ),
    },
    {
      title: "Kiln-Dried Option",
      body:
        "Our thermodynamic kilns drop moisture below 20% and eliminate insects, mold, and fungus. Safe to store near the hearth, lights fast, burns hot, and keeps your chimney cleaner.",
      icon: (
        <>
          <path d="M12 3c2 3 4 5 4 8a4 4 0 1 1-8 0c0-3 2-5 4-8z" />
          <path d="M12 14v6" />
        </>
      ),
    },
    {
      title: "Flexible Delivery",
      body:
        "Our dump trucks handle anything from a half-cord suburban drop to a four-cord bulk run. We deliver across Middlesex and Worcester counties, and we're known for being careful with placement.",
      icon: (
        <>
          <rect x="2" y="8" width="12" height="9" />
          <path d="M14 11h5l3 3v3h-8z" />
          <circle cx="6" cy="18" r="2" />
          <circle cx="18" cy="18" r="2" />
        </>
      ),
    },
  ];

  return (
    <section className="bg-offwhite">
      <div className="container-wide py-16 sm:py-20 md:py-28">
        <SectionHeading
          eyebrow="The Zagwyn Difference"
          title="Built like a piece of equipment, delivered like a neighbor."
          lede="We run an industrial operation so every split you get is uniform, clean, and ready to burn. Then we drop it exactly where you want it."
        />
        <div className="mt-10 sm:mt-14 grid gap-10 sm:gap-12 md:grid-cols-3">
          {items.map((item) => (
            <div key={item.title} className="animate-fade-up">
              <div className="rule mb-6" />
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-amber"
                aria-hidden
              >
                {item.icon}
              </svg>
              <h3 className="mt-4 font-serif text-2xl">{item.title}</h3>
              <p className="mt-3 text-charcoal/75 leading-relaxed">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductQuickSelect() {
  return (
    <section className="bg-charcoal text-offwhite">
      <div className="container-wide py-16 sm:py-20 md:py-28">
        <SectionHeading
          eyebrow="Our Products"
          title="What Are You Looking For?"
          lede="Three tiers, all hardwood, all cut to standard 16-inch lengths. Pick the one that fits how and when you'll be burning."
          tone="dark"
        />
        <div className="mt-10 sm:mt-14 grid gap-6 sm:gap-8 sm:grid-cols-2 md:grid-cols-3">
          {products.map((p) => {
            const isFlagship = p.slug === "kiln-dried";
            const photo = images.products[p.slug === "kiln-dried" ? "kilnDried" : p.slug === "seasoned" ? "seasoned" : "green"];
            return (
              <Link
                key={p.slug}
                href={`/products#${p.slug}`}
                className={`group block transition-all duration-200 hover:-translate-y-1 ${
                  isFlagship
                    ? "border-2 border-amber/70 hover:border-amber"
                    : "border border-offwhite/15 hover:border-amber/50"
                }`}
              >
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={photo}
                    alt={`${p.name} — hardwood firewood`}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                  {isFlagship && (
                    <div className="absolute top-3 left-3 bg-amber text-charcoal text-[10px] font-bold uppercase tracking-[0.18em] px-2.5 py-1">
                      Most Popular
                    </div>
                  )}
                </div>
                <div className="p-5 sm:p-6">
                  {p.badge && !isFlagship && (
                    <div className="eyebrow mb-2">{p.badge}</div>
                  )}
                  <h3
                    className={`font-serif group-hover:text-amber transition-colors ${
                      isFlagship ? "text-2xl sm:text-3xl" : "text-xl sm:text-2xl"
                    }`}
                  >
                    {p.name}
                  </h3>
                  <p className="mt-2 text-sm text-offwhite/70">
                    {p.shortDescription}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function SocialProof() {
  return (
    <section className="bg-offwhite">
      <div className="container-wide py-16 sm:py-20 md:py-28">
        <SectionHeading
          eyebrow="From Our Customers"
          title="What People Say After a Delivery"
        />
        <div className="mt-10 sm:mt-12 grid gap-8 sm:gap-10 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <figure key={i} className="border-l-2 border-amber pl-5 sm:pl-6">
              {/* Use body font for quotes — Oswald uppercase ruins readability */}
              <blockquote
                className="text-lg sm:text-xl leading-snug text-charcoal italic"
                style={{ fontFamily: "var(--font-sans)", textTransform: "none" }}
              >
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-4 text-sm text-charcoal/60 not-italic">
                — {t.name}, {t.town}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function CtaBanner() {
  return (
    <section className="bg-amber text-charcoal relative grain overflow-hidden">
      <div className="container-wide py-10 sm:py-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <h2 className="font-serif text-2xl md:text-3xl">
            Ready to order? Call us or check your delivery area.
          </h2>
          <p className="mt-1 text-charcoal/80">
            Alex and David take calls personally.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
          <PhoneCTA variant="outline" />
          <Link href="/about#delivery" className="btn-outline">
            Delivery Area Map
          </Link>
        </div>
      </div>
    </section>
  );
}
