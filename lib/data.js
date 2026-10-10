const photo = (id) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=900&q=85`;
const imageSource = (value) => value.startsWith("https://") ? value : photo(value);

export const announcement = "Complimentary worldwide shipping on orders over $250";

const defineCategory = (slug, name, intro, sourceHeroImage, collection) => ({
  slug,
  name,
  intro,
  sourceHeroImage,
  heroImage: `/images/categories/${slug}.jpg`,
  ...(collection ? { collection } : {}),
});

export const categories = [
  defineCategory("women", "Women's Clothing", "Considered silhouettes and beautiful fabrics for the modern wardrobe.", photo("photo-1539109136881-3be0616acf4b")),
  defineCategory("men", "Men's Clothing", "Elevated essentials and considered tailoring, made for every day.", photo("photo-1617137968427-85924c800a22")),
  defineCategory("handbags", "Handbags", "Refined companions, finished with considered details and lasting materials.", photo("photo-1584917865442-de89df76afd3")),
  defineCategory("shoes", "Shoes", "From polished occasions to everyday ease, find your perfect pair.", photo("photo-1543163521-1bf539c55dd2")),
  defineCategory("jewellery", "Jewellery", "Thoughtful finishing touches in warm metals and luminous stones.", photo("photo-1611652022419-a9419f74343d")),
  defineCategory("accessories", "Accessories", "The final details: beautiful, useful pieces to make your own.", photo("photo-1523293182086-7651a899d37f")),
  defineCategory("new-arrivals", "New Arrivals", "Just landed: the latest additions to the Sac Luxe edit.", photo("photo-1529139574466-a303027c1d8b"), "isNew"),
  defineCategory("sale", "Sale", "A considered selection of exceptional pieces, now at special prices.", photo("photo-1515886657613-9f3515b0c78f"), "isSale"),
];

const catalogSeeds = [
  {
    category: "women",
    products: [
      ["Silk Evening Gown", 890, "A fluid silk evening gown with a softly draped neckline and elegant floor-length finish.", "photo-1551232864-3f0890e580d9"],
      ["Linen Wrap Dress", 295, "Breathable European linen shaped into an easy wrap silhouette for warm days.", "photo-1595777457583-95e059d581b8"],
      ["Sculpted Wool Blazer", 540, "A single-breasted blazer in soft Italian wool with clean, considered tailoring.", "photo-1566174053879-31528523f8ae"],
      ["Cashmere Crewneck", 385, "A fine-gauge cashmere knit with a relaxed fit and timeless crew neckline.", "photo-1585487000160-6ebcfceb0d03"],
      ["Pleated Midi Skirt", 260, "A fluid midi skirt with precise pleats and a softly structured waistband.", "photo-1572804013427-4d7ca7268217"],
      ["Cotton Poplin Shirt", 185, "Crisp cotton poplin, finished with mother-of-pearl buttons and a curved hem.", "photo-1591369822096-ffd140ec948f"],
      ["Tailored Wide-Leg Trousers", 320, "High-rise trousers in a refined drape with a long, clean leg line.", "photo-1524504388940-b1c1722653e1"],
      ["Satin Slip Dress", 410, "A bias-cut satin slip dress that moves beautifully from day to evening.", "photo-1515886657613-9f3515b0c78f"],
      ["Merino Knit Cardigan", 345, "A lightweight merino cardigan with delicate buttons and a soft hand feel.", "photo-1534528741775-53994a69daeb"],
      ["Classic Trench Coat", 720, "A water-resistant cotton trench with a removable belt and considered lining.", "photo-1539109136881-3be0616acf4b"],
    ],
  },
  {
    category: "men",
    products: [
      ["Italian Wool Overcoat", 895, "A clean-lined overcoat cut from warm Italian wool for enduring wear.", "photo-1516257984-b1b4d707412e"],
      ["Cotton Oxford Shirt", 195, "A wardrobe staple in substantial Oxford cotton with a softly structured collar.", "photo-1618354691373-d851c5c3a990"],
      ["Merino Quarter-Zip", 285, "A fine merino layer with a smooth zip placket and easy everyday fit.", "photo-1617127365659-c47fa864d8bc"],
      ["Linen Weekend Shirt", 175, "Washed linen with a relaxed cut, designed for warm-weather layering.", "photo-1618354691229-88d47f285158"],
      ["Tailored Wool Trousers", 340, "A versatile wool trouser with a refined taper and comfortable mid rise.", "photo-1618354691438-25bc04584c23"],
      ["Cashmere Scarf", 240, "A soft, generously sized cashmere scarf finished with fine fringe.", "photo-1618354691321-e851c56960d1"],
      ["Leather Biker Jacket", 980, "Supple leather and minimal hardware give this jacket its understated edge.", "photo-1598033129183-c4f50c736f10"],
      ["Textured Cotton Polo", 165, "A breathable cotton polo with a refined knit texture and neat placket.", "photo-1576566588028-4147f3842f27"],
      ["Everyday Chino", 210, "A softly washed cotton chino with a straight fit and considered finish.", "photo-1617137984095-74e4e5e3613f"],
      ["Double-Breasted Blazer", 760, "A modern double-breasted blazer, tailored in a supple wool blend.", "photo-1617137968427-85924c800a22"],
    ],
  },
  {
    category: "handbags",
    products: [
      ["Structured Leather Tote", 485, "A spacious full-grain leather tote with a secure interior pocket.", "photo-1590874103328-eac38a683ce7"],
      ["Mini Top-Handle Bag", 390, "A compact top-handle silhouette with polished hardware and a removable strap.", "photo-1548036328-c9fa89d128fa"],
      ["Everyday Crossbody", 325, "An easy crossbody in supple leather, sized for daily essentials.", "photo-1553062407-98eeb64c6a62"],
      ["Suede Shoulder Bag", 450, "Soft suede and a gently curved profile make this a quiet statement piece.", "photo-1566150905458-1bf1fc113f0d"],
      ["Woven Market Basket", 275, "A hand-finished woven carryall with leather trim and a cotton lining.", "photo-1591561954557-26941169b49e"],
      ["Quilted Chain Bag", 560, "A softly quilted leather shoulder bag with a detachable chain strap.", "photo-1565026057447-bc90a3dceb87"],
      ["Pebbled Hobo Bag", 420, "A relaxed hobo shape in durable pebbled leather with a magnetic closure.", "photo-1584917865442-de89df76afd3"],
      ["Foldover Clutch", 245, "A streamlined leather clutch with a practical interior card sleeve.", "photo-1559563458-527698bf5295"],
      ["Canvas Weekender", 365, "A roomy cotton-canvas weekender with reinforced handles and leather details.", "photo-1622560480654-d96214fdc887"],
      ["Saddle Shoulder Bag", 510, "A curved saddle silhouette in smooth leather with an adjustable strap.", "photo-1597047084897-51e81819a499"],
    ],
  },
  {
    category: "shoes",
    products: [
      ["Leather Ballet Flat", 245, "A supple leather flat with a softly squared toe and cushioned footbed.", "https://images.pexels.com/photos/29761843/pexels-photo-29761843/free-photo-of-elegant-peach-bow-flats-on-blue-velvet.jpeg?auto=compress&cs=tinysrgb&w=900"],
      ["Suede Block-Heel Pump", 360, "A refined suede pump with a stable block heel for day-to-evening wear.", "https://images.pexels.com/photos/4376757/pexels-photo-4376757.jpeg?auto=compress&cs=tinysrgb&w=900"],
      ["Minimal Leather Sneaker", 295, "A clean leather sneaker with tonal details and a flexible rubber sole.", "photo-1600185365483-26d7a4cc7519"],
      ["Leather Penny Loafer", 385, "A polished penny loafer made from smooth leather with a flexible sole.", "photo-1495555961986-6d4c1ecb7be3"],
      ["Strappy Evening Sandal", 340, "A refined leather sandal with a slender strap and elegant, adjustable ankle fastening.", "https://images.pexels.com/photos/3682290/pexels-photo-3682290.jpeg?auto=compress&cs=tinysrgb&w=900"],
      ["Leather Ankle Boot", 425, "A polished brown leather ankle boot with a defined heel and refined finish.", "https://images.pexels.com/photos/26856061/pexels-photo-26856061/free-photo-of-close-up-of-woman-wearing-brown-leather-high-heeled-boots.jpeg?auto=compress&cs=tinysrgb&w=900"],
      ["Classic Court Sneaker", 280, "A timeless court silhouette in smooth leather with understated branding.", "photo-1542291026-7eec264c27ff"],
      ["Lace-Up Leather Boot", 450, "A sleek black leather lace-up boot with a sturdy sole and timeless profile.", "https://images.pexels.com/photos/27174561/pexels-photo-27174561/free-photo-of-boots-on-woman-legs.jpeg?auto=compress&cs=tinysrgb&w=900"],
      ["Woven Leather Sandal", 310, "A hand-woven leather sandal with a supportive, softly padded sole.", "photo-1608231387042-66d1773070a5"],
      ["Suede Driving Shoe", 270, "A relaxed driving shoe in soft suede with a flexible pebble sole.", "photo-1525966222134-fcfa99b8ae77"],
    ],
  },
  {
    category: "jewellery",
    products: [
      ["Gold Vermeil Hoops", 180, "Sculptural everyday hoops in recycled sterling silver with a rich gold vermeil finish.", "photo-1617038220319-276d3cfab638"],
      ["Pearl Drop Earrings", 225, "Luminous freshwater pearls suspended from delicate gold vermeil hooks.", "photo-1605100804763-247f67b3557e"],
      ["Fine Chain Necklace", 195, "A fine gold vermeil chain designed to layer or wear beautifully alone.", "photo-1599643478518-a784e5dc4c8f"],
      ["Signet Ring", 260, "A modern signet ring in polished sterling silver with a softly rounded face.", "photo-1611591437281-460bfbe1220a"],
      ["Tennis Bracelet", 420, "A delicate line bracelet set with luminous, responsibly sourced stones.", "photo-1602173574767-37ac01994b2a"],
      ["Sculpted Cuff", 310, "An open cuff with a softly organic profile, finished in polished gold vermeil.", "photo-1535632066927-ab7c9ab60908"],
      ["Solitaire Pendant", 285, "A refined solitaire pendant on an adjustable fine chain.", "photo-1603561591411-07134e71a2a9"],
      ["Layered Chain Bracelet", 175, "A lightweight layered chain bracelet with a secure adjustable clasp.", "photo-1611652022419-a9419f74343d"],
      ["Textured Dome Ring", 245, "A comfortable everyday ring with a softly textured, sculptural dome.", "photo-1602751584552-8ba73aad10e1"],
      ["Pearl Strand Necklace", 390, "A contemporary freshwater pearl strand finished with a gold vermeil clasp.", "photo-1573408301185-9146fe634ad0"],
    ],
  },
  {
    category: "accessories",
    products: [
      ["Silk Square Scarf", 145, "A generous silk twill square with a hand-rolled edge and considered print.", "photo-1523293182086-7651a899d37f"],
      ["Leather Belt", 165, "A versatile full-grain leather belt with a brushed, understated buckle.", "photo-1574279606130-09958dc756f7"],
      ["Acetate Sunglasses", 220, "Lightweight acetate sunglasses with UV-protective lenses and a refined shape.", "photo-1511499767150-a48a237f0083"],
      ["Cashmere Beanie", 155, "A soft rib-knit cashmere beanie with a comfortable, easy fit.", "photo-1576871337622-98d48d1cf531"],
      ["Leather Card Holder", 125, "A slim card holder in grained leather with four card slots.", "photo-1627123424574-724758594e93"],
      ["Woven Leather Gloves", 195, "Supple leather gloves with a soft lining and neat tonal stitching.", "photo-1548883354-7622d03aca27"],
      ["Silk Necktie", 110, "A finely woven silk tie with a subtle texture and classic proportions.", "photo-1517841905240-472988babdf9"],
      ["Leather Passport Case", 185, "A compact passport case with thoughtful pockets in smooth leather.", "photo-1544816155-12df9643f363"],
      ["Wide-Brim Wool Hat", 240, "A structured wool hat with a clean brim and adjustable inner band.", "photo-1521369909029-2afed882baee"],
      ["Gold-Tone Hair Clip", 85, "A polished, softly sculptural hair clip designed for a secure everyday hold.", "photo-1529139574466-a303027c1d8b"],
    ],
  },
];

const colors = ["Black", "Ivory", "Camel", "Navy"];
const clothingCategories = new Set(["women", "men"]);

export const products = catalogSeeds.flatMap(({ category, products: entries }) =>
  entries.map(([name, price, description, imageId], index) => {
    const isSale = index < 2;
    const slug = `${name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")}-${category}`;
    const sourceImage = imageSource(imageId);
    const image = `/images/products/${slug}.jpg`;
    return {
      id: `${category}-${index + 1}`,
      name,
      slug,
      category,
      description,
      price,
      ...(isSale ? { salePrice: Math.round(price * 0.8) } : {}),
      image,
      sourceImage,
      images: [image],
      colors: clothingCategories.has(category) || category === "handbags" || category === "shoes" ? colors.slice(0, 3) : [],
      sizes: clothingCategories.has(category) ? ["XS", "S", "M", "L", "XL"] : category === "shoes" ? ["36", "37", "38", "39", "40", "41", "42"] : [],
      stock: index === 9 ? 4 : 12 + index * 3,
      isNew: index === 0 || index === 2,
      isSale,
    };
  }),
);

export const getCategoryProducts = (category) => {
  const selectedCategory = categories.find(({ slug }) => slug === category);
  if (!selectedCategory) return [];
  if (selectedCategory.collection) {
    return products.filter((product) => product[selectedCategory.collection]);
  }
  return products.filter((product) => product.category === category);
};

export const formatPrice = (amount) =>
  new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(amount);

export const promise = [
  { title: "Worldwide Shipping", text: "Insured delivery to over 120 countries.", icon: "ship" },
  { title: "Considered Quality", text: "Pieces chosen for craft and lasting style.", icon: "quality" },
  { title: "Secure Payments", text: "Checkout integrations available at launch.", icon: "lock" },
];

export const slides = [
  { eyebrow: "The Sac Luxe Edit", title: "Effortless Elegance", text: "Timeless pieces, chosen for the way you live.", image: categories[0].heroImage, href: "/categories/women" },
  { eyebrow: "Modern Tailoring", title: "A New Perspective", text: "Considered layers and refined essentials for every day.", image: categories[1].heroImage, href: "/categories/men" },
  { eyebrow: "Made to Carry", title: "Crafted to Endure", text: "Discover the accessories you'll reach for season after season.", image: categories[2].heroImage, href: "/categories/handbags" },
  { eyebrow: "The Finishing Touch", title: "Details That Matter", text: "Thoughtful jewellery and accessories, selected for you.", image: categories[4].heroImage, href: "/categories/jewellery" },
];

export const footer = {
  tagline: "Curated luxury since 2026.",
  columns: [
    { title: "Shop", links: categories.slice(0, 6).map(({ name, slug }) => ({ label: name, href: `/categories/${slug}` })) },
    { title: "Collections", links: categories.slice(6).map(({ name, slug }) => ({ label: name, href: `/categories/${slug}` })) },
    { title: "Help", links: [{ label: "Contact", href: "mailto:hello@sacluxe.example" }, { label: "Shipping", href: "#" }, { label: "Returns", href: "#" }] },
  ],
};
