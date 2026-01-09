'use client'

import { siteConfig } from '@/data/site'

export default function Location() {
  const mapsUrl = `https://www.google.com/maps?q=${encodeURIComponent(siteConfig.address.full)}&output=embed`

  return (
    <section id="localizacao" className="py-20 bg-primary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <span className="inline-block px-4 py-2 mb-4 bg-accent/10 border border-accent/30 rounded-full text-accent text-sm font-medium">
            Onde Estamos
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-white mb-4">
            Nossa <span className="text-accent">Localização</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Venha nos visitar em um ambiente aconchegante e moderno
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Endereço */}
          <div className="space-y-6 animate-fade-in-up">
            <div className="bg-primary-dark border border-gray-800 rounded-xl p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-accent/10 border border-accent/30 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-accent"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Endereço</h3>
                  <p className="text-gray-400 leading-relaxed">
                    {siteConfig.address.street}
                    <br />
                    {siteConfig.address.city}, {siteConfig.address.state} - {siteConfig.address.zip}
                  </p>
                </div>
              </div>

              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(siteConfig.address.full)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-accent hover:bg-accent-light text-primary font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                Abrir no Google Maps
              </a>
            </div>
          </div>

          {/* Mapa */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="relative w-full h-[400px] lg:h-full min-h-[400px] rounded-xl overflow-hidden border border-gray-800">
              <iframe
                src={mapsUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização da barbearia"
                className="absolute inset-0"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

