import styles from "./page.module.css";
import DealSlider from "./components/DealsSlider/DealSlider";
import BurgersMenu from "./components/BurgersMenu/BurgersMenu";

export default function Home() {
  return (
    <div className={styles.homePage}>
      <DealSlider/>
      <BurgersMenu/>
    </div>
  );
}
