import img from "@/assets/loading_cat-sip.gif";

const LoadingElement = () => {
    const styles = {
        container: {
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            alignItems: 'center',
            height: '100%',
        },
        image: {
            width: '150px',
            opacity: 0.8,
        }
    };

    return (
        <div style={styles.container}>
            <img src={img} alt="Loading..." style={styles.image} />
            <p>Loading...</p>
        </div>
    );
};
export default LoadingElement;
