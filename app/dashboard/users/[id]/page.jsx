import styles from "@/app/ui/users/singleUser/singleUser.module.css"
import Image from "next/image";

const user = {
    username: "Lynn",
    email: "feafefa@gmail.com",
    password: "fawefwfaef",
    phoneNo: "09581181118",
    address: "SDKfe Street, faefif",
    roleCategory: "Adminstrator",
    role: "admin"

}

const singleUserPage = () =>{

    return (
        <div className={styles.container}>
        <div className={styles.infoContainer}>
            <div className={styles.imgContainer}>
            <Image src={user?.img || "/noavatar.png"} alt="" fill />
            </div>
            {user.username}
        </div>
        <div className={styles.formContainer}>
            <form className={styles.form}>
            <input type="hidden" name="id" value={user.id}/>
            <label>Username</label>
            <input type="text" name="username" placeholder={user.username} />
            <label>Email</label>
            <input type="email" name="email" placeholder={user.email} />
            <label>Password</label>
            <input type="password" name="password" />
            <label>Phone</label>
            <input type="text" name="phoneNo" placeholder={user.phoneNo} />
            <label>Address</label>
            <textarea type="text" name="address" placeholder={user.address} />
            <label>Role</label>
            <input type="role" name="role" placeholder={user.role} />
            <label>Role Category</label>
            <select name="roleCategory" id="roleCategory" placeholder={user.roleCategory}>
                <option value={user.roleCategory} selected={user.roleCategory}>{user.roleCategory}</option>
                <option value="Adminstrator">Adminstrator</option>
                <option value="Executive">Executive</option>
                <option value="Tatical">Tatical</option>
                <option value="Operational">Operational</option>
            </select>
            <label>Is Active?</label>
            <select name="isActive" id="isActive">
                <option value={true} selected={user.isActive}>Yes</option>
                <option value={false} selected={!user.isActive}>No</option>
            </select>
            <button>Update</button>
            </form>
        </div>
        </div>
    );
}

export default singleUserPage;