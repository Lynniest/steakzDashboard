"use client"

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import styles from "./pagination.module.css"

const Pagination = () => {

    const searchParams = useSearchParams();
    const {replace} = useRouter();
    const pathname = usePathname();


    return (
    <div className={styles.container}>
      <button
        className={styles.button}
        disabled={!hasPrev}
        onClick={() => handleChangePage("prev")}
      >
        Previous
      </button>
      <button
        className={styles.button}
        disabled={!hasNext}
        onClick={() => handleChangePage("next")}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;