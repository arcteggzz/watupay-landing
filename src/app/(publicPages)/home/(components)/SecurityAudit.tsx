/* eslint-disable @next/next/no-img-element */
import styles from "../(styles)/SecurityAudit.module.scss";
import pci_logo from "./(images)/pci_logo.png";

const SecurityAudit = () => {
  return (
    <>
      <section className={styles.SecurityAudit}>
        <h2>Your money is safe with us</h2>

        <h4>PCI DSS Compliant</h4>

        <p>
          We have satisfied highest level of Security Audit and can be trusted
          as a Reliable Payment Gateway
        </p>

        <img src={pci_logo.src} alt="pci standards council" />
      </section>
    </>
  );
};

export default SecurityAudit;
