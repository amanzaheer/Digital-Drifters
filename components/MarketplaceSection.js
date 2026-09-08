"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

const NAVY = "text-[#0B1F4E]";

const EBAY_STORE = {
  name: "Digital Drifters Outlet",
  platform: "ebay",
  sellerLevel: "Top Rated Seller",
  stats: [
    { label: "Orders (30d)", value: "1,284" },
    { label: "Sales revenue", value: "$86.4K" },
    { label: "Active listings", value: "248" },
    { label: "Feedback score", value: "99.7%" },
    { label: "Units sold", value: "3,912" },
    { label: "Avg. shipping", value: "1.2 days" },
  ],
  products: [
    {
      id: "ebay-1",
      sku: "DD-EB-1042",
      title: "Wireless Noise-Canceling Headphones",
      qty: 84,
      sold: 1240,
      price: "$89.99",
      views: "12.4K",
      status: "Active",
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "ebay-2",
      sku: "DD-EB-1188",
      title: "Vintage Leather Crossbody Bag",
      qty: 36,
      sold: 890,
      price: "$64.50",
      views: "8.1K",
      status: "Active",
      image:
        "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "ebay-3",
      sku: "DD-EB-1301",
      title: "Smart Fitness Watch Series X",
      qty: 112,
      sold: 2100,
      price: "$129.00",
      views: "19.6K",
      status: "Active",
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "ebay-4",
      sku: "DD-EB-1420",
      title: "Professional DSLR Camera Kit",
      qty: 18,
      sold: 560,
      price: "$449.99",
      views: "6.9K",
      status: "Active",
      image:
        "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "ebay-5",
      sku: "DD-EB-1555",
      title: "Ergonomic Office Desk Chair",
      qty: 47,
      sold: 730,
      price: "$189.00",
      views: "5.4K",
      status: "Active",
      image:
        "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "ebay-6",
      sku: "DD-EB-1672",
      title: "Ceramic Pour-Over Coffee Set",
      qty: 156,
      sold: 1580,
      price: "$42.00",
      views: "11.2K",
      status: "Active",
      image:
        "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80",
    },
  ],
};

const AMAZON_STORE = {
  name: "Digital Drifters Amazon",
  platform: "amazon",
  sellerLevel: "Amazon Seller Central",
  stats: [
    { label: "Orders (30d)", value: "2,046" },
    { label: "Sales revenue", value: "$142.8K" },
    { label: "Active SKUs", value: "186" },
    { label: "Account health", value: "Healthy" },
    { label: "Units sold", value: "6,480" },
    { label: "Buy Box win", value: "94%" },
  ],
  products: [
    {
      id: "amz-1",
      sku: "DD-AMZ-2201",
      title: "Organic Skincare Gift Bundle",
      qty: 210,
      sold: 3420,
      price: "$54.99",
      views: "28.3K",
      status: "Active",
      image:
        "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "amz-2",
      sku: "DD-AMZ-2314",
      title: "Portable Bluetooth Speaker",
      qty: 320,
      sold: 5100,
      price: "$79.99",
      views: "41.7K",
      status: "Active",
      image:
        "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "amz-3",
      sku: "DD-AMZ-2440",
      title: "Minimalist Running Sneakers",
      qty: 95,
      sold: 2870,
      price: "$98.00",
      views: "22.1K",
      status: "Active",
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "amz-4",
      sku: "DD-AMZ-2588",
      title: "Stainless Steel Cookware Set",
      qty: 64,
      sold: 1950,
      price: "$159.00",
      views: "15.8K",
      status: "Active",
      image:
        "https://images.unsplash.com/photo-1584990347449-a2d4c0f63e0f?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "amz-5",
      sku: "DD-AMZ-2610",
      title: "LED Desk Lamp with USB Hub",
      qty: 402,
      sold: 4200,
      price: "$36.50",
      views: "33.5K",
      status: "Active",
      image:
        "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "amz-6",
      sku: "DD-AMZ-2795",
      title: "Premium Yoga Mat & Strap Kit",
      qty: 178,
      sold: 2340,
      price: "$48.00",
      views: "18.9K",
      status: "Active",
      image:
        "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?auto=format&fit=crop&w=800&q=80",
    },
  ],
};

function IconStore({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      aria-hidden
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 9l1.5-4.5h15L21 9M4 9v10a1 1 0 001 1h14a1 1 0 001-1V9M9 21V13h6v8"
      />
    </svg>
  );
}

function SellerListingCard({ product, platform }) {
  const isEbay = platform === "ebay";

  return (
    <article className="marketplace-card flex shrink-0 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-[0_2px_16px_-8px_rgba(15,23,42,0.18)]">
      <div className="relative h-full w-[88px] shrink-0 self-stretch bg-slate-100 sm:w-[100px]">
        <Image
          src={product.image}
          alt={product.title}
          fill
          className="object-cover"
          sizes="100px"
        />
      </div>
      <div className="flex min-w-0 flex-1 flex-col justify-between gap-2 p-3 sm:p-3.5">
        <div className="min-w-0">
          <div className="flex items-center justify-between gap-2">
            <p className="truncate font-mono text-[10px] font-semibold tracking-wide text-slate-400">
              {product.sku}
            </p>
            <span
              className={`shrink-0 rounded px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wider ${
                isEbay
                  ? "bg-emerald-50 text-emerald-700"
                  : "bg-emerald-50 text-emerald-700"
              }`}
            >
              {product.status}
            </span>
          </div>
          <h3 className="mt-1 line-clamp-2 text-[13px] font-semibold leading-snug text-[#0B1F4E]">
            {product.title}
          </h3>
        </div>
        <div className="grid grid-cols-4 gap-1 border-t border-slate-100 pt-2 text-center">
          <div>
            <p className="text-[9px] font-medium uppercase tracking-wide text-slate-400">
              Price
            </p>
            <p className="mt-0.5 text-xs font-bold text-[#E10E1D]">
              {product.price}
            </p>
          </div>
          <div>
            <p className="text-[9px] font-medium uppercase tracking-wide text-slate-400">
              Qty
            </p>
            <p className="mt-0.5 text-xs font-bold text-slate-700">
              {product.qty}
            </p>
          </div>
          <div>
            <p className="text-[9px] font-medium uppercase tracking-wide text-slate-400">
              Sold
            </p>
            <p className="mt-0.5 text-xs font-bold text-slate-700">
              {product.sold.toLocaleString()}
            </p>
          </div>
          <div>
            <p className="text-[9px] font-medium uppercase tracking-wide text-slate-400">
              Views
            </p>
            <p className="mt-0.5 text-xs font-bold text-slate-700">
              {product.views}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}

function SellerDashboard({ store, reduceMotion }) {
  const isEbay = store.platform === "ebay";
  const brandBar = isEbay
    ? "from-[#E53238] to-[#C62B30]"
    : "from-[#232F3E] to-[#131921]";
  const brandAccent = isEbay ? "text-[#E53238]" : "text-[#FF9900]";
  const brandBadge = isEbay
    ? "bg-[#E53238]/10 text-[#E53238]"
    : "bg-[#FF9900]/15 text-[#B36B00]";
  const platformName = isEbay ? "eBay Seller Hub" : "Amazon Seller Central";
  const marqueeItems = [...store.products, ...store.products];

  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_8px_40px_-16px_rgba(15,23,42,0.18)]">
      {/* Dashboard chrome header */}
      <div
        className={`flex flex-wrap items-center justify-between gap-3 bg-linear-to-r ${brandBar} px-4 py-3.5 sm:px-6`}
      >
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/70">
            {platformName}
          </p>
          <p className="mt-0.5 text-base font-bold text-white sm:text-lg">
            {store.name}
          </p>
        </div>
        <span className="rounded-full bg-white/15 px-3 py-1 text-[11px] font-semibold text-white backdrop-blur-sm">
          {store.sellerLevel}
        </span>
      </div>

      {/* Store stats */}
      <div className="border-b border-slate-100 bg-slate-50/80 px-4 py-4 sm:px-6">
        <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">
          Store performance · last 30 days
        </p>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {store.stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl border border-slate-200/80 bg-white px-3 py-3"
            >
              <p className="text-[10px] font-medium uppercase tracking-wide text-slate-400">
                {stat.label}
              </p>
              <p className={`mt-1 text-lg font-bold tracking-tight ${brandAccent} sm:text-xl`}>
                {stat.value}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Active listings slider */}
      <div className="px-4 py-5 sm:px-6 sm:py-6">
        <div className="mb-4 flex items-center gap-3">
          <span
            className={`inline-flex items-center rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider ${brandBadge}`}
          >
            Active listings
          </span>
          <p className="text-xs text-slate-500">
            Products live in seller dashboard
          </p>
          <div
            className="hidden h-px flex-1 bg-linear-to-r from-slate-200 to-transparent sm:block"
            aria-hidden
          />
        </div>

        <div
          className="marketplace-marquee group relative overflow-hidden mask-[linear-gradient(to_right,transparent,black_3%,black_97%,transparent)]"
          aria-label={`${platformName} active listings scrolling right to left`}
        >
          <div
            className="marketplace-marquee-track"
            style={reduceMotion ? { animationDuration: "100s" } : undefined}
          >
            {marqueeItems.map((product, index) => (
              <SellerListingCard
                key={`${product.id}-${index}`}
                product={product}
                platform={store.platform}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function MarketplaceSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="marketplace"
      className="relative scroll-mt-24 overflow-hidden bg-[#F8F9FB] py-20 text-slate-900 sm:py-24 lg:py-28"
      aria-labelledby="marketplace-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_45%_at_50%_0%,rgba(225,14,29,0.05),transparent_55%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-red-500/30 to-transparent"
        aria-hidden
      />

      <div className="relative mx-auto mb-12 w-full max-w-[min(100%,1600px)] px-5 sm:mb-14 sm:px-8 lg:px-10 xl:px-14">
        <motion.header
          className="mx-auto max-w-3xl text-center"
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
        >
          <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.22em] text-red-600 sm:text-sm sm:tracking-[0.26em]">
            <IconStore className="h-4 w-4 shrink-0 sm:h-5 sm:w-5" />
            Seller dashboards
          </p>
          <h2
            id="marketplace-heading"
            className={`mt-4 text-3xl font-bold tracking-tight ${NAVY} sm:text-4xl lg:text-[2.65rem]`}
          >
            eBay &amp; Amazon store performance
          </h2>
          <p className="mt-5 text-base leading-relaxed text-slate-600 sm:text-lg">
            Real seller-hub style stats and active product listings we manage
            across eBay and Amazon storefronts.
          </p>
        </motion.header>
      </div>

      <div className="relative mx-auto flex w-full max-w-[min(100%,1600px)] flex-col gap-10 px-5 sm:gap-12 sm:px-8 lg:px-10 xl:px-14">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5 }}
        >
          <SellerDashboard store={EBAY_STORE} reduceMotion={reduceMotion} />
        </motion.div>
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, delay: 0.08 }}
        >
          <SellerDashboard store={AMAZON_STORE} reduceMotion={reduceMotion} />
        </motion.div>
      </div>
    </section>
  );
}
