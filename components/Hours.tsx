'use client'

import { siteConfig } from '@/data/site'

export default function Hours() {
  return (
    <section id="horarios" className="py-20 bg-primary-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 animate-fade-in-up">
            <span className="inline-block px-4 py-2 mb-4 bg-accent/10 border border-accent/30 rounded-full text-accent text-sm font-medium">
              Horário de Funcionamento
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-white mb-4">
              Quando <span className="text-accent">Atendemos</span>
            </h2>
          </div>

          {/* Hours Card */}
          <div className="bg-primary-dark border border-gray-800 rounded-xl p-8 lg:p-12 animate-fade-in-up">
            <div className="space-y-6">
              {/* Weekdays */}
              <div className="flex items-center justify-between py-4 border-b border-gray-800">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-accent/10 border border-accent/30 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-accent"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Segunda a Sexta</h3>
                    <p className="text-gray-400">Dias úteis</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-accent text-xl font-bold">
                    {siteConfig.hours.weekdays.split(': ')[1]}
                  </p>
                </div>
              </div>

              {/* Saturday */}
              <div className="flex items-center justify-between py-4 border-b border-gray-800">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-accent/10 border border-accent/30 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-accent"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Sábado</h3>
                    <p className="text-gray-400">Finais de semana</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-accent text-xl font-bold">
                    {siteConfig.hours.saturday.split(': ')[1]}
                  </p>
                </div>
              </div>

              {/* Sunday */}
              <div className="flex items-center justify-between py-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-accent/10 border border-accent/30 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-accent"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Domingo</h3>
                    <p className="text-gray-400">Fechado</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-gray-500 text-xl font-bold">
                    {siteConfig.hours.sunday.split(': ')[1]}
                  </p>
                </div>
              </div>
            </div>

            {/* Note */}
            <div className="mt-8 pt-8 border-t border-gray-800">
              <p className="text-gray-400 text-center">
                <span className="text-accent font-semibold">Dica:</span> Recomendamos agendar
                com antecedência, especialmente aos sábados.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

