const About = () => {
  return (
    <div className=" border border-gray-300 bg-cyan-50 min-h-screen">
      <div className="w-8/12 mx-auto text-center m-6 ">
        <h1 className="font-serif font-bold text-4xl">
          Welcome to Food Express!
        </h1>
        <div className="flex justify-around mt-4">
          <div>
            <p className="text-justify">
              Embark on a culinary voyage through the vibrant streets of India's
              capital with Food Express, your gateway to the rich and diverse
              flavors that define New Delhi's gastronomic landscape. At Food
              Express, we celebrate the essence of Delhi's food culture – a
              perfect blend of tradition, innovation, and a myriad of spices.
              From the bustling markets of Old Delhi to the chic eateries in
              South Delhi, we bring the city's iconic tastes and hidden gems
              directly to your doorstep.
            </p>
          </div>
          <div className="ml-4 border border-black rounded-md">
            <img
              className="w-[1600] rounded-sm h-full"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2b_SKqlokdovDafyiQBMQs6MhFIuLwTZg5w&usqp=CAU"
            />
          </div>
        </div>

        <h3 className="mt-4 font-mono font-bold text-start">
          Discover the Heartbeat of Delhi's Cuisine:
        </h3>
        <p className="text-start">
          Journey through the narrow alleys of Chandni Chowk with our curated
          selection of street food, featuring the legendary chaats, kebabs, and
          sweets that have become synonymous with the city's culinary identity.
          Explore the menus of renowned eateries and hidden treasures, each dish
          reflecting the unique heritage and tradition that makes Delhi's food
          scene truly extraordinary.
        </p>

        <h3 className="mt-4 font-mono font-bold text-start">
          Your Culinary Adventure Awaits:
        </h3>
        <p className="text-start">
          No matter where you are in New Delhi – the bustling Connaught Place,
          the historic lanes of Daryaganj, or the serene neighborhoods of Vasant
          Kunj – we're here to make your dining experience seamless and
          delightful. Enjoy exclusive deals and discounts tailored for
          Delhiites, ensuring that you can savor the city's delicacies without
          compromising on your budget.
        </p>

        <h3 className="mt-4 font-mono font-bold text-start">How to Indulge:</h3>
        <p className="text-start">
          Explore our platform to discover the diverse offerings from local
          favorites to renowned establishments. Place orders effortlessly with
          our user-friendly interface, allowing you to customize your meals and
          choose your preferred delivery option. As your order arrives, let the
          aromas and flavors transport you to the heart of Delhi. We're here to
          ensure every bite is a celebration of the city's culinary spirit.
          Thank you for choosing Food Express New Delhi! Join us as we explore
          the soulful kitchens and streets of this incredible city together.
        </p>
      </div>
    </div>
  );
};

export default About;
