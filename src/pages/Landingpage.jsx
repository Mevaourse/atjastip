import '../assets/atjatip-module.css';

export default function Example() {

  return (
    <>
        <div className="background mx-0 overflow-y-hidden">
            <div className="relativ isolate px-6 pt-14 lg:px-8">
                <div
                aria-hidden="true"
                className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                >
                </div>
                <div className="mx-auto max-w-2xl py-15  sm:py-40">
                <div className="text-center py-5 backdrop-blur-xl bg-white/30 rounded-2xl">
                    <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                    ATJastip
                    </h1>
                    <p className="mt-6 text-lg leading-8 text-black px-3">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia molestias animi quos sint amet doloribus? Debitis fugit ducimus voluptate, placeat adipisci aut voluptas inventore? Quaerat numquam perferendis in fugit aut id, cum aliquid enim a libero rerum adipisci laborum architecto consectetur atque quia vero impedit! Distinctio accusantium ipsam commodi quas.
                    </p>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                    <a
                        href="#"
                        className="rounded-md border-1 border-black bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Get started
                    </a>
                    <a href="#" className="rounded-md border-1 border-black text-indigo-600 px-3 py-2.5 text-sm font-semibold bg-white shadow-sm hover:bg-gray-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-300">
                        Learn more <span aria-hidden="true">→</span>
                    </a>
                    </div>
                </div>
                </div>
                <div
                aria-hidden="true"
                className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
                >
                </div>
            </div>
        </div>
    </>
  )
}
