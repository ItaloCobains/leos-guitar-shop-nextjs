import Image from "next/legacy/image";
import Link from "next/link";
import { SearchForm } from "./search";

export const Header = () => (
  <header>
    <div className="container my-5">
      <div className="row align-items-center">
        <div className="col-md-6">
          <Link href="/">
            <Image
              className="logo m-auto"
              src="/logo.png"
              alt="Leo's Guitar Shop"
              width={502}
              height={55}
              style={{
                maxWidth: "100%",
                height: "auto",
              }}
            />
          </Link>
        </div>
        <div className="col-md-6">
          <SearchForm />
        </div>
      </div>
    </div>
  </header>
);
