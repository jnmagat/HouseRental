import { useState } from "react";
import { Head, useForm } from "@inertiajs/react";
import ApplicationLogo from "@/Components/ApplicationLogo";

export default function AuthPage() {
    const [isLogin, setIsLogin] = useState(true); // Toggle between login & register

    const { data, setData, post, processing, errors } = useForm({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
        remember: false,
    });

    const submit = (e) => {
        e.preventDefault();
        post(route(isLogin ? "login" : "register"));
    };

    return (
        <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black">
            <Head title={isLogin ? "Login" : "Register"} />

            <div className="relative w-full max-w-md p-8 bg-opacity-80 backdrop-blur-md rounded-lg shadow-lg bg-gray-900">
                <h2 className="text-white text-2xl font-semibold text-center mb-6">
                    {isLogin ? "SIGN IN" : "SIGN UP"}
                </h2>

                <form onSubmit={submit} className="space-y-4">
                    {!isLogin && (
                        <div>
                            <label
                                htmlFor="name"
                                className="text-gray-300 text-sm"
                            >
                                Name
                            </label>
                            <input
                                id="name"
                                type="text"
                                name="name"
                                value={data.name}
                                onChange={(e) =>
                                    setData("name", e.target.value)
                                }
                                className="mt-1 block w-full rounded-md bg-gray-800 border border-gray-700 text-white focus:ring-blue-500 focus:border-blue-500 px-3 py-2"
                                required
                            />
                            {errors.name && (
                                <p className="text-red-400 text-sm">
                                    {errors.name}
                                </p>
                            )}
                        </div>
                    )}

                    <div>
                        <label
                            htmlFor="email"
                            className="text-gray-300 text-sm"
                        >
                            Email
                        </label>
                        <input
                            id="email"
                            type="email"
                            name="email"
                            value={data.email}
                            onChange={(e) => setData("email", e.target.value)}
                            className="mt-1 block w-full rounded-md bg-gray-800 border border-gray-700 text-white focus:ring-blue-500 focus:border-blue-500 px-3 py-2"
                            required
                        />
                        {errors.email && (
                            <p className="text-red-400 text-sm">
                                {errors.email}
                            </p>
                        )}
                    </div>

                    <div>
                        <label
                            htmlFor="password"
                            className="text-gray-300 text-sm"
                        >
                            Password
                        </label>
                        <input
                            id="password"
                            type="password"
                            name="password"
                            value={data.password}
                            onChange={(e) =>
                                setData("password", e.target.value)
                            }
                            className="mt-1 block w-full rounded-md bg-gray-800 border border-gray-700 text-white focus:ring-blue-500 focus:border-blue-500 px-3 py-2"
                            required
                        />
                        {errors.password && (
                            <p className="text-red-400 text-sm">
                                {errors.password}
                            </p>
                        )}
                    </div>

                    {!isLogin && (
                        <div>
                            <label
                                htmlFor="password_confirmation"
                                className="text-gray-300 text-sm"
                            >
                                Confirm Password
                            </label>
                            <input
                                id="password_confirmation"
                                type="password"
                                name="password_confirmation"
                                value={data.password_confirmation}
                                onChange={(e) =>
                                    setData(
                                        "password_confirmation",
                                        e.target.value
                                    )
                                }
                                className="mt-1 block w-full rounded-md bg-gray-800 border border-gray-700 text-white focus:ring-blue-500 focus:border-blue-500 px-3 py-2"
                                required
                            />
                        </div>
                    )}

                    {isLogin && (
                        <div className="flex items-center justify-between">
                            <label className="flex items-center text-gray-400 text-sm">
                                <input
                                    type="checkbox"
                                    name="remember"
                                    checked={data.remember}
                                    onChange={(e) =>
                                        setData("remember", e.target.checked)
                                    }
                                    className="rounded bg-gray-800 border-gray-600 focus:ring-blue-500"
                                />
                                <span className="ml-2">Keep me signed in</span>
                            </label>
                        </div>
                    )}

                    <button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-500 text-white py-2 rounded-md shadow-lg transition-all"
                        disabled={processing}
                    >
                        {isLogin ? "Sign In" : "Sign Up"}
                    </button>
                </form>

                <p className="text-gray-400 text-sm text-center mt-4">
                    {isLogin
                        ? "Don't have an account?"
                        : "Already have an account?"}{" "}
                    <button
                        onClick={() => setIsLogin(!isLogin)}
                        className="text-blue-400 hover:text-blue-300"
                    >
                        {isLogin ? "Sign Up" : "Sign In"}
                    </button>
                </p>
            </div>
        </div>
    );
}
