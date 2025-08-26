"use client";

import Container from '../common/Container';
import { motion } from 'framer-motion';

const units = [
  {
    name: 'Kesenian Daerah Sunda',
    description: 'Mengembangkan dan melestarikan seni tari tradisional Indonesia dengan kreasi kontemporer.',
    icon: '🕺',
  },
  {
    name: 'Teater & Sastra',
    description: 'Wadah berekspresi melalui seni peran dengan berbagai pementasan teater modern dan tradisional.',
    icon: '🎭',
  },
  {
    name: 'Paduan Suara & Musik',
    description: 'Menggali dan mengembangkan musik tradisional dengan sentuhan modern yang inovatif.',
    icon: '🎵',
  },
  {
    name: 'Tari Kreasi',
    description: 'Mengasah vokal dan harmoni dalam paduan suara dengan berbagai repertoar musik.',
    icon: '🎤',
  },
  {
    name: 'Fotografi',
    description: 'Belajar teknik fotografi dan pembuatan film dari dasar hingga produksi.',
    icon: '🎬',
  },
];

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
    },
  }),
} as const;

export default function UnitSection() {
  return (
    <section id="unit" className="py-20 bg-gray-50">
      <Container>
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Unit Kegiatan Kami</h2>
              <p className="mt-4 text-lg leading-8 text-gray-600">
              Lingkung Seni Mahasiswa memilik 5 unit kesenian, sebagai berikut:
              </p>
            </div>
            
            <div className="mx-auto mt-16 max-w-5xl space-y-8">
              {/* First Row - 3 Units */}
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
                {units.slice(0, 3).map((unit, index) => (
                  <motion.div
                    key={unit.name}
                    className="flex flex-col items-center text-center rounded-2xl bg-white p-6 shadow-sm hover:shadow-md transition-shadow duration-200 border border-gray-100 h-full"
                    variants={fadeIn}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={index}
                  >
                    <div className="flex items-center justify-center w-16 h-16 rounded-full bg-lisma/10 text-lisma text-2xl mb-4">
                      {unit.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">{unit.name}</h3>
                    <p className="mt-2 text-sm text-gray-600">{unit.description}</p>
                  </motion.div>
                ))}
              </div>
              
              {/* Second Row - 2 Units (centered) */}
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:max-w-2xl sm:mx-auto">
              {units.slice(3).map((unit, index) => (
                <motion.div
                  key={unit.name}
                  className="flex flex-col items-center text-center rounded-2xl bg-white p-6 shadow-sm hover:shadow-md transition-shadow duration-200 border border-gray-100 h-full"
                  variants={fadeIn}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={index + 3}
                >
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-lisma/10 text-lisma text-2xl mb-4">
                    {unit.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">{unit.name}</h3>
                  <p className="mt-2 text-sm text-gray-600">{unit.description}</p>
                </motion.div>
              ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
