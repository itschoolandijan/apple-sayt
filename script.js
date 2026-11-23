/* ==========================================================================
   APPLE OFFICIAL-STYLE ULTRA PREMIUM E-COMMERCE JAVASCRIPT
   - Mahsulot rasmlari va narxlarini oson o'zgartirish uchun PRODUCTS_DATA
   - Dinamik rang, xotira, RAM, Chip, Wi-Fi/Cellular, o'lcham va band tanlash
   - Product Details Modal, Shopping Cart (LocalStorage), Search, Login/Register
   ========================================================================== */

/**
 * 14 & 17. MAHSULOTLAR MA'LUMOT BAZASI (Rasmlar va narxlarni shu yerda oson tahrirlash mumkin)
 * Har bir mahsulotda:
 * - basePrice: boshlang'ich narx (USD)
 * - images: { [rangNomi]: "rasm_url" } va defaultImage
 * - storages: [{ label: "256GB", add: 0 }, ...] (faqat model qo'llab-quvvatlaydigan xotiralar!)
 * - rams: [{ label: "16GB", add: 0 }, ...]
 * - chips: [{ label: "M4", add: 0 }, ...]
 * - sizes: [{ label: "46mm", add: 0 }, ...]
 * - bands: [{ label: "Sport Loop", add: 0 }, ...]
 * - connectivity: [{ label: "GPS", add: 0 }, { label: "GPS + Cellular", add: 100 }]
 */
const PRODUCTS_DATA = [
  // ==================== IPHONE MODELS ====================
  {
    id: "iphone-17-pro-max",
    category: "iphone",
    name: "iPhone 17 Pro Max",
    tagline: "6.9-inch Super Retina XDR · A19 Pro · 48MP Pro Fusion",
    description: "Eng katta displey, Grade 5 titan korpus, A19 Pro chip va 5x optik zoomli professional kamera tizimi.",
    basePrice: 1199,
    defaultImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJIyQ20xfwqptJsCZkvwjd9u-VcXa7q4SklFY3yUhSUg&s=10",
    colors: [
      { name: "Desert Titanium", hex: "#bfa288", image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRt7ATRfO4NQCMCyxQ1iesvt9oCc2UrLH-1iSmY1nc-gdSH1iZljtvNPz_rgZkzu0xjjfb4evDUNtenOqD45aWkc5ilsleNiTtznCBs-R1DZLI2pHhChI5moDaZ9Y-T_1cHp6BxuA&usqp=CAc" },
      { name: "Orange Titanium", hex: "#fa9304", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLS8989krk5jhhNA2mT8OCqqP5e7ntYrVks7OR8mCRnQ&s" },
      { name: "White Titanium", hex: "#f2f1ed", image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRkKOHEy0gOqxpoWYHe3BHRV0eymFwcIcUz2UFHj0ebBf-xDe14l_iSAqwGY325RQdXmr4hvoj3JzNjRHFuRNRW8uBplc-yTlmbZdM3ZbFaR2LGjgq9nlB9QfZLPIcyKvWZJ4iOMFk&usqp=CAc" },
      { name: "Black Titanium", hex: "#2b2b2e", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbqY46F7lO4oYrNFM0AArtH_zxSOamZV6YYNc3-lGv9w&s=10" }
    ],
    storages: [
      { label: "256GB", add: 0 },
      { label: "512GB", add: 200 },
      { label: "1TB", add: 400 },
      { label: "2TB", add: 700 }
    ]
  },
  {
    id: "iphone-17-pro",
    category: "iphone",
    name: "iPhone 17 Pro",
    tagline: "6.3-inch ProMotion · A19 Pro · Camera Control",
    description: "Yilni Pro formatda maksimal unumdorlik, ProRAW video va yorqin Super Retina XDR ekran.",
    basePrice: 999,
    defaultImage: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-16-pro-finish-select-202409-6-3inch-naturaltitanium?wid=940&hei=1112&fmt=png-alpha&.v=1725567334507",
    colors: [
      { name: "Natural Titanium", hex: "#9c9790", image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRt7ATRfO4NQCMCyxQ1iesvt9oCc2UrLH-1iSmY1nc-gdSH1iZljtvNPz_rgZkzu0xjjfb4evDUNtenOqD45aWkc5ilsleNiTtznCBs-R1DZLI2pHhChI5moDaZ9Y-T_1cHp6BxuA&usqp=CAc" },
      { name: "Orange Titanium", hex: "#de751a", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLS8989krk5jhhNA2mT8OCqqP5e7ntYrVks7OR8mCRnQ&s" },
      { name: "White Titanium", hex: "#f2f1ed", image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRkKOHEy0gOqxpoWYHe3BHRV0eymFwcIcUz2UFHj0ebBf-xDe14l_iSAqwGY325RQdXmr4hvoj3JzNjRHFuRNRW8uBplc-yTlmbZdM3ZbFaR2LGjgq9nlB9QfZLPIcyKvWZJ4iOMFk&usqp=CAc" },
      { name: "Black Titanium", hex: "#2b2b2e", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbqY46F7lO4oYrNFM0AArtH_zxSOamZV6YYNc3-lGv9w&s=10" }
    ],
    storages: [
      { label: "128GB", add: 0 },
      { label: "256GB", add: 100 },
      { label: "512GB", add: 300 },
      { label: "1TB", add: 500 }
    ]
  },
  {
    id: "iphone-17",
    category: "iphone",
    name: "iPhone 17",
    tagline: "6.1-inch OLED · A19 Chip · Dual Camera",
    description: "Kundalik vazifalar, yorqin ranglar va uzoq avtonom ishlashga ega zamonaviy iPhone 17.",
    basePrice: 799,
    defaultImage: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-16-finish-select-202409-6-1inch-ultramarine?wid=940&hei=1112&fmt=png-alpha&.v=1725624581996",
    colors: [
      { name: "Ultramarine", hex: "#5c7cfa", image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSDa9SF3OYgMrm6HXr8pkBfyMM6cIGISGX7lhXLQwFdIt_GQilUMJVYTxfJ1EvYKBjl4cykQkxsijaivT6pDgmOf04XHrzD8c3floMgodwXbDUSJtMO053o_DIFvBc1iB0h6kFxztTLzw&usqp=CAc" },
      { name: "Teal", hex: "#38989e", image: "https://cdn.asaxiy.uz/asaxiy-content/product/items/desktop/bdae8cb8154b27714079f858ee6f71f32024092716351119885baoIMOHBwF.webp" },
      { name: "Pink", hex: "#f3a8c7", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiZYl60u-RV8giLbWj9JZQ1t0yI796Uqwk5KNeXoooEw&s=10" },
      { name: "Black", hex: "#222225", image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSnG2cvk9UHxizXPvRS04Nuk0gQkZnBN15kSFrvQHW-Yy3D-rieMN9q_cRAbHYlEN8rCgDoVWvzLz1EFgN38czKHaFJ5FRhzWgk7LfB5cA4QpMrHapE4lMA4xcgTB770slcjRvk1ZU&usqp=CAc" }
    ],
    storages: [
      { label: "128GB", add: 0 },
      { label: "256GB", add: 100 },
      { label: "512GB", add: 300 }
    ]
  },
  {
    id: "iphone-16-pro-max",
    category: "iphone",
    name: "iPhone 16 Pro Max",
    tagline: "6.9-inch Display · A18 Pro · 4K 120fps Dolby Vision",
    description: "Katta 6.9 dyuymli displey, A18 Pro chip va kino darajasidagi 4K 120 kadr/s video yozuv.",
    basePrice: 1099,
    defaultImage: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-16-pro-finish-select-202409-6-9inch-deserttitanium?wid=940&hei=1112&fmt=png-alpha&.v=1725567334538",
    colors: [
      { name: "Desert Titanium", hex: "#bfa288", image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTotZ6RXx76wsBqPP1bUNxzX7YkT8muz4pnljVig-f-PGM0pllaz3BhjohjNIhKO0YdBf4j6ynHAjLdmZPFkIiJIvRdX8AoDumpSWLHjhx3CKdXMoFFWApYsDdIMtCdoxZepbo2AdQ&usqp=CAc" },
      { name: "Natural Titanium", hex: "#9c9790", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFb4GKa0xxY3yR2fONAZKH2z9-8fGB38d_cmJ1RZr5uQ&s=10" },
      { name: "White Titanium", hex: "#f2f1ed", image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTcley8C07jOA_GoITt7jtDc9eJzvpRIyXmlhBKzlKVYUHuETP58YhTXPSiwKz828ty7lUKJAtZu1ZlMx6gAbBxJHSpONMmMm3ayTnzqLXl0z5cMuoHMjeFxhNhCh8zhblSPnv2Csg&usqp=CAc" },
      { name: "Black Titanium", hex: "#2b2b2e", image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRhCbfvc4NtX3C09ZsXKp2grgPPR8EUAwT1LKdvRTxLjcQcoaPmo-F0slL-84dqr1-bRxtVrglhUQCuInuMFppz8p3klLDGP62X6ltiXw1JyPa0dHQjO94uaFgGQ01j-bM6qCG3aQ&usqp=CAc" }
    ],
    storages: [
      { label: "256GB", add: 0 },
      { label: "512GB", add: 200 },
      { label: "1TB", add: 400 }
    ]
  },
  {
    id: "iphone-16-pro",
    category: "iphone",
    name: "iPhone 16 Pro",
    tagline: "6.3-inch Display · A18 Pro · Titanium",
    description: "Yengil titan ramka, A18 Pro unumdorligi va ilg‘or studiya sifatli mikrofonlar.",
    basePrice: 899,
    defaultImage: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-16-pro-finish-select-202409-6-3inch-blacktitanium?wid=940&hei=1112&fmt=png-alpha&.v=1725567334467",
    colors: [
      { name: "Black Titanium", hex: "#2b2b2e", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS35A_nCyCQSNSFT1noRvS0FijmOdTzRQ1YJWxI1SG7eg&s=10" },
      { name: "Natural Titanium", hex: "#9c9790", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSntYt9yosPMw1C0aLKuD_E_rSYJOTqhb2ersMoWfGeMQ&s=10" },
      { name: "Desert Titanium", hex: "#bfa288", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-7voImmmlfcqmdqETKEf76KH9vz_Y0_Vrpdoqrnm4Mw&s=10" },
      { name: "White Titanium", hex: "#f2f1ed", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGm1XECTTLhRMqhqGUcR7EW5M-6U-hOOM0hpOUaB-7Xg&s=10" }
    ],
    storages: [
      { label: "128GB", add: 0 },
      { label: "256GB", add: 100 },
      { label: "512GB", add: 300 },
      { label: "1TB", add: 500 }
    ]
  },
  {
    id: "iphone-16",
    category: "iphone",
    name: "iPhone 16",
    tagline: "6.1-inch Display · A18 Chip · Action Button",
    description: "A18 chip, Action tugmasi va yorqin ranglar palitrasiga ega universal iPhone 16.",
    basePrice: 699,
    defaultImage: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-16-finish-select-202409-6-1inch-teal?wid=940&hei=1112&fmt=png-alpha&.v=1725624581987",
    colors: [
      { name: "Teal", hex: "#38989e", image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTeoQpwyYS6CrDxhBy9K-iN9QdjD71IVG-AcHU71o0paf_wfQBJLNuZgIfNaUAOxgoTeK6jK0I046hDw6zPa_HxN92G0Bih7joUP2Gu37MlXwlOBCrPOsYeQCG71KsOgJtL05kY_A4h5Q&usqp=CAc" },
      { name: "Ultramarine", hex: "#5c7cfa", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYTFMPAfpaBN1k6lkyz_5lmWxGshwjiSu_EGqqbyJNpA&s=10" },
      { name: "Pink", hex: "#f3a8c7", image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRXaMJFqIhrMIy5HZYKjzP3Drn_b0RYcsIxUX1Wxde1ZWc07bWnlRjOFWfRcbhbdR1rJxuxrfVhj9t7GV5Eb704PzU3bSp_eyrQ3sTI7tZdCHRjJMQfZ261JmwkzgZYjvBF3ZpXS6M&usqp=CAc" },
      { name: "Black", hex: "#222225", image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSPNlpHZ4fRiLof3aDMgV92KnvGn0tOV9grJk_fTCPwQ7uLQ3PBokvScadHYJt_K6sLhJ7NSIWgUMjemoiga68rJKI3nERLum4vAO_Fh62uO0saUc0eD3_cdzeTJ-uwvdMKZhzuiQ&usqp=CAc" }
    ],
    storages: [
      { label: "128GB", add: 0 },
      { label: "256GB", add: 100 },
      { label: "512GB", add: 300 }
    ]
  },
  {
    id: "iphone-15-pro-max",
    category: "iphone",
    name: "iPhone 15 Pro Max",
    tagline: "6.7-inch Display · A17 Pro · USB-C",
    description: "Titan dizayn, A17 Pro protsessori va 5x tetraprism telefoto kameraga ega flagman.",
    basePrice: 999,
    defaultImage: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-max-naturaltitanium-select?wid=940&hei=1112&fmt=png-alpha&.v=1692895423371",
    colors: [
      { name: "Natural Titanium", hex: "#9c9790", image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-max-naturaltitanium-select?wid=940&hei=1112&fmt=png-alpha&.v=1692895423371" },
      { name: "Blue Titanium", hex: "#3d4e61", image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-max-bluetitanium-select?wid=940&hei=1112&fmt=png-alpha&.v=1692895423225" },
      { name: "Black Titanium", hex: "#2b2b2e", image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-max-blacktitanium-select?wid=940&hei=1112&fmt=png-alpha&.v=1692895423200" }
    ],
    storages: [
      { label: "256GB", add: 0 },
      { label: "512GB", add: 200 },
      { label: "1TB", add: 400 }
    ]
  },
  {
    id: "iphone-15",
    category: "iphone",
    name: "iPhone 15",
    tagline: "6.1-inch Display · Dynamic Island · A16 Bionic",
    description: "Dynamic Island, 48MP asosiy kamera va USB-C portiga ega ishonchli model.",
    basePrice: 599,
    defaultImage: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-blue-select-202309?wid=940&hei=1112&fmt=png-alpha&.v=1692819175526",
    colors: [
      { name: "Blue", hex: "#b8cde0", image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-blue-select-202309?wid=940&hei=1112&fmt=png-alpha&.v=1692819175526" },
      { name: "Pink", hex: "#f2c6cf", image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pink-select-202309?wid=940&hei=1112&fmt=png-alpha&.v=1692819175658" },
      { name: "Midnight", hex: "#232629", image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-black-select-202309?wid=940&hei=1112&fmt=png-alpha&.v=1692819175456" }
    ],
    storages: [
      { label: "128GB", add: 0 },
      { label: "256GB", add: 100 },
      { label: "512GB", add: 300 }
    ]
  },
  {
    id: "iphone-14",
    category: "iphone",
    name: "iPhone 14",
    tagline: "6.1-inch Super Retina XDR · A15 Bionic",
    description: "Ajoyib avtonomlik, Crash Detection va kundalik qulaylikka ega klassik iPhone 14.",
    basePrice: 499,
    defaultImage: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-midnight-select-202209?wid=940&hei=1112&fmt=png-alpha&.v=1661027788687",
    colors: [
      { name: "Midnight", hex: "#232629", image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-midnight-select-202209?wid=940&hei=1112&fmt=png-alpha&.v=1661027788687" },
      { name: "Starlight", hex: "#f0ece1", image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-starlight-select-202209?wid=940&hei=1112&fmt=png-alpha&.v=1661027789079" },
      { name: "Purple", hex: "#cfc6dc", image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-purple-select-202209?wid=940&hei=1112&fmt=png-alpha&.v=1661027788919" }
    ],
    storages: [
      { label: "128GB", add: 0 },
      { label: "256GB", add: 100 },
      { label: "512GB", add: 300 }
    ]
  },

  // ==================== MACBOOK MODELS ====================
  {
    id: "macbook-air-13",
    category: "mac",
    name: "MacBook Air 13-inch",
    tagline: "13.6-inch Liquid Retina · Fanless silent design",
    description: "O‘ta yengil va shovqinsiz noutbuk — o‘qish, dasturlash va kundalik ijod uchun ideal.",
    basePrice: 999,
    defaultImage: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mba13-midnight-select-202402?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1708367688034",
    colors: [
      { name: "Midnight", hex: "#222933", image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mba13-midnight-select-202402?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1708367688034" },
      { name: "Starlight", hex: "#e5dec9", image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mba13-starlight-select-202402?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1708367688031" },
      { name: "Space Gray", hex: "#7d8085", image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mba13-spacegray-select-202402?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1708367688037" },
      { name: "Silver", hex: "#e2e3e5", image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mba13-silver-select-202402?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1708367688035" }
    ],
    chips: [
      { label: "M4", add: 0 },
      { label: "M5", add: 200 }
    ],
    rams: [
      { label: "8GB", add: 0 },
      { label: "16GB", add: 150 },
      { label: "24GB", add: 350 }
    ],
    ssds: [
      { label: "256GB", add: 0 },
      { label: "512GB", add: 200 },
      { label: "1TB", add: 400 },
      { label: "2TB", add: 800 }
    ]
  },
  {
    id: "macbook-air-15",
    category: "mac",
    name: "MacBook Air 15-inch",
    tagline: "15.3-inch Liquid Retina · Six-speaker sound",
    description: "Keng 15 dyuymli ekran, boy audio tizimi va 18 soatgacha batareya quvvati.",
    basePrice: 1299,
    defaultImage: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mba15-starlight-select-202306?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1684518479433",
    colors: [
      { name: "Starlight", hex: "#e5dec9", image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mba15-starlight-select-202306?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1684518479433" },
      { name: "Midnight", hex: "#222933", image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mba15-midnight-select-202306?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1684518479434" },
      { name: "Silver", hex: "#e2e3e5", image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mba15-silver-select-202306?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1684518479436" }
    ],
    chips: [
      { label: "M4", add: 0 },
      { label: "M5", add: 200 }
    ],
    rams: [
      { label: "16GB", add: 0 },
      { label: "24GB", add: 200 },
      { label: "32GB", add: 400 }
    ],
    ssds: [
      { label: "256GB", add: 0 },
      { label: "512GB", add: 200 },
      { label: "1TB", add: 400 },
      { label: "2TB", add: 800 }
    ]
  },
  {
    id: "macbook-pro-14",
    category: "mac",
    name: "MacBook Pro 14-inch",
    tagline: "14.2-inch Liquid Retina XDR · Thunderbolt ports",
    description: "Og‘ir kodlash, 3D render va rang korreksiyasi uchun yaratilgan professional 14 dyuymli MacBook Pro.",
    basePrice: 1599,
    defaultImage: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp14-spaceblack-select-202310?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1697230830200",
    colors: [
      { name: "Space Black", hex: "#1d1d20", image: "ddada0ec-9c67-4bd9-88a1-3753247424e7.png" },
      { name: "Silver", hex: "#e2e3e5", image: "c23caf3e-1e4e-4fab-a589-6881998c3239.png" }
    ],
    chips: [
      { label: "M4", add: 0 },
      { label: "M4 Pro", add: 400 },
      { label: "M5", add: 550 }
    ],
    rams: [
      { label: "16GB", add: 0 },
      { label: "24GB", add: 200 },
      { label: "32GB", add: 400 },
      { label: "48GB", add: 800 }
    ],
    ssds: [
      { label: "512GB", add: 0 },
      { label: "1TB", add: 200 },
      { label: "2TB", add: 600 }
    ]
  },
  {
    id: "macbook-pro-16",
    category: "mac",
    name: "MacBook Pro 16-inch",
    tagline: "16.2-inch Liquid Retina XDR · 24-hour battery",
    description: "Maksimal ish maydoni, 24 soatgacha avtonomlik va studiya darajasidagi unumdorlik.",
    basePrice: 2499,
    defaultImage: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp16-silver-select-202310?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1697230830262",
    colors: [
      { name: "Silver", hex: "#e2e3e5", image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp16-silver-select-202310?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1697230830262" },
      { name: "Space Black", hex: "#1d1d20", image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp16-spaceblack-select-202310?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1697230830270" }
    ],
    chips: [
      { label: "M4 Pro", add: 0 },
      { label: "M5", add: 300 },
      { label: "M5 Max", add: 900 }
    ],
    rams: [
      { label: "24GB", add: 0 },
      { label: "32GB", add: 200 },
      { label: "48GB", add: 600 }
    ],
    ssds: [
      { label: "512GB", add: 0 },
      { label: "1TB", add: 200 },
      { label: "2TB", add: 600 }
    ]
  },

  // ==================== IPAD MODELS ====================
  {
    id: "ipad-pro",
    category: "ipad",
    name: "iPad Pro",
    tagline: "13-inch / 11-inch Ultra Retina XDR · M4 Chip",
    description: "Eng yupqa iPad dizayni, tandem OLED displey va Apple Pencil Pro qo‘llab-quvvatlovi.",
    basePrice: 999,
    defaultImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYiDJIFbojllmsVqBqiSN22WRNlHh7pOvE_0mfi6y2CA&s=10",
    colors: [
      { name: "Space Black", hex: "#242426", image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcT40ipREhpNEoqvYZxUZEvkX4XaTl34Nu3T-I4oikVUzmYVj1tpU25xg2nklrKK8T7GJ3XeX7-HJaGZ-dtvkUoAAt1wyAEAVRKkax2Z-TlLVEDtdJySjRoNs6kL63ecOQh3L3Xs4Yc&usqp=CAc" },
      { name: "Silver", hex: "#e3e4e6", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXO8JsFZhDfz3qIjyW_X6v99wPQnfUcIARjHt_odtNGQ&s" }
    ],
    screenSizes: [
      { label: "11-inch", add: 0 },
      { label: "13-inch", add: 300 }
    ],
    storages: [
      { label: "256GB", add: 0 },
      { label: "512GB", add: 200 },
      { label: "1TB", add: 600 },
      { label: "2TB", add: 1000 }
    ],
    connectivity: [
      { label: "Wi-Fi", add: 0 },
      { label: "Wi-Fi + Cellular", add: 200 }
    ]
  },
  {
    id: "ipad-air",
    category: "ipad",
    name: "iPad Air",
    tagline: "11-inch / 13-inch Liquid Retina · M2 Chip",
    description: "Yengil va kuchli planshet — ijod, o‘qish va ko‘ngilochar kontent uchun.",
    basePrice: 599,
    defaultImage: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-air-finish-select-gallery-202405-11inch-blue-wifi?wid=940&hei=1112&fmt=png-alpha&.v=1713823426468",
    colors: [
      { name: "Blue", hex: "#8fb3d9", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSteEKpAvJ1R-qD4DsvTKbgI3OGZ6YEPvZNmMu83b5-tg&s=10" },
      { name: "Purple", hex: "#c3bdd6", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr8m92QzrPeKLOQYoZnOMOvwaYclzvr-pKDDnmpqKafw&s=10" },
      { name: "Starlight", hex: "#e5dec9", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvFlJm86SaMDaQao3GkHTLlEJoEJ3GnouD6h1bkv379w&s=10" },
      { name: "Space Gray", hex: "#7d8085", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyuundX747naPH29sF2ZP4sGN_n-9L0bMrgIsCXNcgHg&s=10" }
    ],
    screenSizes: [
      { label: "11-inch", add: 0 },
      { label: "13-inch", add: 200 }
    ],
    storages: [
      { label: "128GB", add: 0 },
      { label: "256GB", add: 100 },
      { label: "512GB", add: 300 },
      { label: "1TB", add: 500 }
    ],
    connectivity: [
      { label: "Wi-Fi", add: 0 },
      { label: "Wi-Fi + Cellular", add: 150 }
    ]
  },
  {
    id: "ipad-standard",
    category: "ipad",
    name: "iPad",
    tagline: "10.9-inch Liquid Retina · Fast & Versatile",
    description: "Har kunlik ishlar, video qo‘ng‘iroqlar va qaydlar uchun qulay narxdagi iPad.",
    basePrice: 349,
    defaultImage: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-10th-gen-finish-blue-202210?wid=940&hei=1112&fmt=png-alpha&.v=1664477161220",
    colors: [
      { name: "Blue", hex: "#6fa3d2", image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQRHCWoGNa_k98GL5Xkz2rTUZrs7670RyB47znaM27m1JK6NryuIeDLLEHhngJcrgi_zTvz6RKBbqv3fZ3JL9eX7nAR5_e52udat9DPvrhNyYhkhNizrPUMNPJ4mGd_gOloKAkHleI&usqp=CAc" },
      { name: "Pink", hex: "#eb8aa3", image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcR64Iu59uDbI7klu2LFgUOE3BQfwSdmrr__Upoy3j6hlWbPTGVJd0_q2MHdLafxm3mLBtUn25FkEFKGQx41blBRu2b3QK0V8H5p43HMON2WgSf51r8gDE8ETBPEcr-2PhYY0Xshsw&usqp=CAc" },
      { name: "Yellow", hex: "#f5d76e", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh9B4jWsZgCj4LvCp1x4bnJJcUZakjWonCxqPNaEe9-w&s=10" },
      { name: "Silver", hex: "#e3e4e6", image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSsEJ_1O_SdiJcPS1y-AfbNePSwhWqmDuAQ16JCfcQg33pgQtmaDYt-g2f9DvLB2BLqnC74SKJ1bxY9X2S5vXPX8Hj3evjEwRzpO7zsC69T-Cd0TarplPjTbCbtgN40FA5KWdYgKyin&usqp=CAc" }
    ],
    screenSizes: [
      { label: "10.9-inch", add: 0 }
    ],
    storages: [
      { label: "128GB", add: 0 },
      { label: "256GB", add: 100 }
    ],
    connectivity: [
      { label: "Wi-Fi", add: 0 },
      { label: "Wi-Fi + Cellular", add: 150 }
    ]
  },
  {
    id: "ipad-mini",
    category: "ipad",
    name: "iPad mini",
    tagline: "8.3-inch Liquid Retina · Pocket-sized power",
    description: "Bir qo‘lda olib yurishga mos ixcham 8.3 dyuymli planshet, Apple Pencil qo‘llab-quvvatlovi bilan.",
    basePrice: 499,
    defaultImage: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-mini-finish-select-gallery-202410-blue-wifi?wid=940&hei=1112&fmt=png-alpha&.v=1728403534473",
    colors: [
      { name: "Blue", hex: "#7ba7d4", image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQRHCWoGNa_k98GL5Xkz2rTUZrs7670RyB47znaM27m1JK6NryuIeDLLEHhngJcrgi_zTvz6RKBbqv3fZ3JL9eX7nAR5_e52udat9DPvrhNyYhkhNizrPUMNPJ4mGd_gOloKAkHleI&usqp=CAc" },
      { name: "Purple", hex: "#c2b8d6", image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSkBzzU-69LW1MXT52XRE_uX8JhsEOL1mh_Uefzfuue1CNRXe41OOU_-qljZjF_62GVycIjznTfbsRwcIjffo0Drc1mziP3Vco_8otw49SBqe-_iDo2xv6ySHwvWGbT1Tt71GBoNA&usqp=CAc" },
      { name: "Starlight", hex: "#e5dec9", image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTVqXln6og8qXjHMupCg2irbHStYF7cCybMftTCbFcXLvTFoik-L5_BC07qMdxihlEGuJWyiCOtQozId7lDkc2GYQkgRicc0PKZE5InMIZIZ2a4ioUYIbSCbP-QfU47_h19Ztt2xA&usqp=CAc" }
    ],
    screenSizes: [
      { label: "8.3-inch", add: 0 }
    ],
    storages: [
      { label: "128GB", add: 0 },
      { label: "256GB", add: 100 },
      { label: "512GB", add: 300 }
    ],
    connectivity: [
      { label: "Wi-Fi", add: 0 },
      { label: "Wi-Fi + Cellular", add: 150 }
    ]
  },

  // ==================== APPLE WATCH MODELS ====================
  {
    id: "watch-ultra",
    category: "watch",
    name: "Apple Watch Ultra",
    tagline: "49mm Rugged Titanium · Precision Dual-Frequency GPS",
    description: "Ekstremal sport, sho‘ng‘ish va uzoq ekspeditsiyalar uchun mustahkam titan korpusli soat.",
    basePrice: 799,
    defaultImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfnbjIn6QV9icKUtZ-BhLNXQYFcPXBzUPx2EFb2xgLlw&s=10",
    colors: [
      { name: "Natural Titanium", hex: "#9c9790", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3sfCCb_hiS-4P7Ma1MrA97Bl4lFrUa9524k1d0aADuA&s=10" },
      { name: "Black Titanium", hex: "#222225", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ41b6kdLdpSwwvUmxXEGDXCZkhnWOJE4Evd71GqR-LHg&s=10" }
    ],
    sizes: [
      { label: "49mm", add: 0 }
    ],
    bands: [
      { label: "Alpine Loop", add: 0 },
      { label: "Ocean Band", add: 0 },
      { label: "Milanese Loop", add: 100 }
    ],
    connectivity: [
      { label: "GPS + Cellular", add: 0 }
    ]
  },
  {
    id: "watch-series",
    category: "watch",
    name: "Apple Watch Series",
    tagline: "Always-On Retina Display · ECG & Blood Oxygen",
    description: "Salomatlik monitoringi, tezkor quvvatlash va nafis korpusli kundalik aqlli soat.",
    basePrice: 399,
    defaultImage: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/watch-s10-jetblack-sportband-black-202409?wid=940&hei=1112&fmt=png-alpha&.v=1725568341578",
    colors: [
      { name: "Jet Black", hex: "#1b1b1e", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjrr0TT5GJoA1McIwofwnYBZrdmQK_P5zXeUFQODjHew&s=10" },
      { name: "Rose Gold", hex: "#e8b4a2", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2UF0S3TULiAmtvm4SqkcAIY6az3S-gA_ngbtb5YOU1A&s=10" },
      { name: "Silver", hex: "#e2e3e5", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_NZMyLexiJBESqYwv8jD6P43_KVJLaW6xb-jjGdw1vQ&s=10" }
    ],
    sizes: [
      { label: "42mm", add: 0 },
      { label: "46mm", add: 30 }
    ],
    bands: [
      { label: "Sport Band", add: 0 },
      { label: "Sport Loop", add: 0 },
      { label: "Milanese Loop", add: 50 }
    ],
    connectivity: [
      { label: "GPS", add: 0 },
      { label: "GPS + Cellular", add: 100 }
    ]
  },
  {
    id: "watch-se",
    category: "watch",
    name: "Apple Watch SE",
    tagline: "Essential features · Crash Detection · Swimproof",
    description: "Asosiy salomatlik, fitnes va xavfsizlik funksiyalariga ega qulay Apple Watch.",
    basePrice: 249,
    defaultImage: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/watch-se-midnight-sportband-midnight-202209?wid=940&hei=1112&fmt=png-alpha&.v=1661466014658",
    colors: [
      { name: "Midnight", hex: "#232629", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvxRo6Wk6fgSdHBSOeHue3K5zqv_oUqZWyGTcsEIw93A&s=10" },
      { name: "Starlight", hex: "#e5dec9", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnNKkL9mvvxXCiNSO0Ajv2-n01DlUbAEbkSKDGtzVlUg&s=10" },
      { name: "Silver", hex: "#e2e3e5", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjONrxY26XHdm3XhIhkXcCmKdimVRgE96gJVIq5QF3vw&s=10" }
    ],
    sizes: [
      { label: "40mm", add: 0 },
      { label: "44mm", add: 30 }
    ],
    bands: [
      { label: "Sport Band", add: 0 },
      { label: "Sport Loop", add: 0 }
    ],
    connectivity: [
      { label: "GPS", add: 0 },
      { label: "GPS + Cellular", add: 50 }
    ]
  },

  // ==================== AIRPODS MODELS ====================
  {
    id: "airpods-4",
    category: "airpods",
    name: "AirPods 4",
    tagline: "Personalized Spatial Audio · USB-C Case",
    description: "Qulay anatomik shakl, H2 chip va 30 soatgacha umumiy ishlash vaqti.",
    basePrice: 129,
    defaultImage: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/airpods-4-select-202409?wid=940&hei=1112&fmt=png-alpha&.v=1725502639798",
    colors: [
      { name: "White", hex: "#f7f7f9", image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/airpods-4-select-202409?wid=940&hei=1112&fmt=png-alpha&.v=1725502639798" }
    ]
  },
  {
    id: "airpods-4-anc",
    category: "airpods",
    name: "AirPods 4 with ANC",
    tagline: "Active Noise Cancellation · Transparency · Wireless Charging",
    description: "Faol shovqinni bostirish (ANC), Adaptive Audio va simsiz quvvatlanuvchi g‘ilof.",
    basePrice: 179,
    defaultImage: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/airpods-4-anc-select-202409?wid=940&hei=1112&fmt=png-alpha&.v=1725502639798",
    colors: [
      { name: "White", hex: "#f7f7f9", image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/airpods-4-anc-select-202409?wid=940&hei=1112&fmt=png-alpha&.v=1725502639798" }
    ]
  },
  {
    id: "airpods-pro",
    category: "airpods",
    name: "AirPods Pro",
    tagline: "2x Active Noise Cancellation · Adaptive EQ · MagSafe",
    description: "Ikki barobar kuchli shovqinni bostirish, Lossless Audio va MagSafe USB-C g‘ilof.",
    basePrice: 249,
    defaultImage: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MTJV3?wid=940&hei=1112&fmt=png-alpha&.v=1694014871985",
    colors: [
      { name: "White", hex: "#f7f7f9", image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MTJV3?wid=940&hei=1112&fmt=png-alpha&.v=1694014871985" }
    ]
  },
  {
    id: "airpods-max",
    category: "airpods",
    name: "AirPods Max",
    tagline: "Over-Ear Pro ANC · Anodized Aluminum · USB-C",
    description: "Studiyaviy akustika, maxsus dinamik drayverlar va yumshoq akustik yostiqchalar.",
    basePrice: 549,
    defaultImage: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/airpods-max-select-202409-midnight?wid=940&hei=1112&fmt=png-alpha&.v=1724927451203",
    colors: [
      { name: "Midnight", hex: "#22262c", image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/airpods-max-select-202409-midnight?wid=940&hei=1112&fmt=png-alpha&.v=1724927451203" },
      { name: "Starlight", hex: "#e5dec9", image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/airpods-max-select-202409-starlight?wid=940&hei=1112&fmt=png-alpha&.v=1724927451200" },
      { name: "Blue", hex: "#7699ba", image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/airpods-max-select-202409-blue?wid=940&hei=1112&fmt=png-alpha&.v=1724927451197" },
      { name: "Purple", hex: "#b8aecb", image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/airpods-max-select-202409-purple?wid=940&hei=1112&fmt=png-alpha&.v=1724927451202" },
      { name: "Orange", hex: "#e88b5a", image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/airpods-max-select-202409-orange?wid=940&hei=1112&fmt=png-alpha&.v=1724927451201" }
    ]
  },

  // ==================== ACCESSORIES MODELS ====================
  {
    id: "apple-pencil",
    category: "accessories",
    name: "Apple Pencil",
    tagline: "Pixel-perfect precision · Tilt & pressure sensitivity",
    description: "Chizish, eskiz yaratish va qaydlar yozish uchun yuqori aniqlikdagi stilus.",
    basePrice: 129,
    defaultImage: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MX2D3?wid=940&hei=1112&fmt=png-alpha&.v=1713841450205",
    colors: [
      { name: "White", hex: "#f7f7f9", image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MX2D3?wid=940&hei=1112&fmt=png-alpha&.v=1713841450205" }
    ]
  },
  {
    id: "magic-mouse",
    category: "accessories",
    name: "Magic Mouse",
    tagline: "Multi-Touch surface · Rechargeable USB-C",
    description: "Simsiz Multi-Touch sichqoncha — silliq skroll va imo-ishoralar bilan.",
    basePrice: 79,
    defaultImage: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MXK53?wid=940&hei=1112&fmt=png-alpha&.v=1730134141893",
    colors: [
      { name: "White", hex: "#f7f7f9", image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MXK53?wid=940&hei=1112&fmt=png-alpha&.v=1730134141893" },
      { name: "Black", hex: "#222225", image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MMMQ3?wid=940&hei=1112&fmt=png-alpha&.v=1664481401746" }
    ]
  },
  {
    id: "magic-keyboard",
    category: "accessories",
    name: "Magic Keyboard",
    tagline: "Comfortable key travel · USB-C wireless",
    description: "Yumshoq va aniq bosiladigan tugmalarga ega ixcham simsiz klaviatura.",
    basePrice: 99,
    defaultImage: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MXK83?wid=940&hei=1112&fmt=png-alpha&.v=1730134141880",
    colors: [
      { name: "White", hex: "#f7f7f9", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTx7ulLoHWsfZo7K6QX6TmBa-YoOKKUNmye8cIFz9xByQ&s" },
      { name: "Black", hex: "#222225", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqe7jJG_ef6vVJAHViGjnsLuPql6HgjeOc26-dxjvoNQ&s=10" }
    ]
  },
  {
    id: "magic-trackpad",
    category: "accessories",
    name: "Magic Trackpad",
    tagline: "Force Touch · Wide glass surface · USB-C",
    description: "Keng shisha yuzali va Force Touch sensorli simsiz trekpad.",
    basePrice: 129,
    defaultImage: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MXK93?wid=940&hei=1112&fmt=png-alpha&.v=1730134141884",
    colors: [
      { name: "White", hex: "#f7f7f9", image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MXK93?wid=940&hei=1112&fmt=png-alpha&.v=1730134141884" },
      { name: "Black", hex: "#222225", image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MMMP3?wid=940&hei=1112&fmt=png-alpha&.v=1664481401749" }
    ]
  },
  {
    id: "magsafe-charger",
    category: "accessories",
    name: "MagSafe Charger",
    tagline: "Fast magnetic wireless charging up to 25W",
    description: "Magnit tekislash va tez simsiz quvvatlash uchun original MagSafe qurilmasi.",
    basePrice: 49,
    defaultImage: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MX6X3?wid=940&hei=1112&fmt=png-alpha&.v=1726692761383",
    colors: [
      { name: "Silver / White", hex: "#e5e5ea", image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MX6X3?wid=940&hei=1112&fmt=png-alpha&.v=1726692761383" }
    ]
  },
  {
    id: "usb-c-adapter",
    category: "accessories",
    name: "USB-C Adapter",
    tagline: "35W Dual USB-C Compact Power Adapter",
    description: "Ikki qurilmani bir vaqtda tez quvvatlash uchun ixcham USB-C adapter.",
    basePrice: 59,
    defaultImage: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MNWP3?wid=940&hei=1112&fmt=png-alpha&.v=1655409056758",
    colors: [
      { name: "White", hex: "#f7f7f9", image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MNWP3?wid=940&hei=1112&fmt=png-alpha&.v=1655409056758" }
    ]
  },
  {
    id: "iphone-case",
    category: "accessories",
    name: "iPhone Case",
    tagline: "Silicone Case with MagSafe · Soft microfiber lining",
    description: "MagSafe mos keluvchi, yumshoq mikrofiber ichki qoplamali silikon g‘ilof.",
    basePrice: 49,
    defaultImage: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MYY63?wid=940&hei=1112&fmt=png-alpha&.v=1725568621403",
    colors: [
      { name: "Ultramarine", hex: "#5c7cfa", image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MYY63?wid=940&hei=1112&fmt=png-alpha&.v=1725568621403" },
      { name: "Yellow", hex: "#fefe04", image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MYY73?wid=940&hei=1112&fmt=png-alpha&.v=1725568621417" },
      { name: "Plum", hex: "#aa1ca8", image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MYY43?wid=940&hei=1112&fmt=png-alpha&.v=1725568621394" }
    ]
  }
];

const CATEGORIES_META = [
  { id: "iphone", label: "iPhone", target: "#iphone-section", img: PRODUCTS_DATA[0].defaultImage },
  { id: "mac", label: "MacBook", target: "#mac-section", img: PRODUCTS_DATA[9].defaultImage },
  { id: "ipad", label: "iPad", target: "#ipad-section", img: PRODUCTS_DATA[13].defaultImage },
  { id: "watch", label: "Apple Watch", target: "#watch-section", img: PRODUCTS_DATA[17].defaultImage },
  { id: "airpods", label: "AirPods", target: "#airpods-section", img: PRODUCTS_DATA[20].defaultImage },
  { id: "accessories", label: "Accessories", target: "#accessories-section", img: PRODUCTS_DATA[24].defaultImage }
];

// ==========================================================================
// STATE & LOCALSTORAGE
// ==========================================================================
const STORAGE_KEYS = {
  CART: "apple_store_cart_v1",
  USER: "apple_store_user_v1"
};

// Har bir mahsulotning joriy tanlangan variantlari
const productSelections = {};

function initSelections() {
  PRODUCTS_DATA.forEach((p) => {
    productSelections[p.id] = {
      colorIdx: 0,
      storageIdx: 0,
      ramIdx: 0,
      chipIdx: 0,
      sizeIdx: 0,
      screenIdx: 0,
      bandIdx: 0,
      connIdx: 0
    };
  });
}

function loadCart() {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.CART);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function saveCart(cart) {
  try {
    localStorage.setItem(STORAGE_KEYS.CART, JSON.stringify(cart));
  } catch {
    // ignore storage quota errors
  }
}

function loadUser() {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.USER);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

function saveUser(user) {
  try {
    if (user) localStorage.setItem(STORAGE_KEYS.USER, JSON.stringify(user));
    else localStorage.removeItem(STORAGE_KEYS.USER);
  } catch {
    // ignore
  }
}

let cart = loadCart();
let currentUser = loadUser();

// ==========================================================================
// PRICE & VARIANT HELPERS
// ==========================================================================
function formatUSD(amount) {
  return "$" + Number(amount).toLocaleString("en-US");
}

function calculatePrice(product, sel) {
  let total = product.basePrice;
  if (product.storages && product.storages[sel.storageIdx]) total += product.storages[sel.storageIdx].add;
  if (product.rams && product.rams[sel.ramIdx]) total += product.rams[sel.ramIdx].add;
  if (product.chips && product.chips[sel.chipIdx]) total += product.chips[sel.chipIdx].add;
  if (product.sizes && product.sizes[sel.sizeIdx]) total += product.sizes[sel.sizeIdx].add;
  if (product.screenSizes && product.screenSizes[sel.screenIdx]) total += product.screenSizes[sel.screenIdx].add;
  if (product.bands && product.bands[sel.bandIdx]) total += product.bands[sel.bandIdx].add;
  if (product.connectivity && product.connectivity[sel.connIdx]) total += product.connectivity[sel.connIdx].add;
  return total;
}

function getSelectedImage(product, sel) {
  if (product.colors && product.colors[sel.colorIdx] && product.colors[sel.colorIdx].image) {
    return product.colors[sel.colorIdx].image;
  }
  return product.defaultImage;
}

function getSelectedSummary(product, sel) {
  const parts = [];
  if (product.colors && product.colors[sel.colorIdx]) parts.push(product.colors[sel.colorIdx].name);
  if (product.chips && product.chips[sel.chipIdx]) parts.push(product.chips[sel.chipIdx].label);
  if (product.rams && product.rams[sel.ramIdx]) parts.push(product.rams[sel.ramIdx].label + " RAM");
  if (product.ssds && product.ssds[sel.storageIdx]) parts.push(product.ssds[sel.storageIdx].label + " SSD");
  else if (product.storages && product.storages[sel.storageIdx]) parts.push(product.storages[sel.storageIdx].label);
  if (product.screenSizes && product.screenSizes[sel.screenIdx]) parts.push(product.screenSizes[sel.screenIdx].label);
  if (product.sizes && product.sizes[sel.sizeIdx]) parts.push(product.sizes[sel.sizeIdx].label);
  if (product.bands && product.bands[sel.bandIdx]) parts.push(product.bands[sel.bandIdx].label);
  if (product.connectivity && product.connectivity[sel.connIdx]) parts.push(product.connectivity[sel.connIdx].label);
  return parts.join(" · ");
}

function getVariantKey(productId, sel) {
  return [
    productId,
    sel.colorIdx,
    sel.storageIdx,
    sel.ramIdx,
    sel.chipIdx,
    sel.sizeIdx,
    sel.screenIdx,
    sel.bandIdx,
    sel.connIdx
  ].join("_");
}

// ==========================================================================
// TOAST NOTIFICATION
// ==========================================================================
function showToast(message) {
  const container = document.getElementById("toastContainer");
  if (!container) return;
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.textContent = message;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateY(8px)";
    toast.style.transition = "all 0.25s ease";
    setTimeout(() => toast.remove(), 260);
  }, 2600);
}

// ==========================================================================
// RENDERING CATEGORY STRIP & PRODUCT CARDS
// ==========================================================================
function renderCategoryStrip() {
  const grid = document.getElementById("categoryStripGrid");
  if (!grid) return;

  grid.innerHTML = CATEGORIES_META.map(
    (cat) => `
      <a href="${cat.target}" class="category-pill-card reveal-up" data-scroll-target="${cat.target}">
        <img src="${cat.img}" alt="${cat.label}" loading="lazy" />
        <span>${cat.label}</span>
      </a>
    `
  ).join("");
}

function renderOptionPills(productId, fieldKey, selKey, options, labelTitle) {
  if (!options || !options.length) return "";
  const activeIdx = productSelections[productId][selKey];
  const currentLabel = options[activeIdx] ? options[activeIdx].label : "";

  return `
    <div class="config-group">
      <div class="config-label">
        <span>${labelTitle}</span>
        <span class="selected-val" data-val-for="${productId}-${selKey}">${currentLabel}</span>
      </div>
      <div class="option-pills" role="group" aria-label="${labelTitle}">
        ${options
          .map(
            (opt, idx) => `
              <button
                type="button"
                class="option-pill ${idx === activeIdx ? "active" : ""}"
                data-product-id="${productId}"
                data-sel-key="${selKey}"
                data-opt-idx="${idx}"
              >
                ${opt.label}
              </button>
            `
          )
          .join("")}
      </div>
    </div>
  `;
}

function renderProductCard(product) {
  const sel = productSelections[product.id];
  const price = calculatePrice(product, sel);
  const imgSrc = getSelectedImage(product, sel);
  const activeColor = product.colors && product.colors[sel.colorIdx] ? product.colors[sel.colorIdx].name : "";

  const storageList = product.ssds || product.storages;
  const storageTitle = product.ssds ? "SSD" : "Xotira";

  return `
    <article class="product-card tilt-card reveal-up" data-product-id="${product.id}">
      <div>
        <div class="product-img-stage" data-open-details="${product.id}" title="Batafsil ma'lumot">
          <img
            id="img-${product.id}"
            src="${imgSrc}"
            alt="${product.name} — ${activeColor}"
            loading="lazy"
            onerror="this.src='${product.defaultImage}'"
          />
        </div>

        <div class="product-top-row" style="margin-top: 16px;">
          <h3 class="product-name" data-open-details="${product.id}">${product.name}</h3>
          <span class="product-price" id="price-${product.id}">${formatUSD(price)}</span>
        </div>
        <p class="product-spec-line">${product.tagline}</p>

        ${
          product.colors && product.colors.length
            ? `
              <div class="config-group">
                <div class="config-label">
                  <span>Rang</span>
                  <span class="selected-val" id="color-label-${product.id}">${activeColor}</span>
                </div>
                <div class="color-swatches">
                  ${product.colors
                    .map(
                      (c, idx) => `
                        <button
                          type="button"
                          class="color-swatch ${idx === sel.colorIdx ? "active" : ""}"
                          style="background-color: ${c.hex};"
                          title="${c.name}"
                          aria-label="${c.name}"
                          data-product-id="${product.id}"
                          data-color-idx="${idx}"
                        ></button>
                      `
                    )
                    .join("")}
                </div>
              </div>
            `
            : ""
        }

        ${renderOptionPills(product.id, "chips", "chipIdx", product.chips, "Chip")}
        ${renderOptionPills(product.id, "rams", "ramIdx", product.rams, "RAM")}
        ${renderOptionPills(product.id, "storages", "storageIdx", storageList, storageTitle)}
        ${renderOptionPills(product.id, "screenSizes", "screenIdx", product.screenSizes, "Ekran o'lchami")}
        ${renderOptionPills(product.id, "sizes", "sizeIdx", product.sizes, "Korpus o'lchami")}
        ${renderOptionPills(product.id, "bands", "bandIdx", product.bands, "Band / Strap")}
        ${renderOptionPills(product.id, "connectivity", "connIdx", product.connectivity, "Aloqa turi")}
      </div>

      <div class="product-actions">
        <button type="button" class="btn btn-primary btn-sm buy-now-btn" data-product-id="${product.id}">
          Buy Now
        </button>
        <button type="button" class="btn btn-secondary-soft btn-sm learn-more-btn" data-product-id="${product.id}">
          Learn More
        </button>
      </div>
    </article>
  `;
}

function updateProductCardUI(productId) {
  const product = PRODUCTS_DATA.find((p) => p.id === productId);
  if (!product) return;
  const sel = productSelections[productId];

  // 1. Narxni yangilash
  const priceEl = document.getElementById(`price-${productId}`);
  if (priceEl) priceEl.textContent = formatUSD(calculatePrice(product, sel));

  // 2. Rang tanlanganda faqat mahsulot rasmi va rang nomi yangilanadi (orqa fon o'zgarmaydi)
  const imgEl = document.getElementById(`img-${productId}`);
  const colorLabelEl = document.getElementById(`color-label-${productId}`);
  if (product.colors && product.colors[sel.colorIdx]) {
    if (colorLabelEl) colorLabelEl.textContent = product.colors[sel.colorIdx].name;
    if (imgEl) {
      imgEl.classList.add("swapping");
      const nextSrc = getSelectedImage(product, sel);
      setTimeout(() => {
        imgEl.src = nextSrc;
        imgEl.alt = `${product.name} — ${product.colors[sel.colorIdx].name}`;
        imgEl.classList.remove("swapping");
      }, 110);
    }
  }

  // Swatch active state
  const card = document.querySelector(`.product-card[data-product-id="${productId}"]`);
  if (card) {
    card.querySelectorAll(".color-swatch").forEach((btn) => {
      btn.classList.toggle("active", Number(btn.dataset.colorIdx) === sel.colorIdx);
    });

    card.querySelectorAll(".option-pill").forEach((pill) => {
      const key = pill.dataset.selKey;
      pill.classList.toggle("active", Number(pill.dataset.optIdx) === sel[key]);
    });

    card.querySelectorAll("[data-val-for]").forEach((valSpan) => {
      const [, key] = valSpan.dataset.valFor.split("-");
      const map = {
        chipIdx: product.chips,
        ramIdx: product.rams,
        storageIdx: product.ssds || product.storages,
        screenIdx: product.screenSizes,
        sizeIdx: product.sizes,
        bandIdx: product.bands,
        connIdx: product.connectivity
      };
      const arr = map[key];
      if (arr && arr[sel[key]]) {
        valSpan.textContent = arr[sel[key]].label;
      }
    });
  }
}

function renderAllSections() {
  const map = [
    { cat: "iphone", elId: "iphoneGrid" },
    { cat: "mac", elId: "macGrid" },
    { cat: "ipad", elId: "ipadGrid" },
    { cat: "watch", elId: "watchGrid" },
    { cat: "airpods", elId: "airpodsGrid" },
    { cat: "accessories", elId: "accessoriesGrid" }
  ];

  map.forEach(({ cat, elId }) => {
    const container = document.getElementById(elId);
    if (!container) return;
    const list = PRODUCTS_DATA.filter((p) => p.category === cat);
    container.innerHTML = list.map(renderProductCard).join("");
  });
}

// ==========================================================================
// 10. PRODUCT DETAILS MODAL
// ==========================================================================
let activeModalProductId = null;

function openProductModal(productId, openCartAfterBuy = false) {
  const product = PRODUCTS_DATA.find((p) => p.id === productId);
  if (!product) return;
  activeModalProductId = productId;

  const backdrop = document.getElementById("productModalBackdrop");
  const body = document.getElementById("productModalBody");
  if (!backdrop || !body) return;

  const sel = productSelections[productId];
  const price = calculatePrice(product, sel);
  const imgSrc = getSelectedImage(product, sel);
  const activeColor = product.colors && product.colors[sel.colorIdx] ? product.colors[sel.colorIdx].name : "";
  const storageList = product.ssds || product.storages;
  const storageTitle = product.ssds ? "SSD" : "Xotira";

  body.innerHTML = `
    <div class="product-modal-grid">
      <div class="product-modal-img-box">
        <img id="modalProductImg" src="${imgSrc}" alt="${product.name}" onerror="this.src='${product.defaultImage}'" />
      </div>

      <div>
        <span class="section-tag" style="margin-bottom: 4px;">${product.category.toUpperCase()}</span>
        <h2 id="modalProductTitle" class="product-modal-title">${product.name}</h2>
        <div id="modalProductPrice" class="product-modal-price">${formatUSD(price)}</div>
        <p class="product-modal-desc">${product.description}</p>

        ${
          product.colors && product.colors.length
            ? `
              <div class="config-group">
                <div class="config-label">
                  <span>Rang</span>
                  <span class="selected-val" id="modalColorLabel">${activeColor}</span>
                </div>
                <div class="color-swatches">
                  ${product.colors
                    .map(
                      (c, idx) => `
                        <button
                          type="button"
                          class="color-swatch modal-swatch ${idx === sel.colorIdx ? "active" : ""}"
                          style="background-color: ${c.hex};"
                          data-color-idx="${idx}"
                          title="${c.name}"
                        ></button>
                      `
                    )
                    .join("")}
                </div>
              </div>
            `
            : ""
        }

        ${renderModalPills(productId, "chipIdx", product.chips, "Chip")}
        ${renderModalPills(productId, "ramIdx", product.rams, "RAM")}
        ${renderModalPills(productId, "storageIdx", storageList, storageTitle)}
        ${renderModalPills(productId, "screenIdx", product.screenSizes, "Ekran o'lchami")}
        ${renderModalPills(productId, "sizeIdx", product.sizes, "Korpus o'lchami")}
        ${renderModalPills(productId, "bandIdx", product.bands, "Band / Strap")}
        ${renderModalPills(productId, "connIdx", product.connectivity, "Aloqa turi")}

        <div class="product-modal-cta">
          <button type="button" id="modalAddToCartBtn" class="btn btn-primary btn-md" style="flex: 1;">
            Add to Cart
          </button>
          <button type="button" id="modalBuyNowBtn" class="btn btn-outline btn-md" style="flex: 1;">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  `;

  backdrop.classList.add("open");
  backdrop.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";

  // Bind modal variant events
  body.querySelectorAll(".modal-swatch").forEach((btn) => {
    btn.addEventListener("click", () => {
      sel.colorIdx = Number(btn.dataset.colorIdx);
      updateProductCardUI(productId);
      openProductModal(productId);
    });
  });

  body.querySelectorAll(".modal-pill").forEach((pill) => {
    pill.addEventListener("click", () => {
      const key = pill.dataset.selKey;
      sel[key] = Number(pill.dataset.optIdx);
      updateProductCardUI(productId);
      openProductModal(productId);
    });
  });

  document.getElementById("modalAddToCartBtn")?.addEventListener("click", () => {
    addToCart(productId);
    closeProductModal();
  });

  document.getElementById("modalBuyNowBtn")?.addEventListener("click", () => {
    addToCart(productId);
    closeProductModal();
    openCartDrawer();
  });

  if (openCartAfterBuy) {
    addToCart(productId);
    closeProductModal();
    openCartDrawer();
  }
}

function renderModalPills(productId, selKey, options, labelTitle) {
  if (!options || !options.length) return "";
  const activeIdx = productSelections[productId][selKey];
  const currentLabel = options[activeIdx] ? options[activeIdx].label : "";

  return `
    <div class="config-group">
      <div class="config-label">
        <span>${labelTitle}</span>
        <span class="selected-val">${currentLabel}</span>
      </div>
      <div class="option-pills">
        ${options
          .map(
            (opt, idx) => `
              <button
                type="button"
                class="option-pill modal-pill ${idx === activeIdx ? "active" : ""}"
                data-sel-key="${selKey}"
                data-opt-idx="${idx}"
              >
                ${opt.label}
              </button>
            `
          )
          .join("")}
      </div>
    </div>
  `;
}

function closeProductModal() {
  const backdrop = document.getElementById("productModalBackdrop");
  if (!backdrop) return;
  backdrop.classList.remove("open");
  backdrop.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
  activeModalProductId = null;
}

// ==========================================================================
// 11. SHOPPING CART (ADD, REMOVE, QUANTITY, TOTAL, LOCALSTORAGE)
// ==========================================================================
function addToCart(productId) {
  const product = PRODUCTS_DATA.find((p) => p.id === productId);
  if (!product) return;
  const sel = productSelections[productId];
  const variantKey = getVariantKey(productId, sel);
  const unitPrice = calculatePrice(product, sel);
  const summary = getSelectedSummary(product, sel);
  const image = getSelectedImage(product, sel);

  const existing = cart.find((item) => item.variantKey === variantKey);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({
      variantKey,
      productId: product.id,
      name: product.name,
      summary,
      image,
      unitPrice,
      qty: 1
    });
  }

  saveCart(cart);
  renderCart();
  bumpCartBadge();
  showToast(`${product.name} savatchaga qo‘shildi`);
}

function updateCartQty(variantKey, delta) {
  const idx = cart.findIndex((item) => item.variantKey === variantKey);
  if (idx === -1) return;
  cart[idx].qty += delta;
  if (cart[idx].qty <= 0) {
    cart.splice(idx, 1);
  }
  saveCart(cart);
  renderCart();
}

function removeFromCart(variantKey) {
  cart = cart.filter((item) => item.variantKey !== variantKey);
  saveCart(cart);
  renderCart();
  showToast("Mahsulot savatchadan o‘chirildi");
}

function clearCart() {
  cart = [];
  saveCart(cart);
  renderCart();
  showToast("Savatcha tozalandi");
}

function bumpCartBadge() {
  const badge = document.getElementById("cartBadge");
  if (!badge) return;
  badge.classList.remove("bump");
  void badge.offsetWidth;
  badge.classList.add("bump");
}

function renderCart() {
  const badge = document.getElementById("cartBadge");
  const countText = document.getElementById("cartItemCountText");
  const itemsContainer = document.getElementById("cartItemsContainer");
  const totalEl = document.getElementById("cartTotalPrice");
  const checkoutBtn = document.getElementById("checkoutBtn");

  const totalCount = cart.reduce((sum, item) => sum + item.qty, 0);
  const totalAmount = cart.reduce((sum, item) => sum + item.unitPrice * item.qty, 0);

  if (badge) {
    badge.textContent = String(totalCount);
    badge.classList.toggle("has-items", totalCount > 0);
  }

  if (countText) {
    countText.textContent = `${totalCount} ta mahsulot`;
  }

  if (totalEl) {
    totalEl.textContent = formatUSD(totalAmount);
  }

  if (checkoutBtn) {
    checkoutBtn.disabled = cart.length === 0;
  }

  if (!itemsContainer) return;

  if (cart.length === 0) {
    itemsContainer.innerHTML = `
      <div class="cart-empty">
        <strong style="font-size: 16px; color: var(--text-primary);">Savatchangiz bo‘sh</strong>
        <p>Istalgan mahsulotni tanlab, «Buy Now» yoki «Add to Cart» tugmasini bosing.</p>
      </div>
    `;
    return;
  }

  itemsContainer.innerHTML = cart
    .map(
      (item) => `
        <div class="cart-item">
          <img src="${item.image}" alt="${item.name}" />
          <div>
            <div class="cart-item-title">${item.name}</div>
            <div class="cart-item-variants">${item.summary}</div>
            <div class="cart-item-bottom">
              <div class="qty-controls">
                <button type="button" class="qty-btn" data-qty-key="${item.variantKey}" data-delta="-1" aria-label="Kamaytirish">−</button>
                <span class="qty-val">${item.qty}</span>
                <button type="button" class="qty-btn" data-qty-key="${item.variantKey}" data-delta="1" aria-label="Ko'paytirish">+</button>
              </div>
              <strong>${formatUSD(item.unitPrice * item.qty)}</strong>
              <button type="button" class="cart-remove-btn" data-remove-key="${item.variantKey}">O‘chirish</button>
            </div>
          </div>
        </div>
      `
    )
    .join("");
}

function openCartDrawer() {
  const backdrop = document.getElementById("cartDrawerBackdrop");
  if (!backdrop) return;
  backdrop.classList.add("open");
  backdrop.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeCartDrawer() {
  const backdrop = document.getElementById("cartDrawerBackdrop");
  if (!backdrop) return;
  backdrop.classList.remove("open");
  backdrop.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

// ==========================================================================
// 12. REAL-TIME SEARCH SYSTEM
// ==========================================================================
function openSearchPanel() {
  const panel = document.getElementById("searchBarPanel");
  const input = document.getElementById("searchInput");
  if (!panel) return;
  panel.classList.add("open");
  panel.setAttribute("aria-hidden", "false");
  setTimeout(() => input?.focus(), 80);
  performSearch(input ? input.value : "");
}

function closeSearchPanel() {
  const panel = document.getElementById("searchBarPanel");
  if (!panel) return;
  panel.classList.remove("open");
  panel.setAttribute("aria-hidden", "true");
}

function performSearch(query) {
  const grid = document.getElementById("searchResultsGrid");
  const clearBtn = document.getElementById("clearSearchBtn");
  if (!grid) return;

  const trimmed = (query || "").trim().toLowerCase();
  if (clearBtn) clearBtn.hidden = trimmed.length === 0;

  if (!trimmed) {
    grid.innerHTML = "";
    return;
  }

  const matches = PRODUCTS_DATA.filter(
    (p) =>
      p.name.toLowerCase().includes(trimmed) ||
      p.category.toLowerCase().includes(trimmed) ||
      p.tagline.toLowerCase().includes(trimmed) ||
      p.description.toLowerCase().includes(trimmed)
  );

  if (matches.length === 0) {
    grid.innerHTML = `<p class="search-result-meta">«${query}» bo‘yicha mahsulot topilmadi.</p>`;
    return;
  }

  grid.innerHTML = matches
    .map(
      (p) => `
        <div class="search-result-card">
          <img src="${p.defaultImage}" alt="${p.name}" />
          <div>
            <div class="search-result-title">${p.name}</div>
            <div class="search-result-meta">${p.tagline}</div>
          </div>
          <div style="display:flex; align-items:center; justify-content:space-between; gap:8px;">
            <span class="search-result-price">${formatUSD(p.basePrice)}</span>
            <button type="button" class="btn btn-primary btn-sm search-open-product" data-product-id="${p.id}">
              Ko‘rish
            </button>
          </div>
        </div>
      `
    )
    .join("");
}

// ==========================================================================
// LOGIN / REGISTER MODAL
// ==========================================================================
function updateAuthButtonLabel() {
  const label = document.getElementById("authBtnLabel");
  if (!label) return;
  label.textContent = currentUser ? currentUser.name.split(" ")[0] : "Login";
}

function openAuthModal(initialTab = "login") {
  const backdrop = document.getElementById("authModalBackdrop");
  const content = document.getElementById("authModalContent");
  if (!backdrop || !content) return;

  if (currentUser) {
    content.innerHTML = `
      <h2 id="authModalTitle" class="product-modal-title">Apple Account</h2>
      <p class="product-modal-desc">Xush kelibsiz, <strong>${currentUser.name}</strong> (${currentUser.email}).</p>
      <div class="cart-summary-row">
        <span>Saqlangan mahsulotlar:</span>
        <strong>${cart.reduce((s, i) => s + i.qty, 0)} ta</strong>
      </div>
      <button type="button" id="logoutBtn" class="btn btn-outline btn-full" style="margin-top: 16px;">
        Chiqish (Logout)
      </button>
    `;
    document.getElementById("logoutBtn")?.addEventListener("click", () => {
      currentUser = null;
      saveUser(null);
      updateAuthButtonLabel();
      closeAuthModal();
      showToast("Akkauntdan chiqildi");
    });
  } else {
    content.innerHTML = `
      <div class="auth-tabs">
        <button type="button" class="auth-tab ${initialTab === "login" ? "active" : ""}" data-auth-tab="login">Login</button>
        <button type="button" class="auth-tab ${initialTab === "register" ? "active" : ""}" data-auth-tab="register">Register</button>
      </div>
      <h2 id="authModalTitle" class="product-modal-title" style="font-size: 22px; margin-bottom: 14px;">
        ${initialTab === "login" ? "Apple Accountga kirish" : "Yangi Apple Account yaratish"}
      </h2>
      <form id="authForm">
        ${
          initialTab === "register"
            ? `
              <div class="form-field">
                <label for="authName">To‘liq ism</label>
                <input id="authName" type="text" required placeholder="Azizbek Karimov" />
              </div>
            `
            : ""
        }
        <div class="form-field">
          <label for="authEmail">Email manzil</label>
          <input id="authEmail" type="email" required placeholder="name@icloud.com" />
        </div>
        <div class="form-field">
          <label for="authPassword">Parol</label>
          <input id="authPassword" type="password" required minlength="4" placeholder="••••••••" />
        </div>
        <button type="submit" class="btn btn-primary btn-full" style="margin-top: 6px;">
          ${initialTab === "login" ? "Kirish" : "Ro‘yxatdan o‘tish"}
        </button>
      </form>
    `;

    content.querySelectorAll(".auth-tab").forEach((tabBtn) => {
      tabBtn.addEventListener("click", () => openAuthModal(tabBtn.dataset.authTab));
    });

    document.getElementById("authForm")?.addEventListener("submit", (e) => {
      e.preventDefault();
      const email = document.getElementById("authEmail").value.trim();
      const nameInput = document.getElementById("authName");
      const name = nameInput && nameInput.value.trim() ? nameInput.value.trim() : email.split("@")[0];
      currentUser = { name, email };
      saveUser(currentUser);
      updateAuthButtonLabel();
      closeAuthModal();
      showToast(`Xush kelibsiz, ${name}!`);
    });
  }

  backdrop.classList.add("open");
  backdrop.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeAuthModal() {
  const backdrop = document.getElementById("authModalBackdrop");
  if (!backdrop) return;
  backdrop.classList.remove("open");
  backdrop.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

// ==========================================================================
// 13. ANIMATIONS (SCROLL REVEAL, PARALLAX, 3D TILT, NAVBAR, PRELOADER)
// ==========================================================================
function initScrollReveal() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.08, rootMargin: "0px 0px -30px 0px" }
  );

  document.querySelectorAll(".reveal-fade, .reveal-up").forEach((el) => observer.observe(el));
}

function initParallaxAndNavbar() {
  const navbar = document.getElementById("navbar");
  const parallaxEls = document.querySelectorAll("[data-parallax]");
  const navLinks = document.querySelectorAll(".nav-link[data-nav]");
  const sections = document.querySelectorAll("section[id]");

  let ticking = false;

  function onScroll() {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        const scrollY = window.scrollY;

        if (navbar) {
          navbar.classList.toggle("scrolled", scrollY > 12);
        }

        // Subtle parallax
        parallaxEls.forEach((el) => {
          const speed = parseFloat(el.dataset.parallax) || 0.1;
          if (scrollY < window.innerHeight * 1.2) {
            el.style.transform = `translate3d(0, ${scrollY * speed}px, 0)`;
          }
        });

        // Active section highlight in navbar
        let currentId = "";
        sections.forEach((sec) => {
          const top = sec.offsetTop - 110;
          const height = sec.offsetHeight;
          if (scrollY >= top && scrollY < top + height) {
            currentId = sec.id;
          }
        });

        navLinks.forEach((link) => {
          link.classList.toggle("active", link.dataset.nav === currentId);
        });

        ticking = false;
      });
      ticking = true;
    }
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}

function init3DTilt() {
  if (window.matchMedia("(hover: none)").matches) return;

  document.addEventListener("mousemove", (e) => {
    const card = e.target.closest(".tilt-card");
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -4.5;
    const rotateY = ((x - centerX) / centerX) * 4.5;

    card.style.transform = `perspective(900px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-4px)`;
  });

  document.addEventListener("mouseleave", (e) => {
    const card = e.target.closest?.(".tilt-card");
    if (card) {
      card.style.transform = "";
    }
  }, true);
}

function triggerSmoothPageTransition(targetSelector) {
  const overlay = document.getElementById("pageTransition");
  const target = document.querySelector(targetSelector);
  if (!target) return;

  if (overlay) {
    overlay.classList.add("active");
    setTimeout(() => {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      overlay.classList.remove("active");
    }, 140);
  } else {
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

// ==========================================================================
// EVENT DELEGATION & INITIALIZATION
// ==========================================================================
function bindEvents() {
  // Navigation smooth transition + mobile drawer close
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (e) => {
      const href = anchor.getAttribute("href");
      if (href && href.length > 1 && document.querySelector(href)) {
        e.preventDefault();
        triggerSmoothPageTransition(href);
        const drawer = document.getElementById("mobileDrawer");
        const menuBtn = document.getElementById("mobileMenuBtn");
        drawer?.classList.remove("open");
        menuBtn?.setAttribute("aria-expanded", "false");
      }
    });
  });

  // Mobile menu toggle
  document.getElementById("mobileMenuBtn")?.addEventListener("click", () => {
    const drawer = document.getElementById("mobileDrawer");
    const btn = document.getElementById("mobileMenuBtn");
    const isOpen = drawer?.classList.toggle("open");
    btn?.setAttribute("aria-expanded", String(Boolean(isOpen)));
  });

  // Hero CTAs
  document.getElementById("heroBuyBtn")?.addEventListener("click", (e) => {
    const pid = e.currentTarget.dataset.productId;
    addToCart(pid);
    openCartDrawer();
  });

  document.getElementById("heroLearnBtn")?.addEventListener("click", (e) => {
    const pid = e.currentTarget.dataset.productId;
    openProductModal(pid);
  });

  // Delegated clicks across main content
  document.getElementById("mainContent")?.addEventListener("click", (e) => {
    // Color swatch click
    const swatch = e.target.closest(".color-swatch");
    if (swatch) {
      const pid = swatch.dataset.productId;
      productSelections[pid].colorIdx = Number(swatch.dataset.colorIdx);
      updateProductCardUI(pid);
      return;
    }

    // Option pill click (Storage, RAM, Chip, Size, Band, Connectivity)
    const pill = e.target.closest(".option-pill:not(.modal-pill)");
    if (pill) {
      const pid = pill.dataset.productId;
      const key = pill.dataset.selKey;
      productSelections[pid][key] = Number(pill.dataset.optIdx);
      updateProductCardUI(pid);
      return;
    }

    // Buy Now button
    const buyBtn = e.target.closest(".buy-now-btn");
    if (buyBtn) {
      addToCart(buyBtn.dataset.productId);
      openCartDrawer();
      return;
    }

    // Learn More or Image/Title click -> Product Details Modal
    const learnBtn = e.target.closest(".learn-more-btn") || e.target.closest("[data-open-details]");
    if (learnBtn) {
      const pid = learnBtn.dataset.productId || learnBtn.dataset.openDetails;
      openProductModal(pid);
    }
  });

  // Product modal close
  document.getElementById("closeProductModal")?.addEventListener("click", closeProductModal);
  document.getElementById("productModalBackdrop")?.addEventListener("click", (e) => {
    if (e.target.id === "productModalBackdrop") closeProductModal();
  });

  // Cart drawer controls
  document.getElementById("cartToggleBtn")?.addEventListener("click", openCartDrawer);
  document.getElementById("closeCartDrawer")?.addEventListener("click", closeCartDrawer);
  document.getElementById("cartDrawerBackdrop")?.addEventListener("click", (e) => {
    if (e.target.id === "cartDrawerBackdrop") closeCartDrawer();
  });

  document.querySelectorAll(".footer-cart-trigger").forEach((el) => {
    el.addEventListener("click", (e) => {
      e.preventDefault();
      openCartDrawer();
    });
  });

  document.getElementById("cartItemsContainer")?.addEventListener("click", (e) => {
    const qtyBtn = e.target.closest(".qty-btn");
    if (qtyBtn) {
      updateCartQty(qtyBtn.dataset.qtyKey, Number(qtyBtn.dataset.delta));
      return;
    }

    const removeBtn = e.target.closest(".cart-remove-btn");
    if (removeBtn) {
      removeFromCart(removeBtn.dataset.removeKey);
    }
  });

  document.getElementById("clearCartBtn")?.addEventListener("click", clearCart);

  document.getElementById("checkoutBtn")?.addEventListener("click", () => {
    if (cart.length === 0) return;
    const total = cart.reduce((s, i) => s + i.unitPrice * i.qty, 0);
    showToast(`Buyurtma qabul qilindi! Jami: ${formatUSD(total)}`);
    cart = [];
    saveCart(cart);
    renderCart();
    closeCartDrawer();
  });

  // Search panel controls
  document.getElementById("searchToggleBtn")?.addEventListener("click", () => {
    const panel = document.getElementById("searchBarPanel");
    if (panel?.classList.contains("open")) closeSearchPanel();
    else openSearchPanel();
  });

  document.getElementById("closeSearchBtn")?.addEventListener("click", closeSearchPanel);

  document.getElementById("searchInput")?.addEventListener("input", (e) => {
    performSearch(e.target.value);
  });

  document.getElementById("clearSearchBtn")?.addEventListener("click", () => {
    const input = document.getElementById("searchInput");
    if (input) {
      input.value = "";
      input.focus();
      performSearch("");
    }
  });

  document.querySelectorAll(".hint-chip").forEach((chip) => {
    chip.addEventListener("click", () => {
      const q = chip.dataset.query || "";
      const input = document.getElementById("searchInput");
      if (input) input.value = q;
      performSearch(q);
    });
  });

  document.getElementById("searchResultsGrid")?.addEventListener("click", (e) => {
    const btn = e.target.closest(".search-open-product");
    if (btn) {
      const pid = btn.dataset.productId;
      closeSearchPanel();
      openProductModal(pid);
    }
  });

  // Auth modal controls
  document.getElementById("authToggleBtn")?.addEventListener("click", () => openAuthModal("login"));
  document.querySelectorAll(".footer-auth-trigger").forEach((el) => {
    el.addEventListener("click", (e) => {
      e.preventDefault();
      openAuthModal("login");
    });
  });
  document.getElementById("closeAuthModal")?.addEventListener("click", closeAuthModal);
  document.getElementById("authModalBackdrop")?.addEventListener("click", (e) => {
    if (e.target.id === "authModalBackdrop") closeAuthModal();
  });

  // ESC key closes modals/drawers/search
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeProductModal();
      closeCartDrawer();
      closeAuthModal();
      closeSearchPanel();
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initSelections();
  renderCategoryStrip();
  renderAllSections();
  renderCart();
  updateAuthButtonLabel();
  bindEvents();
  initScrollReveal();
  initParallaxAndNavbar();
  init3DTilt();

  // Hide preloader smoothly
  setTimeout(() => {
    document.getElementById("preloader")?.classList.add("hidden");
  }, 320);
});