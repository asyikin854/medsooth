# Medsooth™ website

Static website for **Medsooth™ — Step Into Relief**, the health footwear brand of Stealthmed Ventures.

Plain HTML/CSS/JS, no build step. Open `index.html` in a browser, or host the folder on GitHub Pages or any web host.

## Pages
| File | Content |
|---|---|
| `index.html` | Home: hero, slogan, product categories, "recommended for", agency logos |
| `about.html` | Company overview, vision, mission, core values, services, branches |
| `products.html` | The 14 product categories (same order as the Ettijar "Produk Syarikat" list) |
| `medsooth.html` | Medsooth™ shoe features, conditions it helps, KKM range, how it's made |
| `certifications.html` | SSM, MOF, Bumiputera, JCCD, TCC and MOF supply fields |
| `contact.html` | Contact details, map, enquiry form (sends via WhatsApp) |

## Editing
- **Header, footer, phone, email, address:** `assets/js/main.js` (`SITE`, `CERTS`, `AGENCIES`). Changes apply to every page.
- **Logos under the Medsooth logo:** `CERTS` in `assets/js/main.js`. To add MIDA or Super Brand later, drop the PNG in `assets/logos/` and add a line.
- **Agency logos:** `AGENCIES` in `assets/js/main.js`. JMF and JPJ show placeholders (`src: null`) until their logo files are added.
- **Colours and fonts:** variables at the top of `assets/css/style.css`.

## Still to supply
- Official Medsooth™ logo file (the site currently uses a text wordmark with ™)
- JMF and JPJ logos
- Medsooth's own product photos and product list (current photos are cropped from the Ettijar company profile)
