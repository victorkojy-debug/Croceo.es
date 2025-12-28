"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowRight, Menu, Check, Plus } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export default function Home() {
  const [showCookieBanner, setShowCookieBanner] = useState(true);

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="fixed top-0 w-full bg-background/80 backdrop-blur-sm z-50 border-b">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-primary">Croceo.</h1>
          <button className="p-2">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm uppercase tracking-wide mb-6 border-l-2 border-primary pl-4">
              Luxury Villa Management & Concierge
            </p>
            <h2 className="text-5xl lg:text-6xl font-serif mb-6 leading-tight">
              At every stage of your luxury property journey
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              From seasonal rentals with our Airbnb concierge service to property management,
              we support you at every step to optimize the profitability of your luxury villa in Spain.
            </p>
            <Button className="bg-gradient-to-r from-primary via-accent to-accent text-white hover:opacity-90 rounded-full px-8 py-6 text-lg">
              Our Services <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
          <div className="relative">
            <div className="relative rounded-t-[200px] bg-gradient-to-br from-secondary/20 to-primary/20 p-8 pt-20">
              <img
                src="https://ugc.same-assets.com/pqdDng-y_FEzs9kA-ANAq-0O8St4Bj1Q.png"
                alt="Luxury villa interior"
                className="w-full rounded-lg scale-150"
              />
              <div className="absolute top-0 right-0 text-6xl lg:text-8xl font-serif opacity-20 transform rotate-90 origin-top-left">

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto">
          <p className="text-sm uppercase tracking-wide mb-4 border-l-2 border-primary pl-4">
            Our Airbnb Concierge & Property Management Services
          </p>
          <h2 className="text-4xl lg:text-5xl font-serif mb-12">
            Tailored luxury villa management
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mb-16">
            Are you the owner of a luxury villa or estate and looking for reliable and seamless management
            for your rental property? Discover our concierge and property management services tailored to your needs.
          </p>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Conciergerie Airbnb Card */}
            <Card className="p-8 lg:p-12 bg-white hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h3 className="text-3xl font-serif mb-4">Airbnb Concierge</h3>
              <p className="text-lg font-semibold mb-6">Service for your seasonal luxury rentals</p>
              <p className="text-muted-foreground mb-8">
                We handle everything so your guests can enjoy an unforgettable experience while you
                rent out your property with complete peace of mind.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Personal welcome, housekeeping & maintenance",
                  "Complete reservation management",
                  "Professional photo session included",
                  "Listing distribution across 10+ platforms",
                  "Dynamic pricing to maximize your revenue",
                  "Security deposit for better protection"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link href="/airbnb-concierge">
                <Button className="bg-gradient-to-r from-primary via-accent to-accent text-white hover:opacity-90 rounded-full w-full">
                  Discover our Airbnb concierge services <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </Card>

            {/* Gestion Locative Card */}
            <Card className="p-8 lg:p-12 bg-white hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                </svg>
              </div>
              <h3 className="text-3xl font-serif mb-4">Property Management</h3>
              <p className="text-lg font-semibold mb-6">Service for your luxury villa rentals</p>
              <p className="text-muted-foreground mb-8">
                Entrust us with the management of your property and benefit from comprehensive rental
                support at every stage.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Rental valuation and strategy",
                  "Tenant search and selection",
                  "Tenant background verification",
                  "Lease drafting and administration",
                  "Rent guarantee insurance for risk-free rental",
                  "Detailed move-in and move-out inspections"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Button className="bg-gradient-to-r from-primary via-accent to-accent text-white hover:opacity-90 rounded-full w-full">
                Discover our property management services <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="w-96 h-96 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full flex items-center justify-center">
              <div className="w-64 h-64 bg-foreground rounded-full flex items-center justify-center relative overflow-hidden">
                <svg className="w-48 h-48 text-primary absolute" viewBox="0 0 200 200" fill="currentColor">
                  <path d="M100 20 L120 80 L180 80 L130 120 L150 180 L100 140 L50 180 L70 120 L20 80 L80 80 Z" />
                </svg>
              </div>
            </div>
          </div>
          <div>
            <p className="text-sm uppercase tracking-wide mb-6 border-l-2 border-primary pl-4">
              Luxury Villa Management & Concierge in Spain
            </p>
            <h2 className="text-4xl lg:text-5xl font-serif mb-6">
              Your trusted <span className="relative inline-block">
                <span className="relative z-10">luxury villa partner!</span>
                <span className="absolute bottom-0 left-0 w-full h-3 bg-primary/30 -z-0"></span>
              </span>
            </h2>
            <p className="text-lg mb-6">Together, let's turn your ambitions into reality.</p>
            <p className="text-muted-foreground mb-8">
              Close to our property owners, we are by your side to bring every stage of your luxury property
              project to life. Whether it's for property management or seasonal rentals with our turnkey
              Airbnb concierge service, we are with you every step of the way.
            </p>
            <Button className="bg-foreground text-white hover:bg-foreground/90 rounded-full px-8 py-6">
              Contact Us <ArrowRight className="ml-2 w-5 h-5" />
            </Button>

            <div className="grid grid-cols-3 gap-8 mt-12 pt-12 border-t">
              <div className="text-center">
                <div className="text-4xl font-serif mb-2">35+</div>
                <div className="text-sm text-muted-foreground">Team Members</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-serif mb-2">130+</div>
                <div className="text-sm text-muted-foreground">Luxury Villas</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-serif mb-2">4+</div>
                <div className="text-sm text-muted-foreground">Cities</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lease Types Section */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto">
          <p className="text-sm uppercase tracking-wide mb-4 border-l-2 border-primary pl-4">
            Our rental agreements: Choose the right contract for your property
          </p>
          <div className="grid lg:grid-cols-2 gap-12 items-start mb-12">
            <div>
              <h2 className="text-4xl lg:text-5xl font-serif mb-6">
                A rental agreement tailored <span className="relative inline-block">
                  <span className="relative z-10">to every need</span>
                  <span className="absolute bottom-0 left-0 w-full h-3 bg-primary/30 -z-0"></span>
                </span>
              </h2>
              <Button className="bg-gradient-to-r from-primary via-accent to-accent text-white hover:opacity-90 rounded-full px-8 py-6">
                Learn More
              </Button>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                {
                  title: "Seasonal rental contract",
                  desc: "Ideal for short-term stays, this contract guarantees a reservation in complete simplicity."
                },
                {
                  title: "Mobility lease",
                  desc: "Specially designed for tenants in professional mobility or students."
                },
                {
                  title: "Furnished lease",
                  desc: "This lease is for furnished rentals, perfect for tenants seeking flexibility."
                },
                {
                  title: "Student furnished lease",
                  desc: "Designed for students, this lease covers the academic year with flexible duration."
                },
                {
                  title: "Unfurnished lease",
                  desc: "A classic lease for unfurnished properties, offering long-term stability to tenants."
                },
                {
                  title: "More options?",
                  desc: "Contact us to explore other options and find the type of lease that suits you perfectly."
                }
              ].map((item, i) => (
                <Card key={i} className="p-6 bg-white hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-serif mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Cities Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <p className="text-sm uppercase tracking-wide mb-4 border-l-2 border-primary pl-4">
            Where we operate in Spain
          </p>
          <h2 className="text-4xl lg:text-5xl font-serif mb-6 max-w-3xl">
            Customized support for your luxury villa
          </h2>
          <p className="text-lg text-muted-foreground max-w-4xl mb-12">
            Whether your luxury villa is in <strong>Barcelona, Ibiza, Mallorca or Marbella</strong>,
            our concierge ensures <strong>complete management of your seasonal rental</strong>. Entrust us
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
                    Villa
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

      {/* Testimonials Section */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-4xl lg:text-5xl font-serif mb-12 text-center">
            What our <span className="relative inline-block">
              <span className="relative z-10">property owners say</span>
              <span className="absolute bottom-0 left-0 w-full h-3 bg-primary/30 -z-0"></span>
            </span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "Justine S.",
                date: "February 18, 2025",
                rating: 5,
                text: "Nothing to complain about, everything is managed to perfection! The concierge offers a turnkey service that allows me to rent my property. The team is available and very professional, everything is managed perfectly."
              },
              {
                name: "Marc & Fabienne",
                date: "January 12, 2025",
                rating: 4,
                text: "Croceo has been taking care of my villa for over a year and it's a real comfort. No need to handle the logistics anymore, they take care of everything with seriousness and professionalism."
              },
              {
                name: "Laurent",
                date: "December 13, 2024",
                rating: 4,
                text: "Great service! Thanks to Croceo concierge, my apartment is always impeccable and well managed. No need to worry about arrivals and departures, everything flows smoothly. Highly recommend!"
              }
            ].map((testimonial, i) => (
              <Card key={i} className="p-6 bg-white">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.date}</p>
                  </div>
                  <span className="text-xs bg-muted px-2 py-1 rounded">OWNER</span>
                </div>
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, j) => (
                    <svg key={j} className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-muted-foreground">{testimonial.text}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <p className="text-sm uppercase tracking-wide mb-4 border-l-2 border-primary pl-4">
            Our Partners
          </p>
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-4xl lg:text-5xl font-serif max-w-2xl">
              Discover our expert partners in <span className="relative inline-block">
                <span className="relative z-10">property management</span>
                <span className="absolute bottom-0 left-0 w-full h-3 bg-primary/30 -z-0"></span>
              </span>
            </h2>
            <Button className="bg-gradient-to-r from-primary via-accent to-accent text-white hover:opacity-90 rounded-full px-8 py-6">
              Discover
            </Button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8 items-center">
            {["Airbnb", "Booking.com", "Vrbo", "Expedia", "HomeAway", "TripAdvisor", "Luxury Retreats"].map((partner, i) => (
              <div key={i} className="flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all">
                <span className="text-xl font-bold text-muted-foreground">{partner}</span>
              </div>
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
                Frequently Asked Questions
              </Button>
              <Button variant="outline" className="rounded-full px-8 py-6 border-2 border-foreground">
                Contact Us <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
          <div>
            <Accordion type="single" collapsible className="space-y-4">
              {[
                "How does the move-in and move-out inspection process work?",
                "How can I renew my long-term rental lease?",
                "Can I sublet the apartment or house?",
                "What happens if I have difficulty paying my rent?",
                "Can I terminate my lease before the end of the initial period?",
                "Do I need to take out home insurance?"
              ].map((question, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="bg-white px-6 rounded-lg border-none">
                  <AccordionTrigger className="hover:no-underline py-6 text-left">
                    {question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-6">
                    Our team will provide you with detailed information and personalized support for all your questions regarding luxury villa management and rental agreements in Spain.
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Meet the Team Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-4xl lg:text-5xl font-serif mb-16 text-center">
            Meet the <span className="relative inline-block">
              <span className="relative z-10">Owners</span>
              <span className="absolute bottom-0 left-0 w-full h-3 bg-primary/30 -z-0"></span>
            </span>
          </h2>

          <div className="flex justify-center">
            <div className="text-center max-w-md">
              <div className="relative inline-block mb-8">
                <div className="w-72 h-96 rounded-[200px] overflow-hidden border-8 border-muted shadow-2xl">
                  <img
                    src="https://ugc.same-assets.com/AGXivDCGAuGKIiWydLovH1fExyOXihrO.jpeg"
                    alt="Victor E."
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <h3 className="text-3xl font-serif mb-2">Victor E.</h3>
              <p className="text-lg font-semibold text-primary mb-3">Owner & Managing Director Spain</p>
              <p className="text-muted-foreground">
                Leading market entry, operations, and growth in Spain.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-16 px-6 border-t">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
            <div className="lg:col-span-1">
              <h3 className="text-3xl font-bold text-primary mb-6">Croceo.</h3>
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
                <li><a href="#" className="hover:text-foreground">Airbnb Concierge</a></li>
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
