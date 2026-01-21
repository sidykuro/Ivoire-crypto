import React, { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  ChevronDown,
  MessageCircle,
  Quote,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingUp,
  Users,
} from 'lucide-react'

function App() {
  const [openFaqIndex, setOpenFaqIndex] = useState(0)

  const faqs = useMemo(
    () => [
      {
        q: 'Est-ce que vous proposez des formations pour débutants ? ',
        a: "Oui. Nous avons un parcours clair pour démarrer (bases crypto, sécurité, choix des plateformes, gestion du risque) puis évoluer vers des stratégies plus avancées.",
      },
      {
        q: 'Quels sujets sont abordés dans la communauté ? ',
        a: "Marchés & actualités, analyse, gestion du risque, opportunités Web3, bonnes pratiques de sécurité et échanges entre membres.",
      },
      {
        q: 'Est-ce un service d\'investissement garanti ? ',
        a: "Non. La crypto comporte des risques. Notre mission est de vous former, de vous accompagner et de vous donner des méthodes structurées pour décider en connaissance de cause.",
      },
      {
        q: 'Comment rejoindre le groupe WhatsApp ? ',
        a: "Cliquez sur “Rejoindre la communauté” ou “Rejoindre gratuitement”. Vous serez redirigé vers le lien d\'invitation WhatsApp.",
      },
    ],
    [],
  )

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-ivoire-dark/70 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img
                src="/ivoircryp%20trans@4x.png"
                alt="Ivoire Crypto"
                className="h-12 sm:h-14 md:h-16 lg:h-18 w-auto"
                loading="eager"
              />
            </div>

            <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-white/80">
              <a className="hover:text-white transition-colors" href="#home">Accueil</a>
              <a className="hover:text-white transition-colors" href="#services">Services</a>
              <a className="hover:text-white transition-colors" href="#about">Mission</a>
              <a className="hover:text-white transition-colors" href="#faq">FAQ</a>
            </nav>

            <motion.a
              href="https://chat.whatsapp.com/BdHzFGypbbW9UxkiCmbNkc"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-ivoire-dark px-5 py-2.5 rounded-full font-semibold hover:bg-white/90 transition-all duration-300 flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Rejoindre la communauté</span>
              <ArrowRight className="w-4 h-4" />
            </motion.a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-36 md:pt-40 pb-20 px-6 bg-ivoire-dark relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-ivoire-violet/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 right-[-10%] w-[700px] h-[700px] bg-purple-600/10 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display tracking-tight text-white leading-[1.05]">
              Ensemble, démocratisons la Cryptomonnaie et le Web3
              <span className="text-white/70"> en Afrique francophone</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-white/70 leading-relaxed max-w-2xl mx-auto">
              Une expérience d\'apprentissage premium, une communauté active et une méthode claire pour
              comprendre, investir et progresser.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="https://chat.whatsapp.com/BdHzFGypbbW9UxkiCmbNkc"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-ivoire-dark px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/90 transition-all duration-300 inline-flex items-center justify-center space-x-3"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.98 }}
              >
                <MessageCircle className="w-5 h-5" />
                <span>Rejoindre la communauté</span>
              </motion.a>
              <motion.button
                className="border border-white/30 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition-all duration-300"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  const el = document.getElementById('about')
                  el?.scrollIntoView({ behavior: 'smooth', block: 'start' })
                }}
              >
                En savoir plus
              </motion.button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="mt-14 max-w-4xl mx-auto"
          >
            <div className="relative">
              <div className="rounded-[2rem] bg-white/5 border border-white/10 backdrop-blur-md shadow-2xl overflow-hidden">
                <div className="p-10 md:p-12">
                  <div className="grid md:grid-cols-[1fr_auto] gap-10 items-center">
                    <div>
                      <p className="text-white/70 font-medium">Web3 & Crypto</p>
                      <p className="mt-2 text-3xl md:text-4xl font-display tracking-tight text-white">
                        L'avenir de la finance, accessible.
                      </p>
                      <p className="mt-4 text-white/60 leading-relaxed">
                        Apprenez les bases, la sécurité, et les stratégies avec un cadre clair.
                      </p>
                    </div>
                    <div className="w-24 h-24 md:w-28 md:h-28 bg-gradient-to-r from-ivoire-violet to-purple-600 rounded-3xl flex items-center justify-center shadow-lg">
                      <TrendingUp className="w-12 h-12 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-6 scroll-mt-28 bg-white">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-display tracking-tight text-ivoire-dark mb-4">
              Nos Spécialisations
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Découvrez nos domaines d'expertise pour vous accompagner dans votre voyage Web3
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: TrendingUp,
                title: 'Cryptomonnaie',
                description: 'Apprenez à investir et trader les cryptomonnaies en toute sécurité'
              },
              {
                icon: Target,
                title: 'Trading',
                description: 'Maîtrisez les stratégies de trading avancées et l\'analyse technique'
              },
              {
                icon: BookOpen,
                title: 'Formation',
                description: 'Formations complètes adaptées à tous les niveaux, du débutant à l\'expert'
              },
              {
                icon: Users,
                title: 'Coaching',
                description: 'Accompagnement personnalisé pour atteindre vos objectifs financiers'
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100"
              >
                <div className="w-14 h-14 bg-gradient-to-r from-ivoire-violet to-purple-600 rounded-xl flex items-center justify-center mb-4">
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-ivoire-dark mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About / Mission */}
      <section id="about" className="py-24 px-6 scroll-mt-28 bg-white">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-ivoire-violet/10 text-ivoire-violet font-medium">
                <Sparkles className="w-4 h-4" />
                <span>git remote add origin https://github.com/sidykuro/Ivoire-crypto.git</span>
              </div>
              <h2 className="text-4xl font-display tracking-tight text-ivoire-dark mt-5 mb-4">
                Démocratiser l'accès à la richesse numérique
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Ivoire Crypto accompagne la communauté francophone d'Afrique avec une approche simple :
                une pédagogie claire, des méthodes structurées et une culture forte de la sécurité.
              </p>
              <div className="mt-8 grid sm:grid-cols-2 gap-4">
                {[
                  {
                    icon: ShieldCheck,
                    title: 'Sécurité d\'abord',
                    desc: 'Bonnes pratiques, gestion des risques et discipline de marché.',
                  },
                  {
                    icon: CheckCircle2,
                    title: 'Apprentissage concret',
                    desc: 'Des étapes claires, du niveau débutant jusqu\'aux stratégies avancées.',
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm"
                  >
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-ivoire-violet to-purple-600 flex items-center justify-center mb-3">
                      <item.icon className="w-5 h-5 text-white" />
                    </div>
                    <p className="font-semibold text-ivoire-dark">{item.title}</p>
                    <p className="text-gray-600 mt-1">{item.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-ivoire-violet/10 flex items-center justify-center">
                    <Target className="w-6 h-6 text-ivoire-violet" />
                  </div>
                  <div>
                    <p className="text-xl font-semibold text-ivoire-dark">Une méthode simple</p>
                    <p className="text-gray-600 mt-1">
                      Comprendre, pratiquer, progresser : vous avancez avec une roadmap et une communauté.
                    </p>
                  </div>
                </div>
                <div className="mt-8 grid gap-4">
                  {[
                    'Bases solides & mindset',
                    'Outils & sécurité (wallets, scams, bonnes pratiques)',
                    'Stratégies (DCA, gestion du risque, sorties)',
                  ].map((line, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-3 rounded-2xl bg-white border border-gray-100 p-4"
                    >
                      <div className="w-8 h-8 rounded-xl bg-gradient-to-r from-ivoire-violet to-purple-600 flex items-center justify-center">
                        <CheckCircle2 className="w-4 h-4 text-white" />
                      </div>
                      <p className="text-gray-700 font-medium">{line}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-ivoire-violet/10 rounded-full blur-2xl" />
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-purple-600/10 rounded-full blur-2xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="text-4xl font-display tracking-tight text-ivoire-dark mb-4">Comment ça marche</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Un parcours clair pour apprendre, investir et évoluer sereinement.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-6">
            {[
              {
                step: '01',
                title: 'Rejoignez la communauté',
                desc: 'Accédez au groupe WhatsApp et aux ressources d\'introduction.',
                icon: Users,
              },
              {
                step: '02',
                title: 'Formez-vous',
                desc: 'Apprenez les fondamentaux, la sécurité et les stratégies progressivement.',
                icon: BookOpen,
              },
              {
                step: '03',
                title: 'Passez à l\'action',
                desc: 'Mettez en place une méthode (DCA, gestion du risque) et suivez vos objectifs.',
                icon: TrendingUp,
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.08 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm"
              >
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-ivoire-violet to-purple-600 flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-sm font-semibold tracking-widest text-ivoire-violet/70">{item.step}</p>
                </div>
                <h3 className="text-xl font-semibold text-ivoire-dark mt-5">{item.title}</h3>
                <p className="text-gray-600 mt-2 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6 bg-white">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="text-4xl font-display tracking-tight text-ivoire-dark mb-4">Ils avancent avec nous</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Témoignages (placeholders) — à remplacer par vos retours clients réels.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-6">
            {[
              {
                name: 'Aïssata, Abidjan',
                quote: "J'ai enfin compris la sécurité et la gestion du risque. Les explications sont simples et concrètes.",
              },
              {
                name: 'Koffi, Bouaké',
                quote: "Le groupe est sérieux. On apprend vite, et surtout on évite les erreurs classiques.",
              },
              {
                name: 'Mariam, Dakar',
                quote: "Les stratégies sont claires. Je suis passé de la confusion à un plan d'investissement.",
              },
            ].map((t, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.08 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm"
              >
                <div className="w-12 h-12 rounded-2xl bg-ivoire-violet/10 flex items-center justify-center">
                  <Quote className="w-6 h-6 text-ivoire-violet" />
                </div>
                <p className="text-gray-700 mt-5 leading-relaxed">{t.quote}</p>
                <p className="mt-5 font-semibold text-ivoire-dark">{t.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24 px-6 scroll-mt-28 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-display tracking-tight text-ivoire-dark mb-4">FAQ</h2>
            <p className="text-xl text-gray-600">Les réponses aux questions les plus fréquentes.</p>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((item, idx) => {
              const isOpen = openFaqIndex === idx
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaqIndex(isOpen ? -1 : idx)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left"
                  >
                    <span className="font-semibold text-ivoire-dark">{item.q}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-ivoire-violet transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : 'rotate-0'
                      }`}
                    />
                  </button>
                  <motion.div
                    initial={false}
                    animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
                    transition={{ duration: 0.25 }}
                    className="px-6"
                    style={{ overflow: 'hidden' }}
                  >
                    <div className="pb-5 text-gray-600 leading-relaxed">{item.a}</div>
                  </motion.div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* WhatsApp CTA Section */}
      <section className="py-24 px-6 bg-ivoire-dark">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="rounded-[2rem] p-12 text-center text-white relative overflow-hidden border border-white/10 bg-white/5 backdrop-blur-md"
          >
            <div className="relative z-10">
              <MessageCircle className="w-16 h-16 mx-auto mb-6" />
              <h2 className="text-3xl lg:text-4xl font-display tracking-tight mb-4">
                Rejoignez notre communauté WhatsApp
              </h2>
              <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
                Accédez à des formations exclusives, des analyses quotidiennes et une communauté 
                passionnée de cryptomonnaies et Web3.
              </p>
              <motion.a
                href="https://chat.whatsapp.com/BdHzFGypbbW9UxkiCmbNkc"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-ivoire-dark px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/90 transition-all duration-300 inline-flex items-center space-x-3"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <MessageCircle className="w-5 h-5" />
                <span>Rejoindre gratuitement</span>
                <ArrowRight className="w-5 h-5" />
              </motion.a>
            </div>
            {/* Background decorative elements */}
            <div className="absolute top-0 left-0 w-full h-full opacity-20">
              <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-ivoire-violet/30 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-32 right-[-10%] w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-3xl"></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-ivoire-dark text-white py-12 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <img
                  src="/ivoircryp%20trans@4x.png"
                  alt="Ivoire Crypto"
                  className="h-14 w-auto"
                  loading="lazy"
                />
                <span className="font-semibold text-xl">Ivoire Crypto</span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Votre partenaire de confiance pour la démocratisation de la Web3 et des cryptomonnaies en Afrique francophone.
              </p>
            </div>
            <div className="text-right">
              <h3 className="font-semibold text-lg mb-4">Contact</h3>
              <p className="text-gray-400">
                Abidjan, Cocody<br />
                Côte d'Ivoire
              </p>
              <div className="mt-4">
                <a
                  href="https://chat.whatsapp.com/BdHzFGypbbW9UxkiCmbNkc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ivoire-violet hover:text-purple-400 transition-colors duration-300"
                >
                  Rejoindre sur WhatsApp →
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 Ivoire Crypto. Tous droits réservés.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
