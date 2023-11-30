import { addUser } from "@/app/lib/actions";
import styles from "@/app/ui/users/addUser/addUser.module.css";

const AddUserPage = () => {
  return (
    <div className={styles.container}>
      <form className={styles.form} action={addUser}>
        <input type="text" placeholder="Username" name="username" required />
        <input type="email" placeholder="Email" name="email" required />
        <input type="img" placeholder="Image Address" name="img" />
        <input
          type="password"
          placeholder="Password"
          name="password"
          required
        />
        <input type="phoneNo" placeholder="Ph Number" name="phoneNo" />
        <input type="role" placeholder="role" name="role" />
        <select name="roleCategory" id="roleCategory">
          <option value="admin">Adminstrator</option>
          <option value="executive">Executive</option>
          <option value="tactical">Tactical</option>
          <option value="operational">Operational</option>
        </select>
        <select name="isActive" id="isActive">
          <option value={true}>
            Is Active?
          </option>
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>
        <textarea
          name="address"
          id="address"
          rows="16"
          placeholder="Address"
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddUserPage;