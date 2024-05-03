import styles from "./skeletonStyle.module.scss";
export default function SkeletonItem() {
  return (
    <div className={styles.skeletonItem}>
      <div className={styles.skeletonImage}></div>
      <div className={styles.skeletonTitle}></div>
      <div className={styles.skeletonSubtitle}></div>
    </div>
  );
}
