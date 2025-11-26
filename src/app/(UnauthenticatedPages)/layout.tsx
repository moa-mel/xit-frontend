import DefaultLayout from "@/layouts/DefaultLayout/DefaultLayout";
import { ReactNode } from "react";


export default function GeneralLayout({ children }: { children: ReactNode }) {
    return <DefaultLayout>{children}</DefaultLayout>;
}