import React from "react";

export default function Welcome() {
    return (
        <div className="flex items-center justify-center h-screen">
            <div className="text-center">
                <h1 className="text-3xl font-bold text-gray">
                    DRAFT HOUSE RENTAL Application
                </h1>
                <div className="mt-6 space-x-4">
                    <a
                        href="/login"
                        className="bg-blue-500 rounded py-4 px-4 text-white hover:bg-blue-700 transistion"
                    >
                        Login
                    </a>
                    <a
                        href="/register"
                        className="bg-green-500 rounded py-4 px-4 text-white hover:bg-green-700 transistion"
                    >
                        Register
                    </a>
                </div>
            </div>
        </div>
    );
}
