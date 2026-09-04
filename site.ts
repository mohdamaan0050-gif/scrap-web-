/**
 * Single source of truth for site content.
 * Edit this file to change copy across every page — no component edits needed.
 *
 * PLACEHOLDER items are marked with `// TODO:` and should be replaced with real
 * client-approved figures, names and photos before launch.
 */

export const company = {
  name: 'Apashishta Vyapar Sanstha',
  shortName: 'Apashishta',
  legalName: 'Apashishta Vyapar Sanstha',
  tagline: 'Waste today, resource tomorrow',
  discipline: 'Waste trading, collection and recycling',
  proprietor: 'Mohd Amaan',
  phone: '8868061839',
  phoneIntl: '+918868061839',
  email: 'recycle@apshishtvyaparsanstha.in',
  domain: 'apshishtvyaparsanstha.in',
  address: {
    line1: 'Abbase House No. 12/2796, Anand Nagar',
    line2: 'Near Park',
    city: 'Saharanpur',
    state: 'Uttar Pradesh',
    postalCode: '247001',
    country: 'India',
    countryCode: 'IN',
  },
  // TODO: replace with the exact plot coordinates for the map pin.
  geo: { lat: 29.9679, lng: 77.5459 },
  hours: 'Monday to Saturday, 9:00 am – 7:00 pm',
  founded: '2019',
};

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? 'https://apshishtvyaparsanstha.in';

export const fullAddress = [
  company.address.line1,
  company.address.line2,
  `${company.address.city} - ${company.address.postalCode}`,
  company.address.state,
  company.address.country,
].join(', ');

export const nav = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Industries', href: '/industries' },
  { label: 'Process', href: '/process' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Why us', href: '/why-us' },
  { label: 'Contact', href: '/contact' },
];

export const footerLinks = [
  ...nav.filter((n) => n.href !== '/'),
  { label: 'Testimonials', href: '/testimonials' },
  { label: 'FAQ', href: '/faq' },
];

/**
 * Hero rate board. These are indicative buying rates shown as a live board,
 * the way a yard posts them at the gate.
 * TODO: replace with current rates and update `boardUpdated` when they change.
 */
export const boardUpdated = 'Rates revised weekly';

export const rateBoard = [
  { material: 'MS scrap, heavy melting', rate: 32, unit: '/kg' },
  { material: 'Aluminium, mixed', rate: 148, unit: '/kg' },
  { material: 'Copper, bright bare', rate: 742, unit: '/kg' },
  { material: 'Corrugated cartons', rate: 14, unit: '/kg' },
  { material: 'PET bottle bales', rate: 27, unit: '/kg' },
  { material: 'HDPE drums', rate: 41, unit: '/kg' },
];

export const stats = [
  // TODO: confirm each figure with the proprietor before publishing.
  { value: 4200, suffix: ' MT', label: 'Material recovered and traded each year' },
  { value: 60, suffix: '+', label: 'Industrial units served across north India' },
  { value: 24, suffix: ' hrs', label: 'Typical lift time after a lot is confirmed' },
  { value: 100, suffix: '%', label: 'Lots closed with weighbridge slip and manifest' },
];

export const services = [
  {
    slug: 'scrap-trading',
    icon: 'Recycle',
    title: 'Industrial scrap trading',
    summary:
      'We buy ferrous and non-ferrous scrap lot-wise, at rates fixed against the day’s market.',
    detail:
      'MS turnings, HMS, aluminium, copper, brass and mixed metal lots are graded on site, quoted the same day and lifted against a purchase order. Payment is released on weighment, before the vehicle leaves your gate.',
  },
  {
    slug: 'collection-segregation',
    icon: 'Trash2',
    title: 'Collection and segregation',
    summary:
      'Bins, trained manpower and a fixed daily route so waste never piles up on the shop floor.',
    detail:
      'We place colour-coded bins at source, run scheduled collection rounds and segregate dry, wet and hazardous streams at your waste yard. Manpower is supplied on our rolls with statutory compliance handled by us.',
  },
  {
    slug: 'recycling',
    icon: 'Factory',
    title: 'Recycling and material recovery',
    summary:
      'Paper, plastic and metal are baled and routed to registered recyclers, not to landfill.',
    detail:
      'Segregated material is baled, weighed and dispatched to processors we have worked with for years. You get a recovery statement showing exactly how much of your waste was diverted from landfill.',
  },
  {
    slug: 'e-waste',
    icon: 'CircuitBoard',
    title: 'E-waste handling',
    summary:
      'End-of-life electronics moved only through CPCB-authorised dismantlers.',
    detail:
      'Computers, panels, cabling and instrumentation are collected under manifest, with data-bearing media destroyed on record. You receive the recycler’s certificate for your EPR file.',
  },
  {
    slug: 'housekeeping-contracts',
    icon: 'ClipboardCheck',
    title: 'Plant waste management contracts',
    summary:
      'One annual contract covering your entire waste yard, from bin to buyer.',
    detail:
      'For plants that would rather not manage a dozen vendors, we take the whole waste yard on contract: manpower, bins, segregation, disposal, records and monthly MIS under a single rate card.',
  },
  {
    slug: 'logistics',
    icon: 'Truck',
    title: 'Transport and weighment',
    summary:
      'Own and attached fleet, every load weighed on a calibrated bridge.',
    detail:
      'Open trucks, tippers and closed containers as the material demands. Gross, tare and net weights are recorded on a third-party weighbridge and shared with your stores team the same day.',
  },
  {
    slug: 'compliance',
    icon: 'FileCheck2',
    title: 'Documentation and compliance',
    summary:
      'Manifests, Form 6 and Form 10 records, GST invoices and EPR support.',
    detail:
      'Every movement is papered correctly: e-way bills, manifests for hazardous streams, disposal certificates and a monthly compliance pack your EHS auditor can file as it is.',
  },
  {
    slug: 'auctions',
    icon: 'Gavel',
    title: 'Auction and lot purchase',
    summary:
      'We bid on sealed-tender and online scrap auctions across UP and Uttarakhand.',
    detail:
      'Registered for e-auction platforms used by public sector and large private plants. We handle EMD, bidding, lifting and site clearance within the tender window.',
  },
];

export const industries = [
  {
    icon: 'ShoppingBasket',
    title: 'FMCG and food processing',
    note: 'Laminates, cartons, rejected packs and process waste, cleared daily so lines keep running.',
  },
  {
    icon: 'Pill',
    title: 'Pharmaceutical',
    note: 'Blister foil, expired stock destruction and controlled disposal under witness.',
  },
  {
    icon: 'Cog',
    title: 'Automotive and engineering',
    note: 'MS turnings, boring, offcuts and rejected castings lifted lot-wise.',
  },
  {
    icon: 'Shirt',
    title: 'Textile and paper mills',
    note: 'Cotton waste, yarn waste, mill broke and baled trim.',
  },
  {
    icon: 'Building2',
    title: 'Construction and infrastructure',
    note: 'Site clearance, shuttering steel, rebar ends and demolition scrap.',
  },
  {
    icon: 'Cpu',
    title: 'Electronics and IT',
    note: 'End-of-life hardware with certified data destruction.',
  },
  {
    icon: 'Warehouse',
    title: 'Warehousing and logistics',
    note: 'Damaged pallets, stretch film, strapping and carton bales.',
  },
  {
    icon: 'Wheat',
    title: 'Sugar and distilleries',
    note: 'Bagasse handling, spent material and seasonal yard clearance.',
  },
];

export const processSteps = [
  {
    title: 'Site walk and waste audit',
    body: 'We visit the plant, list every stream by weight and grade, and photograph the yard as it stands today.',
  },
  {
    title: 'Rate card and agreement',
    body: 'You get a written rate for each material, the lifting frequency and the payment terms. Nothing moves before it is signed.',
  },
  {
    title: 'Bins, manpower and collection',
    body: 'Bins are placed at source and our team runs the collection round on a fixed schedule so the shop floor stays clear.',
  },
  {
    title: 'Segregation and weighment',
    body: 'Material is sorted into saleable grades, then weighed on a calibrated bridge. Gross, tare and net go on the slip.',
  },
  {
    title: 'Processing and recycling',
    body: 'Bales and metal lots go to registered recyclers. Hazardous streams go only to authorised handlers, under manifest.',
  },
  {
    title: 'Payment and compliance pack',
    body: 'Payment is released against weighment, and you receive invoices, manifests and disposal certificates for the month.',
  },
];

export const whyUs = [
  {
    icon: 'ScrollText',
    title: 'Papers that survive an audit',
    body: 'Weighbridge slips, e-way bills, manifests and disposal certificates for every single movement. Nothing is settled on a phone call.',
  },
  {
    icon: 'IndianRupee',
    title: 'Payment before the gate',
    body: 'Lots are paid on weighment. You are not chasing a trader for money after the material has left your premises.',
  },
  {
    icon: 'ShieldCheck',
    title: 'Labour on our rolls',
    body: 'Every worker deployed at your site is on our payroll with PF, ESIC and wage records maintained — your liability stays clean.',
  },
  {
    icon: 'Timer',
    title: 'Lifting inside 24 hours',
    body: 'Once a lot is confirmed, the vehicle is at your gate the next working day. Yards that fill up stop production.',
  },
  {
    icon: 'Scale',
    title: 'One weighbridge, both parties',
    body: 'We weigh on a third-party calibrated bridge with your representative present. The number is never in dispute.',
  },
  {
    icon: 'Leaf',
    title: 'Diverted, not dumped',
    body: 'Material goes to registered recyclers and you get a recovery statement showing how much was kept out of landfill.',
  },
];

/**
 * TODO: replace with real, permission-cleared testimonials before launch.
 * Names are withheld here on purpose — do not publish invented company names.
 */
export const testimonials = [
  {
    quote:
      'They cleared a yard we had been trying to empty for two years, and every load came back with a slip we could file. That is rarer than it should be.',
    role: 'Stores head, food processing unit',
    place: 'Haridwar',
  },
  {
    quote:
      'The manpower is on their rolls and the compliance file is handed over every month. Our audit closed without a single observation on waste.',
    role: 'EHS manager, engineering plant',
    place: 'Ghaziabad',
  },
  {
    quote:
      'Rates are quoted the same day and the payment comes before the truck leaves. We stopped calling three other traders.',
    role: 'Purchase manager, packaging unit',
    place: 'Saharanpur',
  },
  {
    quote:
      'They took the whole waste yard on contract. One vendor, one invoice, and the shop floor stays clear.',
    role: 'Plant head, textile mill',
    place: 'Muzaffarnagar',
  },
];

export const faqs = [
  {
    q: 'What is the minimum quantity you will lift?',
    a: 'For a one-time lot, roughly one tonne or a full vehicle load makes the trip viable. For plants on a monthly contract there is no minimum — we run the collection round whatever the volume that week.',
  },
  {
    q: 'How are rates decided?',
    a: 'Rates are linked to the prevailing market for that grade on the day of lifting. For contract customers we fix a rate card for the period and revise it in writing when the market moves beyond an agreed band.',
  },
  {
    q: 'When do we get paid?',
    a: 'On weighment. Once gross, tare and net are recorded and both sides sign the slip, payment is released by RTGS or NEFT before the vehicle leaves your premises, unless your terms say otherwise.',
  },
  {
    q: 'Do you handle hazardous waste?',
    a: 'We collect and move hazardous streams under manifest, and route them only to handlers authorised by the State Pollution Control Board. We do not treat or dispose of hazardous waste ourselves.',
  },
  {
    q: 'What documents will we receive?',
    a: 'A GST purchase invoice, the weighbridge slip, the e-way bill, and where the stream requires it, a manifest and the recycler’s disposal certificate. Contract customers also get a monthly MIS pack.',
  },
  {
    q: 'Can you supply manpower for our waste yard?',
    a: 'Yes. Workers are deployed on our rolls with PF, ESIC, wage registers and attendance maintained by us, so there is no principal-employer exposure sitting with you.',
  },
  {
    q: 'Which areas do you cover?',
    a: 'Saharanpur and the surrounding western UP belt as our base, extending to Haridwar, Roorkee, Muzaffarnagar, Meerut, Ghaziabad and the wider NCR. For large lots we travel further.',
  },
  {
    q: 'How do we start?',
    a: 'Send us a list of your waste streams, or just call. We will do a site walk, put a rate card in writing, and lift the first lot usually within the same week.',
  },
];

/**
 * Gallery. Drop real photographs into /public/gallery using these filenames
 * (or change the src values). Placeholder SVGs ship with the project so the
 * page renders before your photos arrive.
 */
export const gallery = [
  { src: '/gallery/yard-01.svg', alt: 'Segregated metal lots stacked at the yard', caption: 'Graded metal lots, Saharanpur yard' },
  { src: '/gallery/baling-02.svg', alt: 'Baled cardboard ready for dispatch', caption: 'Carton bales ready for dispatch' },
  { src: '/gallery/collection-03.svg', alt: 'Colour-coded collection bins on a shop floor', caption: 'Colour-coded bins at source' },
  { src: '/gallery/weighbridge-04.svg', alt: 'Loaded truck on a weighbridge', caption: 'Weighment on a calibrated bridge' },
  { src: '/gallery/ewaste-05.svg', alt: 'End-of-life electronics sorted for dismantling', caption: 'E-waste sorted for authorised dismantling' },
  { src: '/gallery/fleet-06.svg', alt: 'Collection vehicles lined up before the morning route', caption: 'Fleet before the morning route' },
];

export const certifications = [
  // TODO: replace with actual registration numbers held by the firm.
  { label: 'GSTIN', value: 'To be added' },
  { label: 'Udyam registration', value: 'To be added' },
  { label: 'UPPCB authorisation', value: 'To be added' },
];

export type Service = (typeof services)[number];
export type Industry = (typeof industries)[number];
export type Testimonial = (typeof testimonials)[number];
export type GalleryItem = (typeof gallery)[number];
