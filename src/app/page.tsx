import FeatherIcon from "feather-icons-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <QuickLinks />
      <NavBar />
      <Vitrine />
      <Section00 />
      <Section01 />
      <Section02 />
      <Section03 />
      <Footer />
    </div>
  );
}

function QuickLinks() {
  return (
    <div className="hidden md:block bg-[#2E3A59] text-white md:text-xs lg:text-sm font-[500] h-[46px]">
      <ul className="flex flex-row h-full items-center space-x-6 justify-end">
        <li>
          <Link href="#">HFEI Publishing</Link>
        </li>
        <li>
          <Link href="#">Reasearch & Development</Link>
        </li>
        <li>
          <Link href="#">Liens Utiles</Link>
        </li>
        <li className="h-full">
          <Link
            className="bg-[#EBFF93] h-full flex items-center px-4 text-[#2E3A59] hover:bg-[#232a3b] hover:text-[#ebff93] transition-all cursor-pointer"
            href="#"
          >
            Nous-contacter
          </Link>
        </li>
      </ul>
    </div>
  );
}

function NavBar() {
  return (
    <nav className="flex items-center justify-between space-x-8 p-4 w-full">
      <div className="flex items-center space-x-8">
        <div className="h-full">
          <Image src={"/logo.png"} width={120} height={10} alt="hfei-logo" />
        </div>
        <div>
          <div className="hidden md:block lg:text-sm font-[500] h-full">
            <ul className="flex flex-row h-full items-center space-x-6">
              <li className="flex items-center space-x-[10px]">
                <Link href="#">Pourquoi l&apos;HFEI</Link>
                <FeatherIcon icon="chevron-down" size={16} />
              </li>
              <li className="flex items-center space-x-[10px]">
                <Link href="#">Formations</Link>
                <FeatherIcon icon="chevron-down" size={16} />
              </li>
              <li className="flex items-center space-x-[10px]">
                <Link href="#">Accompagnements</Link>
                <FeatherIcon icon="chevron-down" size={16} />
              </li>
              <li className="flex items-center space-x-[10px]">
                <Link href="#">À Propos</Link>
                <FeatherIcon icon="chevron-down" size={16} />
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div>
        <FeatherIcon icon="search" size={16} />
      </div>
    </nav>
  );
}

function Vitrine() {
  return (
    <div className="relative h-[700px] p-2">
      <div className="absolute left-15 bottom-20 w-[40%] text-white space-y-6">
        <h1 className="text-7xl font-[600]">
          Human first,
          <br />
          Human ever
        </h1>
        <p className="text-xl font-[500] pb-4">
          Découvrez notre approche centrée sur l&apos;humain pour une
          performance holistique et durable
        </p>
        <Link
          href={"#"}
          className="bg-[#EBFF93] text-[#2E3A59] font-[500] rounded px-8 py-3 hover:bg-[#232a3b] hover:text-[#ebff93] transition-all"
        >
          En savoir plus
        </Link>
      </div>
      <Image
        src={"/image.png"}
        className="object-cover bg-center rounded-md w-full h-full"
        width={1920}
        height={1920}
        alt=""
      />
    </div>
  );
}

function Section00_Pane() {
  return (
    <div className="w-[350px] bg-white rounded-md">
      <div className="w-[350px] relative">
        <p className="absolute left-6 top-5 text-white font-bold text-sm">
          Événement
        </p>
        <Image
          src={"/image.png"}
          className="object-cover rounded-t-md"
          width={1000}
          height={1000}
          alt="image"
        />
      </div>
      <div className="p-4 space-y-4">
        <h2 className="text-[20px] font-[600]">
          Programme IBA - Ingénierie du Bien-Être Authentique
        </h2>
        <p className="text-[14px]">
          Cessez de gérer la souffrance, apprenez à construire le bien-être !
          Inscrivez-vous avant le 15 mai.
        </p>
      </div>
      <div className="flex items-center space-x-4 p-4 text-sm">
        <i>En savoir plus...</i>
        <FeatherIcon icon="chevron-right" size={14} />
      </div>
    </div>
  );
}

function Section00() {
  return (
    <div className="bg-[#2E3A5920] flex flex-col items-center py-20 space-y-15">
      <div className="flex space-x-4 items-center">
        <div className="w-[10px] h-[10px] rounded-full bg-[#2E3A59]"></div>
        <div className="w-[10px] h-[10px] rounded-full bg-[#2E3A59]"></div>
        <div className="w-[10px] h-[10px] rounded-full bg-[#2E3A59]"></div>
        <div className="w-[10px] h-[10px] rounded-full bg-[#2E3A59]"></div>
        <div className="w-[10px] h-[10px] rounded-full bg-[#2E3A59]"></div>
        <div className="w-[10px] h-[10px] rounded-full bg-[#2E3A59]"></div>
      </div>
      <div className="flex flex-col text-center items-center space-y-4">
        <h2 className="text-[46px] font-light">À la Une</h2>
        <p className="text-[18px] w-[70%]">
          Des programmes innovants et diversifiés pour accompagner votre
          épanouissement personnel et professionnel
        </p>
      </div>
      <div className="flex space-x-6">
        <Section00_Pane />
        <Section00_Pane />
        <Section00_Pane />
      </div>
    </div>
  );
}

function Section01_Box({ title }: { title: string }) {
  return (
    <div className="space-y-2 flex flex-col items-center">
      <div className="bg-white w-22 h-22 rounded flex items-center justify-center">
        <FeatherIcon className="opacity-50" icon="image" size={34} />
      </div>
      <p className="text-[18px] text-white">{title}</p>
    </div>
  );
}

function Section01() {
  return (
    <div className="flex flex-col items-center py-20 space-y-20 bg-gradient-to-r from-[#273A8E] to-[#2A343E]">
      <div>
        <Image
          src={"/logo-white.png"}
          width={160}
          height={160}
          alt="hfei-logo"
        />
      </div>
      <div className="flex flex-col text-center items-center space-y-4">
        <h2 className="text-[46px] font-light text-white">
          Ingénierie de l&apos;Épanouissement Humain
        </h2>
        <p className="text-[18px] w-[70%] text-[#EBFF93]">
          Découvrez une approche scientifique et culturelle pour construire le
          bien-être authentique et l&apos;épanouissement personnel
        </p>
      </div>
      <div className="flex space-x-12">
        <Section01_Box title="Équanimité" />
        <Section01_Box title="Coopération" />
        <Section01_Box title="Vision Partagée" />
        <Section01_Box title="Determination" />
        <Section01_Box title="Créativité" />
        <Section01_Box title="Santé et Vitalité" />
      </div>
      <div>
        <Link
          className="bg-[#EBFF93] h-full flex items-center px-7 py-3 font-[500] rounded text-[#2E3A59] hover:bg-[#232a3b] hover:text-[#ebff93] transition-all cursor-pointer"
          href="#"
        >
          En savoir plus sur la WBGW
        </Link>
      </div>
    </div>
  );
}

function Section02() {
  return <div className="h-[100vh] bg-[#2E3A5920]"></div>;
}

function Section03_Pane() {
  return (
    <div className="w-[350px] bg-gradient-to-b from-[#464646] to-[#2E2E2E] rounded-md space-y-8">
      <div className="w-[350px]">
        <p className="p-4 text-white font-bold text-sm">Événement</p>
      </div>
      <div className="p-4 space-y-4">
        <h2 className="text-[28px] font-[600]">
          Programme IBA - Ingénierie du Bien-Être Authentique
        </h2>
        <p className="text-[14px]">
          Cessez de gérer la souffrance, apprenez à construire le bien-être !
          Inscrivez-vous avant le 15 mai.
        </p>
      </div>
      <div className="flex items-center space-x-4 p-4 text-sm">
        <p>En savoir plus...</p>
        <FeatherIcon icon="chevron-right" size={14} />
      </div>
    </div>
  );
}

function Section03() {
  return (
    <div className=" bg-[#272727] flex flex-col items-center py-20 space-y-15 text-white">
      <div className="flex space-x-4 items-center">
        <div className="w-[10px] h-[10px] rounded-full bg-[#ffffff]"></div>
        <div className="w-[10px] h-[10px] rounded-full bg-[#ffffff]"></div>
        <div className="w-[10px] h-[10px] rounded-full bg-[#ffffff]"></div>
        <div className="w-[10px] h-[10px] rounded-full bg-[#ffffff]"></div>
        <div className="w-[10px] h-[10px] rounded-full bg-[#ffffff]"></div>
        <div className="w-[10px] h-[10px] rounded-full bg-[#ffffff]"></div>
      </div>
      <div className="flex flex-col text-center items-center space-y-4">
        <h2 className="text-[46px] font-light">Nos Programmes</h2>
        <p className="text-[18px] w-[70%] opacity-50">
          Des programmes innovants et diversifiés pour accompagner votre
          épanouissement personnel et professionne
        </p>
      </div>
      <div className="flex-col space-y-6">
        <div className="flex space-x-8">
          <Section03_Pane />
          <Section03_Pane />
          <Section03_Pane />
        </div>
        <div className="flex space-x-8">
          <Section03_Pane />
          <Section03_Pane />
          <Section03_Pane />
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className=" bg-[#2E3A5920]">
      <div className="flex p-16 space-x-15 w-full">
        <div className="w-[35%]">
          <h2 className="text-[46px] text-[#2E3A59] font-light">
            HFE Institute
          </h2>
          <p className="text-[18px]">
            Fondé par le Pr Saif Allah Allouani, Pr Amine Zenjari et M.
            Abdessamad Amrani, HFEI une institution polyvalente consacrée à la
            promotion de l’épanouissement Humain. Avec une offre variée incluant
            la formation, le conseil, le coaching, et des activités de recherche
            en ingénierie du bien-être, HFEI s’engage à approfondir et à
            améliorer de manière significative l’épanouissement humain dans ses
            multiples facettes.
          </p>
        </div>
        <div className="space-x-4">
          <h2 className="text-[40px] font-light">HFE Institute</h2>
          <ul className="pt-2 space-y-4">
            <li>
              <Link href={"#"} className="text-xl font-[400]">
                À propos de nous
              </Link>
            </li>
            <li>
              <Link href={"#"} className="text-xl font-[400]">
                Formations
              </Link>
            </li>
            <li>
              <Link href={"#"} className="text-xl font-[400]">
                Accompagnements
              </Link>
            </li>
            <li>
              <Link href={"#"} className="text-xl font-[400]">
                HFEI Publishing
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-[40px] font-light">HFE Institute</h2>
          <ul className="pt-2 space-y-4">
            <li>
              <Link href={"#"} className="text-xl font-[400]">
                contact@hfeinstitute.com
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex justify-between p-4 px-16">
        <div>
          <p>2025 HFEI. Tous droits réservés.</p>
        </div>
        <div className="flex space-x-6">
          <p>Politique de confidentialité</p>
          <p>Conditions générales de ventes</p>
        </div>
      </div>
    </div>
  );
}
