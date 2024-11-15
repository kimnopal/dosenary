"use client"

import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { createClient } from "@/utils/supabase/client";
import Image from "next/image";
import Link from "next/link";
import React, { ChangeEvent, useEffect, useState } from "react";

export default function Home() {
  const [search, setSearch] = useState<string>('')
  const [lecturers, setLecturers] = useState<any>([])

  useEffect(() => {
    setSearch('')
  }, [lecturers])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (search) {
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
        console.log(error);
      }

      setLecturers(data)

      console.log(data);
    }

  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(() => e.target.value)
  }

  return (
    <div className="w-full mt-20 flex flex-col items-center">
      <div className="mb-10 w-full">
        <div className="mb-6 md:mb-8 text-center">
          <p className="text-xl md:text-2xl font-medium mb-1 md:mb-2">Susah nyari informasi dosen?</p>
          <h2 className="text-3xl md:text-4xl font-bold">Cari dosenmu disini!</h2>
        </div>
        {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-search"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg> */}

        <div className="">
          <form action="" method="post" onSubmit={handleSubmit} className="flex justify-center items-center gap-2">
            <Input type="text" placeholder="Tulis nama dosenmu" className="w-full max-w-96" onChange={handleChange} value={search} />
            <Button type="submit">Cari</Button>
          </form>
        </div>
      </div>

      <div className="flex flex-col gap-3 w-full">
        {lecturers.map((lecturer: any) => {
          return (
            <AlertDialog key={lecturer.id}>
              <AlertDialogTrigger>
                <Card className="w-full">
                  <CardHeader className="px-4 py-3 flex-row justify-between items-center">
                    <div className="flex flex-col gap-1">
                      <CardTitle className="text-base md:text-lg text-left">{lecturer.name}</CardTitle>
                      <CardDescription className="text-left md:text-base">NIP. {lecturer.nip}</CardDescription>
                    </div>
                    {/* <div className=" flex "> */}
                    <svg xmlns="http://www.w3.org/2000/svg" className="lucide lucide-chevron-right min-w-7 w-7 !m-0 text-muted-foreground" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
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
                          <td className="align-top">{lecturer.nip}</td>
                        </tr>
                        <tr>
                          <th className="align-top">Fakultas</th>
                          <td className="w-4 align-top">:</td>
                          <td className="align-top">Teknik</td>
                        </tr>
                        <tr>
                          <th className="align-top">Jurusan</th>
                          <td className="w-4 align-top">:</td>
                          <td className="align-top">Teknik Elektro</td>
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
        })}
      </div>

    </div>

  );
}
