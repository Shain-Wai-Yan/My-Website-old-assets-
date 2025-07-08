export default [
  "strapi::logger",
  "strapi::errors",
  {
    name: "strapi::security",
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          "script-src": [
            "'self'",
            "'unsafe-inline'",
            "*.cloudflare.com",
            "*.workers.dev",
          ],
          "img-src": [
            "'self'",
            "data:",
            "blob:",
            "*.shainwaiyan.com",
            "res.cloudinary.com",
            "*.workers.dev",
          ],
          "connect-src": [
            "'self'",
            "https:",
            "*.shainwaiyan.com",
            "*.workers.dev",
          ],
          "frame-src": ["'self'", "*.youtube.com", "*.vimeo.com"],
          "object-src": ["'none'"],
          "base-uri": ["'self'"],
          "form-action": ["'self'"],
          "frame-ancestors": ["'none'"],
        },
      },
    },
  },
  {
    name: "strapi::cors",
    config: {
      origin: [
        // Production domains
        "https://www.shainwaiyan.com",
        "https://shainwaiyan.com",
        "https://api.shainwaiyan.com",

        // Cloudflare Workers
        "https://crawler-detector-and-ssr-ssg-functioner.shainwaiyan2002.workers.dev",
        "https://*.workers.dev",

        // Development environments
        "http://localhost:3000",
        "http://localhost:1337",
        "http://127.0.0.1:5500",
        "http://localhost:5500",
        "https://personal-web-deploy.vercel.app",

        // Fallback/legacy
        "http://www.shainwaiyan.com",
        "http://shainwaiyan.com",
        "http://api.shainwaiyan.com",
      ],
      headers: [
        "Content-Type",
        "Authorization",
        "X-Frame-Options",
        "X-Content-Type-Options",
        "X-XSS-Protection",
        "Content-Security-Policy",
        "CF-Connecting-IP",
        "CF-IPCountry",
        "CF-Request-ID",
        "CDN-Loop",
        "CF-Ray",
        "CF-Worker",
        "Accept",
        "Origin",
        "Cache-Control",
        "Pragma",
        "Expires",
        "If-Modified-Since",
        "If-None-Match",
        "ETag",
        "Last-Modified",
        "Content-Length",
        "Content-Range",
        "Range",
      ],
      methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "HEAD", "OPTIONS"],
      credentials: true,
      maxAge: 86400,
      preflightContinue: false,
      keepHeaderOnError: true,
    },
  },
  "strapi::poweredBy",
  "strapi::query",
  {
    name: "strapi::body",
    config: {
      jsonLimit: "10mb",
      formLimit: "10mb",
      textLimit: "10mb",
      formidable: {
        maxFileSize: 250 * 1024 * 1024, // 250MB
      },
    },
  },
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
  {
    name: "global::cloudflare-proxy",
    config: {
      enableProxyHeaders: true,
      trustedProxies: [
        "173.245.48.0/20",
        "103.21.244.0/22",
        "103.22.200.0/22",
        "103.31.4.0/22",
        "141.101.64.0/18",
        "108.162.192.0/18",
        "190.93.240.0/20",
        "188.114.96.0/20",
        "197.234.240.0/22",
        "198.41.128.0/17",
        "162.158.0.0/15",
        "104.16.0.0/13",
        "104.24.0.0/14",
        "172.64.0.0/13",
        "131.0.72.0/22",
      ],
    },
  },
  {
    name: "global::rate-limit",
    config: {
      interval: 60 * 1000, // 1 minute
      max: 1000,
      userAgentFilter: [
        "googlebot",
        "bingbot",
        "facebookexternalhit",
        "twitterbot",
        "slackbot",
        "whatsapp",
      ],
    },
  },
  {
    name: "global::hsts",
    config: {
      maxAge: 31536000,
      includeSubDomains: true,
      preload: true,
    },
  },
  {
    name: "global::read-only",
    config: {},
  },
];
