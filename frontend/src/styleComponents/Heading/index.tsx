import styles from "./Heading.module.css"

type TProps = {
    children: string;
}
export const Heading: React.FC<TProps> = ({children}) => {
    return <h1 className={styles['Heading']}>{children}</h1>

}