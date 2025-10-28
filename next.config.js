/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // Jika menggunakan Next.js 16 dengan Turbopack, bisa mengatur konfigurasi spesifik
    // Untuk saat ini, konfigurasi default sudah cukup
  },
  // Hapus output: 'export' karena digunakan revalidate di page
  trailingSlash: false, // Next.js akan menangani routing otomatis
  images: {
    unoptimized: true // Jika tidak menggunakan next/image atau hosting sendiri
  }
};

module.exports = nextConfig;