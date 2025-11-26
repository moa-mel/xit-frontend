import DefaultLayout from "@/layouts/DefaultLayout/DefaultLayout";
import LandingPage from "./(UnauthenticatedPages)/(LandingPage)/page";


export default function RootPage() {
  return (
    <DefaultLayout>
      <LandingPage />
    </DefaultLayout>
  );
}