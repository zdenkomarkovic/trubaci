import Link from "next/link";
import { Facebook, Instagram, Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo i opis */}
          <div className="md:col-span-2 space-y-2">
            <h3 className="text-2xl font-bold mb-4 gold-accent">
              Trubači Kobre
            </h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Profesionalni trubački orkestar iz Velike Plane sa preko 20 godina
              iskustva. Pružamo nezaboravne muzičke doživljaje za svadbe, slave
              i sve vrste proslava.
            </p>

            <a
              href="https://www.facebook.com/groups/233275887698535"
              target="_blank"
              className="text-gray-400 hover:text-yellow-400 transition-colors flex items-center gap-3"
            >
              <Facebook className="w-6 h-6" /> Trubači Velika Plana
            </a>
            <a
              href="https://www.instagram.com/trubaci_velika_plana_/"
              target="_blank"
              className="text-gray-400 hover:text-yellow-400 transition-colors flex items-center gap-3"
            >
              <Instagram className="w-6 h-6" /> trubaci_velika_plana_
            </a>
          </div>

          {/* Brze veze */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-yellow-400">
              Brze veze
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Početna
                </Link>
              </li>
              <li>
                <Link
                  href="/#o-nama"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  O nama
                </Link>
              </li>
            </ul>
          </div>

          {/* Kontakt */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-yellow-400">
              Kontakt
            </h4>
            <div className="space-y-3">
              <a
                href="tel:+381612579600"
                className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4" />
                +381 61 257 9600
              </a>

              <div className="flex items-center gap-3 text-gray-300">
                <MapPin className="w-4 h-4" />
                Velika Plana, Srbija
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; 2025 Trubači Kobre Velika Plana. Sva prava zadržana.
          </p>
          <a
            href="https://www.manikamwebsolutions.com/"
            target="_blank"
            className="text-gray-400 text-sm hover:text-yellow-400 transition-colors mt-2 md:mt-0"
          >
            Izrada sajta:{" "}
            <span className="font-semibold">ManikamWebSolutions</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
