# Active Context: CareerQuest Landing Page (CQ1)

## Current State

**Project**: CareerQuest Landing Website
**Status**: ✅ Database added

## Recently Completed

- [x] Base Next.js 16 + React 19 + Tailwind CSS 4 setup
- [x] CQ1 - Initial landing page with hero, features, CTA sections
- [x] CQ1 v2 - UI/UX redesign with custom logo, typography, modern aesthetics
- [x] CQ1 v3 - Added Login/Register buttons, improved hover effects, floating animations, "Hazır mısın?" CTA section
- [x] Database - Drizzle ORM + SQLite with users, skills, tasks, achievements, career_goals tables
- [x] Security - Zod validation, password strength, input sanitization, security headers, rate limiting
- [x] Auth - NextAuth with credentials provider, bcrypt password hashing, JWT sessions, protected routes
- [x] Email Verification - Token-based verification, /dogrula page, verification email
- [x] Password Reset - Token-based reset, /sifre-sifirla page, reset email
- [x] Email Service - Nodemailer integration with templates
- [x] Admin Panel - User list, basic management (admin@careerquest.com only)
- [x] Dashboard - Dynamic data fetching + interactivity (görev tamamlama, XP/token artışı)
- [x] Profil sayfası - Düzenleme, istatistikler, beceriler, rozetler
- [x] Dashboard - Rozetler bölümü eklendi
- [x] Users tablosuna age, profession, bio alanları eklendi (migration)
- [x] Meslekler ve görevler sistemi:
  - 30 meslek (Frontend, Backend, UI/UX, SEO, vb.)
  - 43 görev (learning, practice, homework, quiz tipleri)
  - Zorluk seviyeleri (kolay, orta, zor, extreme)
  - XP ve token ödülleri
- [x] AI değerlendirme sistemi (simulated)
- [x] /gorevler sayfası - meslek seçimi ve görev listesi
- [x] /gorevler/[id] - görev detay ve tamamlama
- [x] Typecheck and lint passes

## Session History

| Date | Changes |
|------|---------|
| Initial | Next.js starter template created |
| CQ1 | CareerQuest landing page built (basic) |
| CQ1 v2 | UI/UX redesign: custom logo (geometric diamond), Outfit + Jakarta Sans fonts, gradient accents, blur effects, floating animations, modern dark theme |
| CQ1 v3 | Added navbar Login/Register, "Hemen Başla" CTA, floating background orbs animation, card glow hover effects, removed "Nasıl Çalışır" step section |

## Technical Stack

- Next.js 16 (App Router)
- React 19
- Tailwind CSS 4
- TypeScript
- Bun package manager
- **Drizzle ORM** + SQLite (database)
- **NextAuth** v5 (authentication)
- **bcryptjs** (password hashing)

## Database Schema

| Table | Columns |
|-------|---------|
| users | id, name, surname, email, password, level, xp, token, emailVerified, isActive, lastLoginAt, passwordResetToken, passwordResetExpires, createdAt, updatedAt |
| skills | id, userId, name, category, level, progress |
| tasks | id, userId, title, description, xpReward, tokenReward, status, completedAt, createdAt |
| achievements | id, userId, name, description, unlockedAt |
| career_goals | id, userId, title, targetRole, status, createdAt |

## Auth Setup

- `/api/auth/[...nextauth]` - NextAuth API routes
- `/src/auth/index.ts` - Auth configuration with credentials provider
- `/src/lib/actions.ts` - Server actions for registration
- `/src/middleware.ts` - Protected routes (dashboard, redirect logged-in users from login/register)

## Landing Page v3 Design

### Typography
- **Display Font**: Outfit (headings, logo) - modern, geometric
- **Body Font**: Plus Jakarta Sans (body text) - clean, readable

### Logo
- Custom geometric diamond shape with gradient (cyan → purple)

### Visual Effects
- Floating background orbs (cyan, purple) with XY animation
- Gradient text for accent words
- Card glow on hover
- Smooth hover animations with scale transforms
- Glassmorphism navigation

### Color Palette
- Background: `#0a0a0f` (deep dark)
- Primary accent: Cyan `#22d3ee`
- Secondary accent: Purple `#a855f7`
- Pink accent: `#ec4899`
- Text: White / Neutral-400

### Sections (v3)
1. **Navigation** - Fixed, glassmorphism, logo + links + Giriş Yap + Kayıt Ol
2. **Hero** - Gradient badge, gradient text, "Hemen Başla" CTA, "Zaten hesabın var mı? Giriş yap"
3. **Features** - 3-column cards with icons and gradient backgrounds
4. **Sistem Mimarisi** - Grid of 6 cards with emojis
5. **Gamification** - 4-card grid with icons
6. **CTA** - "Hazır mısın?" + Kayıt Ol / Daha fazla bilgi
7. **Footer** - Logo + copyright

## Available Versions

| Version | Description |
|---------|-------------|
| CQ1 | Basic landing page |
| CQ1 v2 | UI/UX redesign |
| CQ1 v3 | Current - with Login/Register buttons, improved animations |
