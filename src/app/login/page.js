"use client"

import { useRef, useState } from "react"
import { verifyAccount } from "../serverActions"
import Link from "next/link"

export default function LoginPage() {
    const emailInput = useRef()
    const passwordInput = useRef()
    const [success, setSuccess] = useState(false)

    const onSubmit = async () => {
        const email = emailInput.current.value
        const password = passwordInput.current.value

        console.log({ email, password })
        const response = await verifyAccount(email, password)
        setSuccess(response)
    }

    if (success) {
        return <h1 className="text-2xl text-indigo-500">Welcome back!</h1>
    } else {
        return (
            <div className="flex flex-col max-w-md px-4 py-8 bg-white rounded-lg shadow dark:bg-gray-800 sm:px-6 md:px-8 lg:px-10">
                <div className="self-center mb-2 text-xl font-light text-gray-800 sm:text-2xl dark:text-white">
                    Login
                </div>
                <span className="justify-center text-sm text-center text-gray-500 flex-items-center dark:text-gray-400">
                    Don&apos;t have an account?
                    <Link
                        href="/signup"
                        className="text-sm text-indigo-500 underline hover:text-indigo-700"
                    >
                        Sign up
                    </Link>
                </span>
                <div className="p-6 mt-8">
                    <form action={() => onSubmit()}>
                        <div className="flex flex-col gap-2">
                            <div className=" relative ">
                                <input
                                    type="text"
                                    id="create-account-email"
                                    className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
                                    name="email"
                                    placeholder="E-mail"
                                    ref={emailInput}
                                />
                            </div>

                            <div className=" relative ">
                                <input
                                    type="password"
                                    id="create-account-password"
                                    className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
                                    name="password"
                                    placeholder="Password"
                                    ref={passwordInput}
                                />
                            </div>
                        </div>

                        <div className="flex w-full my-4">
                            <button
                                type="submit"
                                className="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                            >
                                Log in
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
