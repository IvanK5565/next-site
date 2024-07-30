import "@/app/globals.css";
import "./sign.css";
import Header from "@/app/components/SignIn/Header";
import Footer from "@/app/components/Footer";

export default function SignLayout({ children }) {
  return (
    //<html lang="en">
      <>
        <Header />
        {children}
        <Footer />
      </>
    //</html>
  );
}
