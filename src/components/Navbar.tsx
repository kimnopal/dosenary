"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Button } from "./ui/button"
import { AlertDialog, AlertDialogAction, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "./ui/alert-dialog"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { Coffee, Github, Instagram, Mail } from "lucide-react"
import { sendGAEvent } from "@next/third-parties/google"
import { Separator } from "./ui/separator"
import { Badge } from "./ui/badge"


interface Contributor {
    name: string
    link: string
}

const contributors: Contributor[] = [
    { name: "@rakhmiizyn", link: "https://www.instagram.com/rakhmiizyn/" },
    { name: "@alfinawhy__", link: "https://www.instagram.com/alfinawhy__/" },
    { name: "@afifahhnk_", link: "https://www.instagram.com/afifahhnk_/" },
    { name: "@sahila.hm", link: "https://www.instagram.com/sahila.hm/" },
    // Add more contributors as needed
]


export function Navbar() {
    return (
        <header
            className="dark:bg-zinc-950 dark:border-neutral-700 flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full">
            <nav
                className="relative max-w-[925px] container w-full md:flex md:items-center md:justify-between md:gap-3 mx-auto py-3">
                <div className="flex items-center justify-between w-full">
                    <a className="flex-none font-semibold text-xl text-black focus:outline-none focus:opacity-80 dark:text-white"
                        href="/" aria-label="Brand">Dosenary</a>
                    <div className="flex gap-2">
                        {/* <Button variant={'ghost'} className="rounded-full p-3 h-auto">
                            <svg xmlns="http://www.w3.org/2000/svg" className="lucide lucide-sun !size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4" /><path d="M12 2v2" /><path d="M12 20v2" /><path d="m4.93 4.93 1.41 1.41" /><path d="m17.66 17.66 1.41 1.41" /><path d="M2 12h2" /><path d="M20 12h2" /><path d="m6.34 17.66-1.41 1.41" /><path d="m19.07 4.93-1.41 1.41" /></svg>
                        </Button> */}
                        <AlertDialog>
                            <AlertDialogTrigger onClick={() => sendGAEvent('event', 'infoClicked', { value: 'Melihat Info' })}>
                                <div className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground rounded-full p-3 h-auto">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="lucide lucide-info !size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M12 16v-4" /><path d="M12 8h.01" /></svg>
                                </div>
                            </AlertDialogTrigger>
                            <AlertDialogContent>
                                <AlertDialogHeader>
                                    <AlertDialogTitle className="text-2xl">
                                        Informasi
                                    </AlertDialogTitle>
                                    <AlertDialogDescription className="text-base space-y-2">
                                        <span className="block">
                                            Data yang tersedia masih dalam penyempurnaan. Oleh karena itu kalo kamu mau berkontribusi atau punya masukan dan saran, feel free to contact me. 👋<br />
                                        </span>
                                        <Card>
                                            <CardContent className="space-y-2 p-4">
                                                <div className="flex items-center gap-2">
                                                    <Mail className="h-5 w-5 text-blue-500" />
                                                    <Link
                                                        href="mailto:naufal.h@mhs.unsoed.ac.id"
                                                        target="_blank"
                                                        className="font-semibold text-blue-500 hover:underline"
                                                        onClick={() => sendGAEvent('event', 'emailClicked', 'Email')}
                                                    >
                                                        naufal.h@mhs.unsoed.ac.id
                                                    </Link>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <Instagram className="h-5 w-5 text-pink-500" />
                                                    <Link
                                                        href="https://www.instagram.com/falll.hkm/"
                                                        target="_blank"
                                                        className="font-semibold text-pink-500 hover:underline"
                                                        onClick={() => sendGAEvent('event', 'instagramClicked', 'Instagram')}
                                                    >
                                                        @falll.hkm
                                                    </Link>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <Coffee className="h-5 w-5 text-amber-800" />
                                                    <Link
                                                        href="https://saweria.co/naotheone"
                                                        target="_blank"
                                                        className="font-semibold text-amber-800 hover:underline"
                                                        onClick={() => sendGAEvent('event', 'instagramClicked', 'Instagram')}
                                                    >
                                                        Buy me a coffee
                                                    </Link>
                                                </div>
                                            </CardContent>
                                        </Card>
                                        <Separator />
                                        <div>
                                            <h3 className="text-lg font-semibold mb-2">Terima Kasih Kepada Kontributor Hebat ✨</h3>
                                            <div className="flex flex-wrap gap-2">
                                                {contributors.map((contributor, index) => (
                                                    <Link
                                                        key={index}
                                                        href={contributor.link}
                                                        target="_blank"
                                                        onClick={() => sendGAEvent('event', 'contributorClicked', contributor.name)}
                                                    >
                                                        <Badge variant="secondary" className="cursor-pointer hover:bg-secondary-foreground hover:text-secondary transition-colors">
                                                            {contributor.name}
                                                        </Badge>
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    </AlertDialogDescription>
                                </AlertDialogHeader>
                                <AlertDialogFooter>
                                    <AlertDialogAction>Tutup</AlertDialogAction>
                                </AlertDialogFooter>
                            </AlertDialogContent>
                        </AlertDialog>
                        <div className="absolute top-14 right-11 -scale-x-100 rotate- w-8">
                            <svg viewBox="0 0 40 37" fill="none" xmlns="http://www.w3.org/2000/svg"> <g clipPath="url(#clip0_2_40)"> <path d="M27.916 31.4568C20.0191 25.1909 13.7896 18.0721 10.031 8.49523M10.031 8.49523C12.5436 8.84916 15.2028 8.99688 17.7457 8.92371M10.031 8.49523C8.84116 12.6182 8.41809 15.8177 8.49744 20.0916" stroke="#09090B" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path> </g> <defs> <clipPath id="clip0_2_40"> <rect width="24" height="32" fill="white" transform="matrix(0.428577 -0.903505 -0.903505 -0.428577 28.9122 36.3566)"></rect> </clipPath> </defs> </svg>
                        </div>
                        <span className="absolute top-[88px] right-16 rotate-12 text-sm md:text-base md:right-[64px]">info</span>
                    </div>
                    {/* <div className="md:hidden">
                        <button type="button"
                            className="hs-collapse-toggle relative size-9 flex justify-center items-center text-sm font-semibold rounded-lg border border-gray-200 text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:border-neutral-700 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                            id="hs-header-classNameic-collapse" aria-expanded="false" aria-controls="hs-header-classNameic"
                            aria-label="Toggle navigation" data-hs-collapse="#hs-header-classNameic">
                            <svg className="hs-collapse-open:hidden size-4" xmlns="http://www.w3.org/2000/svg" width="24"
                                height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                stroke-linecap="round" stroke-linejoin="round">
                                <line x1="3" x2="21" y1="6" y2="6" />
                                <line x1="3" x2="21" y1="12" y2="12" />
                                <line x1="3" x2="21" y1="18" y2="18" />
                            </svg>
                            <svg className="hs-collapse-open:block shrink-0 hidden size-4" xmlns="http://www.w3.org/2000/svg"
                                width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M18 6 6 18" />
                                <path d="m6 6 12 12" />
                            </svg>
                            <span className="sr-only">Toggle navigation</span>
                        </button>
                    </div> */}

                </div>

            </nav>
        </header>

    )
}
