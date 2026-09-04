# Design notes

## The idea

Most waste-management sites open with a stock forest photo and a green gradient.
This one opens with the object that actually defines the business: the **rate board
at the gate**, where a yard chalks up what it is paying today. It is the one
animated moment on the site, and nothing else competes with it.

## Palette

Grounded in the logo, then extended with materials rather than nature imagery.

| Token | Hex | Used for |
| --- | --- | --- |
| `forest` | `#0F2E22` | Dark panels, hero, footer |
| `forest-deep` | `#0A2019` | Deepest panel |
| `brand` | `#1F7A4C` | Primary actions and icons, taken from the logo |
| `leaf` | `#8CC63F` | The single bright accent, used sparingly |
| `steel` | `#4A5A63` | Body text, a galvanised metal grey-blue |
| `board` | `#F1F3EF` | Alternating sections: recycled board, not cream |

## Type

- **Archivo Variable** for headings. An industrial grotesque, with tightened tracking at display sizes so headlines read as signage rather than marketing copy.
- **Public Sans Variable** for body. A utilitarian civic face, which suits a business that lives on compliance paperwork.
- A `.tabular` utility forces tabular figures on every weight, rate and count, so numbers line up the way they do on a weighbridge printout.

## Structural decisions

- **Numbered markers appear once**, on the six-step process, because that content genuinely is a sequence. Nowhere else.
- **Hairline borders instead of drop shadows.** Cards sit in a 1px grid, closer to a ledger than to a SaaS dashboard.
- **Near-square corners (3px)** on data blocks; no soft rounded card kit.
- **Sentence case throughout.** No tracked-out all-caps eyebrow labels.
- **Motion is restrained.** A 12px lift on section entry, once only, plus motion that answers a click: accordion, lightbox, slider. The hero board carries the rest.

## Copy

Written from the plant's point of view, not the vendor's. The headline names the
customer's problem rather than describing the company. Error and success states say
what happened and what to do next, in the site's own voice.
