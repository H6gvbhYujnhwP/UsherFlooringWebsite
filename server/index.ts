import express from "express";
import { createServer } from "http";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const server = createServer(app);

  // 301 Redirects for old website pages (Romford-era URLs)
  // These tell Google the old pages have permanently moved to the new ones
  const redirects: Record<string, string> = {
    "/services": "/carpets",
    "/gallery": "/showroom",
    "/about-us": "/about",
    // Common old URL patterns that might exist
    "/carpets-romford": "/carpets",
    "/services-carpets-romford": "/carpets",
    "/contact-romford": "/contact",
    "/gallery-romford": "/showroom",
    "/about-romford": "/about",
    "/flooring": "/",
    "/flooring-romford": "/",
    "/home": "/",
  };

  // Apply 301 redirects before static file serving
  app.use((req, res, next) => {
    const redirectTo = redirects[req.path.toLowerCase()];
    if (redirectTo) {
      return res.redirect(301, redirectTo);
    }
    next();
  });

  // Serve static files from dist/public in production
  const staticPath =
    process.env.NODE_ENV === "production"
      ? path.resolve(__dirname, "public")
      : path.resolve(__dirname, "..", "dist", "public");

  app.use(express.static(staticPath));

  // Handle client-side routing - serve index.html for all routes
  app.get("*", (_req, res) => {
    res.sendFile(path.join(staticPath, "index.html"));
  });

  const port = process.env.PORT || 3000;

  server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/`);
  });
}

startServer().catch(console.error);
