"use client";

import { useState } from "react";
import { Car, Palmtree, Send, Star, ShieldCheck } from "lucide-react";

export default function PuntaClick() {
  const [activeSection, setActiveSection] = useState("transporte");
  const [origen, setOrigen] = useState("");
  const [destino, setDestino] = useState("");

  const excursiones = [
    {
      nombre: "Tour a Isla Saona: Piscina Natural, barra libre y comida con transporte incluido",
      descripcion:
        "Descubre la joya del Caribe en una experiencia exclusiva. Navega en catamarán privado con barra libre, relájate en playas de arena blanca virgen y disfruta de las famosas piscinas naturales con estrellas de mar.",
      imagen: "/images/excursions/saona.png",
    },
    {
      nombre: "Adventure Buggies: Ruta Selvática & Playa Macao",
      descripcion:
        "Adrenalina pura conduciendo tu propio buggy a través de senderos tropicales. Explora cuevas indígenas, sumérgete en manantiales ocultos y termina la aventura en la espectacular Playa Macao.",
      imagen: "/images/excursions/buggy.png",
    },
    {
      nombre: "Catamarán Bávaro (Party Boat): Snorkel en Arrecife, barra libre y fiesta caribeña con transporte incluido",
      descripcion:
        "La combinación perfecta de relax y diversión. Explora vibrantes arrecifes de coral, nada con peces tropicales y disfruta de una fiesta a bordo con bebidas premium bajo el sol del Caribe.",
      imagen: "/images/excursions/catamaran-party-boat.png",
    },
    {
      nombre: "Scape Park en Cap Cana: Aventura Natural",
      descripcion:
        "Un parque ecológico de clase mundial. Lánzate en tirolesas sobre el bosque, explora cavernas antiguas y refréscate en el mundialmente famoso Hoyo Azul, un cenote de aguas turquesas indescriptibles.",
      imagen: "/images/scape-park.jpg",
    },
    {
      nombre: "Coco Bongo: El Show Nocturno Definitivo",
      descripcion:
        "Más que una discoteca, un espectáculo de talla mundial. Acróbatas, tributos musicales, luces y una energía inigualable te esperan en la noche más legendaria de Punta Cana.",
      imagen: "/images/coco-bongo.jpg",
    },
    {
      nombre: "Monkeyland: Encuentro con Monos y Plantación de cacao con transporte incluido",
      descripcion:
        "Sumérgete en su divertido mundo mientras admiras el paisaje montañoso. No olvides visitar la plantación de café y cacao para degustar los exquisitos sabores locales.",
      imagen: "https://images.unsplash.com/photo-1540573133985-87b6da6d54a9?w=800&h=600&fit=crop",
    },
    {
      nombre: "Samaná: Avistamiento de ballenas y tour a Cayo Levantado desde Punta Cana. Recogida en el hotel incluida",
      descripcion:
        "Observa ballenas jorobadas en libertad, una opción fantástica para los amantes de la naturaleza, con parada en Cayo Levantado (Isla Bacardí).",
      imagen: "/images/excursions/samana-ballenas.jpg",
    },
    {
      nombre: "City Tour en Santo Domingo: Una Visita Histórica y Cultural con Comida y Transporte incluido",
      descripcion:
        "Conoce la historia de República Dominicana. Visita los lugares más representativos de Santo Domingo y disfruta de una comida tradicional.",
      imagen: "/images/excursions/city-tour-santo-domingo.jpg",
    },
    {
      nombre: "Tour a Isla Catalina: Piscina natural, Snorkel, comida y transporte incluido",
      descripcion:
        "Visita la impresionante Isla Catalina, donde podrás relajarte en un ambiente tranquilo y disfrutar de un delicioso buffet con barra libre de bebidas.",
      imagen: "/images/excursions/isla-catalina.jpg",
    },
    {
      nombre: "Pesca de Altura",
      descripcion:
        "Como pescador, experimentarás la técnica de pesca trolling, con cañas listas y hoyos de seguridad, esperando a que un pez muerda el anzuelo. Enfrentarás especies como el pez dorado, barracuda, marlín blanco, marlín azul y muchas otras. Como observador, podrás acompañar a tus amigos o familiares que pescarán y disfrutar de la impresionante vista del océano Atlántico.",
      imagen: "/images/excursions/pesca-de-altura.jpg",
    },
    {
      nombre: "Ruta a Caballo",
      descripcion:
        "Participa en un paseo encantador y disfruta de una agradable experiencia de cabalgar en un entorno fascinante, donde descubrirás las maravillas naturales de Punta Cana.",
      imagen: "/images/excursions/ruta-a-caballo.jpg",
    },
  ];

  const toursPersonalizados = [
    {
      nombre: "Restaurante Capitán Cook",
      descripcion:
        "Restaurante de mariscos reconocido, ideal para disfrutar de pescado y marisco fresco frente al mar, en un ambiente relajado y frecuentado por locales.",
      imagen: "https://images.unsplash.com/photo-1515443961218-a51367888e4b?q=80&w=800&auto=format&fit=crop",
    },
    {
      nombre: "Restaurante Noah",
      descripcion:
        "Restaurante moderno en Punta Cana que fusiona cocina internacional y caribeña, con platos creativos y un ambiente elegante muy valorado por locales y visitantes.",
      imagen: "/images/tours/noah-restaurant-v2.jpg",
    },
    {
      nombre: "Playa Escondida y Virgen",
      descripcion:
        "Visita una playa escondida y virgen, lejos de las multitudes, donde podrás disfrutar del Caribe en su estado más natural y exclusivo.",
      imagen: "https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?q=80&w=800&auto=format&fit=crop",
    },
    {
      nombre: "Restaurante Casa Galicia",
      descripcion:
        "Cocina española auténtica en Punta Cana, con especialidades como pulpo a la gallega y jamón ibérico, en un ambiente tradicional frecuentado por locales.",
      imagen: "/images/tours/casa-galicia-v2.jpg",
    },
  ];

  const testimonios = [
    {
      nombre: "María González",
      ubicacion: "Madrid, España",
      comentario:
        "Increíble experiencia en Isla Saona. El proceso de reserva por WhatsApp fue súper fácil y el servicio excelente. ¡Totalmente recomendado!",
      avatar: "https://i.pravatar.cc/150?img=5",
    },
    {
      nombre: "Carlos Ramírez",
      ubicacion: "Buenos Aires, Argentina",
      comentario:
        "El transporte desde el aeropuerto fue puntual y cómodo. La facilidad de 'reserva ahora, paga después' nos dio mucha tranquilidad.",
      avatar: "https://i.pravatar.cc/150?img=12",
    },
    {
      nombre: "Ana Silva",
      ubicacion: "Ciudad de México, México",
      comentario:
        "Hicimos el tour de Buggies VIP y fue espectacular. PuntaClick nos ayudó con todo, respuesta rápida por WhatsApp. ¡Volveremos!",
      avatar: "https://i.pravatar.cc/150?img=9",
    },
    {
      nombre: "Roberto Fernández",
      ubicacion: "Barcelona, España",
      comentario:
        "Coco Bongo fue la mejor noche de nuestras vacaciones. Gracias a PuntaClick por la gestión rápida y sin complicaciones.",
      avatar: "https://i.pravatar.cc/150?img=13",
    },
    {
      nombre: "Laura Medina",
      ubicacion: "Bogotá, Colombia",
      comentario:
        "Monkeyland con mi familia fue una experiencia única. El trato personalizado por WhatsApp hizo todo más fácil. 100% recomendado.",
      avatar: "https://i.pravatar.cc/150?img=10",
    },
    {
      nombre: "Diego Torres",
      ubicacion: "Lima, Perú",
      comentario:
        "Excelente servicio de principio a fin. La excursión a Santo Domingo fue educativa y divertida. PuntaClick es muy profesional.",
      avatar: "https://i.pravatar.cc/150?img=14",
    },
  ];

  const handleTransporteReserva = () => {
    const mensaje = `Hola, quiero reservar un transporte en Punta Cana. Origen: ${origen || "[Por definir]"} – Destino: ${destino || "[Por definir]"}. Reserva ahora, paga después.`;
    const url = `https://wa.me/18493972241?text=${encodeURIComponent(mensaje)}`;
    window.open(url, "_blank");
  };

  const handleExcursionReserva = (nombreExcursion) => {
    const mensaje = `Hola, quiero información y reservar la excursión ${nombreExcursion}. Reserva ahora, paga después.`;
    const url = `https://wa.me/18493972241?text=${encodeURIComponent(mensaje)}`;
    window.open(url, "_blank");
  };

  const handleTourPersonalizadoReserva = (nombreTour) => {
    const mensaje = `Hola, me interesa el tour personalizado: ${nombreTour}. Quisiera más detalles.`;
    const url = `https://wa.me/18493972241?text=${encodeURIComponent(mensaje)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#E8F4F8] to-white font-inter">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-30 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <img
                src="https://ucarecdn.com/206a00a3-7688-49c2-ae37-136884eebe2b/-/format/auto/"
                alt="PuntaClick Logo"
                className="h-20 sm:h-24 w-auto"
              />
            </div>
            <div className="group flex items-center gap-3 bg-white border border-[#E0F7FA] shadow-[0_2px_15px_-3px_rgba(0,188,212,0.15)] px-6 py-2.5 rounded-full hover:shadow-[0_4px_20px_-4px_rgba(0,188,212,0.2)] transition-all duration-300 backdrop-blur-sm">
              <div className="bg-[#E0F7FA] p-1.5 rounded-full group-hover:bg-[#B2EBF2] transition-colors">
                <ShieldCheck className="h-4 w-4 text-[#00BCD4]" strokeWidth={2.5} />
              </div>
              <p className="text-gray-700 font-medium text-sm sm:text-base tracking-wide">
                <span className="font-bold text-[#0097A7]">Reserva ahora</span>
                <span className="mx-1.5 text-gray-300">|</span>
                <span className="text-gray-500">Paga después</span>
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Banner */}
      <div className="relative w-full h-[350px] sm:h-[450px] lg:h-[550px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10" />
        <img
          src="/images/hero-banner.png"
          alt="Punta Cana Luxury Beach"
          className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-[20s] ease-linear"
        />
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4 mt-8">
          <div className="bg-white/10 backdrop-blur-sm p-6 sm:p-10 rounded-2xl border border-white/20 shadow-2xl max-w-3xl animate-fade-in-up">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg tracking-tight">
              Vive Punta Cana
            </h1>
            <p className="text-lg sm:text-xl text-white/95 font-medium drop-shadow-md leading-relaxed">
              Transporte VIP y las mejores excursiones en un solo lugar.
              <br className="hidden sm:block" />
              Tu aventura de lujo comienza aquí.
            </p>
          </div>
        </div>
      </div>

      {/* Navigation Cards */}
      <nav className="relative z-20 -mt-16 sm:-mt-24 pb-8 sm:pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* Transporte Card */}
            <div
              onClick={() => setActiveSection("transporte")}
              className={`group relative h-48 sm:h-64 rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 shadow-xl ${activeSection === "transporte"
                ? "ring-4 ring-[#00BCD4] ring-offset-4 ring-offset-white transform scale-[1.02]"
                : "hover:scale-[1.02] hover:shadow-2xl opacity-90 hover:opacity-100"
                }`}
            >
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors z-10" />
              <img
                src="/images/transport-card.png"
                alt="Transporte Privado"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 z-20 flex flex-col justify-end p-6 sm:p-8">
                <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">

                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2 shadow-sm">
                    Traslados VIP
                  </h3>
                  <button className={`mt-2 px-6 py-2 rounded-full bg-white/20 backdrop-blur-md border border-white/40 text-white font-semibold text-sm transition-all duration-300 ${activeSection === 'transporte' ? 'bg-[#00BCD4] border-transparent' : 'group-hover:bg-white group-hover:text-black'}`}>
                    Reservar ahora
                  </button>
                </div>
              </div>
            </div>

            {/* Excursiones Card */}
            <div
              onClick={() => setActiveSection("excursiones")}
              className={`group relative h-48 sm:h-64 rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 shadow-xl ${activeSection === "excursiones"
                ? "ring-4 ring-[#00BCD4] ring-offset-4 ring-offset-white transform scale-[1.02]"
                : "hover:scale-[1.02] hover:shadow-2xl opacity-90 hover:opacity-100"
                }`}
            >
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors z-10" />
              <img
                src="/images/excursion-card.png"
                alt="Excursiones Tours"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 z-20 flex flex-col justify-end p-6 sm:p-8">
                <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">

                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2 shadow-sm">
                    Excursiones
                  </h3>
                  <button className={`mt-2 px-6 py-2 rounded-full bg-white/20 backdrop-blur-md border border-white/40 text-white font-semibold text-sm transition-all duration-300 ${activeSection === 'excursiones' ? 'bg-[#00BCD4] border-transparent' : 'group-hover:bg-white group-hover:text-black'}`}>
                    Ver aventuras
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {/* TRANSPORTE Section */}
        {activeSection === "transporte" && (
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
              <div className="bg-gradient-to-r from-[#00BCD4] to-[#0097A7] px-6 py-5">
                <h2 className="text-xl sm:text-2xl font-bold text-white">
                  Reserva tu Transporte
                </h2>
                <p className="text-white/90 text-sm mt-1">
                  Completa los datos y te contactamos por WhatsApp
                </p>
              </div>

              <div className="p-6 sm:p-8 space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Origen
                  </label>
                  <input
                    type="text"
                    value={origen}
                    onChange={(e) => setOrigen(e.target.value)}
                    placeholder="Ej: Aeropuerto de Punta Cana"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00BCD4] focus:border-transparent text-gray-700 text-base"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Destino
                  </label>
                  <input
                    type="text"
                    value={destino}
                    onChange={(e) => setDestino(e.target.value)}
                    placeholder="Ej: Hotel Barceló Bávaro"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00BCD4] focus:border-transparent text-gray-700 text-base"
                  />
                </div>

                <button
                  onClick={handleTransporteReserva}
                  className="w-full bg-[#25D366] hover:bg-[#20BD5A] text-white font-bold py-4 px-6 rounded-lg transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-3 text-base sm:text-lg"
                >
                  <Send className="h-5 w-5" />
                  Reservar por WhatsApp
                </button>

                <p className="text-xs text-gray-500 text-center">
                  Te enviaremos un mensaje automático a WhatsApp con tu
                  solicitud
                </p>
              </div>
            </div>

            {/* Galería de Imágenes de Traslados */}
            <div className="mt-8 sm:mt-12">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">

                <div className="traslado-img traslado-img-3 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                  <img
                    src="https://ucarecdn.com/e9974edc-af86-494d-af97-3b33de480c90/-/format/auto/"
                    alt="Transporte premium PuntaClick"
                    className="w-full h-64 object-cover"
                  />
                </div>
                <div className="traslado-img traslado-img-1 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                  <img
                    src="/images/transport/transport-1.jpg"
                    alt="Transporte Privado Interior"
                    className="w-full h-64 object-cover"
                  />
                </div>
                <div className="traslado-img traslado-img-2 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                  <img
                    src="/images/transport/transport-2.jpg"
                    alt="Chofer Profesional"
                    className="w-full h-64 object-cover"
                  />
                </div>
                <div className="traslado-img traslado-img-1 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                  <img
                    src="/images/transport/transport-4.jpg"
                    alt="Familia en Transporte"
                    className="w-full h-64 object-cover"
                  />
                </div>
                <div className="traslado-img traslado-img-2 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                  <img
                    src="/images/transport/transport-5.jpg"
                    alt="Servicio de Equipaje"
                    className="w-full h-64 object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* EXCURSIONES Section */}
        {activeSection === "excursiones" && (
          <div>
            <div className="text-center mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">
                Descubre Nuestras Excursiones
              </h2>
              <p className="text-gray-600">
                Las mejores experiencias en Punta Cana
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {excursiones.map((excursion, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm hover:shadow-lg transition-all"
                >
                  <div className="relative h-48 overflow-hidden bg-gray-100">
                    <img
                      src={excursion.imagen}
                      alt={excursion.nombre}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  <div className="p-5">
                    <h3 className="text-base font-bold text-gray-800 mb-2 leading-snug min-h-[48px]">
                      {excursion.nombre}
                    </h3>
                    <p className="text-sm text-gray-600 mb-4 leading-relaxed line-clamp-3">
                      {excursion.descripcion}
                    </p>

                    <button
                      onClick={() => handleExcursionReserva(excursion.nombre)}
                      className="w-full bg-[#25D366] hover:bg-[#20BD5A] text-white font-semibold py-3 px-4 rounded-lg transition-all shadow-sm hover:shadow-md flex items-center justify-center gap-2 text-sm"
                    >
                      <Send className="h-4 w-4" />
                      Reservar por WhatsApp
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 bg-gradient-to-br from-[#E0F7FA] to-[#E1F5FE] rounded-xl p-8 border border-[#B2EBF2] shadow-sm">
              <div className="max-w-3xl mx-auto text-center space-y-4">
                <p className="text-gray-800 font-medium">
                  Todas nuestras excursiones incluyen transporte.
                </p>
                <p className="text-gray-700">
                  La información adicional de cada experiencia está disponible al hacer clic en el botón de reserva por WhatsApp, donde podrás consultar cualquier detalle sin compromiso.
                </p>
                <p className="text-gray-800 font-semibold">
                  Las excursiones se reservan primero y se pagan después.
                </p>
                <p className="text-gray-700 italic">
                  "Nuestro objetivo es cuidar al turista y hacer que se sienta como en casa mientras disfruta del Caribe."
                </p>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* TOURS PERSONALIZADOS Section */}
      <section className="relative w-full py-20 overflow-hidden">
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1920&auto=format&fit=crop"
            alt="Experiencia Gastronómica Exclusiva"
            className="w-full h-full object-cover opacity-15 filter blur-[1px]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-[#E0F7FA]/40 to-white/90" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block mb-4 px-4 py-1.5 rounded-full border border-[#00BCD4]/20 bg-white/60 backdrop-blur-sm text-[#00838F] text-sm font-medium italic tracking-wide shadow-sm">
              Solo con PuntaClick
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-3">
              Tours Personalizados
            </h2>
            <p className="text-xl text-gray-600">
              Pensado para quienes quieren ir más allá de lo turístico.
            </p>
          </div>

          {/* Grid Container Prepared for Future Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {toursPersonalizados.map((tour, index) => (
              <div
                key={index}
                className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm hover:shadow-lg transition-all"
              >
                <div className="relative h-48 overflow-hidden bg-gray-100">
                  <img
                    src={tour.imagen}
                    alt={tour.nombre}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="p-5">
                  <h3 className="text-base font-bold text-gray-800 mb-2 leading-snug min-h-[48px]">
                    {tour.nombre}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4 leading-relaxed line-clamp-3">
                    {tour.descripcion}
                  </p>

                  <button
                    onClick={() => handleTourPersonalizadoReserva(tour.nombre)}
                    className="w-full bg-[#25D366] hover:bg-[#20BD5A] text-white font-semibold py-3 px-4 rounded-lg transition-all shadow-sm hover:shadow-md flex items-center justify-center gap-2 text-sm"
                  >
                    <Send className="h-4 w-4" />
                    Reservar por WhatsApp
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIOS Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">
            Lo Que Dicen Nuestros Clientes
          </h2>
          <p className="text-gray-600">
            Experiencias reales de turistas satisfechos
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonios.map((testimonio, index) => (
            <div
              key={index}
              className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm hover:shadow-md transition-all"
            >
              <div className="flex items-center gap-3 mb-4">
                <img
                  src={testimonio.avatar}
                  alt={testimonio.nombre}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-gray-800 text-sm">
                    {testimonio.nombre}
                  </h4>
                  <p className="text-xs text-gray-500">
                    {testimonio.ubicacion}
                  </p>
                </div>
              </div>

              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-[#FFB800] text-[#FFB800]"
                  />
                ))}
              </div>

              <p className="text-sm text-gray-600 leading-relaxed">
                "{testimonio.comentario}"
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 relative">
          <div className="text-center">
            <img
              src="https://ucarecdn.com/0c7c4d46-4b67-4994-9207-06fef5af9fee/-/format/auto/"
              alt="PuntaClick Logo"
              className="h-16 sm:h-20 w-auto mx-auto mb-4"
            />
            <p className="text-gray-600 text-sm">
              <span className="font-semibold text-gray-800">PuntaClick</span> -
              Tu guía de turismo en Punta Cana
            </p>
            <p className="text-gray-500 text-xs mt-2">
              Todas las reservas se gestionan a través de WhatsApp
            </p>
          </div>

          <div className="flex items-center justify-center gap-6 mt-6">
            <a
              href="https://www.instagram.com/feyluxx?igsh=MTR5c3Npenl1eHhwag%3D%3D&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#00BCD4] transition-colors duration-300"
              aria-label="Instagram"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
            </a>
            <a
              href="https://www.tiktok.com/@feyluxx?_r=1&_t=ZN-92pNhiAb8qc"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#00BCD4] transition-colors duration-300"
              aria-label="TikTok"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" /></svg>
            </a>
            <a
              href="https://www.facebook.com/share/17bVorY7WA/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#00BCD4] transition-colors duration-300"
              aria-label="Facebook"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
            </a>
            <a
              href="https://wa.me/18493972241"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#00BCD4] transition-colors duration-300"
              aria-label="WhatsApp"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
            </a>
          </div>

          <div className="mt-8 sm:mt-0 sm:absolute sm:right-6 sm:bottom-1/2 sm:translate-y-1/2 flex justify-center sm:justify-end">
            <img
              src="/images/tripadvisor-badge.png"
              alt="TripAdvisor Travelers' Choice 2025"
              className="h-24 w-auto opacity-90 transition-all hover:scale-105"
            />
          </div>
        </div>
      </footer>

      <style jsx global>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px) scale(0.98);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .traslado-img {
          animation: fadeInUp 0.6s ease-out forwards;
          opacity: 0;
        }

        .traslado-img-1 {
          animation-delay: 0.1s;
        }

        .traslado-img-2 {
          animation-delay: 0.2s;
        }

        .traslado-img-3 {
          animation-delay: 0.3s;
        }

        .traslado-img img {
          transition: transform 0.3s ease;
        }

        .traslado-img:hover img {
          transform: scale(1.05);
        }
      `}</style>
    </div>
  );
}
