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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (search) {
      const supabase = createClient()

      const { data, error } = await supabase.from("lecturers").select(`
      *,
      educations (
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
      <div className="mb-10">
        <div className="mb-8 text-center">
          <p className="text-2xl font-medium mb-2">Susah nyari informasi dosen?</p>
          <h2 className="text-4xl font-bold">Cari dosenmu disini!</h2>
        </div>
        {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-search"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg> */}

        <div>
          <form action="" method="post" onSubmit={handleSubmit} className="flex items-center gap-2">
            <Input type="text" placeholder="Tulis nama dosenmu" className="w-96" onChange={handleChange} value={search} />
            <Button type="submit">Cari</Button>
          </form>
        </div>
      </div>

      <div className="flex flex-col gap-3 w-full">
        {lecturers.map((lecturer: any) => {
          return (
            <AlertDialog key={lecturer.id}>
              <AlertDialogTrigger>
                <Card className="w-full ">
                  <CardHeader className="px-4 py-3 flex-row justify-between">
                    <div className="flex flex-row gap-3 items-center">
                      <CardTitle className="text-lg">{lecturer.name}</CardTitle>
                      <CardDescription>{lecturer.nip}</CardDescription>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" className="lucide lucide-chevron-right size-7 text-muted-foreground" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                  </CardHeader>
                </Card>
              </AlertDialogTrigger>
              <AlertDialogContent className="">
                <AlertDialogHeader>
                  <AlertDialogTitle className="text-2xl">
                    Detail Dosen
                  </AlertDialogTitle>
                  {/* <AlertDialogDescription className="text-base"> */}
                  <div id="radix-:r2:" className="text-muted-foreground text-base">
                    <table className="border-separate border-spacing-y-1">
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
                          <th className="pr-16 align-top">Riwayat Pendidikan</th>
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
