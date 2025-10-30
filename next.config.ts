import createNextMdx from "@next/mdx";
import type { NextConfig } from "next";

const withMDX = createNextMdx({
  extension: /\.mdx?$/,
});

const nextConfig: NextConfig = {
  /* config options here */
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
  webpack: (config, { isServer }) => {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      "next-mdx-remote/rsc": require.resolve("next-mdx-remote/rsc"),
    };
    return config;
  },
};

export default withMDX(nextConfig);
