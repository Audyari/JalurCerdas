export const metadata = {
  title: 'Jalur Cerdas',
  description: 'Aplikasi Jalur Cerdas',
}

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body style={{ margin: 0, padding: '20px' }}>
        {children}
      </body>
    </html>
  )
}