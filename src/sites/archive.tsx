'use client';
import React from 'react';
import { ArrowRight, ArrowLeft, FileText } from 'lucide-react';

interface ArchiveItem {
  title: string;
  file: string;
  year: number;
}

const archiveData: ArchiveItem[] = [
{ title: "Week 1 Report", file: "/archive/2025_week1.pdf", year: 2025 },
{ title: "Week 2 Report", file: "/archive/2025_week2.pdf", year: 2025 }
];

const groupedByYear = archiveData.reduce((acc: Record<number, ArchiveItem[]>, item) => {
  if (!acc[item.year]) acc[item.year] = [];
  acc[item.year].push(item);
  return acc;
}, {});

const Archive: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 font-inter relative overflow-hidden">
      {/* Floating Background Decor */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 pattern-grid opacity-10" />
        <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-yellow-400/20 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-blue-600/20 to-transparent" />
        <div className="absolute top-10 left-5 w-40 h-40 bg-yellow-400 rounded-xl rotate-12 opacity-20 animate-float" />
        <div className="absolute top-24 left-1/2 -translate-x-1/2 w-32 h-20 bg-blue-600 rounded-lg -rotate-6 opacity-20 animate-float delay-100" />
        <div className="absolute bottom-16 left-1/2 -translate-x-1/2 w-24 h-24 bg-yellow-400 rounded-lg rotate-12 opacity-20 animate-float delay-500" />
        <div className="absolute bottom-10 right-10 w-16 h-16 bg-blue-600 rounded-md -rotate-6 opacity-20 animate-float delay-600" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20">
         <div className="mb-8">
          <button
            onClick={() => window.location.reload()}
            className="summer-button inline-flex items-center gap-2 text-sm px-6 py-3"
          >
            <ArrowLeft size={18} />
            Back
          </button>
        </div>
        <h1 className="text-5xl md:text-6xl font-black text-center mb-16 text-blue-600 drop-shadow">
          Archive
        </h1>

        <div className="space-y-16">
          {Object.keys(groupedByYear)
            .sort((a, b) => Number(b) - Number(a))
            .map((year) => (
              <div key={year} className="space-y-6">
                <h2 className="text-3xl font-black text-yellow-400">{year}</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  {groupedByYear[Number(year)].map((item, i) => (
                    <div
                      key={i}
                      className={`${i % 2 === 0 ? 'summer-card' : 'tlf-card'} bg-white p-6 md:p-8 h-full`}
                    >
                      <div className="flex items-center gap-4 mb-4">
                        <FileText className={`h-10 w-10 ${i % 2 === 0 ? 'text-yellow-400' : 'text-blue-600'}`} />
                        <h3 className="text-xl font-bold text-black">{item.title}</h3>
                      </div>
                      <p className="text-gray-600 mb-4">
                        Archived in <strong>{year}</strong>
                      </p>
                      <a
                        href={item.file}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center gap-2 font-semibold text-base ${
                          i % 2 === 0
                            ? 'text-yellow-500 hover:text-yellow-600'
                            : 'text-blue-600 hover:text-blue-700'
                        }`}
                      >
                        View PDF <ArrowRight size={18} />
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Archive;