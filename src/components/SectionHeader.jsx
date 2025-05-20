import Styles from "@/styles/components/SectionHeader.module.css"


const SectionHeader = ({ text }) => {
    return (
        <div className={Styles.sectionHeader}>
            <h1>{text}</h1>
        </div>
    )
}

export default SectionHeader