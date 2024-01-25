const Contact = () => {
  return (
    <div className="border border-gray-300 bg-cyan-50 min-h-screen">
      <div className="w-6/12 mx-auto text-center m-6 ">
        <h1 className="font-serif font-bold text-3xl">Contact Us</h1>

        <div className="py-6 text-center">
          <label className="block m-4">
            <span className="text-gray-700 font-mono font-bold text-xl">
              Name
            </span>
            <input
              type="text"
              className="mt-0 block w-full h-8 px-0.5 border-2 rounded-md border-gray-200 focus:ring-0 focus:border-black"
              placeholder="Name"
              required
            />
          </label>
          <label className="block m-4">
            <span className="text-gray-700 font-mono font-bold text-xl">
              Email address
            </span>
            <input
              type="email"
              className="mt-0 block w-full h-8 px-0.5 border-2 rounded-md border-gray-200 focus:ring-0 focus:border-black"
              placeholder="john@example.com"
            />
          </label>

          <label className="block mx-4 mt-4 ">
            <span className="text-gray-700 font-mono font-bold text-xl">
              Message
            </span>
            <textarea
              className="mt-0 block w-full px-0.5  border-2 rounded-md border-gray-200 focus:ring-0 focus:border-black"
              rows="6"
              placeholder="Write your message here"
            ></textarea>
          </label>
        </div>
        <button className=" p-2 bg-red-500 text-white rounded-md hover:bg-red-600 ">
          Submit
        </button>
      </div>
    </div>
  );
};

export default Contact;
