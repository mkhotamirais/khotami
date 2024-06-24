export default function LandingPage() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-white shadow-lg">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <div className="text-gray-800 font-bold text-xl">Logo atau Nama Situs</div>
          <nav className="space-x-4">
            <a href="#" className="text-gray-800 hover:text-gray-900">
              Home
            </a>
            <a href="#" className="text-gray-800 hover:text-gray-900">
              About
            </a>
            <a href="#" className="text-gray-800 hover:text-gray-900">
              Services
            </a>
            <a href="#" className="text-gray-800 hover:text-gray-900">
              Contact
            </a>
          </nav>
        </div>
      </header>
      <main className="container mx-auto px-4 py-8">
        <section className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Selamat Datang di Situs Kami</h1>
          <p className="text-lg text-gray-700 mb-8">Deskripsi singkat tentang produk atau layanan Anda.</p>
          <a href="#" className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-bold inline-block">
            Cari Tahu Lebih Lanjut
          </a>
        </section>
      </main>
      <footer className="bg-gray-800 text-white text-center py-4">
        <p>&copy; 2024 Nama Situs Anda. All rights reserved.</p>
      </footer>
    </div>
  );
}
