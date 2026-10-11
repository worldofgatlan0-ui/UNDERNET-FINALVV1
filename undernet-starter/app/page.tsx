"use client";

import { useState } from "react";
import {
  Activity, Bell, Bookmark, Clapperboard, Compass, Hash, Home, ImagePlus,
  MessageCircle, MessagesSquare, MoreHorizontal, PhoneCall, Play, Plus,
  Radio, Search, Send, Settings2, ShieldCheck, Sparkles, ThumbsUp, Users,
  Video, WandSparkles, X, Zap
} from "lucide-react";

type Section = "Home" | "Messages" | "Videos" | "Communities" | "Live" | "Saved";

const stories = [
  { name: "Your story", initials: "+", color: "story-add" },
  { name: "pixelghost", initials: "PG", color: "violet" },
  { name: "mira.exe", initials: "M", color: "pink" },
  { name: "voidwalker", initials: "VW", color: "blue" },
  { name: "kiwi.wav", initials: "K", color: "green" },
];

const conversations = [
  { name: "mira.exe", text: "that edit is SO GOOD omg", time: "2m", initials: "M", color: "pink", unread: true },
  { name: "pixelghost", text: "wanna hop on a call?", time: "8m", initials: "PG", color: "violet", unread: true },
  { name: "kiwi.wav", text: "sent you a video 🎬", time: "24m", initials: "K", color: "green", unread: false },
];

const videos = [
  { title: "Building a world from pixels", creator: "pixelghost", views: "12.4K views", duration: "08:42", art: "art-one", tag: "CREATION" },
  { title: "the coziest corner of the internet", creator: "mira.exe", views: "8.1K views", duration: "04:16", art: "art-two", tag: "VIBES" },
  { title: "I made a game in 48 hours", creator: "voidwalker", views: "21K views", duration: "12:09", art: "art-three", tag: "DEVLOG" },
];

const communities = [
  { name: "Creative Lab", members: "8.2K members", tag: "ART + DESIGN", color: "violet" },
  { name: "Indie Devs", members: "12K members", tag: "GAMES", color: "blue" },
  { name: "Late Night Lounge", members: "3.4K members", tag: "CHILL", color: "pink" },
];

export default function HomePage() {
  const [active, setActive] = useState<Section>("Home");
  const [liked, setLiked] = useState(false);
  const [postText, setPostText] = useState("");
  const [posted, setPosted] = useState(false);
  const [postedText, setPostedText] = useState("");
  const [notice, setNotice] = useState("");
  const [theme, setTheme] = useState<"violet" | "cyan">("violet");
  const [search, setSearch] = useState("");

  function showNotice(message: string) {
    setNotice(message);
    window.setTimeout(() => setNotice(""), 2600);
  }

  const navItems: { label: Section; icon: typeof Home }[] = [
    { label: "Home", icon: Home },
    { label: "Messages", icon: MessagesSquare },
    { label: "Videos", icon: Clapperboard },
    { label: "Communities", icon: Users },
    { label: "Live", icon: Radio },
    { label: "Saved", icon: Bookmark },
  ];

  return (
    <main className={`app-shell theme-${theme}`}>
      <aside className="sidebar">
        <button className="brand" onClick={() => setActive("Home")} aria-label="UNDERNET home">
          <span className="brand-mark"><Zap size={21} fill="currentColor" /></span>
          <span>UNDER<span className="brand-accent">NET</span><small>YOUR WORLD, CONNECTED</small></span>
        </button>

        <button className="profile-mini" onClick={() => showNotice("Profile settings are coming in a later step.")}>
          <span className="avatar avatar-user">T</span>
          <span className="profile-copy"><strong>temmie.exe</strong><small><i className="online-dot" /> Online now</small></span>
          <MoreHorizontal size={18} />
        </button>

        <div className="side-label">YOUR SPACE</div>
        <nav className="main-nav" aria-label="Main navigation">
          {navItems.map(({ label, icon: Icon }) => (
            <button key={label} className={`nav-item ${active === label ? "active" : ""}`} onClick={() => setActive(label)}>
              <Icon size={18} /><span>{label}</span>
              {label === "Messages" && <span className="nav-count">2</span>}
              {label === "Live" && <span className="live-dot" />}
            </button>
          ))}
        </nav>

        <div className="side-label community-label">YOUR COMMUNITIES <button aria-label="Add community" onClick={() => showNotice("Community creation will be added later.")}><Plus size={15} /></button></div>
        <div className="community-links">
          {communities.map((c) => <button key={c.name} onClick={() => setActive("Communities")}><span className={`community-icon ${c.color}`}><Hash size={16} /></span>{c.name}</button>)}
          <button className="discover-link" onClick={() => setActive("Communities")}><Compass size={16} /> Explore communities</button>
        </div>

        <div className="sidebar-bottom">
          <div className="status-card"><span className="status-icon"><ShieldCheck size={17} /></span><div><strong>Your space, your rules</strong><small>Safety tools are in the works.</small></div></div>
          <button className="nav-item settings-link" onClick={() => showNotice("Settings will arrive in a later step.")}><Settings2 size={18} /><span>Settings</span></button>
        </div>
      </aside>

      <section className="main-column">
        <header className="topbar">
          <div className="breadcrumb"><span>UNDERNET</span><span className="slash">/</span><strong>{active.toUpperCase()}</strong></div>
          <label className="search-box"><Search size={17} /><input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search people, videos, communities..." /><kbd>⌘ K</kbd></label>
          <div className="top-actions">
            <button className="icon-button" aria-label="Notifications" onClick={() => showNotice("You're all caught up!")}><Bell size={18} /><span className="notification-dot" /></button>
            <button className="icon-button" aria-label="Toggle accent theme" onClick={() => setTheme(theme === "violet" ? "cyan" : "violet")}><WandSparkles size={18} /></button>
            <span className="avatar avatar-user small-avatar">T</span>
          </div>
        </header>

        {active === "Home" ? (
          <div className="page-content">
            <div className="welcome-row"><div><div className="eyebrow"><Sparkles size={14} /> YOUR CORNER OF THE INTERNET</div><h1>Good to see you, <span>temmie.</span></h1><p>Your people, your videos, your universe.</p></div><button className="primary-button" onClick={() => document.getElementById("composer")?.focus()}><Plus size={17} /> Create post</button></div>

            <section className="stories-section">
              <div className="section-heading"><div><h2>Stories</h2><p>Little moments from your people</p></div><button className="text-button" onClick={() => showNotice("Stories will be connected to uploads later.")}>View all <span>↗</span></button></div>
              <div className="stories-row">{stories.map((s, i) => <button key={s.name} className="story" onClick={() => showNotice(i === 0 ? "Story upload is coming soon." : `${s.name}'s story viewer is coming soon.`)}><span className={`story-ring ${s.color}`}><span className={`story-avatar ${s.color}`}>{s.initials}</span></span><span>{s.name}</span></button>)}</div>
            </section>

            <div className="feed-layout">
              <div className="feed-column">
                <section className="composer panel">
                  <div className="composer-top"><span className="avatar avatar-user">T</span><input id="composer" value={postText} onChange={(e) => setPostText(e.target.value)} placeholder="What's happening in your universe?" /></div>
                  <div className="composer-bottom"><div className="composer-tools"><button onClick={() => showNotice("Image and video uploads are part of the next milestone.")}><ImagePlus size={17} /><span>Media</span></button><button onClick={() => showNotice("Live streaming will be added after the core backend.")}><Radio size={17} /><span>Go live</span></button></div><button className="primary-button post-button" onClick={() => { if (!postText.trim()) { showNotice("Write something first!"); return; } setPostedText(postText.trim()); setPosted(true); setPostText(""); showNotice("Demo post added locally."); }}><Send size={15} /> Post</button></div>
                </section>

                {posted && <article className="post-card panel"><div className="post-head"><span className="avatar avatar-user">T</span><div className="post-author"><strong>temmie.exe <span className="verified">✦</span></strong><small>@temmie.exe · just now · Demo post</small></div><MoreHorizontal size={19} /></div><p className="post-copy">{postedText}</p><div className="post-actions"><button onClick={() => setLiked(!liked)}><ThumbsUp size={16} /> {liked ? "Liked" : "Like"}</button><button onClick={() => showNotice("Comments are coming soon.")}><MessageCircle size={16} /> Comment</button><button onClick={() => showNotice("Sharing will be added later.")}><Send size={16} /> Share</button></div></article>}

                <div className="feed-heading"><div><span className="feed-indicator" /><h2>{search ? "Search preview" : "Your feed"}</h2></div><button className="filter-button" onClick={() => showNotice("Feed filters will be customizable later.")}><Activity size={15} /> For you <span>⌄</span></button></div>

                {search && <div className="search-result-note">Searching the demo interface for <strong>“{search}”</strong>. Real search comes with the backend.</div>}

                <article className="post-card panel">
                  <div className="post-head"><span className="avatar avatar-pixel">PG</span><div className="post-author"><strong>pixelghost <span className="verified">✦</span></strong><small>@pixelghost · 18 min ago</small></div><button className="plain-icon" onClick={() => showNotice("Post menu coming soon.")} aria-label="More post options"><MoreHorizontal size={19} /></button></div>
                  <p className="post-copy">Spent the whole night making this little digital world. Sometimes you just need to build a place that feels like <em>yours</em>. ✨</p>
                  <div className="post-art"><div className="art-grid" /><div className="art-orb orb-a" /><div className="art-orb orb-b" /><div className="art-caption"><span>PIXEL WORLDS / VOL. 01</span><strong>dream in<br />another dimension.</strong><small>CREATED BY PIXELGHOST</small></div><span className="art-chip">✦ ORIGINAL</span></div>
                  <div className="post-actions"><button onClick={() => setLiked(!liked)} className={liked ? "liked" : ""}><ThumbsUp size={16} /> {liked ? "129" : "128"}</button><button onClick={() => showNotice("Comments are coming soon.")}><MessageCircle size={16} /> 24</button><button onClick={() => showNotice("Share links will be available after backend setup.")}><Send size={16} /> Share</button><button className="save-action" onClick={() => { setActive("Saved"); showNotice("Saved items will be connected to your account later."); }}><Bookmark size={16} /></button></div>
                </article>
              </div>

              <aside className="right-column">
                <section className="panel side-panel"><div className="section-heading compact"><div><h2>Messages</h2><p>Your people are here</p></div><button className="plain-icon" onClick={() => setActive("Messages")} aria-label="Open messages"><MessagesSquare size={17} /></button></div><div className="conversation-list">{conversations.map((c) => <button key={c.name} className="conversation" onClick={() => setActive("Messages")}><span className={`avatar avatar-${c.color}`}>{c.initials}</span><span className="conversation-copy"><strong>{c.name}</strong><small>{c.text}</small></span><span className="conversation-meta"><small>{c.time}</small>{c.unread && <i />}</span></button>)}</div><button className="wide-quiet-button" onClick={() => setActive("Messages")}>Open inbox <span>→</span></button></section>

                <section className="panel side-panel video-panel"><div className="section-heading compact"><div><h2>Watch next</h2><p>Picked for your vibe</p></div><button className="plain-icon" onClick={() => setActive("Videos")} aria-label="Browse videos"><Clapperboard size={17} /></button></div>{videos.slice(0, 2).map((v) => <button className="mini-video" key={v.title} onClick={() => setActive("Videos")}><span className={`mini-video-art ${v.art}`}><span className="mini-play"><Play size={14} fill="currentColor" /></span><small>{v.duration}</small></span><span className="mini-video-copy"><strong>{v.title}</strong><small>{v.creator} · {v.views}</small></span></button>)}<button className="wide-quiet-button" onClick={() => setActive("Videos")}>Explore videos <span>→</span></button></section>

                <section className="live-card"><div className="live-card-top"><span className="live-pill"><i /> LIVE SOON</span><Radio size={18} /></div><h3>Your next big moment.</h3><p>Go live, bring your community, and make something together.</p><button onClick={() => showNotice("Livestreaming setup is coming in a later milestone.")}>Explore live <span>↗</span></button><div className="live-decoration">ON AIR</div></section>
                <div className="footer-links"><span>UNDERNET PREVIEW</span><span>·</span><button onClick={() => showNotice("Community guidelines will be added before public launch.")}>Guidelines</button><span>·</span><button onClick={() => showNotice("Privacy controls will be added before public launch.")}>Privacy</button><span>·</span><span>v0.1</span></div>
              </aside>
            </div>
          </div>
        ) : (
          <div className="section-placeholder">
            <div className="placeholder-icon">{active === "Messages" ? <MessagesSquare size={30} /> : active === "Videos" ? <Clapperboard size={30} /> : active === "Communities" ? <Users size={30} /> : active === "Live" ? <Radio size={30} /> : <Bookmark size={30} />}</div>
            <div className="eyebrow">UNDERNET / {active.toUpperCase()}</div><h1>{active === "Messages" ? "Your conversations." : active === "Videos" ? "A universe to watch." : active === "Communities" ? "Find your people." : active === "Live" ? "The stage is yours." : "Keep it close."}</h1>
            <p>{active === "Messages" ? "Private messages, group chats, and calls will live here." : active === "Videos" ? "Video uploads, channels, playlists, and livestreams are on the roadmap." : active === "Communities" ? "Join communities, share ideas, and build things together." : active === "Live" ? "Livestreaming and real-time audience chat are planned for a later step." : "Your saved posts and videos will be collected here."}</p>
            <div className="placeholder-feature-grid"><span><MessageCircle size={16} /> Real-time chat</span><span><Video size={16} /> Video calls</span><span><Clapperboard size={16} /> Video uploads</span><span><PhoneCall size={16} /> Screen sharing</span></div>
            <button className="primary-button" onClick={() => setActive("Home")}><Home size={16} /> Back to home</button>
          </div>
        )}
      </section>

      {notice && <div role="status" className="toast"><span className="toast-check">✦</span>{notice}<button onClick={() => setNotice("")} aria-label="Dismiss"><X size={15} /></button></div>}
    </main>
  );
}
