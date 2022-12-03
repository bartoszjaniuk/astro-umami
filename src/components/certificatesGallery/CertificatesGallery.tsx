import { CertificateItem } from "./certificateItem/CertificateItem";
import { certificatesList } from "./CertificatesGallery.data";
import styles from "./CertificatesGallery.styles.module.scss";

export const CertificatesGallery = () => {
  return (
    <section className={styles.certificates}>
      {certificatesList.map(({ alt, path }, index) => {
        return <CertificateItem id={index} key={index} path={path} alt={alt} />;
      })}
    </section>
  );
};
