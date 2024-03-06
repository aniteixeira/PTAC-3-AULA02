import Link from "next/link";
import Image from "next/image";
import Styles from "./footer.module.css";

export default function footer(){
    return(
        <footer className={Styles.footer}>
          
          <nav>
            <li>
          <Image 
          width={100}
          height={100}
          src={"https://moodle.org/theme/moodleorg/pix/moodle_logo_TM.svg"}/>
             </li>
             <ul>
              <Link href="/">
                <li>Home</li>
              </Link>
              <Link href="/registro">
                <li>Registrar</li>
              </Link>
             </ul>
           </nav>
        </footer>
    );
};