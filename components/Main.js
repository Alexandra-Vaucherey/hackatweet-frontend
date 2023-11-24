import styles from '../styles/Main.module.css'

function Main() {

return(
<div className={styles.container}>
   

<div>
    <img className={styles.bird} 
    src="/images/white-logo.webp" />
</div>
   

<div className={styles.middle}>
<h1>
    Home
</h1>


<input  textarea 
        className={styles.textbox} 
        name="Comments" 
        required minlength="10" 
        maxlength="280" 
    />



</div>
</div>
 )
} 


export default Main;

