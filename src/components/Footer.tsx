"use client"

import { sendGAEvent } from "@next/third-parties/google"
import Link from "next/link"

const Footer = () => {
    return (

        <footer className="w-full flex justify-center p-5 relative bottom-0">
            <div>
                Built with <span className="text-red-500">&hearts;</span> by <Link href={'https://www.instagram.com/falll.hkm/'} target="_blank" className="text-blue-600" onClick={() => sendGAEvent('event', 'instagramClicked', { value: 'Instagram' })}>@falll.hkm</Link>
            </div>
        </footer>
    )
}

export default Footer