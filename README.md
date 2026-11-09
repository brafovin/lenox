# Minecraft (Browser-Version)

Ein 3D-Blockspiel im Stil von Minecraft, komplett im Browser (three.js, keine Server nötig).

## Starten

Einfach `index.html` im Browser öffnen (am besten Chrome/Edge/Firefox mit WebGL),
oder mit einem lokalen Server:

```bash
npm install      # nur nötig, wenn du das Spiel neu bauen willst
npm run build    # baut dist/game.js aus src/
npm start        # startet http://localhost:8000
```

`dist/game.js` ist bereits gebaut und eingecheckt.

## Steuerung

| Taste | Aktion |
|---|---|
| W A S D | laufen |
| Leertaste | springen / im Wasser schwimmen |
| Shift | schleichen (fällt nicht von Kanten) |
| Strg, R oder W doppelt tippen | rennen |
| Linke Maustaste | Blöcke abbauen (gedrückt halten) / angreifen |
| Rechte Maustaste | Block platzieren / Werkbank, Ofen, Truhe öffnen / Eimer, Feuerzeug, Enderperle, Enderauge benutzen / essen (halten) |
| 1–9, Mausrad | Hotbar |
| E | Inventar (2×2-Handwerk) |
| Q (Strg+Q) | Item (Stack) wegwerfen |
| L oder F4 | zeigt die nächsten Strukturen (Dorf, Tempel, Wrack, Stronghold, Netherfestung) |
| F3 | Debug-Anzeige |
| F5 | Kamera: 1. Person / 3. Person hinten / vorn (zeigt deinen blockigen Skin) |

Unten links siehst du 10 Herzen, unten rechts 10 Hungersymbole.

## Was es gibt

**Oberwelt**: Hügel, Berge, Ozeane, Strände, Biome (Ebene, Wald, Wüste, Dschungel), Höhlen mit Lava,
Bäume, Blumen, Gras, Kakteen, Sand/Kies (fällt), Wasser.
Erze: Kohle, Eisen, Gold, Redstone, Lapislazuli, Diamant (je tiefer, desto seltener).

**Strukturen** (mit Truhen und Beute): Dorf (Häuser, Brunnen, Wege, Schmiede), Wüstentempel,
Dschungeltempel, Schiffswrack im Meer, Stronghold unter der Erde mit dem Endportal-Raum.

**Crafting & Ofen**: Werkbank (3×3), Ofen (Kohle/Holz als Brennstoff, schmilzt Erze, Sand, Fleisch, Holz zu Holzkohle),
Truhen, Fackeln, Eimer, Feuerzeug, Werkzeuge in Holz, Stein, Gold, Eisen, Diamant und Netherit
(Schwert, Spitzhacke, Axt, Schaufel) mit Haltbarkeit.

**Nether** (Portal): Obsidian entsteht, wenn Wasser und Lava aufeinandertreffen (oder liegt in Truhen).
Obsidian braucht eine Diamantspitzhacke. Baue einen Rahmen (4 breit × 5 hoch, Ecken egal),
klicke mit dem Feuerzeug auf einen Obsidianblock → lila Portal. Ein paar Sekunden im Portal stehen.
Im Nether: Inseln aus Netherrack über einem Lavameer, Netherfestung mit Lohen und Wither-Skeletten, Ghasts,
Magmawürfel (teilen sich 2 → 4 → 8, droppen Schleimbälle), Glowstone, Seelensand, Antiker Schrott
(→ Ofen → Netherit-Schrott, + 4 Gold → Netheritbarren).

**Das Ende**: Lohenrute → Lohenpulver; Enderperle (von Endermen) + Lohenpulver → Enderauge.
Ein geworfenes Enderauge fliegt zum nächsten Stronghold (nur in der Oberwelt).
Im Portalraum alle 12 Rahmen mit Enderaugen füllen → Portal öffnet sich.
Im Ende: schwarzer Himmel, Endstein-Insel, Obsidiantürme mit Endkristallen (heilen den Drachen – zerstöre sie!),
Endermen und der **Enderdrache**. Besiegst du ihn, erscheint ein Portal zurück in die Oberwelt.

**Mobs**: Schwein, Kuh, Schaf, Huhn (Fleisch → Ofen → Steak etc.); Zombie, Baby-Zombie, Skelett (Pfeile),
Creeper (explodiert), Spinne, Enderman (nicht ansehen!, Enderperlen werfen = teleportieren),
Silberfischchen, Lohe, Ghast (Feuerbälle kannst du zurückschlagen), Wither-Skelett, Magmawürfel, Enderdrache.
Zombies und Skelette brennen bei Tageslicht. Nachts spawnen Monster.

**Skins**: Im Hauptmenü kannst du einen blockigen Skin wählen oder Farben anpassen.

## Projektstruktur

- `src/registry.js` – Blöcke, Items, prozedurale Texturen und Icons, Rezepte, Schmelzrezepte
- `src/gen.js` – Weltgenerierung (Oberwelt, Nether, Ende, Strukturen)
- `src/world.js`, `src/mesher.js` – Chunks, Licht (Himmel + Fackeln), Mesh-Bau
- `src/physics.js` – Kollision, Raycasts
- `src/models.js`, `src/mobs.js` – blockige Mob-Modelle, KI, Projektile, Enderdrache
- `src/ui.js` – HUD, Inventar, Werkbank, Ofen, Truhe
- `src/game.js` – Spiellogik, Rendering, Portale, Dimensionen, Tag/Nacht
