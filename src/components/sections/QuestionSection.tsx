"use client";

import { useState } from 'react';
import Container from '../common/Container';

const faqs = [
  {
    question: 'Siapa cewe tercantik di LISMA ?',
    answer:
      'LISMA (Lingkung Seni Mahasiswa) adalah unit kegiatan mahasiswa di Universitas Pasundan yang berfokus pada pengembangan bakat seni mahasiswa dalam berbagai bidang seperti tari, musik, teater, dan seni rupa.',
  },
  {
    question: 'Bagaimana cara bergabung dengan LISMA?',
    answer:
      'Anda bisa mendaftar melalui formulir pendaftaran online di website ini atau datang langsung ke sekretariat LISMA di Gedung Student Center Lt. 2 Universitas Pasundan pada jam kerja.',
  },
  {
    question: 'Apakah ada biaya pendaftaran?',
    answer:
      'Ada biaya pendaftaran sebesar Rp 50.000 untuk biaya administrasi dan mendapatkan kartu anggota. Biaya ini hanya dibayarkan sekali saat mendaftar.',
  },
  {
    question: 'Apa saja unit kegiatan yang ada di LISMA?',
    answer:
      'LISMA memiliki beberapa unit kegiatan antara lain Tari Tradisional, Teater, Musik Tradisional, Paduan Suara, Seni Rupa, dan Fotografi & Film.',
  },
  {
    question: 'Apakah ada jadwal latihan rutin?',
    answer:
      'Ya, setiap unit memiliki jadwal latihan rutin yang berbeda-beda. Informasi jadwal lengkap bisa dilihat di papan pengumuman LISMA atau melalui media sosial resmi kami.',
  },
];

export default function QuestionSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <Container>
        <div className="mx-auto max-w-3xl divide-y divide-gray-900/10 px-8 md:px-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Pertanyaan yang Sering Diajukan
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Temukan jawaban atas pertanyaan umum seputar LISMA dan kegiatan kami.
            </p>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="overflow-hidden rounded-lg bg-white shadow">
                <button
                  className="flex w-full items-center justify-between p-6 text-left focus:outline-none"
                  onClick={() => toggleAccordion(index)}
                  aria-expanded={openIndex === index}
                  aria-controls={`faq-${index}`}
                >
                  <span className="text-lg font-medium text-gray-900">{faq.question}</span>
                  <svg
                    className={`h-6 w-6 transform transition-transform duration-200 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                <div
                  id={`faq-${index}`}
                  className={`px-6 pb-6 pt-0 transition-all duration-300 ${
                    openIndex === index ? 'block' : 'hidden'
                  }`}
                >
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">
              Masih ada pertanyaan lain?
            </p>
            <a
              href="#"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Hubungi Kami
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
