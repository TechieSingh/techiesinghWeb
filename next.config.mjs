/** @type {import('next').NextConfig} */

const isprod = process.env.NODE_ENV==='production';

const nextConfig = {
    basePath: isprod ? '/techiesinghweb':'',
};



export default nextConfig;


