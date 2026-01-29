import Footer from "@/components/Footer/Footer";
import { ReactNode } from "react";
import "./DefaultLayout.css";


const DefaultLayout = ({ children }: { children: ReactNode }) => {
    return(
        <>
            {children}
            <Footer/>
        </>
    )
}

export default DefaultLayout;
    