import TrainModelZone from "@/components/TrainModelZone";
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

const packsIsEnabled = process.env.NEXT_PUBLIC_TUNE_TYPE === "packs";

export default async function Index({ params }: { params: { pack: string } }) {

  return (
    <div className="w-full px-20 mx-auto pt-[100px] training">
      <div
        id="train-model-container"
        className="flex flex-1 flex-col gap-2 px-2"
      >
        <Link href={packsIsEnabled ? "/overview/packs" : "/overview"} className="text-sm w-fit">
          <Button variant={"outline"} className="w-[300px] py-6 px-2 md:px-8 text-md shadow-lg flex w-full md:inline-flex justify-center items-center rounded-full  font-semibold bg-gradient-to-r from-orange-500 to-yellow-400 text-white hover:from-orange-500 hover:to-orange-600  focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 transition-all">
            <FaArrowLeft className="mr-2" />
            Go Back
          </Button>
        </Link>
        <Card>
          <CardContent className="grid gap-6">
            <TrainModelZone packSlug={params.pack} />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
