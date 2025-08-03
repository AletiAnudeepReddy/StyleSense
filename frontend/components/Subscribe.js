import React from 'react';

const Subscribe = () => {
    return (
        <div className="max-w-6xl flex justify-center items-center container mx-auto rounded-2xl bg-gradient-to-r from-[#2da5b4]/80 via-[#3ee8ff]/80 to-[#2da5b4]/80 overflow-hidden relative z-10">
            <div className="w-full py-12 px-6 sm:px-12 text-center text-white">
                <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                    Discover Your <span className="bg-gradient-to-r from-[#2da5b4] via-[#2da5b4] to-[#2da5b4] text-transparent bg-clip-text font-bold drop-shadow-[0_0_20px_white]">
  Perfect Look
</span> with AI
                </h2>
                

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <input
                        type="email"
                        placeholder="Enter your email to get early access"
                        className="w-full sm:w-[300px] p-3 rounded-lg text-gray-800 border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/60"
                    />
                    <button className="px-6 py-3 bg-white text-[#2da5b4] font-semibold rounded-lg hover:bg-gray-100 transition-all">
                        Notify Me
                    </button>
                </div>

                <p className="mt-6 text-white text-md">
                    Be the first to know when we launch new features!
                </p>
            </div>
        </div>
    );
};

export default Subscribe;
