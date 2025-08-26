"use client";

import Container from '../common/Container';
import { motion } from 'framer-motion';

const units = [
  {
    name: 'Tari Tradisional',
    description: 'Mengembangkan dan melestarikan seni tari tradisional Indonesia dengan kreasi kontemporer.',
    icon: '🕺',
  },
  {
    name: 'Teater',
    description: 'Wadah berekspresi melalui seni peran dengan berbagai pementasan teater modern dan tradisional.',
    icon: '🎭',
  },
  {
    name: 'Musik Tradisional',
    description: 'Menggali dan mengembangkan musik tradisional dengan sentuhan modern yang inovatif.',
    icon: '🎵',
  },
  {
    name: 'Paduan Suara',
    description: 'Mengasah vokal dan harmoni dalam paduan suara dengan berbagai repertoar musik.',
    icon: '🎤',
  },
  {
    name: 'Seni Rupa',
    description: 'Eksplorasi kreativitas melalui berbagai media seni rupa seperti lukis, patung, dan digital art.',
    icon: '🎨',
  },
  {
    name: 'Fotografi & Film',
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
        <div className="px-8 md:px-12">
          <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Unit Kegiatan Kami</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Temukan unit kegiatan seni yang sesuai dengan minat dan bakat Anda.
            </p>
          </div>
          
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:max-w-none">
            {units.map((unit, index) => (
              <motion.div
                key={unit.name}
                className="flex flex-col rounded-2xl bg-white p-8 shadow-lg ring-1 ring-gray-900/5 transition-all hover:shadow-xl"
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={index}
              >
                <div className="text-4xl mb-4">{unit.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900">{unit.name}</h3>
                <p className="mt-2 text-gray-600">{unit.description}</p>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <a
              href="#"
              className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
            >
              Lihat semua unit kegiatan
              <svg className="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
