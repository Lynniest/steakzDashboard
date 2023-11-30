import { authenticateUser } from "@/app/lib/actions";
import styles from "./loginForm.module.css"
import Link from "next/link";
const LoginForm = () => {
    return (
        <div>
            <form action="" className={styles.form}>
                <h1>Log in to the Portal</h1>
                <input name="username" type="text" placeholder="username" />
                <input name="password" type="text" placeholder="password" />
                
                    <button type="submit"><Link href="/dashboard">Login</Link></button>
                
            </form>
        </div>
    );
}

export default LoginForm;