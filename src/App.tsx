/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { motion } from "motion/react";
import {
  Phone,
  MessageCircle,
  Home,
  Building2,
  Wrench,
  ShieldCheck,
  Leaf,
  CheckCircle2,
  Instagram,
  Facebook,
  Twitter
} from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const GITHUB_USER = "maybelinaa15-dev";
const REPO_NAME = "dazzling";
// Usamos @main o @master dependiendo de tu rama principal
const CDN_BASE = `https://cdn.jsdelivr.net/gh/${GITHUB_USER}/${REPO_NAME}@main/public`;

const DAZZLING_ASSETS = {
  logo: `${CDN_BASE}/dazzling.png`,
  row1: [
    `${CDN_BASE}/imagenes/carrousel1.webp`,
    `${CDN_BASE}/imagenes/carrousel2.webp`,
    `${CDN_BASE}/imagenes/carrousel3.webp`,
    `${CDN_BASE}/imagenes/carrousel4.webp`,
    `${CDN_BASE}/imagenes/carrousel5.webp`,
    `${CDN_BASE}/imagenes/carrousel6.webp`,
    `${CDN_BASE}/imagenes/carrousel7.webp`,
  ],
  row2: [
    `${CDN_BASE}/imagenes/carrousel8.webp`,
    `${CDN_BASE}/imagenes/carrousel9.webp`,
    `${CDN_BASE}/imagenes/carrousel10.webp`,
    `${CDN_BASE}/imagenes/carrousel11.webp`,
    `${CDN_BASE}/imagenes/carrousel12.webp`,
    `${CDN_BASE}/imagenes/carrousel13.webp`,
  ]
};

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if ((window as any).particlesJS) {
      (window as any).particlesJS("particles-js", {
        particles: {
          number: { value: 90, density: { enable: true, value_area: 800 } },
          color: { value: "#ffffff" }, // Mantenemos el blanco de base
          shape: {
            type: "circle", // Siguen siendo círculos
            stroke: {
              enable: true, // ¡ESTO ES CLAVE! Un borde para que se vean.
              width: 0.4,
              color: "#989ea0ff" // El azul cian de tu logo para el borde
            }
          },
          opacity: {
            value: 0.7, // Subimos de 0.3 a 0.7 para que se vean bien
            random: true,
            anim: { enable: true, speed: 1, opacity_min: 0.4, sync: false }
          },
          size: {
            value: 7, // Tamaño medio
            random: true,
            anim: { enable: false }
          },
          line_linked: { enable: false },
          move: {
            enable: true,
            speed: 1.2, // Un poco más rápidas
            direction: "top", // Siguen flotando hacia arriba
            random: true,
            straight: false,
            out_mode: "out",
            bounce: false
          }
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: { enable: true, mode: "bubble" }
          },
          modes: {
            bubble: {
              distance: 200,
              size: 14, // Al pasar el mouse, crecen
              duration: 0.3,
              opacity: 1, // Al interactuar, se vuelven totalmente sólidas
              speed: 3
            }
          }
        },
        retina_detect: true
      });
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: isScrolled ? 0 : -100, opacity: isScrolled ? 1 : 0 }}
        className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-slate-100"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-2">
              <img src={DAZZLING_ASSETS.logo} alt="Dazzling Logo" className="h-10" />
            </div>

          </div>
        </div>
      </motion.nav>

      <main className="flex-grow pt-0">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-cyan-50/30 to-white py-20 lg:py-32">
          {/* Particles Container */}
          <div id="particles-js" className="absolute inset-0 z-0 pointer-events-auto" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pointer-events-none">
            <div className="text-center max-w-3xl mx-auto pointer-events-auto">
              <motion.img
                src={DAZZLING_ASSETS.logo}
                alt="Dazzling Cleaning Logo"
                initial={{ opacity: 0, y: -20, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="w-auto h-32 sm:h-48 lg:h-64 mx-auto mb-14 md:mb-16 object-contain"
              />

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-2xl md:text-4xl font-extrabold text-slate-900 mb-6 leading-tight"
              >
                Espacios Impecables,
                <span className="text-cyan-dazzling"> Confianza Absoluta</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-lg md:text-xl text-slate-900 mb-10 leading-relaxed"
              >
                Limpieza profesional residencial y comercial con personal verificado.
                Dejamos tu mundo brillando con estándares de excelencia.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-col sm:flex-row justify-center gap-4"
              >
                <motion.a
                  href="https://wa.me/+19547368055"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-lime-dazzling text-white px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-3 shadow-xl shadow-lime-dazzling/30 hover:bg-lime-600 transition-all fresh-sweep"
                >
                  <MessageCircle size={24} />
                  Agendar por WhatsApp
                </motion.a>
              </motion.div>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
            <div className="absolute -top-24 -left-24 w-96 h-96 bg-cyan-dazzling/5 rounded-full blur-3xl" />
            <div className="absolute top-1/2 -right-24 w-64 h-64 bg-lime-dazzling/5 rounded-full blur-3xl" />
          </div>
        </section>

        {/* Services Section */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Nuestros Servicios</h2>
              <div className="w-20 h-1.5 bg-lime-dazzling mx-auto rounded-full" />
            </div>

            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {/* Card 1 */}
              <motion.div variants={fadeIn} className="group p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-cyan-dazzling/30 hover:bg-white hover:shadow-2xl hover:shadow-cyan-dazzling/10 transition-all duration-300">
                <div className="w-16 h-16 bg-cyan-100 rounded-2xl flex items-center justify-center text-cyan-dazzling mb-6 group-hover:scale-110 transition-transform">
                  <Home size={32} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Limpieza Residencial</h3>
                <p className="text-slate-600">Hogares que brillan. Cuidamos cada rincón de tu casa con la delicadeza y el detalle que mereces.</p>
              </motion.div>

              {/* Card 2 */}
              <motion.div variants={fadeIn} className="group p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-lime-dazzling/30 hover:bg-white hover:shadow-2xl hover:shadow-lime-dazzling/10 transition-all duration-300">
                <div className="w-16 h-16 bg-lime-100 rounded-2xl flex items-center justify-center text-lime-dazzling mb-6 group-hover:scale-110 transition-transform">
                  <Building2 size={32} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Limpieza Comercial</h3>
                <p className="text-slate-600">Oficinas productivas. Ambientes de trabajo limpios y saludables que potencian el rendimiento de tu equipo.</p>
              </motion.div>

              {/* Card 3 */}
              <motion.div variants={fadeIn} className="group p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-cyan-dazzling/30 hover:bg-white hover:shadow-2xl hover:shadow-cyan-dazzling/10 transition-all duration-300">
                <div className="w-16 h-16 bg-cyan-100 rounded-2xl flex items-center justify-center text-cyan-dazzling mb-6 group-hover:scale-110 transition-transform">
                  <Wrench size={32} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Mantenimiento Especializado</h3>
                <p className="text-slate-600">Detalles que cuentan. Servicios técnicos y preventivos para mantener tus instalaciones en óptimo estado.</p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Brick Carousel Section */}
        <section className="py-12 bg-slate-50 overflow-hidden relative pointer-events-auto">
          {/* Efecto de desvanecido en los bordes para Glassmorphism */}
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none" />

          <div className="flex flex-col gap-4 pointer-events-auto">
            {/* Row 1: Left to Right (Espacios Dazzling) */}
            <div className="flex whitespace-nowrap">
              <motion.div
                animate={{ x: [0, "-50%"] }}
                style={{
                  willChange: "transform",
                  WebkitBackfaceVisibility: "hidden", // Forzar renderizado por GPU en Safari/Chrome
                  backfaceVisibility: "hidden"
                }}
                transition={{
                  duration: 60, // Velocidad de la fila 1
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="flex gap-4 pr-4"
              >
                {/* Usamos las imágenes desde el CDN definido en DAZZLING_ASSETS */}
                {[...DAZZLING_ASSETS.row1, ...DAZZLING_ASSETS.row1].map((src, idx) => (
                  <div key={idx} className="w-64 h-48 md:w-80 md:h-60 flex-shrink-0 rounded-2xl overflow-hidden shadow-lg border-2 border-white cursor-pointer">
                    <motion.img
                      src={src}
                      alt={`Dazzling ${idx}`}
                      loading="lazy" // No bloquea el renderizado inicial
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      onLoad={(e) => (e.currentTarget.style.opacity = "1")} // Solo aparece cuando está lista
                      style={{ opacity: 0, transition: "opacity 0.3s", transform: "translateZ(0)" }}
                    />
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Row 2: Right to Left (Detalles de Limpieza) */}
            <div className="flex whitespace-nowrap">
              <motion.div
                animate={{ x: ["-50%", 0] }}
                style={{
                  willChange: "transform",
                  WebkitBackfaceVisibility: "hidden", // Forzar renderizado por GPU en Safari/Chrome
                  backfaceVisibility: "hidden"
                }}
                transition={{
                  duration: 50, // Velocidad de la fila 2 (diferente para dar profundidad)
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="flex gap-4 pr-4"
              >
                {/* Usamos las imágenes desde el CDN definido en DAZZLING_ASSETS */}
                {[...DAZZLING_ASSETS.row2, ...DAZZLING_ASSETS.row2].map((src, idx) => (
                  <div key={idx} className="w-64 h-48 md:w-80 md:h-60 flex-shrink-0 rounded-2xl overflow-hidden shadow-lg border-2 border-white cursor-pointer">
                    <motion.img
                      src={src}
                      alt={`Dazzling ${idx}`}
                      loading="lazy" // No bloquea el renderizado inicial
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      onLoad={(e) => (e.currentTarget.style.opacity = "1")} // Solo aparece cuando está lista
                      style={{ opacity: 0, transition: "opacity 0.3s", transform: "translateZ(0)" }}
                    />
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Trust Section */}
        <section className="py-24 bg-cyan-50 text-slate-900 overflow-hidden relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-8">¿Por qué Dazzling?</h2>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-cyan-100 rounded-xl flex items-center justify-center text-cyan-dazzling">
                      <ShieldCheck size={28} />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-1">Personal Verificado</h4>
                      <p className="text-slate-600">Seguridad y confianza absoluta. Todo nuestro equipo pasa por rigurosos filtros de selección.</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-lime-100 rounded-xl flex items-center justify-center text-lime-dazzling">
                      <Leaf size={28} />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-1">Productos Eco-friendly</h4>
                      <p className="text-slate-600">Cuidamos tu salud y el planeta utilizando insumos biodegradables de alta eficiencia.</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-cyan-100 rounded-xl flex items-center justify-center text-cyan-dazzling">
                      <CheckCircle2 size={28} />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-1">Garantía de Satisfacción</h4>
                      <p className="text-slate-600">Si no estás 100% satisfecho con el resultado, lo solucionamos de inmediato sin costo adicional.</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="relative"
              >
                <div className="aspect-square rounded-full bg-gradient-to-br from-cyan-400/20 to-lime-500/20 absolute -inset-4 blur-3xl animate-pulse" />
                <div className="relative bg-white rounded-3xl p-8 border border-white shadow-xl shadow-cyan-900/5">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-12 bg-lime-dazzling rounded-full flex items-center justify-center text-white font-bold">10+</div>
                    <span className="text-lg font-medium text-slate-800">Años de experiencia en el sector</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-slate-50 p-6 rounded-2xl text-center border border-slate-100">
                      <div className="text-3xl font-bold text-cyan-dazzling mb-1">500+</div>
                      <div className="text-sm text-slate-600 font-medium">Clientes Felices</div>
                    </div>
                    <div className="bg-slate-50 p-6 rounded-2xl text-center border border-slate-100">
                      <div className="text-3xl font-bold text-lime-dazzling mb-1">100%</div>
                      <div className="text-sm text-slate-600 font-medium">Garantizado</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Background Pattern */}
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-5 pointer-events-none text-cyan-dazzling">
            <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
              <defs>
                <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                  <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-50 border-t border-slate-200 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Logo */}
            <div className="flex-shrink-0">
              <img src={DAZZLING_ASSETS.logo} alt="Dazzling Logo" className="h-14 md:h-12 w-auto object-contain" />
            </div>

            {/* Redes Sociales */}
            <div className="flex gap-6">
              <a href="#" className="text-slate-400 hover:text-cyan-dazzling transition-colors p-2 -m-2">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-slate-400 hover:text-cyan-dazzling transition-colors p-2 -m-2">
                <Facebook size={24} />
              </a>
            </div>

            {/* Copyright */}
            <div className="text-slate-500 text-sm text-center md:text-right">
              © {new Date().getFullYear()} Dazzling Cleaning and Maintenance. Todos los derechos reservados.
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp for Mobile */}
      <motion.a
        href="https://wa.me/+19547368055"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-6 right-6 z-50 bg-lime-dazzling text-white p-4 rounded-full shadow-2xl shadow-lime-dazzling/40 md:hidden"
      >
        <MessageCircle size={32} />
      </motion.a>
    </div>
  );
}
