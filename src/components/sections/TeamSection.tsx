import Container from '../common/Container';
import Image from 'next/image';

const team = [
  {
    name: 'Budi Santoso',
    role: 'Ketua Umum',
    image: '/images/team/budi-santoso.jpg',
  },
  {
    name: 'Dewi Lestari',
    role: 'Sekretaris Umum',
    image: '/images/team/dewi-lestari.jpg',
  },
  {
    name: 'Ahmad Fauzi',
    role: 'Bendahara Umum',
    image: '/images/team/ahmad-fauzi.jpg',
  },
  {
    name: 'Siti Rahayu',
    role: 'Ketua 1',
    image: '/images/team/siti-rahayu.jpg',
  },
  {
    name: 'Budi Santoso',
    role: 'Ketua 2',
    image: '/images/team/budi-santoso.jpg',
  },
  {
    name: 'Dewi Lestari',
    role: 'Ketua 3',
    image: '/images/team/dewi-lestari.jpg',
  },
  {
    name: 'Ahmad Fauzi',
    role: 'Koordinator Tesas',
    image: '/images/team/ahmad-fauzi.jpg',
  },
  {
    name: 'Siti Rahayu',
    role: 'Wakil Koordinator Tesas',
    image: '/images/team/siti-rahayu.jpg',
  },
  {
    name: 'Budi Santoso',
    role: 'Koordinator KDS',
    image: '/images/team/budi-santoso.jpg',
  },
  {
    name: 'Dewi Lestari',
    role: 'Wakil Koordinator KDS',
    image: '/images/team/dewi-lestari.jpg',
  },
  {
    name: 'Ahmad Fauzi',
    role: 'Koordinator PSM',
    image: '/images/team/ahmad-fauzi.jpg',
  },
  {
    name: 'Siti Rahayu',
    role: 'Wakil Koordinator Psm',
    image: '/images/team/siti-rahayu.jpg',
  },
  {
    name: 'Budi Santoso',
    role: 'Koordinator Takre',
    image: '/images/team/budi-santoso.jpg',
  },
  {
    name: 'Dewi Lestari',
    role: 'Koordinator FG',
    image: '/images/team/dewi-lestari.jpg',
  },
  {
    name: 'Dewi Lestari',
    role: 'Sarana Prasarana',
    image: '/images/team/dewi-lestari.jpg',
  },
  {
    name: 'Ahmad Fauzi',
    role: 'Digital Content',
    image: '/images/team/ahmad-fauzi.jpg',
  },
  {
    name: 'Siti Rahayu',
    role: 'Humas Internal',
    image: '/images/team/siti-rahayu.jpg',
  },
  {
    name: 'Budi Santoso',
    role: 'Humas Eksternal',
    image: '/images/team/budi-santoso.jpg',
  },
];

export default function TeamSection() {
  return (
    <section id="tim" className="py-20 bg-white">
      <Container className="px-8 md:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Dewan Pengurus Harian</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Dewan Pengurus Harian LISMA 2025/2026.
            </p>
          </div>
          
          <div className="mx-auto mt-16">
            {/* First 16 members in 4x4 grid */}
            <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-4">
              {team.slice(0, 16).map((person, index) => (
                <div key={`${person.name}-${person.role}-${index}`} className="flex flex-col items-center">
                  <div className="relative h-48 w-48 overflow-hidden rounded-full bg-gray-100">
                    <Image
                      src={person.image}
                      alt={person.name}
                      width={192}
                      height={192}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">
                    {person.name}
                  </h3>
                  <p className="text-base leading-7 text-blue-600">{person.role}</p>
                </div>
              ))}
            </div>
            
            {/* Last 2 members centered */}
            <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-16">
              <div className="hidden sm:block"></div> {/* Empty div for spacing */}
              {team.slice(16).map((person, index) => (
                <div key={`${person.name}-${person.role}-${index + 16}`} className="flex flex-col items-center">
                  <div className="relative h-48 w-48 overflow-hidden rounded-full bg-gray-100">
                    <Image
                      src={person.image}
                      alt={person.name}
                      width={192}
                      height={192}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">
                    {person.name}
                  </h3>
                  <p className="text-base leading-7 text-blue-600">{person.role}</p>
                </div>
              ))}
              <div className="hidden sm:block"></div> {/* Empty div for spacing */}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
