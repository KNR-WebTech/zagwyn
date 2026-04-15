import Link from "next/link";
import { pageMetadata } from "@/lib/seo";
import { SectionHeading } from "@/components/SectionHeading";
import { VolumeVisualizer } from "@/components/VolumeVisualizer";
import { products, volumeLabels, type VolumeKey } from "@/content/products";
import { images } from "@/content/images";

export const metadata = pageMetadata({
  title: "Firewood Products & Pricing",
  description:
    "Kiln-dried, seasoned, and green hardwood cordwood from Zagwyn Firewood. Transparent pricing from 1/2 cord to 4+ cords, delivered across central Massachusetts.",
  path: "/products/",
});

const volumeOrder: VolumeKey[] = ["half", "one", "two", "three", "fourPlus"];

export default function ProductsPage() {
  return (
    <>
      <section className="bg-offwhite border-b border-charcoal/10">
        <div className="container-wide py-14 sm:py-20 md:py-24">
          <SectionHeading
            as="h1"
            eyebrow="Products & Pricing"
            title="Three firewood tiers. One straightforward price list."
            lede="Every tier is hardwood, cut to a standard 16 inches, and delivered in your choice of volumes. Pricing shown is per cord, plus delivery based on distance from Shirley."
          />
        </div>
      </section>

      <section className="bg-offwhite">
        <div className="container-wide py-12 sm:py-16 space-y-14 sm:space-y-20">
          {products.map((product) => (
            <article
              key={product.slug}
              id={product.slug}
              className="grid gap-8 sm:gap-10 md:grid-cols-[1fr_1.2fr] scroll-mt-28"
            >
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={
                    product.slug === "kiln-dried"
                      ? images.products.kilnDried
                      : product.slug === "seasoned"
                      ? images.products.seasoned
                      : images.products.green
                  }
                  alt={`${product.name} — split hardwood firewood from Zagwyn`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div>
                {product.badge && (
                  <div className="eyebrow mb-2">{product.badge}</div>
                )}
                <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-charcoal">
                  {product.name}
                </h2>
                <p className="mt-3 sm:mt-4 text-charcoal/80 text-base md:text-lg leading-relaxed">
                  {product.summary}
                </p>
                <ul className="mt-5 sm:mt-6 space-y-2 text-charcoal/85">
                  {product.features.map((f) => (
                    <li key={f} className="flex gap-3">
                      <span className="text-amber mt-1">—</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-4 text-sm text-charcoal/70">
                  <span className="font-semibold">Best for: </span>
                  {product.bestFor}
                </div>

                <div className="mt-6 sm:mt-8 border-t border-charcoal/15">
                  <div className="eyebrow mt-4 sm:mt-5 mb-3">Pricing</div>
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="text-left text-charcoal/60 uppercase tracking-[0.12em] text-xs">
                        <th className="py-2 font-normal">Volume</th>
                        <th className="py-2 font-normal text-right">
                          Price (delivered)
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {volumeOrder.map((v) => (
                        <tr
                          key={v}
                          className="border-t border-charcoal/10"
                        >
                          <td className="py-2.5 sm:py-3">{volumeLabels[v]}</td>
                          <td className="py-2.5 sm:py-3 text-right font-semibold">
                            {product.pricing[v]}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  {product.minimumNote && (
                    <p className="mt-3 text-xs text-charcoal/60">
                      {product.minimumNote}
                    </p>
                  )}
                </div>

                <div className="mt-6 sm:mt-8">
                  <Link
                    href={`/contact?product=${product.slug}`}
                    className="btn-primary w-full sm:w-auto"
                  >
                    Request This Product
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-charcoal text-offwhite">
        <div className="container-wide py-14 sm:py-20 md:py-28">
          <SectionHeading
            eyebrow="Volume Visualizer"
            title="How much is a cord, really?"
            lede="A cord is a standard, legally defined volume — here's what that actually looks like stacked and in the truck."
            tone="dark"
          />
          <div className="mt-10 sm:mt-12 bg-offwhite text-charcoal p-5 sm:p-8 md:p-12 border border-amber/40">
            <VolumeVisualizer />
          </div>
        </div>
      </section>

      <section className="bg-offwhite">
        <div className="container-wide py-16">
          <SectionHeading
            eyebrow="Notes on Pricing"
            title="A few things worth knowing before you order."
          />
          <ul className="mt-10 grid gap-6 md:grid-cols-2 text-charcoal/80">
            <li className="border-l-2 border-amber pl-5">
              <strong>Delivery fees</strong> vary with distance from Shirley.
              See the{" "}
              <Link href="/about#delivery" className="underline hover:text-amber">
                Delivery Area section
              </Link>{" "}
              for zones.
            </li>
            <li className="border-l-2 border-amber pl-5">
              <strong>Stacking service</strong> is available by request on
              most deliveries. Call for a quote — it depends on volume and
              site.
            </li>
            <li className="border-l-2 border-amber pl-5">
              <strong>Prices</strong> are subject to seasonal adjustment. We'll
              always confirm the final price with you before delivery.
            </li>
            <li className="border-l-2 border-amber pl-5">
              <strong>Wholesale, restaurant, and bulk orders:</strong> call us
              or use the contact form with details.
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
