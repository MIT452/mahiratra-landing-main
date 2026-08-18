import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Code2, Smartphone, Globe, CheckCircle2, Star, Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";

/**
 * Mahiratra Groupe - Landing Page
 * Design: Minimalisme Technologique Épuré
 * Palette: Bleu profond (#003366), Blanc, Gris clair, Vert discret (#2D8A3D)
 * Typographie: Poppins (titres), Inter (corps)
 */

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: "", email: "", phone: "", message: "" });
      setSubmitted(false);
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header Navigation */}
      <header className="sticky top-0 z-50 bg-white border-b border-border">
        <div className="container flex items-center justify-between py-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">M</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-primary">Mahiratra</h1>
              <p className="text-xs text-muted-foreground">Groupe</p>
            </div>
          </div>
          <nav className="hidden md:flex gap-8">
            <a href="#services" className="text-foreground hover:text-primary transition-colors">
              Services
            </a>
            <a href="#testimonials" className="text-foreground hover:text-primary transition-colors">
              Témoignages
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section
        className="relative py-20 md:py-32 overflow-hidden"
        style={{
          backgroundImage: "url('https://d2xsxph8kpxj0f.cloudfront.net/310519663533517904/iHWSWid9jiKahvCmA4pvEa/mahiratra-hero-bg-G6QwCSdcKLCZ5u2SJakMHL.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70"></div>
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-white mb-6 leading-tight">
              Solutions Numériques Sur-Mesure pour Propulser Votre Entreprise
            </h1>
            <p className="text-lg text-white/90 mb-8 leading-relaxed">
              Accompagnez les acteurs de la vanille dans leur transition digitale. Logiciels adaptés, applications mobiles performantes, sites web modernes et attractifs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-white"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                Démarrer Maintenant
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10"
              >
                En Savoir Plus
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-primary mb-6">Notre Histoire</h2>
              <p className="text-foreground/80 mb-4">
                Mahiratra Groupe est une entreprise spécialisée dans le développement de solutions numériques adaptées aux besoins spécifiques des entreprises malgaches, particulièrement celles du secteur de la vanille.
              </p>
              <p className="text-foreground/80 mb-4">
                Nous croyons que la technologie doit être un vecteur de croissance et de visibilité. Notre mission est d'accompagner les acteurs de la vanille dans leur transition digitale pour plus d'efficacité et de visibilité.
              </p>
              <p className="text-foreground/80">
                
              </p>
            </div>
            <div className="bg-secondary rounded-lg p-8 border border-border">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground">Développement Logiciel</h3>
                    <p className="text-sm text-muted-foreground">Logiciels sur mesure pour vos besoins spécifiques</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground">Applications Mobiles</h3>
                    <p className="text-sm text-muted-foreground">Performantes et intuitives pour tous les appareils</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground">Sites Web Modernes</h3>
                    <p className="text-sm text-muted-foreground">Vitrines et e-commerce attractifs et performants</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        id="services"
        className="py-16 md:py-24 bg-secondary"
        style={{
          backgroundImage: "url('https://d2xsxph8kpxj0f.cloudfront.net/310519663533517904/iHWSWid9jiKahvCmA4pvEa/mahiratra-services-bg-DkbpZftBzh3HLubjBJCnSn.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-primary mb-4">Nos Services</h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Nous offrons une gamme complète de solutions numériques pour transformer votre entreprise
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Service 1: Software Development */}
            <Card className="bg-white border-border hover:shadow-lg transition-shadow duration-300">
              <div className="p-8">
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                  <Code2 className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-primary mb-3">Développement Logiciel</h3>
                <p className="text-foreground/70 mb-4">
                  Création de logiciels adaptés à vos besoins spécifiques. Gestion, traçabilité, et solutions sur mesure pour optimiser vos opérations.
                </p>
                <ul className="text-sm text-foreground/60 space-y-2">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                    Logiciels de gestion
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                    Systèmes de traçabilité
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                    Solutions ERP
                  </li>
                </ul>
              </div>
            </Card>

            {/* Service 2: Mobile Apps */}
            <Card className="bg-white border-border hover:shadow-lg transition-shadow duration-300">
              <div className="p-8">
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                  <Smartphone className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-primary mb-3">Applications Mobiles</h3>
                <p className="text-foreground/70 mb-4">
                  Création d'applications mobiles performantes et intuitives. Compatible iOS et Android pour atteindre tous vos clients.
                </p>
                <ul className="text-sm text-foreground/60 space-y-2">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                    Applications natives
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                    Applications cross-platform
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                    Support technique complet
                  </li>
                </ul>
              </div>
            </Card>

            {/* Service 3: Web Design */}
            <Card className="bg-white border-border hover:shadow-lg transition-shadow duration-300">
              <div className="p-8">
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                  <Globe className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-primary mb-3">Sites Web Professionnels</h3>
                <p className="text-foreground/70 mb-4">
                  Conception de sites web modernes et attractifs. Vitrines et e-commerce optimisés pour la conversion et la visibilité.
                </p>
                <ul className="text-sm text-foreground/60 space-y-2">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                    Sites vitrines
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                    Boutiques e-commerce
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                    SEO et marketing digital
                  </li>
                </ul>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section
        id="testimonials"
        className="py-16 md:py-24 bg-background"
        style={{
          backgroundImage: "url('https://d2xsxph8kpxj0f.cloudfront.net/310519663533517904/iHWSWid9jiKahvCmA4pvEa/mahiratra-testimonials-bg-N75CXAQu7mqQcSMFFERGcL.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-primary mb-4">Ce que Disent Nos Clients</h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Découvrez comment nous avons aidé des entreprises à transformer leur présence numérique
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Rajah",
                role: "Producteur de Vanille",
                text: "Mahiratra Groupe a transformé notre façon de gérer nos opérations. Leur logiciel de traçabilité nous a permis d'augmenter notre efficacité de 40%.",
                rating: 5,
              },
              {
                name: "Lalah",
                role: "Directrice d'Export",
                text: "L'application mobile qu'ils ont développée pour nous a révolutionné notre gestion de stock. Très professionnel et réactif.",
                rating: 5,
              },
              {
                name: "Ming",
                role: "Entrepreneur Digital",
                text: "Leur site e-commerce nous a permis de vendre nos produits à l'international. Excellent travail et support client impeccable.",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <Card key={index} className="bg-white border-border">
                <div className="p-8">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                    ))}
                  </div>
                  <p className="text-foreground/80 mb-6 italic">"{testimonial.text}"</p>
                  <div className="border-t border-border pt-4">
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-16 md:py-24 bg-primary text-white"
        style={{
          backgroundImage: "url('https://d2xsxph8kpxj0f.cloudfront.net/310519663533517904/iHWSWid9jiKahvCmA4pvEa/mahiratra-contact-bg-bKCCH2qaEn8fTf8cDfrxaR.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundBlendMode: "overlay",
        }}
      >
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-white mb-8">Contactez-Nous</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <Mail className="w-6 h-6 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <a href="mailto:mahiratragroupe@gmail.com" className="text-white/80 hover:text-white transition-colors">
                      mahiratragroupe@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Phone className="w-6 h-6 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Téléphone</h3>
                    <a href="tel:+261325943552" className="text-white/80 hover:text-white transition-colors">
                      +261 32 59 435 52
                    </a>
                    <br />
                    <a href="https://wa.me/33789384734" className="text-white/80 hover:text-white transition-colors">
                      WhatsApp: +33 7 89 38 47 34
                    </a>
                  </div>
                </div>
                <div className="flex gap-4">
                  <MapPin className="w-6 h-6 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Adresse</h3>
                    <p className="text-white/80">
                      Antananarivo, Madagascar
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Votre Nom"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Votre Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                  />
                </div>
                <div>
                  <Input
                    type="tel"
                    name="phone"
                    placeholder="Votre Téléphone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                  />
                </div>
                <div>
                  <Textarea
                    name="message"
                    placeholder="Votre Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-accent hover:bg-accent/90 text-white"
                  disabled={submitted}
                >
                  {submitted ? "Message Envoyé ✓" : "Envoyer le Message"}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-white py-8">
        <div className="container text-center">
          <p className="text-white/70">
            © 2026 Mahiratra Groupe. Tous droits réservés.
          </p>
        </div>
      </footer>
    </div>
  );
}
