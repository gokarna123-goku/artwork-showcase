export const CTA = () => {
  return (
    <>
      <section className="py-20 px-4 md:px-8 bg-gradient-to-r from-purple-900/40 via-black to-cyan-900/40">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Ready to Join the Digital Art Revolution?
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Whether you're an artist looking to showcase your work or a
            collector seeking unique digital pieces, NeonArt is your gateway to
            the future of art.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 rounded-lg ease-in-out duration-300 text-lg cursor-pointer">
              Create Account
            </button>
            <button className="border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 px-8 py-3 text-lg cursor-pointer rounded-lg ease-in-out duration-300">
              Learn More
            </button>
          </div>
        </div>
      </section>
    </>
  );
};
