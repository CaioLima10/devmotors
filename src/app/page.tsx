import { getDataHome } from "@/utils/actions/get-data";
import { SubMenu } from "./home/submenu";
import { HomeData } from "@/utils/home-type";
import { Hero } from "./components/hero";

export default async function Home() {
  const { object }: HomeData = await getDataHome();

  return (
    <main className=" mx-auto">
      <SubMenu />
      <Hero
        heading={object.metadata.heading}
        buttonTitle={object.metadata.cta_button.title}
        buttonUrl={object.metadata.cta_button.url}
        bannerUrl={object.metadata.banner.url}
      />
    </main>
  );
}
