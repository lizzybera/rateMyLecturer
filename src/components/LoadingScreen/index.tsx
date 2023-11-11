
import styles from './style.module.css'

const LoadingScreen = () => {
    return (
        <div className='z-[100] w-full'>
        <div className={styles.loading} />
      </div>
    )
}

export default LoadingScreen;