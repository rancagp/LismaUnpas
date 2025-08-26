"use client";

import { useState } from 'react';
import Container from '../common/Container';

export default function PendaftaranSection() {
  const [formData, setFormData] = useState({
    nama: '',
    nim: '',    
    email: '',
    noHp: '',
    jurusan: '',
    angkatan: '',
    pilihanUnit: '',
    alasan: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    alert('Pendaftaran berhasil dikirim! Kami akan menghubungi Anda segera.');
    // Reset form
    setFormData({
      nama: '',
      nim: '',
      email: '',
      noHp: '',
      jurusan: '',
      angkatan: '',
      pilihanUnit: '',
      alasan: '',
    });
  };

  return (
    <section id="daftar" className="py-20 bg-white">
      <Container>
        <div className="mx-auto max-w-4xl px-8 md:px-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Bergabung dengan LISMA
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Isi formulir berikut untuk mendaftar menjadi anggota LISMA.
            </p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="nama" className="block text-sm font-medium text-gray-700">
                  Nama Lengkap <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="nama"
                  name="nama"
                  value={formData.nama}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="nim" className="block text-sm font-medium text-gray-700">
                  NIM <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="nim"
                  name="nim"
                  value={formData.nim}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="noHp" className="block text-sm font-medium text-gray-700">
                  No. HP/WhatsApp <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  id="noHp"
                  name="noHp"
                  value={formData.noHp}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="jurusan" className="block text-sm font-medium text-gray-700">
                  Jurusan <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="jurusan"
                  name="jurusan"
                  value={formData.jurusan}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="angkatan" className="block text-sm font-medium text-gray-700">
                  Angkatan <span className="text-red-500">*</span>
                </label>
                <select
                  id="angkatan"
                  name="angkatan"
                  value={formData.angkatan}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  required
                >
                  <option value="">Pilih Angkatan</option>
                  {Array.from({length: 5}, (_, i) => new Date().getFullYear() - i).map(year => (
                    <option key={year} value={year}>{year}</option>
                  ))}
                </select>
              </div>
              
              <div className="sm:col-span-2">
                <label htmlFor="pilihanUnit" className="block text-sm font-medium text-gray-700">
                  Unit Kegiatan yang Diminati <span className="text-red-500">*</span>
                </label>
                <select
                  id="pilihanUnit"
                  name="pilihanUnit"
                  value={formData.pilihanUnit}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  required
                >
                  <option value="">Pilih Unit Kegiatan</option>
                  <option value="Tari Tradisional">Tari Tradisional</option>
                  <option value="Teater">Teater</option>
                  <option value="Musik Tradisional">Musik Tradisional</option>
                  <option value="Paduan Suara">Paduan Suara</option>
                  <option value="Seni Rupa">Seni Rupa</option>
                  <option value="Fotografi & Film">Fotografi & Film</option>
                </select>
              </div>
              
              <div className="sm:col-span-2">
                <label htmlFor="alasan" className="block text-sm font-medium text-gray-700">
                  Alasan Bergabung <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="alasan"
                  name="alasan"
                  rows={4}
                  value={formData.alasan}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  required
                />
              </div>
            </div>
            
            <div className="flex items-center">
              <input
                id="persetujuan"
                name="persetujuan"
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                required
              />
              <label htmlFor="persetujuan" className="ml-2 block text-sm text-gray-700">
                Saya menyatakan bahwa data yang diisi adalah benar dan siap mengikuti semua aturan yang berlaku di LISMA.
              </label>
            </div>
            
            <div className="text-center">
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-md bg-blue-600 px-8 py-3 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Daftar Sekarang
              </button>
            </div>
          </form>
        </div>
      </Container>
    </section>
  );
}
