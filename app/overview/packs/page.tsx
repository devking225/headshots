import PacksGalleryZone from "@/components/PacksGalleryZone";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
import { redirect } from "next/navigation";

const packsIsEnabled = process.env.NEXT_PUBLIC_TUNE_TYPE === "packs";

export default async function Index() {

  if(!packsIsEnabled) {
    redirect('/overview')
  }

  return (
    <div className="w-full px-20 mx-auto pt-[100px] training">
      <div
        id="train-model-container"
        className="flex flex-1 flex-col gap-2"
      >
        <Link href="/overview" className="text-sm w-fit">
          <Button variant={"outline"} className="w-[300px] py-6 px-2 md:px-8 text-md shadow-lg flex w-full md:inline-flex justify-center items-center rounded-full  font-semibold bg-gradient-to-r from-orange-500 to-yellow-400 text-white hover:from-orange-500 hover:to-orange-600  focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 transition-all">
            <FaArrowLeft className="mr-2" />
            Go Back
          </Button>
        </Link>
        <Card style={{padding:"0"}}>
          <CardHeader>
            <CardTitle  className="text-4xl text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-yellow-400">Packs Gallery</CardTitle>
            <CardDescription className="text-2xl">
              Choose the type of images you would like to create.
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-6">
            <PacksGalleryZone />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
