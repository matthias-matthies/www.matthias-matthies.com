/** @type {import('next').NextConfig} */
const nextConfig = {}

// module.exports = nextConfig

module.exports = {
    serverRuntimeConfig: {
        VERCEL_ENV: process.env.VERCEL_ENV,
        VERCEL_URL: process.env.VERCEL_URL,
        NEXT_PUBLIC_VERCEL_URL: process.env.NEXT_PUBLIC_VERCEL_URL,
    },
    publicRuntimeConfig: {
        // Add your public runtime configurations here
    },
    webpack(config) {
        config.resolve.modules.push(__dirname);
        return config;
    },
};
