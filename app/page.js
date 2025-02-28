import DownloadLink from "./components/downloadLink";
import Footer from "./components/footer";
import Header from "./components/header";
import { locations } from "./constants/constants";

export default function Home() {
  const sortedLocations = [...locations].sort();

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:pt-25 sm:pb-15 font-[family-name:var(--font-geist-sans)]">
      <Header />
      <div className="grid grid-cols-4 gap-16 row-start-2 items-center sm:items-start">
        {sortedLocations.map((location, index) => {
          return (
            <div
              key={index}
              // className={index === locations.length - 1 ? "col-start-2" : ""}
            >
              <DownloadLink name={location} />
            </div>
          );
        })}
      </div>
      <Footer />
    </div>
  );
}
