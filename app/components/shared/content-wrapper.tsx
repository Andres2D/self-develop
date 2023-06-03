import styles from './content-wrapper.module.css';

type Props = {
  children: JSX.Element;
}

const ContentWrapper = ({children}: Props) => {
  return (
    <section className={styles.container}>
      {children}
    </section>
  )
};

export default ContentWrapper;
