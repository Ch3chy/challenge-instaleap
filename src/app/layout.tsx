import "@styles/globals.scss";
import { monserrat } from "@/config/ui/font.ui";
import styles from "@styles/layouts/principal-layout.module.scss";
import logo from "@/assets/images/instaleap-logo.webp";
import type { Metadata } from "next";
import Image from "next/image";
import SideMenu from "@/components/side-menu";
import { SideMenuItem } from "@/components/side-menu/side-menu.types";

export const metadata: Metadata = {
  title: "Instastore",
  description:
    "Descubre una experiencia de compra única y conveniente con Instastore. Con nuestra interfaz intuitiva y fácil de usar, podrás encontrar la tienda que necesitas rápidamente",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const menuItems: SideMenuItem[] = [
    { label: "Inicio", icon: "house", link: "/" },
    { label: "Pedidos", icon: "receipt", link: "/orders", active: true },
  ];

  const optionsItems: SideMenuItem[] = [
    { label: "Log Out", icon: "sign-out", link: "/" },
  ];

  return (
    <html lang="es">
      <body className={`${monserrat.className}`}>
        <div className={styles.layout}>
          <div className={styles.sideMenu}>
            <Image
              src={logo}
              priority
              className={styles.logo}
              alt="Instaleap"
            />
            <SideMenu items={menuItems} className={styles.menu} />
            <SideMenu items={optionsItems} />
          </div>
          <main className={styles.content}>{children}</main>
        </div>
      </body>
    </html>
  );
}
