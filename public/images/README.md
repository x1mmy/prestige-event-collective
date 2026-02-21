# Images

Put all **images** for the site here. Next.js serves files from `public/` at the site root.

## Suggested files

- **Gallery (3×3):** `gallery-1.jpg` … `gallery-9.jpg` (or your naming)
- **About:** `about.jpg` (artist/DJ photo)
- **Services header:** `services-dj.jpg` (DJ at event)

## Usage in code

- **Regular `<img>`:** `src="/images/gallery-1.jpg"`
- **Next.js `<Image>`:**  
  `import Image from "next/image"`  
  `<Image src="/images/about.jpg" alt="..." width={600} height={750} />`  
  (or use `fill` with a positioned parent)
