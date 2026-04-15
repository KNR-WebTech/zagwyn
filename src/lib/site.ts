export const site = {
  name: "Zagwyn Firewood",
  legalName: "Zagwyn Contracting — Firewood Division",
  tagline: "Precision-cut firewood from Shirley, Massachusetts.",
  description:
    "Kiln-dried, seasoned, and green hardwood delivered across Middlesex and Worcester counties. Half a cord to four cords and beyond.",
  url: "https://zagwynfirewood.com",
  address: {
    street: "Great Road",
    locality: "Shirley",
    region: "MA",
    postalCode: "01464",
    country: "US",
  },
  phones: [
    { label: "Alex Zagwyn", number: "978-501-5184", href: "tel:+19785015184" },
    { label: "David Zagwyn", number: "978-501-5223", href: "tel:+19785015223" },
  ],
  primaryPhone: { number: "978-501-5184", href: "tel:+19785015184" },
  hours: [
    { day: "Monday – Friday", time: "8:00 AM – 5:00 PM" },
    { day: "Saturday", time: "8:00 AM – 2:00 PM" },
    { day: "Sunday", time: "By appointment" },
  ],
  payments: ["Cash", "Check", "Credit Card", "Venmo"],
  nav: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Products & Pricing", href: "/products" },
{ label: "Contact", href: "/contact" },
  ],
};

export type SitePhone = (typeof site.phones)[number];
