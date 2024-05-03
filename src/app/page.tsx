import { getDataHome, getSubMenu } from "@/utils/actions/get-data";
import { SubMenu } from "./home/submenu";
import { HomeData } from "@/utils/home-type";
import { Hero } from "./components/hero";
import { FaWhatsapp } from "react-icons/fa";
import { Services } from "./components/services";
import { Container } from "./components/container";
import { Footer } from "./components/footer";
import { SubMenuData } from "@/utils/submenu-type";

export default async function Home() {
  const { object }: HomeData = await getDataHome();
  const subMenu: SubMenuData = await getSubMenu();

  return (
    <main className=" mx-auto">
      {subMenu.objects.length > 0 && <SubMenu subMenu={subMenu} />}
      <Hero
        heading={object.metadata.heading}
        buttonTitle={object.metadata.cta_button.title}
        buttonUrl={object.metadata.cta_button.url}
        bannerUrl={object.metadata.banner.url}
        icon={<FaWhatsapp size={24} className="text-baseWhite" />}
      />
      <Container>
        <Services object={object} />
        <Footer object={object} />
      </Container>
    </main>
  );
}
