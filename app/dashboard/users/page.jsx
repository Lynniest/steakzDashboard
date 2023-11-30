import Link from "next/link";
import Search from "../../ui/dashboard/search/search";
import styles from "../../ui/users/users.module.css"
import Image from "next/image";
import { fetchUsers } from "../../lib/data";

const UserPage = async ( {searchParams} ) => {

    const q = searchParams?.q || "";
    const page = searchParams?.page || 1;

    const users = await fetchUsers(q, page);

    return (
        <div className={styles.container}>
            
            <div className={styles.top}>
                <Search placeholder="search for a user..."/>
                <Link href="/users/add">
                    <button className={styles.addButton}>Add New User</button>
                </Link>
            </div>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Email</td>
                        <td>Created at</td>
                        <td>Role</td>
                        <td>Status</td>
                        <td>Action</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <div className={styles.user}>
                                <Image src="/noavatar.png" alt="" width={40} height={40} className={styles.userImage} />
                                Lynn
                            </div>
                        </td>
                        <td>lynn@gmail.com</td>
                        <td>13.11.2026</td>
                        <td>Admin</td>
                        <td>active</td>
                        <td>
                            <div className={styles.buttons}>
                                <Link href="/">
                                    <button className={`${styles.button} ${styles.view}`}>View</button>
                                </Link>
                                <button className={`${styles.button} ${styles.delete}`}>Delete</button>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default UserPage;