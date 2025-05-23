# IIIT Delhi Summer Camp Website

Website for the IIIT Delhi Summer Camp and “Teach Like a Friend” (TLF) program. Built using React + Vite. The site showcases the camp overview, weekly goals, schedule, and team details. No backend or donation features are included.  
It includes dynamic sections like schedule and team showcase, with thematic intros and a clean UI. It is SEO-friendly and designed for an engaging participant experience.

MIT Licensed.

## 🛠️ Tech Stack

- React  
- Vite  
- TailwindCSS  
- FramerMotion  
- LucideReact  

## 🖼️ Preview

| Home Page | TLF Intro | Summer Intro |
|-----------|-----------|---------------|
| ![Home Page](Preview/Home%20Page.png) | ![TLF Intro](Preview/TLF%20Intro.png) | ![Summer Intro](Preview/Summer%20Intro.png) |

## 🚀 Running Locally

Install dependencies:

```bash
npm install
```

Start development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Serve production build locally:

```bash
npx serve -s dist
```

---

## 🚩 Deployment & Hosting

The production build was deployed to IIIT Delhi’s Apache web server.  
Using my skills in Linux, SSH, and web hosting, I configured the Apache server, managed secure file transfers, and ensured the site was properly hosted.

Deployment involved:
- Building the optimized static site using:
  ```bash
  npm run build
  ```
- Uploading the contents of the `dist` folder via SCP:
  ```bash
  scp -oHostKeyAlgorithms=+ssh-rsa -oPubkeyAcceptedKeyTypes=+ssh-rsa -r "dist/*" user@your-server-domain:/path/to/remote/deployment/folder
  ```

Apache was already configured to serve static files from the specified path, enabling public access to the hosted site.

---

© IIIT Delhi Summer Camp — MIT License
