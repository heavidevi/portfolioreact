# Muhammad Ali Adeel — Portfolio

**Glitched Neobrutalist** portfolio built with Next.js 14, Tailwind CSS, and Framer Motion.

---

## 🚀 Quick Start

### 1. Create a new Next.js app and copy files

```bash
npx create-next-app@latest ali-portfolio --typescript --tailwind --app --no-src-dir --no-import-alias
cd ali-portfolio
```

### 2. Install additional dependencies

```bash
npm install framer-motion @studio-freight/lenis clsx
```

### 3. Copy the project files

Replace the following with the files from this zip:
- `app/layout.tsx`
- `app/page.tsx`
- `app/globals.css`
- `tailwind.config.ts`
- `next.config.js`
- All files in `components/`

### 4. Run development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## 📁 File Structure

```
├── app/
│   ├── layout.tsx          # Root layout with metadata & fonts
│   ├── page.tsx            # Main page with tab state
│   └── globals.css         # Global styles, animations, CSS classes
├── components/
│   ├── BackgroundEffects.tsx   # Animated orbs + diagonal flare
│   ├── ComingSoon.tsx          # Placeholder for Teacher/Writer tabs
│   ├── ContactSection.tsx      # Contact info + CTA
│   ├── CustomCursor.tsx        # Custom cursor with trail
│   ├── ExpertiseStack.tsx      # Sticky-scroll stacking cards
│   ├── HeroCharacter.tsx       # SVG character (thinker/pointing poses)
│   ├── HeroSection.tsx         # Hero layout with character
│   ├── MarqueeBanner.tsx       # Scrolling tech stack ticker
│   ├── ProjectsWall.tsx        # Studio wall section
│   ├── SmoothScroll.tsx        # Lenis smooth scroll wrapper
│   ├── StickyNote.tsx          # Individual sticky note with glassmorphic overlay
│   └── TabSwitcher.tsx         # 3-tab navigation
├── tailwind.config.ts
├── next.config.js
└── tsconfig.json
```

---

## 🎨 Design System

| Token | Value |
|-------|-------|
| Background | `#111112` |
| Accent | `#D2FF00` |
| Font Display | Bebas Neue |
| Font Body | Space Grotesk |
| Font Mono | JetBrains Mono |
| Border Brutal | `3px solid #000` |
| Shadow Brutal | `4px 4px 0 #000` |

---

## ✏️ Customization

- **Projects**: Edit the `PROJECTS` array in `components/ProjectsWall.tsx`
- **Skills**: Edit the `CARDS` array in `components/ExpertiseStack.tsx`
- **Contact**: Edit `CONTACT_ITEMS` in `components/ContactSection.tsx`
- **Colors**: Update CSS variables in `app/globals.css`
- **Tabs**: Add content to Teacher/Writer tabs in `app/page.tsx`

---

## 📦 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS + Custom CSS
- **Animation**: Framer Motion
- **Smooth Scroll**: Lenis (@studio-freight/lenis)
- **Language**: TypeScript
- **Fonts**: Google Fonts (Bebas Neue, Space Grotesk, JetBrains Mono)
