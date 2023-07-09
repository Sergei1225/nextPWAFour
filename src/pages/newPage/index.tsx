import { useRouter } from "next/router";
import styles from "../../styles/Home.module.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const NewPage = () => {
    const router = useRouter();

    return (
        <>
            <div className={`${styles.main} ${inter.className}`}>
                <h3>New Page</h3>
                <button onClick={() => router.back()}>Back</button>
            </div>
        </>
    );
};
export default NewPage;
