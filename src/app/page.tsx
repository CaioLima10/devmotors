import { getDataHome } from "@/utils/actions/get-data";
import { SubMenu } from "./home/submenu";
import { HomeData } from "@/utils/home-type";

export default async function Home() {
  const { object }: HomeData = await getDataHome();

  return (
    <main className="w-[96%] xl:w-full max-w-7xl mx-auto">
      <SubMenu />
    </main>
  );
}
