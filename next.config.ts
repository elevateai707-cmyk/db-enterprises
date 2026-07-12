import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: [
    "@agentic/agent-core",
    "@agentic/agent-ui",
    "@agentic/design-system",
    "@agentic/forms",
    "@agentic/seo",
    "@agentic/analytics",
    "@agentic/email",
    "@agentic/shared-types",
    "@agentic/security",
  ],
};

export default nextConfig;
