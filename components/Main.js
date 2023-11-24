import styles from '../styles/Main.module.css'
import { useState } from 'react';



function Main() {


const [comment, setComment]= useState("");
const [comments, setComments]=useState([]);

  const  onChangeHandler = (e)=> {
    setComment(e.target.value);
  };
const onClickHandler= () =>{
    setComments((comments ) => [...comments, comment])
}

const handleClick=() =>{

}



return(
<div className={styles.container}>
   
<div>
    <img className={styles.bird} src="/images/white-logo.webp" onClick={handleClick} />
</div>
   
<a href='/'></a>

<h1>
    Home
</h1>

<div className="middlestuff">

    <div className= "main-container">
        {comments.map((text)=> (
             <div className="comment-container" maxlength="280">{comment}</div>
        ))}
        
            <div className="comment-FlexBox">
                <h3 className="comment-text">Comments</h3>
                    <textarea 
                        value={comment} 
                        onChange={onChangeHandler} 
                        className="input-box" />
                            <p> <button onClick={onClickHandler} >Submit</button></p>




</div>
</div>
</div>
</div>
 )
} 


export default Main;

