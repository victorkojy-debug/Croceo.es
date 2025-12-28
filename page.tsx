"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowRight, Menu, Check, ChevronDown, Key, Sparkles, Wrench, MessageCircle, Camera, Unlock, User, BedDouble, Gift, Leaf, Users, Shield, Umbrella, Euro, Handshake } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function AirbnbConciergePage() {
  const [showCookieBanner, setShowCookieBanner] = useState(true);

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="fixed top-0 w-full bg-background/80 backdrop-blur-sm z-50 border-b">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/">
            <h1 className="text-3xl font-bold text-primary cursor-pointer">Croceo.</h1>
          </Link>
          <button className="p-2">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm uppercase tracking-wide mb-6 border-l-2 border-primary pl-4">
              Seasonal Rental
            </p>
            <h2 className="text-5xl lg:text-6xl font-serif mb-6 leading-tight">
              An Airbnb concierge <span className="relative inline-block">
                <span className="relative z-10">close to you</span>
                <span className="absolute bottom-0 left-0 w-full h-3 bg-primary/30 -z-0"></span>
              </span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Easily rent your property with our specialized real estate agency in rental management.
            </p>
            <div className="flex gap-4 mb-8">
              <img src="https://ext.same-assets.com/3973299156/2502101370.png" alt="Airbnb" className="h-8" />
              <img src="https://ext.same-assets.com/3973299156/3925639042.png" alt="Booking.com" className="h-8" />
              <img src="https://ext.same-assets.com/3973299156/1435003793.png" alt="Abritel" className="h-8" />
            </div>
            <Button className="bg-gradient-to-r from-primary via-accent to-accent text-white hover:opacity-90 rounded-full px-8 py-6 text-lg">
              Estimate My Revenue <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
          <div className="relative">
            <img src="https://ext.same-assets.com/3973299156/2701339932.jpeg" alt="Luxury villa" className="w-full rounded-lg shadow-2xl" />
          </div>
        </div>
      </section>

      {/* Services Icons */}
      <section className="py-12 px-6 bg-muted/30">
        <div className="container mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { Icon: Key, title: "Welcome", subtitle: "Key Handover" },
            { Icon: Sparkles, title: "Cleaning", subtitle: "& Maintenance" },
            { Icon: Wrench, title: "Property", subtitle: "Maintenance" },
            { Icon: MessageCircle, title: "Communication", subtitle: "24/7" }
          ].map((service, i) => (
            <div key={i} className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <service.Icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-bold mb-1">{service.title}</h3>
              <p className="text-sm text-muted-foreground">{service.subtitle}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <p className="text-sm uppercase tracking-wide mb-4 border-l-2 border-primary pl-4">
            Our Offer
          </p>
          <h2 className="text-4xl lg:text-5xl font-serif mb-12">
            The <span className="relative inline-block">
              <span className="relative z-10">advantages</span>
              <span className="absolute bottom-0 left-0 w-full h-3 bg-primary/30 -z-0"></span>
            </span> with Croceo
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { Icon: Camera, title: "Free Photo Session", desc: "Our photographer highlights every detail to enhance your property." },
              { Icon: Unlock, title: "No Commitment", desc: "Total freedom for an experience without constraints." },
              { Icon: User, title: "Owner Stay", desc: "Find the comfort of home and stay freely, in complete serenity." },
              { Icon: BedDouble, title: "Household Linen", desc: "Hotel-quality sheets, fluffy towels, for unforgettable comfort." },
              { Icon: Gift, title: "Welcome Kit", desc: "An exclusive kit with shampoo, shower gel, coffee, tea, and more for a perfect stay." },
              { Icon: Leaf, title: "Eco-Responsible Maintenance", desc: "We use eco-friendly products to preserve your property and the environment." }
            ].map((advantage, i) => (
              <Card key={i} className="p-6 hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <advantage.Icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-serif mb-3">{advantage.title}</h3>
                <p className="text-muted-foreground">{advantage.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* All Services Section */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div className="sticky top-32">
            <p className="text-sm uppercase tracking-wide mb-4 border-l-2 border-primary pl-4">
              Our Services
            </p>
            <h2 className="text-4xl lg:text-5xl font-serif mb-6">
              Everything you need <span className="relative inline-block">
                <span className="relative z-10">and even more.</span>
                <span className="absolute bottom-0 left-0 w-full h-3 bg-primary/30 -z-0"></span>
              </span>
            </h2>
            <Button className="bg-gradient-to-r from-primary via-accent to-accent text-white hover:opacity-90 rounded-full px-8 py-6 mt-6">
              Learn More
            </Button>
          </div>

          <div className="space-y-6">
            {[
              { title: "Listing Creation on Platforms", desc: "Every detail counts for demanding travelers. Captivating descriptions, quality photos, and clear information enhance your property." },
              { title: "Multi-Platform Distribution", desc: "Global distribution, promote your property through Croceo and renowned platforms like Airbnb, Booking.com, Abritel, Vrbo, and over a dozen partner platforms." },
              { title: "Dynamic Pricing", desc: "Instantly adjusted prices, driven by local events, seasonality, statistics, and more, for optimal profitability." },
              { title: "Monthly Revenue Payment", desc: "Receive your rental income from seasonal rentals monthly, directly into your bank account." }
            ].map((service, i) => (
              <div key={i} className="flex gap-4 items-start">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Check className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security & Guarantees */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <p className="text-sm uppercase tracking-wide mb-4 border-l-2 border-primary pl-4">
            Security & Guarantees
          </p>
          <h2 className="text-4xl lg:text-5xl font-serif mb-12">
            Your property <span className="relative inline-block">
              <span className="relative z-10">fully secure</span>
              <span className="absolute bottom-0 left-0 w-full h-3 bg-primary/30 -z-0"></span>
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mb-12">
            Benefit from the best guarantees to rent with complete peace of mind with our concierge specialized in short-term rentals.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: "👥", title: "Traveler Selection on Airbnb", desc: "We verify the identity of each traveler for optimal security on Airbnb." },
              { icon: "🛡️", title: "Deposit", desc: "Protect your property with our enhanced deposit system for complete peace of mind." },
              { icon: "☂️", title: "Insurance", desc: "Protect yourself from unforeseen events with liability insurance included on each platform." },
              { icon: "💰", title: "No Non-Payment", desc: "The risk of non-payment is 0%. Reservations are paid before arrival at the property." },
              { icon: "🤝", title: "Personal Welcome", desc: "Our concierge personally welcomes your travelers to your property." }
            ].map((guarantee, i) => (
              <Card key={i} className="p-6 hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">{guarantee.icon}</div>
                <h3 className="text-xl font-bold mb-3">{guarantee.title}</h3>
                <p className="text-muted-foreground">{guarantee.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mobile App Section */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <img src="https://ugc.same-assets.com/mlm_P_LK8v3TXqtZCD9j3Rnz1RnIv-0z.png" alt="Hello By Croceo App" className="w-96 mx-auto" />
          </div>
          <div>
            <p className="text-sm uppercase tracking-wide mb-4 border-l-2 border-primary pl-4">
              A Single Mobile App to Manage Everything
            </p>
            <h2 className="text-4xl font-serif mb-6">
              Your owner space with <span className="relative inline-block">
                <span className="relative z-10">Hello By Croceo</span>
                <span className="absolute bottom-0 left-0 w-full h-3 bg-primary/30 -z-0"></span>
              </span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Access all your property information at your fingertips, directly from your Owner Space.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                { icon: ChevronDown, text: "Booking Tracking" },
                { icon: ChevronDown, text: "Revenue Tracking" },
                { icon: ChevronDown, text: "Calendar" },
                { icon: ChevronDown, text: "Statistics" },
                { icon: ChevronDown, text: "Reserve Your Property" },
                { icon: ChevronDown, text: "Property Activity" }
              ].map((feature, i) => (
                <div key={i} className="flex items-center gap-2">
                  <feature.icon className="w-5 h-5 text-primary" />
                  <span>{feature.text}</span>
                </div>
              ))}
            </div>

            <div className="flex gap-4">
              <Button className="bg-gradient-to-r from-primary via-accent to-accent text-white hover:opacity-90 rounded-full">
                Discover the App
              </Button>
              <Button variant="outline" className="rounded-full border-2 border-foreground">
                Sign In
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Cities Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <p className="text-sm uppercase tracking-wide mb-4 border-l-2 border-primary pl-4">
            Cities Where We Operate
          </p>
          <h2 className="text-4xl lg:text-5xl font-serif mb-6">
            Tailored support <span className="relative inline-block">
              <span className="relative z-10">for your property</span>
              <span className="absolute bottom-0 left-0 w-full h-3 bg-primary/30 -z-0"></span>
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-4xl mb-12">
            Whether your luxury villa is in <strong>Barcelona, Ibiza, Mallorca or Marbella</strong>,
            our concierge ensures <strong>complete management of your seasonal rental</strong>. Trust us
            with your property and benefit from professional support, optimized visibility, and a turnkey service.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Barcelona", country: "Spain", img: "https://ugc.same-assets.com/6N9bcOHPMAGg_o8ySh9BATYENniX1Kp8.webp" },
              { name: "Ibiza", country: "Spain", img: "https://ugc.same-assets.com/RhHaUO8vyH_0JlZTlYASbDaQaO3MZAsg.jpeg" },
              { name: "Mallorca", country: "Spain", img: "https://ugc.same-assets.com/OyJdnEVdPX54QCwv_8uGCXrwGjYzlBd_.jpeg" },
              { name: "Marbella", country: "Spain", img: "https://ugc.same-assets.com/m-i1wKN04ppeiQLiLhbXKW-fBUPgzHOa.jpeg" },
            ].map((city, i) => (
              <Card key={i} className="overflow-hidden group cursor-pointer">
                <div className="relative h-64">
                  <img src={city.img} alt={city.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                  <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-xs font-semibold">
                    AGENCY
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                    <h3 className="text-2xl font-serif text-white mb-1">{city.name}</h3>
                    <p className="text-white/80 text-sm">{city.country}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto grid lg:grid-cols-2 gap-12">
          <div>
            <p className="text-sm uppercase tracking-wide mb-4 border-l-2 border-primary pl-4">
              FAQ - Questions & Answers
            </p>
            <h2 className="text-4xl lg:text-5xl font-serif mb-6">
              We're here to answer <span className="relative inline-block">
                <span className="relative z-10">your questions</span>
                <span className="absolute bottom-0 left-0 w-full h-3 bg-primary/30 -z-0"></span>
              </span>
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Button className="bg-gradient-to-r from-primary via-accent to-accent text-white hover:opacity-90 rounded-full px-8 py-6">
                Frequent Questions
              </Button>
              <Button variant="outline" className="rounded-full px-8 py-6 border-2 border-foreground">
                Contact Us <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
          <div>
            <Accordion type="single" collapsible className="space-y-4">
              {[
                "Do you offer a rental profitability estimate?",
                "When am I paid for my Airbnb rental?",
                "What are the criteria for renting my property short-term?",
                "How to set the price for my seasonal rental?",
                "What is the minimum stay duration?",
                "What is furnished mobility lease?"
              ].map((question, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="bg-white px-6 rounded-lg border-none">
                  <AccordionTrigger className="hover:no-underline py-6 text-left">
                    {question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-6">
                    Our team will provide you with detailed information and personalized support for all your questions regarding Airbnb concierge and seasonal rental management in Spain.
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-16 px-6 border-t">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
            <div className="lg:col-span-1">
              <Link href="/">
                <h3 className="text-3xl font-bold text-primary mb-6 cursor-pointer">Croceo.</h3>
              </Link>
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>+447907036040</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>contact@croceo.es</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-4">SERVICES</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/airbnb-concierge" className="hover:text-foreground">Airbnb Concierge</Link></li>
                <li><a href="#" className="hover:text-foreground">Property Management</a></li>
                <li><a href="#" className="hover:text-foreground">Our Villas</a></li>
                <li><a href="#" className="hover:text-foreground">Estimate Your Revenue</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">RESOURCES</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground">News</a></li>
                <li><a href="#" className="hover:text-foreground">Croceo App</a></li>
                <li><a href="#" className="hover:text-foreground">Our Partners</a></li>
                <li><a href="#" className="hover:text-foreground">FAQ</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">OUR LOCATIONS</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground">Concierge Barcelona</a></li>
                <li><a href="#" className="hover:text-foreground">Concierge Ibiza</a></li>
                <li><a href="#" className="hover:text-foreground">Concierge Mallorca</a></li>
                <li><a href="#" className="hover:text-foreground">Concierge Marbella</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">COMPANY</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/" className="hover:text-foreground">Home</Link></li>
                <li><a href="#" className="hover:text-foreground">Contact Us</a></li>
                <li><a href="#" className="hover:text-foreground">Careers</a></li>
                <li><a href="#" className="hover:text-foreground">Legal Notice</a></li>
                <li><a href="#" className="hover:text-foreground">Terms & Conditions</a></li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t flex flex-col gap-4">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <p className="text-sm text-muted-foreground">© 2026 Croceo Spain. All rights reserved.</p>
              <div className="flex gap-4">
                <a href="#" className="w-8 h-8 bg-foreground rounded-full flex items-center justify-center text-white hover:opacity-80">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z"/>
                  </svg>
                </a>
                <a href="#" className="w-8 h-8 bg-foreground rounded-full flex items-center justify-center text-white hover:opacity-80">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
              </div>
            </div>
            <p className="text-xs text-muted-foreground text-center">
              Part of <a href="https://www.croceo.fr" className="underline hover:text-foreground">Croceo Group</a> - Founded in France
            </p>
          </div>
        </div>
      </footer>

      {/* Cookie Banner */}
      {showCookieBanner && (
        <div className="fixed bottom-6 right-6 bg-white shadow-xl rounded-lg p-6 max-w-sm border z-50">
          <p className="text-sm mb-4">We use cookies to personalize content, run ads, and analyze traffic.</p>
          <Button
            onClick={() => setShowCookieBanner(false)}
            className="bg-foreground text-white hover:bg-foreground/90 rounded-full w-full"
          >
            OK
          </Button>
        </div>
      )}
    </div>
  );
}
