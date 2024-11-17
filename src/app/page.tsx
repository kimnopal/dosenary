"use client"

import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import { createClient } from "@/utils/supabase/client";
import { sendGAEvent } from "@next/third-parties/google";
import { Frown, SearchX, ServerOff } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { ChangeEvent, useEffect, useState } from "react";

export default function Home() {
  const [search, setSearch] = useState<string>('')
  const [lecturers, setLecturers] = useState<any>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [notFound, setNotFound] = useState<boolean>(false)
  const [error, setError] = useState<boolean>(false)
  const [searchError, setSearchError] = useState<boolean>(false)

  useEffect(() => {
    setSearch('')
    setLoading((prevState: boolean) => false)
  }, [lecturers])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (search.length >= 3) {
      sendGAEvent('event', 'searchLecturer', { value: search })

      setLoading((prevState: boolean) => true)
      const supabase = createClient()

      const { data, error } = await supabase.from("lecturers").select(`
      *,
      educations (
        id,
        detail,
        degrees (level)
      )
    `).ilike('name', `%${search}%`)
      if (error) {
        setError(() => true)
      }

      if (data != undefined && data.length == 0) {
        setNotFound(() => true)
      } else {
        setNotFound(() => false)
      }

      setLecturers(data)
      setSearchError(false)
    } else {
      setSearchError(true)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(() => e.target.value)
  }

  console.log('info mabar add id : 98975941');
  console.log('jangan lupa follow ig : @falll.hkm');

  return (
    <div className="w-full mt-20 flex flex-col items-center">
      <div className="mb-10 w-full">
        <div className="mb-6 md:mb-8 text-center flex flex-col items-center">
          <p className="text-xl md:text-2xl font-medium mb-1 md:mb-2">Susah nyari informasi dosen?</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-1 md:m-2">Cari dosenmu disini!</h2>
          {/* <svg xmlns="http://www.w3.org/2000/svg" className="max-w-60 w-auto md:w-72" viewBox="0 0 1729 149" fill="#09090B"><path d="M1689.89 26.59a4479.17 4479.17 0 0 0-89.64-7.41C1354.1.45 1106.56-5.76 859.92 5.93c-227.31-4.25-454.79 8.96-681.36 27.95C121.94 38.9 65.1 40.2 8.38 42.12c-16.57 2.86-5.23 26.39 5.6 14.46 160.76-1.27 331.82-27.38 620.54-34.8A4574.9 4574.9 0 0 0 498.9 36.57C376.43 52.24 253.01 65.21 132.88 94.51c-36.16 8.94-71.67 20.31-106.69 32.95-7.14 4.4-27.74 3.63-24.98 15.62 1.99 7.19 13.63 7.05 18.04 2.59 143.67-54.58 297.49-70.64 448.88-90.24 129.01-16.82 258.61-28.01 388.46-34.27 285.02 6.07 570.13 38.15 848.22 100.65 3.84 1.09 8.24-1.32 9.23-5.24 1.98-7.31-5.66-9.96-11.42-10.6-48.05-10.76-96.18-21.26-144.56-30.43-160.68-28.2-322.86-46.78-485.4-60.19l-2.34-.16c161.55-1.33 323.21 4.35 484.31 15.71 37.11 2.65 125.06 8.85 164.97 13.96a7.58 7.58 0 0 0 8.45-6.41c.94-13.18-23.48-8.77-38.14-11.86Z"></path></svg> */}
        </div>

        <div className="">
          <form action="" method="post" onSubmit={handleSubmit} className="flex justify-center items-start gap-2">
            <div className="w-full max-w-96 flex flex-col space-y-2">
              <Input type="text" placeholder="Tulis nama dosenmu" className={`${searchError ? 'border-destructive focus:!ring-destructive' : ''}`} onChange={handleChange} value={search} />
              {searchError && (
                <span className="text-sm text-destructive">Nama minimal 3 karakter</span>
              )}
            </div>

            <Button type="submit">Cari</Button>
          </form>
        </div>
      </div>
      {/* <div className="w-full flex flex-col gap-2">
        
      </div> */}
      <div className="flex flex-col gap-3 w-full">
        {loading ? (
          <Card className="w-full">
            <CardHeader className="px-4 py-3 flex-row justify-between items-center">
              <div className="flex flex-col gap-2 w-full">
                <CardTitle className="text-base md:text-lg text-left"><Skeleton className="w-5/6 sm:w-96 h-6" /></CardTitle>
                <CardDescription className="text-left md:text-base"><Skeleton className="w-3/6 sm:w-56 h-5" /></CardDescription>
              </div>
              <Skeleton className="w-6 h-6" />
            </CardHeader>
          </Card>
        ) : error ? (
          <div className="h-full flex flex-col items-center gap-2">
            <ServerOff className="size-10 md:size-11 text-border" />
            <div className="text-center flex flex-col gap-4 max-w-md">
              <p className="text-foreground/30 text-lg md:text-xl">Maaf, server sedang error.</p>
              <p className="text-foreground/30 text-sm md:text-base">Jika kamu punya masukan, bisa hubungi instagram <Link href={'https://www.instagram.com/falll.hkm/'} target="_blank" className="underline">@falll.hkm</Link></p>
            </div>
          </div>
        ) : notFound ? (
          <div className="h-full flex flex-col items-center gap-2">
            <Frown className="size-11 text-border" />
            <div className="text-center flex flex-col gap-4 max-w-md">
              <p className="text-foreground/30 text-lg md:text-xl">Maaf, data dosenmu belum ada.</p>
              <p className="text-foreground/30 text-sm md:text-base">Kamu bisa berkontribusi dengan mengirimkan data yang valid ke email <Link href={'mailto:naufal.h@mhs.unsoed.ac.id'} target="_blank" className="underline"
                onClick={() => sendGAEvent('event', 'emailClicked', { value: 'Email' })}
              >naufal.h@mhs.unsoed.ac.id</Link></p>
            </div>
          </div>
        ) : lecturers?.map((lecturer: any) => {
          return (
            <AlertDialog key={lecturer.id}>
              <AlertDialogTrigger>
                <Card className="w-full">
                  <CardHeader className="px-4 py-3 flex-row justify-between items-center">
                    <div className="flex flex-col gap-1">
                      <CardTitle className="text-base md:text-lg text-left">{lecturer.name}</CardTitle>
                      <CardDescription className="text-left md:text-base">{lecturer.nip ? 'NIP. ' + lecturer.nip : 'NIP. -'}</CardDescription>
                    </div>
                    {/* <div className=" flex "> */}
                    <svg xmlns="http://www.w3.org/2000/svg" className="lucide lucide-chevron-right min-w-6 w-6 md:w-7 !m-0 text-muted-foreground" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                    {/* </div> */}
                  </CardHeader>
                </Card>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>
                    Detail Dosen
                  </AlertDialogTitle>
                  {/* <AlertDialogDescription className="text-base"> */}
                  <div id="radix-:r2:" className="text-muted-foreground text-sm md:text-base">
                    <table className="border-separate border-spacing-y-1 text-left">
                      <tbody>
                        <tr>
                          <th className="align-top">Nama</th>
                          <td className="w-4 align-top">:</td>
                          <td className="align-top">{lecturer.name}</td>
                        </tr>
                        <tr>
                          <th className="align-top">NIP</th>
                          <td className="w-4 align-top">:</td>
                          <td className="align-top">{lecturer.nip ? lecturer.nip : '-'}</td>
                        </tr>
                        <tr>
                          <th className="align-top">Fakultas</th>
                          <td className="w-4 align-top">:</td>
                          <td className="align-top">-</td>
                        </tr>
                        <tr>
                          <th className="align-top">Jurusan</th>
                          <td className="w-4 align-top">:</td>
                          <td className="align-top">-</td>
                        </tr>
                        <tr>
                          <th className="pr-4 md:pr-8 align-top">Riwayat Pendidikan</th>
                          <td className="w-4 align-top">:</td>
                          <td className="align-top">
                            <ul className="list-none pl-0 m-0">
                              {lecturer.educations.map((education: any) => {
                                return (
                                  <li key={education.id}>{education.degrees.level} {education.detail}</li>
                                )
                              })}
                            </ul>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  {/* </AlertDialogDescription> */}
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogAction>Tutup</AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          )
        })
        }

      </div>

    </div>

  );
}
