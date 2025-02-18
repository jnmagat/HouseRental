import { Head, Link } from "@inertiajs/react";

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    const handleImageError = () => {
        document
            .getElementById("screenshot-container")
            ?.classList.add("!hidden");
        document.getElementById("docs-card")?.classList.add("!row-span-1");
        document
            .getElementById("docs-card-content")
            ?.classList.add("!flex-row");
        document.getElementById("background")?.classList.add("!hidden");
    };

    return (
        <>
            <Head title="Welcome" />
            <div className="flex h-screen items-center justify-center">
                <div
                    className="flex w-[500px] h-[120px] items-center justify-center rounded-lg relative overflow-hidden shadow-lg bg-cover bg-center"
                    style={{ backgroundImage: "url(images/bg.jpg)" }}
                >
                    {/* Background Overlay with opacity */}
                    <div className="absolute inset-0 bg-black bg-opacity-30 backdrop-blur"></div>

                    <nav className="relative flex flex-col items-center space-y-5 bg-opacity-40 rounded-lg">
                        {auth.user ? (
                            <Link
                                href={route("dashboard")}
                                className="rounded-md px-4 py-2 text-black bg-white ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                            >
                                Dashboard
                            </Link>
                        ) : (
                            <>
                                <div className="flex space-x-4">
                                    {/* Login Button */}
                                    <Link
                                        href={route("login")}
                                        className="flex items-center justify-center rounded-md px-6 py-3 text-white bg-blue-500 hover:bg-blue-600 transition duration-300 shadow-md ring-1 ring-transparent focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                                    >
                                        Log in
                                    </Link>

                                    {/* Register Button */}
                                    <Link
                                        href={route("register")}
                                        className="flex items-center justify-center rounded-md px-6 py-3 text-white bg-red-500 hover:bg-red-600 transition duration-300 shadow-md ring-1 ring-transparent focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                                    >
                                        Register
                                    </Link>
                                </div>
                            </>
                        )}
                    </nav>
                </div>
            </div>
        </>
    );
}
