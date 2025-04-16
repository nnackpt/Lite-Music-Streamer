/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    webpack: (config) => {
        return config;
    },
    images: {
        domains: ['i.ytimg.com', 'img.youtube.com'],
    },
    env: {
        NEXT_PUBLIC_YOUTUBE_API_KEY: process.env.NEXT_PUBLIC_YOUTUBE_API_KEY,
    },
};

export default nextConfig;