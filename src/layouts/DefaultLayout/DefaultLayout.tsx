import Footer from "@/components/Footer/Footer";
import { ReactNode } from "react";
import "./DefaultLayout.css";


const DefaultLayout = ({ children }: { children: ReactNode }) => {
    return(
        <div className="container">
            <div className="body">
                {children}
                <Footer/>
            </div>
        </div>
    )
}

export default DefaultLayout;
    