import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      new URL("https://cms.print3d.hitinnovations.lk/assets/**"),
    ],
  },
};

export default nextConfig;
