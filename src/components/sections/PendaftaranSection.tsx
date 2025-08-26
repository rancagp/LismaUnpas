"use client";

import Container from '../common/Container';

export default function PendaftaranSection() {
  return (
    <section id="daftar" className="py-12 bg-lisma-text">
      <Container>
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-white text-center md:text-left">
            <h2 className="text-2xl font-bold sm:text-3xl">
              Pendaftaran Anggota Baru
            </h2>
            <p className="text-blue-100 mt-2 text-sm sm:text-base">
              UDAH DIBUKA NIH!
            </p>
          </div>
          <a 
            href="#" 
            className="px-8 py-3 bg-white text-lisma-text font-semibold rounded-lg hover:bg-gray-100 transition-colors whitespace-nowrap"
          >
            Daftar Ah
          </a>
        </div>
      </Container>
    </section>
  );
}
