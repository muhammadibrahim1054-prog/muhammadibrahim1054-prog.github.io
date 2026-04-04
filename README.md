# Muhammad Ibrahim — Personal Site

A clean, editorial personal website with a static landing page and a blog section. Built with plain HTML, CSS, and JavaScript — no frameworks, no build tools. Ready for GitHub Pages.

## 🚀 Deploying to GitHub Pages

### Option A — Automatic (Recommended)

1. Create a new GitHub repository named `yourusername.github.io`
2. Push all files to the `main` branch
3. Go to **Settings → Pages**
4. Set Source to `main` branch, root folder `/`
5. Click **Save** — your site will be live at `https://yourusername.github.io`

### Option B — Project Repository

1. Create any repository (e.g. `my-site`)
2. Push all files
3. Go to **Settings → Pages → Source → main / root**
4. Site will be at `https://yourusername.github.io/my-site/`

---

## ✍️ Adding a New Blog Post

1. Duplicate `blog/post-1.html` and rename it (e.g. `post-5.html`)
2. Update the title, date, category, and body content inside the file
3. Open `assets/js/main.js` and add your post to the `posts` array:

```js
{
  id: 5,
  title: "Your Post Title",
  excerpt: "A short summary of what the post is about.",
  category: "Mathematics",   // Mathematics | Writing | Development | Reflection
  date: "2026-04-11",       // YYYY-MM-DD
  file: "blog/post-5.html",
}
```

4. Do the same in `blog/index.html` (the `posts` array near the bottom of the `<script>` tag)
5. Push to GitHub — done!

---

## 🎨 Customising

- **Personal info**: Edit `index.html` directly (name, bio, stats, contact links)
- **Colors**: Change CSS variables at the top of `assets/css/style.css`
- **Fonts**: Swap the Google Fonts import link in any HTML file

---

## 📁 File Structure

```
personal-site/
├── index.html              ← Landing page (home)
├── _config.yml             ← GitHub Pages config
├── assets/
│   ├── css/
│   │   ├── style.css       ← Main styles
│   │   └── blog.css        ← Blog-specific styles
│   └── js/
│       └── main.js         ← Animations, nav, post rendering
└── blog/
    ├── index.html          ← All posts listing
    ├── post-1.html         ← Sample post (Boolean Algebra)
    ├── post-2.html         ← Add your own posts here
    └── ...
```
