# UNDERNET

A dark, futuristic social-platform frontend starter built with Next.js, TypeScript, and Lucide icons.

## Step 1: Run it locally

1. Install **Node.js LTS** from https://nodejs.org/
2. Extract this project.
3. Open a terminal in the `undernet-starter` folder.
4. Run:

   ```bash
   npm install
   npm run dev
   ```

5. Open http://localhost:3000

## Push to GitHub

Create an empty repository named `undernet` on GitHub. Do not initialize it with a README if you plan to push this folder as-is. Then run these commands inside this folder:

```bash
git init
git add .
git commit -m "Build UNDERNET frontend starter"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/undernet.git
git push -u origin main
```

Replace `YOUR-USERNAME` with your GitHub username.

## What's working in this first milestone?

- Responsive dark-neon dashboard layout
- Sidebar navigation between Home, Messages, Videos, Communities, Live, and Saved
- Search input with a demo feedback state
- Stories row and sample feed
- Local demo post composer
- Like interaction and theme accent toggle
- Sample conversations and video cards
- Informational toast messages for features not yet connected

## What's still a prototype?

No account system, real messaging, remote video uploads, calling, livestreaming, server-side search, or persistent database has been connected yet. Demo content is local and resets when the page reloads. Buttons that aren't implemented show a clear coming-soon message.

## Backend plan (later steps)

1. Create a fresh Supabase project and add credentials to `.env.local` (never commit that file).
2. Add authentication and profile tables.
3. Add database row-level security (RLS) and private messaging access policies before exposing real user data.
4. Add posts, comments, follows, communities, and story metadata.
5. Add private storage buckets and validated upload policies for images/videos.
6. Add real-time message delivery and presence.
7. Integrate a dedicated WebRTC provider such as LiveKit for calls and screen sharing.
8. Add a video streaming service for transcoding, thumbnails, adaptive playback, and livestreaming.
9. Add moderation, reporting, blocking, rate limits, and privacy controls before inviting other users.

## Safety and secrets

- Do not put service-role keys in browser code.
- Never commit `.env.local` or real credentials.
- Keep uploads size-limited and validate file types on the server.
- Treat video calls and livestreaming as separate features that require explicit camera/microphone permissions.
