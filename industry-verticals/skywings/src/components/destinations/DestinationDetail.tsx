import React, { JSX } from 'react';
import Link from 'next/link'
import {
  RichText,
  Text,
  Field,
  ImageField,
  Image,
} from '@sitecore-content-sdk/nextjs';
import { ComponentProps } from 'lib/component-props';
import Head from 'next/head';
import { removeTags } from 'src/helpers/ContentSearchHelper';
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import {
  Plane,
  Camera,
  Bed,
  Phone,
  Navigation,
  Sun,
  Cloud,
  ArrowLeft,
  Star,
  Heart,
  Share2
} from "lucide-react"

type DestinationDetailProps = ComponentProps & {
  fields: {
    Title: Field<string>;
    Country: {
      fields: {
        Name: Field<string>;
      }
    }
    Continent: Field<string>;
    Content: Field<string>;
    Image: ImageField;
    Price: Field<string>;
    Type: Field<string>;
    Rating: Field<string>;
    SuggestedDuration: Field<string>;
    ExpectedTemps: Field<string>;
    BestMonths: Field<string>;
    Description: Field<string>;
  };
};

const destination = {
  name: "Bali",
  country: "Indonesia",
  continent: "Asia",
  description:
    "Bali, the famed Island of the Gods, offers lush jungles, iconic rice terraces, pristine beaches, and rich spiritual culture. From vibrant Ubud to surf-friendly Seminyak, Bali is a tropical paradise that attracts travelers seeking both adventure and tranquility.",
  heroImage: "/images/bali.jpg",
  rating: 4.8,
  reviewCount: 2743,
  flightPrice: "from $799",
  bestTime: "April - October",
  temperature: "24-31°C",
  timeZone: "WITA (UTC+8)",
  language: "Indonesian (Bahasa Indonesia)",
  currency: "Indonesian Rupiah (IDR)",
  visaRequired: "No (30 days for most countries)",
  gallery: [
    "/images/bali.jpg",
    "/placeholder.svg?height=400&width=600",
    "/placeholder.svg?height=400&width=600",
    "/placeholder.svg?height=400&width=600",
    "/placeholder.svg?height=400&width=600",
    "/placeholder.svg?height=400&width=600",
  ],
  highlights: [
    {
      name: "Tegallalang Rice Terraces",
      description: "Famous stepped rice fields in Ubud with stunning scenery",
      image: "https://united.sitecoresandbox.cloud/api/public/content/tegallalang-rice-terraces?v=7d0177bf",
      category: "Landscape",
    },
    {
      name: "Uluwatu Temple",
      description: "Dramatic cliffside temple overlooking the Indian Ocean",
      image: "https://united.sitecoresandbox.cloud/api/public/content/uluwatu-temple?v=0d56ca6e",
      category: "Temple",
    },
    {
      name: "Seminyak Beach",
      description: "Trendy beach destination known for surfing and sunsets",
      image: "https://united.sitecoresandbox.cloud/api/public/content/seminyak-beach?v=1f93f265",
      category: "Beach",
    },
    {
      name: "Sacred Monkey Forest Sanctuary",
      description: "Forest sanctuary in Ubud home to hundreds of monkeys",
      image: "https://united.sitecoresandbox.cloud/api/public/content/sacred-monkey-forest-sanctuary?v=4e1b801f",
      category: "Nature",
    },
    {
      name: "Mount Batur",
      description: "Active volcano popular for sunrise trekking",
      image: "https://united.sitecoresandbox.cloud/api/public/content/mount-batur?v=1d275d4f",
      category: "Adventure",
    },
    {
      name: "Tanah Lot Temple",
      description: "Iconic sea temple perched on a rock formation",
      image: "https://united.sitecoresandbox.cloud/api/public/content/tanah-lot-temple?v=de84b2dd",
      category: "Temple",
    },
  ],
  activities: [
    {
      category: "Culture & Temples",
      items: [
        "Visit Uluwatu and Tanah Lot Temples",
        "Watch a Kecak fire dance performance",
        "Explore traditional Balinese villages",
        "Participate in a Balinese cooking class",
        "Discover Pura Tirta Empul holy spring temple",
      ],
    },
    {
      category: "Food & Dining",
      items: [
        "Try Babi Guling (roast pig) and Nasi Campur",
        "Dine at beach clubs in Seminyak",
        "Enjoy organic cafes in Ubud",
        "Take a Balinese street food tour",
        "Experience a seafood feast in Jimbaran Bay",
      ],
    },
    {
      category: "Adventure & Nature",
      items: [
        "Hike Mount Batur at sunrise",
        "White water rafting in Ayung River",
        "Snorkel or dive in Nusa Penida",
        "Explore waterfalls in northern Bali",
        "Cycle through the rice fields of Ubud",
      ],
    },
    {
      category: "Day Trips",
      items: [
        "Nusa Penida island tour",
        "Relax in the beach town of Canggu",
        "Visit Sidemen Valley for lush scenery",
        "Explore Lake Beratan and Ulun Danu Temple",
        "Experience the highlands of Munduk",
      ],
    },
  ],
  weather: [
    {
      season: "Dry Season",
      months: "Apr-Oct",
      temp: "25-31°C",
      icon: <Sun className="h-5 w-5" />,
      description: "Sunny, dry, and best time to visit",
    },
    {
      season: "Wet Season",
      months: "Nov-Mar",
      temp: "24-30°C",
      icon: <Cloud className="h-5 w-5" />,
      description: "Heavy afternoon rains, lush greenery",
    },
  ],
  travelTips: [
    {
      category: "Transportation",
      tips: [
        "Rent a scooter for local travel (experience required)",
        "Use ride-hailing apps like Gojek and Grab",
        "Traffic can be heavy, especially in tourist areas",
        "Arrange drivers for longer day trips",
        "Be cautious on mountain roads and curves",
      ],
    },
    {
      category: "Cultural Etiquette",
      tips: [
        "Dress modestly when visiting temples",
        "Do not touch people's heads (considered sacred)",
        "Use your right hand for giving/receiving items",
        "Avoid pointing feet at people or religious objects",
        "Respect local ceremonies and rituals",
      ],
    },
    {
      category: "Practical Tips",
      tips: [
        "Drink only bottled or filtered water",
        "ATMs are widely available but carry cash for rural areas",
        "Travel insurance is highly recommended",
        "SIM cards with data are cheap and easy to buy",
        "Tipping is appreciated but not expected",
      ],
    },
  ],
  accommodation: [
    {
      type: "Luxury Resorts",
      examples: ["Four Seasons Resort Bali", "AYANA Resort", "Mandapa, a Ritz-Carlton Reserve"],
      priceRange: "IDR 3,000,000–7,000,000/night",
      description: "Lavish amenities with beachfront or jungle settings",
    },
    {
      type: "Boutique Hotels & Villas",
      examples: ["The Ubud Village Resort", "Alila Villas", "Blue Karma Dijiwa Seminyak"],
      priceRange: "IDR 1,000,000–3,000,000/night",
      description: "Stylish stays with personalized service",
    },
    {
      type: "Guesthouses & Homestays",
      examples: ["Pondok Bambu", "Green Field Hotel", "Bali Moon Guest House"],
      priceRange: "IDR 300,000–800,000/night",
      description: "Authentic local experience at budget prices",
    },
    {
      type: "Budget Options",
      examples: ["Hostels", "Surf camps", "Backpacker lodges"],
      priceRange: "IDR 100,000–300,000/night",
      description: "Affordable and social for young travelers",
    },
  ],
  flightInfo: {
    airports: ["Ngurah Rai International Airport (DPS)"],
    flightTime: "18-22 hours from US West Coast (with layovers)",
    airlines: ["Garuda Indonesia", "Singapore Airlines", "Qatar Airways", "Emirates"],
    directFlights: ["Singapore", "Kuala Lumpur", "Sydney", "Tokyo"],
  },
}

const DestinationDetail = (props: DestinationDetailProps): JSX.Element => {
  const sxaStyles = `${props.params?.styles || ''}`;
  console.log(props);

  return (
    <>
      <Head>
        <meta property="og:description" content={removeTags(props.fields?.Title?.value)} />
        <meta property="og:title" content={props.fields?.Title?.value} />
        <meta property="og:image" content={props.fields?.Image?.value?.src} />
        <meta property="og:type" content="destination" />
      </Head>
      <div className="container mx-auto px-4 py-4">
        <Link href="/destinations" className="inline-flex items-center text-blue-600 hover:text-blue-800">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Destinations
        </Link>
      </div>

      {/* Hero Section */}
      <section className="relative">
        <div className="relative h-96 md:h-[500px]">
          <Image
            field={props.fields.Image}
            height={500}
            width={1200}
            className="object-cover h-[500px]"
          />
          <div className="absolute bottom-8 left-8 text-white">
            <div className="flex items-center space-x-2 mb-2">
              <Badge className="bg-blue-600"><Text field={props.fields.Continent} /></Badge>
              <div className="flex items-center space-x-1">
                <Star className="h-4 w-4 text-yellow-400 fill-current" />
                <span className="font-medium"><Text field={props.fields.Rating} /></span>
                <span className="text-blue-100">34 reviews</span>
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-2"><Text field={props.fields.Title} /></h1>
            <p className="text-xl text-blue-100"><Text field={props.fields.Country.fields.Name} /></p>
          </div>

          <div className="absolute top-8 right-8 flex space-x-2">
            <Button variant="secondary" size="sm">
              <Heart className="h-4 w-4 mr-2" />
              Save
            </Button>
            <Button variant="secondary" size="sm">
              <Share2 className="h-4 w-4 mr-2" />
              Share
            </Button>
          </div>
        </div>
      </section>
      <div className={`container mx-auto px-4 py-12 ${sxaStyles}`}>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Description */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">About <Text field={props.fields.Title} /></h2>
              <div className="text-gray-700 text-lg leading-relaxed"><RichText field={props.fields.Description} /></div>
            </section>

            {/* Photo Gallery */}
            {/* <section className="mb-12">
                          <h2 className="text-2xl font-bold text-gray-900 mb-6">Photo Gallery</h2>
                          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                              {destination.gallery.map((image, index) => (
                                  <div key={index} className="relative aspect-square overflow-hidden rounded-lg">
                                      <Image
                                          src={image || "/placeholder.svg"}
                                          alt={`${destination.name} ${index + 1}`}
                                          fill
                                          className="object-cover hover:scale-105 transition-transform cursor-pointer"
                                      />
                                  </div>
                              ))}
                          </div>
                      </section> */}

            {/* Top Highlights */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Top Highlights</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {destination.highlights.map((highlight, index) => (
                  <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="relative h-40">
                      <Image
                        src={highlight.image || "/placeholder.svg"}
                        alt={highlight.name}
                        fill
                        className="object-cover"
                      />
                      <Badge className="absolute top-2 left-2 bg-blue-600">{highlight.category}</Badge>
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-semibold text-gray-900 mb-2">{highlight.name}</h3>
                      <p className="text-gray-600 text-sm">{highlight.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* Detailed Information Tabs */}
            <section className="mb-12">
              <Tabs defaultValue="activities" className="w-full">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="activities">Activities</TabsTrigger>
                  <TabsTrigger value="weather">Weather</TabsTrigger>
                  <TabsTrigger value="tips">Travel Tips</TabsTrigger>
                  <TabsTrigger value="accommodation">Hotels</TabsTrigger>
                </TabsList>

                <TabsContent value="activities" className="mt-6">
                  <div className="space-y-6">
                    {destination.activities.map((category, index) => (
                      <Card key={index}>
                        <CardHeader>
                          <CardTitle className="flex items-center space-x-2">
                            <Camera className="h-5 w-5 text-blue-600" />
                            <span>{category.category}</span>
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-2">
                            {category.items.map((item, itemIndex) => (
                              <li key={itemIndex} className="flex items-start space-x-2">
                                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                                <span className="text-gray-700">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="weather" className="mt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {destination.weather.map((season, index) => (
                      <Card key={index}>
                        <CardContent className="p-6">
                          <div className="flex items-center space-x-3 mb-4">
                            {season.icon}
                            <div>
                              <h3 className="font-semibold text-gray-900">{season.season}</h3>
                              <p className="text-sm text-gray-600">{season.months}</p>
                            </div>
                          </div>
                          <div className="space-y-2">
                            <div className="flex justify-between">
                              <span className="text-gray-600">Temperature:</span>
                              <span className="font-medium">{season.temp}</span>
                            </div>
                            <p className="text-sm text-gray-600">{season.description}</p>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="tips" className="mt-6">
                  <div className="space-y-6">
                    {destination.travelTips.map((category, index) => (
                      <Card key={index}>
                        <CardHeader>
                          <CardTitle className="flex items-center space-x-2">
                            <Navigation className="h-5 w-5 text-blue-600" />
                            <span>{category.category}</span>
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-3">
                            {category.tips.map((tip, tipIndex) => (
                              <li key={tipIndex} className="flex items-start space-x-3">
                                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span className="text-gray-700">{tip}</span>
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="accommodation" className="mt-6">
                  <div className="space-y-6">
                    {destination.accommodation.map((type, index) => (
                      <Card key={index}>
                        <CardHeader>
                          <CardTitle className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                              <Bed className="h-5 w-5 text-blue-600" />
                              <span>{type.type}</span>
                            </div>
                            <Badge variant="outline">{type.priceRange}</Badge>
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-gray-600 mb-4">{type.description}</p>
                          <div className="space-y-2">
                            <h4 className="font-medium text-gray-900">Popular Options:</h4>
                            <ul className="space-y-1">
                              {type.examples.map((example, exampleIndex) => (
                                <li key={exampleIndex} className="text-gray-700 text-sm">
                                  • {example}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Flight Booking Card */}
            <Card className="mb-8 sticky top-24">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Plane className="h-5 w-5 text-blue-600" />
                  <span>Book Your Flight</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">{destination.flightPrice}</div>
                  <p className="text-gray-600 text-sm">Round trip per person</p>
                </div>

                <Separator />

                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Flight Time:</span>
                    <span className="font-medium">{destination.flightInfo.flightTime}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Airports:</span>
                    <span className="font-medium">{destination.flightInfo.airports.join(", ")}</span>
                  </div>
                </div>

                <Button className="w-full" size="lg">
                  Search Flights
                </Button>

                <div className="text-center">
                  <p className="text-xs text-gray-500">
                    Direct flights available from {destination.flightInfo.directFlights.join(", ")}
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Quick Facts */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Quick Facts</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Language:</span>
                  <span className="font-medium">{destination.language}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Currency:</span>
                  <span className="font-medium">{destination.currency}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Time Zone:</span>
                  <span className="font-medium">{destination.timeZone}</span>
                </div>
                <div className="flex items-start justify-between">
                  <span className="text-gray-600">Visa:</span>
                  <span className="font-medium text-right">{destination.visaRequired}</span>
                </div>
              </CardContent>
            </Card>

            {/* Contact Support */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Phone className="h-5 w-5 text-blue-600" />
                  <span>Need Help?</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm mb-4">
                  Our travel experts are here to help you plan the perfect trip to {destination.name}.
                </p>
                <Button variant="outline" className="w-full">
                  Contact Support
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export const Default = DestinationDetail;
