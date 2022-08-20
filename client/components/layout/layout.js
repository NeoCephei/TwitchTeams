/* ====================================================== */
/*                       Components                       */
/* ====================================================== */

import Header from "Components/header/header";
import Footer from "Components/footer/footer";

/* ====================================================== */
/*                         Styles                         */
/* ====================================================== */

import styles from "./layout.module.css";

export default function Layout({ children }) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
}
