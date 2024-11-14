import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full mt-20 flex flex-col items-center">

      <div className="mb-10">
        <div className="mb-8 text-center">
          <p className="text-2xl font-medium mb-2">Susah nyari informasi dosen?</p>
          <h2 className="text-4xl font-bold">Cari dosenmu disini!</h2>
        </div>
        {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-search"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg> */}

        <div className="flex items-center gap-2">
          <Input type="text" placeholder="Tulis nama dosenmu" className="w-96" />
          <Button>Cari</Button>
        </div>
      </div>

      <div className="flex flex-col gap-3 w-full">
        {/* <AlertDialog>
          <AlertDialogTrigger>
            <Card className="w-full ">
              <CardHeader className="px-4 py-3 flex-row justify-between">
                <div className="flex flex-row gap-3 items-center">
                  <CardTitle className="text-lg">Nama Dosen</CardTitle>
                  <CardDescription>1234567890</CardDescription>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" className="lucide lucide-chevron-right size-7 text-muted-foreground" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
              </CardHeader>
            </Card>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle className="text-2xl">
                Detail Dosen
              </AlertDialogTitle>
              <AlertDialogDescription className="text-base">
                <table className="border-separate border-spacing-y-1">
                  <tbody>
                    <tr>
                      <th className="">Nama</th>
                      <td className="w-4">:</td>
                      <td className="">Test Nama</td>
                    </tr>
                    <tr>
                      <th className="">NIP</th>
                      <td className="w-4">:</td>
                      <td className="">1234567890</td>
                    </tr>
                    <tr>
                      <th className="">Fakultas</th>
                      <td className="w-4">:</td>
                      <td className="">Teknik</td>
                    </tr>
                    <tr>
                      <th className="">Jurusan</th>
                      <td className="w-4">:</td>
                      <td className="">Teknik Elektro</td>
                    </tr>
                    <tr>
                      <th className="pr-16 align-top">Riwayat Pendidikan</th>
                      <td className="w-4 align-top">:</td>
                      <td className="">
                        <ul className="list-none pl-0 m-0">
                          <li>Teknik Elektro</li>
                        </ul>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogAction>Tutup</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog> */}
      </div>

    </div>

  );
}
