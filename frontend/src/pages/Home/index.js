import React from 'react';
import Button from '../../components/common/Button';

function Home() {
    return (
        <>
            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
                <div className="grid gap-8 flex-1">
                    <div>
                        <h1 className="mt-8 text-4xl lg:text-7xl uppercase font-paytone font-black">WELCOME, FRIEND</h1>
                        <h2 className="mt-6 text-3xl xl:text-4xl">Stuck in tutorial h*ck?</h2>
                    </div>

                    <p className="mt-4 text-lg lg:text-2xl max-w-[40ch]">
                        You’ve come to the right place. We make learning the JavaScript ecosystem fun, approachable, and
                        easy...
                    </p>
                    <div className="w-auto">
                        <Button>
                            <span className="font-black px-6 py-4">Shut up and take my money</span>
                        </Button>
                    </div>
                </div>
                <aside className="flex-1 flex justify-center items-center mt-10">
                    <img
                        src={require('../../assets/images/public/img1.jpg')}
                        alt="Learning"
                        className="w-full max-w-md rounded-xl object-cover"
                    />
                </aside>
            </div>
            <section className="mt-20 flex justify-center">
                <div className="bg-white/80 dark:bg-zinc-900/80 px-6 py-10 flex flex-col items-center w-full mx-auto dark:border-zinc-800 opacity-60">
                    <img
                        src={require('../../assets/images/public/logos.svg').default}
                        alt="Logos: Apple, Netflix, Microsoft, Netlify, Uber, Tesla, Amazon, Spotify"
                        className="mx-auto mb-6 drop-shadow-md max-w-3xl"
                    />
                    <p className="text-lg md:text-base text-zinc-700 dark:text-zinc-200 font-medium text-center">
                        You’ll be in great company with other developers we’ve trained
                    </p>
                </div>
            </section>
        </>
    );
}

export default Home;
