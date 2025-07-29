import Link from "next/link";

export default function CallToAction() {
    return (
        <section className="bg-white py-12 px-4 sm:px-8 lg:px-16">
            <div className="max-w-5xl mx-auto text-center">
                <h2 className="text-2xl sm:text-3xl font-semibold text-purple-700 mb-8">
                    Ready to publish your press release?
                </h2>

                <div className="flex flex-col sm:flex-row justify-center gap-4">

                    <Link
                        href="/"
                        className="my-2 font-semibold text-center px-4 py-2.5 text-base capitalize rounded-full hover:bg-transparent hover:border-purple-500 hover:text-purple-500 border border-purple-500 text-white bg-purple-500 transition"
                    >
                        Request a quote
                    </Link>
                    <Link
                        href="/"
                        className="my-2 font-semibold text-center px-4 py-2.5 text-base capitalize rounded-full hover:bg-transparent hover:border-purple-500 hover:text-purple-500 border border-purple-500 text-white bg-purple-500 transition"
                    >
                        Start publishing
                    </Link>
                </div>
            </div>
        </section>
    );
}
