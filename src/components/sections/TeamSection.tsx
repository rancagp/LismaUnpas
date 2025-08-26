import Container from '../common/Container';
import Image from 'next/image';

const team = [
  {
    name: 'Ahmad Fauzi',
    role: 'Ketua Umum',
    image: '/images/team/ahmad-fauzi.jpg',
  },
  {
    name: 'Siti Rahayu',
    role: 'Wakil Ketua',
    image: '/images/team/siti-rahayu.jpg',
  },
  {
    name: 'Budi Santoso',
    role: 'Sekretaris',
    image: '/images/team/budi-santoso.jpg',
  },
  {
    name: 'Dewi Lestari',
    role: 'Bendahara',
    image: '/images/team/dewi-lestari.jpg',
  },
];

export default function TeamSection() {
  return (
    <section id="tim" className="py-20 bg-white">
      <Container>
        <div className="px-8 md:px-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Tim Kami</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Berikut adalah tim inti yang mengelola kegiatan LISMA.
            </p>
          </div>
          
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-4 lg:max-w-none">
            {team.map((person) => (
              <div key={person.name} className="flex flex-col items-center">
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
          
          <div className="mt-12 text-center">
            <a
              href="#"
              className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
            >
              Lihat seluruh pengurus
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
