import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import { ReactNode } from "react";
import "./DefaultLayout.css";


const DefaultLayout = ({ children }: { children: ReactNode }) => {
    return(
        <div className="container">
            <div className="navbar">
                <Header/>
            </div>
            <div className="body">
                {children}
            </div>
            <Footer/>
        </div>
    )
}

export default DefaultLayout;
    