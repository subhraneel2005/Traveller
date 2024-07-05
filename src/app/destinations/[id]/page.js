
    const destinations = [
        {
          id: 1,
          name: 'Tropical Paradise',
          description: 'Enjoy the sun, sand, and sea at our top beach destinations.',
          image: '/destination1.jpg',
          about: 'Tropical Paradise offers an idyllic escape with pristine beaches, clear blue waters, and a relaxed atmosphere perfect for unwinding and enjoying nature. This destination is ideal for sunbathing, swimming, and exploring coral reefs. With luxurious resorts and beachfront bars, you’ll experience ultimate relaxation. Whether you prefer adventurous water sports or lazy days in a hammock, Tropical Paradise has it all.'
        },
        {
          id: 2,
          name: 'Cultural Escape',
          description: 'Immerse yourself in the rich history and culture of our destinations.',
          image: '/img21.jpg',
          about: 'Cultural Escape takes you on a journey through the ages, exploring ancient monuments, museums, and vibrant cultural festivals that showcase the region’s heritage. Enjoy guided tours that delve into the stories and traditions of the past. Visit historic sites and experience the local customs firsthand. This destination is perfect for history buffs and cultural enthusiasts looking to deepen their understanding of different civilizations.'
        },
        {
          id: 3,
          name: 'Urban Adventure',
          description: 'Explore the vibrant nightlife and attractions of our city destinations.',
          image: '/img3.jpeg',
          about: 'Urban Adventure invites you to dive into the bustling life of world-renowned cities, featuring iconic landmarks, diverse culinary scenes, and dynamic nightlife. Explore skyscrapers, parks, and cultural institutions. Sample cuisine from street food vendors to Michelin-starred restaurants. Discover the pulse of the city through music, theater, and art galleries. It’s an ideal destination for those who thrive in fast-paced environments and love exploring new urban landscapes.'
        },
        {
          id: 4,
          name: 'Mountain Retreat',
          description: 'Relax and rejuvenate in our peaceful mountain retreats.',
          image: '/img4.jpg',
          about: 'Mountain Retreat offers a serene escape from the hustle and bustle of everyday life, nestled in the heart of majestic mountain ranges. Enjoy breathtaking views, crisp mountain air, and a variety of outdoor activities like hiking, skiing, and wildlife spotting. Unwind in cozy cabins and luxurious lodges. This destination is perfect for those looking to reconnect with nature and find peace in the tranquility of the mountains.'
        },
        {
          id: 5,
          name: 'Desert Safari',
          description: 'Experience the thrill of a desert safari in our exotic locations.',
          image: '/img51.jpg',
          about: 'Desert Safari provides an exhilarating adventure across expansive sand dunes, offering unique experiences like camel rides, dune bashing, and stargazing under clear night skies. Discover the beauty of the desert landscape with its unique flora and fauna. Enjoy cultural performances and traditional cuisine in Bedouin-style camps. This destination is ideal for thrill-seekers and those looking to explore the rugged beauty of the desert.'
        },
        {
          id: 6,
          name: 'Island Gateway',
          description: 'Discover the beauty and tranquility of our exclusive island getaways.',
          image: '/img6.jpg',
          about: 'Island Getaway offers secluded and picturesque islands where you can escape from the world and immerse yourself in natural beauty. Experience luxurious resorts, private beaches, and crystal-clear waters perfect for swimming and snorkeling. Enjoy spa treatments, gourmet dining, and romantic sunset cruises. This destination is perfect for couples and anyone looking to relax and rejuvenate in a paradise-like setting.'
        }
      ];
      

export default function DestinationID({params}){

    const { id } = params;
    const destination = destinations.find(d => d.id === parseInt(id, 10));


      if(!destination){
        return <h1>Destination not found</h1>
      }

    return(
        <div className="min-h-screen bg-gradient-to-b from-blue-100 to-blue-300 p-8">
        {/* Hero Section */}
        <div className="relative h-80 bg-cover bg-center mb-12" style={{ backgroundImage: `url(${destination.image})` }}>
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <h1 className="text-4xl md:text-6xl text-white font-bold">{destination.name}</h1>
          </div>
        </div>
  
        {/* Details Section */}
        <div className="max-w-6xl mx-auto mb-12 text-center">
          <h2 className="text-3xl md:text-4xl text-blue-900 font-semibold mb-6">About {destination.name}</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            {destination.about}
          </p>
        </div>
  
        {/* Booking Section */}
        <div className="max-w-6xl mx-auto mb-12 text-center">
          <h2 className="text-3xl md:text-4xl text-blue-900 font-semibold mb-6">Book Your Trip to {destination.name}</h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-8">
            Ready to book your dream vacation? Our easy-to-use booking system allows you to plan your trip effortlessly.
          </p>
          <div className="flex justify-center">
            <button className="bg-green-600 text-white py-3 px-6 rounded-lg text-lg hover:bg-green-700">
              Book Now
            </button>
          </div>
        </div>
      </div>
    )
}