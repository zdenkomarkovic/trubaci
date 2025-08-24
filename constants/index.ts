import { IconType } from "react-icons";
import { GiWeightLiftingUp } from "react-icons/gi";
import { GiWeight } from "react-icons/gi";
import { IoFitnessOutline } from "react-icons/io5";
import { MdOutlineSportsGymnastics } from "react-icons/md";
import { IoIosPeople } from "react-icons/io";
import { IoIosPerson } from "react-icons/io";
import { PiRocketLaunchBold } from "react-icons/pi";
import { LuTimerReset } from "react-icons/lu";

export const navList = [
  {
    title: "Početna",
    link: "/",
  },
  {
    title: "O nama",
    link: "/#o-nama",
  },
  {
    title: "Kontakt",
    link: "/#kontakt",
  },
];

export interface WorkList {
  id: number;
  title: string;
  text: string;
}

export const workList = [
  {
    id: 1,
    title: "Svadbe u Velikoj Plani",
    text: "Učinimo vaš najvažniji dan nezaboravnim! Trubači Kobre iz Velike Plane pružaju vrhunsku muzičku atmosferu za svadbe. Od tradicionalnih srpskih pesama do moderne muzike - prilagođavamo se vašim željama i stvaramo magične trenutke.",
    icon: IoIosPeople,
  },
  {
    id: 2,
    title: "Krsne slave",
    text: "Proslavite krsnu slavu uz tradicionalnu srpsku muziku! Naši iskusni trubači iz Velike Plane znaju kako da stvore pravu atmosferu za ovaj sveti dan. Repertoar uključuje crkvene pesme, tradicionalne melodije i sve što vaša duša želi.",
    icon: IoIosPerson,
  },
  {
    id: 3,
    title: "Rođendani i proslave",
    text: "Svaki rođendan zaslužuje posebnu muziku! Trubači Kobre prave nezaboravne proslave u Velikoj Plani i okolini. Bilo da je u pitanju dečji rođendan ili jubilej, mi ćemo obezbediti pravu atmosferu za veselje.",
    icon: IoFitnessOutline,
  },
  {
    id: 4,
    title: "Korporativni eventi",
    text: "Učinite vaše poslovne događaje nezaboravnima! Naši profesionalni trubači iz Velike Plane pružaju elegantnu muzičku podršku za korporativne proslave, otvaranja, promocije i sve vrste poslovnih događaja.",
    icon: GiWeightLiftingUp,
  },
  {
    id: 5,
    title: "Tradicionalna srpska muzika",
    text: "Čuvamo i negujemo bogatu tradiciju srpske muzike! Naš repertoar obuhvata najlepše tradicionalne pesme, kola, čoček i sve ono što čini srce srpsko. Svaki nastup je putovanje kroz našu muzičku baštinu.",
    icon: MdOutlineSportsGymnastics,
  },
  {
    id: 6,
    title: "Moderna muzika",
    text: "Pratimo i savremene trendove! Pored tradicionalne muzike, naši trubači iz Velike Plane izvode i moderne hitove, pop pesme i sve što publika voli. Kombinujemo tradiciju sa modernošću za savršeno iskustvo.",
    icon: PiRocketLaunchBold,
  },
];

export interface TestimonialData {
  id: number;
  title: string;
  image: string;
  description: string;
}

export const testimonialData: TestimonialData[] = [
  {
    id: 1,
    title: "Marija i Stefan - Svadba u Velikoj Plani",
    image: "/hero1.jpg",
    description:
      "Trubači Kobre su učinili našu svadbu nezaboravnom! Profesionalni pristup, odličan repertoar i neverovatna energija. Svi gosti su bili oduševljeni. Hvala vam što ste bili deo našeg najlepšeg dana!",
  },
  {
    id: 2,
    title: "Porodica Jovanović - Krsna slava",
    image: "/hero1.jpg",
    description:
      "Za našu krsnu slavu smo angažovali trubače Kobre iz Velike Plane. Bili su fantastični! Znaju sve tradicionalne pesme i stvorili su pravu atmosferu za ovaj sveti dan. Definitivno ih preporučujemo!",
  },
  {
    id: 3,
    title: "Miloš - 50. rođendan",
    image: "/hero2.jpg",
    description:
      "Moj jubilej je bio savršen zahvaljujući trubačima Kobre! Svirali su sve moje omiljene pesme i gosti su plesali do kasno u noć. Profesionalci u svakom smislu!",
  },
  {
    id: 5,
    title: "Ana i Petar - Godišnjica braka",
    image: "/hero1.jpg",
    description:
      "Za našu 25. godišnjicu braka pozvali smo trubače Kobre. Svirali su pesme iz vremena kada smo se venčali i podsetili nas na najlepše trenutke. Emotivno i nezaboravno iskustvo!",
  },
];

export interface Cards1Data {
  id: number;
  icon: IconType;
  title: string;
  text: string;
}

export const cards1Data: Cards1Data[] = [
  {
    id: 1,
    icon: GiWeight,
    title: "20+ godina iskustva",
    text: "Više od dve decenije sviramo po Velikoj Plani i celoj Srbiji, donoseći radost na hiljade proslava.",
  },
  {
    id: 2,
    icon: GiWeight,
    title: "Profesionalni pristup",
    text: "Uvek dolazimo pripremljeni, na vreme i sa kompletnom opremom za nezaboravan muzički doživljaj.",
  },
  {
    id: 3,
    icon: GiWeight,
    title: "Bogat repertoar",
    text: "Od tradicionalnih srpskih pesama do modernih hitova - imamo muziku za svaki ukus i priliku.",
  },
  {
    id: 4,
    icon: GiWeight,
    title: "Cela Srbija i region",
    text: "Nastupamo u Velikoj Plani, Smederevu, Požarevcu, Beogradu i širom Srbije i regiona.",
  },
];

export interface ServisCardsData {
  id: number;
  icon: IconType;
  title: string;
  text: string;
}

export const servisCardsData = [
  {
    id: 1,
    icon: LuTimerReset,
    title: "Šlep automobila",
    text: "Vršimo šlep svih vrsta automobila, bez obzira na stanje vozila – havarisana, poluvozna ili ispravna.",
  },
  {
    id: 2,
    icon: GiWeight,
    title: "Šlep motora",
    text: "Šlepamo motore, skutere, četvorotočkaše, motorne sanke i druga vozila brzo i sigurno.",
  },
  {
    id: 3,
    icon: GiWeight,
    title: "Šlep kombija i kamiona",
    text: "Pružamo uslugu transporta kombija, kamiona i radnih mašina širom Srbije, uz sigurnost i brzinu.",
  },
  {
    id: 4,
    icon: GiWeight,
    title: "Šlep vozila iz inostranstva",
    text: "Vršimo prevoz automobila iz inostranstva po najpovoljnijim cenama u Srbiji.",
  },
  {
    id: 5,
    icon: GiWeight,
    title: "Pomoc na putu 0-24h",
    text: "Svakom može zatrebati u nekom trenutku, naročito u hitnim slučajevima. Kada je potrebna šlep služba u Čačku i na teritoriji Zlatibora.",
  },
  {
    id: 6,
    icon: GiWeight,
    title: "Šlep lakog i teškog tereta",
    text: "Za vas prevozimo i laki i teški teret, kako u Čačku, tako i u drugim gradovima Srbije.",
  },
  {
    id: 7,
    icon: GiWeight,
    title: "Šlep havarisanog vozila",
    text: "Ukoliko ste imali havariju na putu, tu smo da pokupimo vaše vozilo i bezbedno ga odšlepamo do servisa.",
  },
  {
    id: 8,
    icon: GiWeight,
    title: "Šlep radnih mašina",
    text: "Šlep radnih mašina do lokacije na kojoj mogu nastaviti s poslom, brzo i sigurno.",
  },
  {
    id: 9,
    icon: GiWeight,
    title: "Izvlačenje sajlom vozila van puta",
    text: "Izvlačenje vozila sa puta sajlom, pažljivo izvedeno kako bi se izbegla dodatna oštećenja vozila.",
  },
  {
    id: 10,
    icon: GiWeight,
    title: "Prevoz poljoprivrednih mašina",
    text: "Prevoz poljoprivrednih mašina, priključaka i opreme – idealno rešenje za one koje je lakše transportovati nego voziti, kao i za neispravne mašine.",
  },
];

export interface Cards2Data {
  id: number;
  icon: IconType;
  title: string;
  text: string;
}

export const cards2Data: Cards2Data[] = [
  {
    id: 1,
    icon: GiWeight,
    title: "Svadbe u Velikoj Plani",
    text: "",
  },
  {
    id: 2,
    icon: GiWeight,
    title: "Krsne slave",
    text: "",
  },
  {
    id: 3,
    icon: GiWeight,
    title: "Rođendani i proslave",
    text: "",
  },
];

export interface Cards2DataText {
  text: string;
}
export const cards2DataText: Cards2DataText = {
  text: "Trubači Kobre iz Velike Plane pružaju kompletne muzičke usluge za sve vrste proslava. Naš bogat repertoar, profesionalni pristup i dugogodišnje iskustvo garantuju nezaboravno iskustvo za vas i vaše goste. Kontaktirajte nas i učinimo vašu proslavu posebnom!",
};

export interface Tim {
  name: string;
  title: string;
  image: string;
}

export const tim: Tim[] = [
  {
    name: "Marina Mitrovic",
    title: "Diplomirani inženjer zaštite na radu",
    image: "/slep puric.jpg",
  },
  {
    name: "Marina Mitrovic",
    title: "Diplomirani inženjer zaštite na radu",
    image: "/slep puric.jpg",
  },
  {
    name: "Marina Mitrovic",
    title: "Diplomirani inženjer zaštite na radu",
    image: "/slep puric.jpg",
  },
  {
    name: "Marina Mitrovic",
    title: "Diplomirani inženjer zaštite na radu",
    image: "/slep puric.jpg",
  },
  {
    name: "Marina Mitrovic",
    title: "Diplomirani inženjer zaštite na radu",
    image: "/slep puric.jpg",
  },
];
