# CLAUDE.md — Schreuder Stucadoors Frontend Regels

## Brand-brief (van Rick)
- Je bent een senior UI-designer en frontend developer.
- Bouw een premium, **lichte/frisse, witte** interface (geen dark theme).
- Gebruik subtiele animaties, goede spacing en duidelijke visuele hiërarchie.
- Geen emoji-icons. Geen inline styles. Geen generieke gradients.

## Altijd als eerste doen
- **Laad de `frontend-design` skill** vóór het schrijven van frontend code, elke sessie, geen uitzonderingen.

## Over het bedrijf (echte content — niet verzinnen)
- **Naam:** Schreuder Stucadoors B.V.
- **Slogan:** "Uw ideale partner voor stucwerkzaamheden voor binnen en buiten"
- **Diensten:** Pleisterwerk, Spachtelputz, Sierpleister, Spackspuiten, Sierlijsten & ornamenten, Plafondstucwerk, Binnen- en buitenmuurstucwerk.
- **Over ons:** Behandelt elk project met zorg. Particulier én zakelijk. Werkt met duidelijke afspraken, transparante offertes, traditioneel vakmanschap, goede service en garantie. Klantgericht, neemt tijd voor communicatie.
- **Regio:** Noord-Holland, gevestigd in Purmerend.
- **USP's:** Officieel erkend stucbedrijf volgens NOA-eisen. Aangesloten bij Afbouwkeur.
- **Adres:** Visserijweg 63 C, 1446 AR, Purmerend
- **Telefoon:** 06 29 51 74 59
- **E-mail:** info@schreuderstucadoors.nl
- **Navigatie:** Home, Diensten, Projecten, Contact

## Lokale server
- **Altijd serveren via localhost** — maak nooit een screenshot van een `file:///` URL.
- Start de dev server: `node serve.mjs` (serveert de projectroot op `http://localhost:3000`)
- Als de server al draait, start dan geen tweede instantie.

## Screenshot workflow
- **Altijd screenshotten via localhost:** `node screenshot.mjs http://localhost:3000 [label] [desktop|mobile]`
- Screenshots worden auto-genummerd opgeslagen in `./temporary screenshots/`.
- Na het screenshotten, lees de PNG met de Read tool en analyseer.
- Test zowel **desktop** als **mobile**.
- Wees specifiek bij vergelijkingen (exacte px, hex, gewicht). Doe minimaal 2 vergelijkingsrondes.
- Check: spacing/padding, font size/gewicht/line-height, kleuren (exacte hex), uitlijning, border-radius, schaduwen, afbeeldingsformaten.

## Output standaarden
- Één `index.html` bestand. **Stijlen in een `<style>`-blok in de `<head>`** — geen `style=""` inline-attributen op elementen.
- Placeholder afbeeldingen: `https://placehold.co/BREEDTExHOOGTE` waar nog geen echte assets zijn.
- Mobile-first responsive.

## Anti-generieke guardrails
- **Kleuren:** Donker thema als basis (diepzwart/antraciet). Eén warme, materiaalgerichte accentkleur (denk aan kalk/klei/zandtinten passend bij stucwerk) — geen standaard Tailwind-blauw/indigo. Definieer via CSS-variabelen.
- **Geen generieke gradients:** geen voor-de-hand-liggende paarse/blauwe verlopen. Gebruik subtiele, materiaalgerichte texturen, fijne grain/noise via SVG-filter, en gelaagde diepte.
- **Schaduwen:** Nooit vlakke `shadow-md`. Gebruik gelaagde, kleurgetinte schaduwen met lage opacity.
- **Typografie:** Nooit hetzelfde font voor headings en body. Combineer een karaktervol display-font met een strak sans-serif. Strakke tracking op grote headings, ruime line-height op body. Geen Inter/Roboto/Arial.
- **Animaties:** Subtiel. Animeer alleen `transform` en `opacity`. Nooit `transition-all`. Spring-stijl easing. Staggered reveals bij page-load/scroll.
- **Interactieve states:** Elk klikbaar element heeft hover-, focus-visible- en active-states. Geen uitzonderingen.
- **Afbeeldingen:** Gradient overlay + kleurbehandeling voor cohesie met het donkere thema.
- **Spacing:** Bewuste, consistente spacing-tokens. **Diepte:** lagensysteem (basis → verhoogd → zwevend).

## Harde regels
- Gebruik echte bedrijfscontent hierboven — verzin geen diensten, reviews of gegevens.
- Geen emoji-icons (gebruik SVG-iconen of niets).
- Geen inline `style=""`-attributen.
- Geen `transition-all`.
- Geen generieke gradients of standaard Tailwind blauw/indigo als primaire kleur.
- Stop niet na één screenshot-ronde.
- Schrijf alle commentaar en variabelenamen in het Engels, maar communiceer met Rick in het Nederlands.
