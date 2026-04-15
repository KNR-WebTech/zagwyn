import Link from "next/link";
import { pageMetadata } from "@/lib/seo";
import { SectionHeading } from "@/components/SectionHeading";
import { PhoneCTA } from "@/components/PhoneCTA";
import { DeliveryMap } from "@/components/DeliveryMap";
import { ZipChecker } from "@/components/ZipChecker";
import { deliveryZones, allServicedTowns } from "@/content/towns";
import { images } from "@/content/images";

export const metadata = pageMetadata({
  title: "About Zagwyn Firewood",
  description:
    "A family-run firewood operation in Shirley, MA, running industrial processors, kilns, skid steers, and a dump truck fleet. Delivering across Middlesex and Worcester counties.",
  path: "/about/",
});

export default function AboutPage() {
  return (
    <>
      {/* ── Company Story ── */}
      <section className="bg-offwhite">
        <div className="container-wide py-14 sm:py-20 md:py-28">
          <div className="grid gap-10 sm:gap-14 md:grid-cols-[1fr_1.2fr] items-start">
            <div className="relative order-2 md:order-1 aspect-[3/4] overflow-hidden">
              <img
                src={images.about.portrait}
                alt="Zagwyn Firewood operations — hands-on crew in central Massachusetts"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="order-1 md:order-2 animate-fade-up">
              <div className="eyebrow mb-3">About The Zagwyns</div>
              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-charcoal leading-[1.1]">
                A Central Mass family operation — run by the people who
                actually load the trucks.
              </h1>
              <div className="mt-5 sm:mt-6 space-y-4 sm:space-y-5 text-charcoal/80 text-base md:text-lg leading-relaxed">
                <p>
                  The Zagwyn family has been working in and around central
                  Massachusetts for generations — Shirley, Marlborough,
                  Southborough, Sterling, Winchendon, Ashburnham. Firewood is
                  one of several things we do, and it's the one most of our
                  neighbors know us for.
                </p>
                <p>
                  Alex and David run the day-to-day. They answer the phone,
                  quote the orders, load the trucks, and often drive the
                  deliveries themselves. If you call, you'll talk to someone
                  whose hands were on your wood a few hours earlier.
                </p>
                <p>
                  For years the business ran on phone calls and word of mouth.
                  This website exists so that ordering is easier for customers
                  who'd rather check availability and pricing online first —
                  but the phone still works, and it's still the fastest way to
                  talk to Alex or David directly.
                </p>
              </div>
              <div className="mt-6 sm:mt-8">
                <PhoneCTA />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Equipment ── */}
      <section className="bg-charcoal text-offwhite">
        <div className="container-wide py-14 sm:py-20 md:py-28">
          <SectionHeading
            eyebrow="Our Yard"
            title="How We Process Your Wood"
            lede="Four pieces of equipment do the real work. Here's what each one does and why it matters for the firewood you get."
            tone="dark"
          />

          <div className="mt-10 sm:mt-16 space-y-14 sm:space-y-20">
            <Equipment
              number="01"
              title="Skid Steers"
              body="Our skid steers handle every load that moves through the yard. They keep the raw logs organized, feed the processor without downtime, and load the delivery trucks cleanly. Just as important: they keep wood off the ground and out of the mud, which is a big part of why our splits show up clean."
              photoSrc={images.equipment.skidSteer}
              photoAlt="Heavy equipment loader moving logs in the Zagwyn yard"
              reverse={false}
            />
            <Equipment
              number="02"
              title="Firewood Processor"
              body="Our processor cross-cuts and splits every log to a standard 16 inches. It's a mechanical advantage that matters to you: uniform sizing, consistent volume per cord, and splits that fit any residential stove, insert, or fireplace without needing to be re-cut on your driveway."
              photoSrc={images.equipment.processor}
              photoAlt="Split firewood logs processed to uniform 16-inch lengths"
              reverse
            />
            <Equipment
              number="03"
              title="Thermodynamic Kilns"
              body="Our kilns bake green wood down below 20% moisture in a matter of days instead of the six to twelve months it takes wood to air-season on its own. The heat also kills insects, mold, and fungus — which is why our kiln-dried wood is safe to store indoors. Kiln-dried lights faster, burns hotter, and produces less creosote."
              photoSrc={images.equipment.kiln}
              photoAlt="Kiln drying facility — heat treatment eliminates moisture and insects"
              reverse={false}
            />
            <Equipment
              number="04"
              title="Dump Truck Fleet"
              body="We run multiple trucks so we can deliver anything from a half-cord drop in a tight suburban driveway up to a four-cord bulk load for a rural property. One truck can run a multi-stop route along a single corridor, which keeps delivery fees reasonable for everyone."
              photoSrc={images.equipment.dumpTruck}
              photoAlt="Dump truck delivering a load of firewood to a customer"
              reverse
            />
          </div>
        </div>
      </section>

      {/* ── Delivery Area (moved from /delivery) ── */}
      <section id="delivery" className="bg-offwhite scroll-mt-20">
        <div className="container-wide py-14 sm:py-20 md:py-24">
          <SectionHeading
            eyebrow="Delivery Area"
            title="We deliver across central and eastern Massachusetts."
            lede="Based in Shirley, MA. We cover a roughly 20-mile radius through Middlesex and Worcester counties. If your town isn't on the list, call us — we can usually work it out."
          />
        </div>
      </section>

      <section className="bg-offwhite">
        <div className="container-wide pb-16">
          <DeliveryMap />
        </div>
      </section>

      <section className="bg-offwhite-dark">
        <div className="container-wide py-14 sm:py-20 md:py-24">
          <SectionHeading
            eyebrow="Service Zones"
            title="Three zones, priced by distance."
            lede="Delivery fees scale with how far we are from Shirley. Zone 1 is the fastest to schedule; Zone 3 routes are usually aggregated so we don't run trucks empty."
          />
          <div className="mt-10 sm:mt-12 grid gap-8 sm:gap-10 md:grid-cols-3">
            {deliveryZones.map((zone) => (
              <div key={zone.id} className="border-t border-charcoal/20 pt-6">
                <div className="text-6xl font-serif text-amber leading-none">
                  {zone.id}
                </div>
                <h3 className="mt-3 font-serif text-xl text-charcoal">
                  {zone.label}
                </h3>
                <div className="text-sm text-charcoal/60">{zone.radius}</div>
                <p className="mt-4 text-charcoal/80 text-sm leading-relaxed">
                  {zone.description}
                </p>
                <ul className="mt-5 text-sm text-charcoal/85 flex flex-wrap gap-x-3 gap-y-1">
                  {zone.towns.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-offwhite">
        <div className="container-wide py-14 sm:py-20 md:py-24">
          <ZipChecker />
        </div>
      </section>

      {/* ── Delivery Logistics ── */}
      <section className="bg-charcoal text-offwhite">
        <div className="container-wide py-14 sm:py-20 md:py-24">
          <div className="grid gap-10 sm:gap-12 md:grid-cols-[1fr_1.2fr]">
            <SectionHeading
              eyebrow="Logistics"
              title="What to expect on delivery day."
              tone="dark"
            />
            <ul className="space-y-6 text-offwhite/80 leading-relaxed">
              <li>
                <strong className="text-offwhite">Overhead clearance.</strong>{" "}
                Our dump trucks raise their bodies to unload. If you have
                low-hanging branches, wires, or carports in the drop zone, let
                us know so we can plan placement.
              </li>
              <li>
                <strong className="text-offwhite">Solid surface.</strong> We
                need a paved driveway or a hard-packed surface to offload
                safely. Soft lawns in mud season are a problem — we'll work
                with you on a better drop point.
              </li>
              <li>
                <strong className="text-offwhite">Placement help.</strong> Our
                drivers will put the wood where you want it as long as the
                truck can reach. This is the part of the job our customers
                mention most often.
              </li>
              <li>
                <strong className="text-offwhite">Stacking service.</strong>{" "}
                Available on request — mention it when you order so we can
                quote it up front.
              </li>
              <li>
                <strong className="text-offwhite">Scheduling.</strong> Call us
                early in the season. Once the first cold snap hits, lead times
                stretch fast.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ── Town Directory (SEO) ── */}
      <section className="bg-offwhite-dark">
        <div className="container-wide py-16">
          <div className="eyebrow mb-3">Full Town Directory</div>
          <h2 className="font-serif text-2xl md:text-3xl text-charcoal max-w-xl">
            Firewood delivery to these Massachusetts towns
          </h2>
          <p className="mt-6 text-charcoal/75 text-sm md:text-base columns-2 md:columns-3 lg:columns-4 gap-x-8">
            {allServicedTowns.map((t, i) => (
              <span key={t}>
                {t}
                {i < allServicedTowns.length - 1 ? ", " : ""}
              </span>
            ))}
          </p>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="bg-amber text-charcoal">
        <div className="container-wide py-10 sm:py-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <h2 className="font-serif text-2xl md:text-3xl max-w-xl">
            Want to see the operation for yourself? Give us a call.
          </h2>
          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <PhoneCTA variant="outline" />
            <Link href="/contact" className="btn-outline">
              Request Order
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function Equipment({
  number,
  title,
  body,
  photoSrc,
  photoAlt,
  reverse,
}: {
  number: string;
  title: string;
  body: string;
  photoSrc: string;
  photoAlt: string;
  reverse: boolean;
}) {
  return (
    <div
      className={`grid gap-8 sm:gap-10 md:grid-cols-2 items-center ${reverse ? "md:[&>*:first-child]:order-2" : ""}`}
    >
      <div className="relative aspect-video overflow-hidden">
        <img
          src={photoSrc}
          alt={photoAlt}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      <div>
        <div className="font-serif text-amber text-5xl sm:text-6xl md:text-7xl leading-none">
          {number}
        </div>
        <h3 className="mt-3 sm:mt-4 font-serif text-2xl sm:text-3xl md:text-4xl">{title}</h3>
        <p className="mt-4 sm:mt-5 text-offwhite/80 text-base md:text-lg leading-relaxed">
          {body}
        </p>
      </div>
    </div>
  );
}
