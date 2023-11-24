import styles from '../styles/Home.module.css';
import Login from './Login';
import  { useState } from 'react';
import { Button, Modal } from 'antd';


function Home() {
  const signInHandleClick=()=>{
  }

  const signUpHandleClick= () => {
  }

    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
      setIsModalOpen(true);
    };
    const handleOk = () => {
      setIsModalOpen(false);
    };
    const handleCancel = () => {
      setIsModalOpen(false);
    };


    const [modelOpen, setOpener] = useState(false);
    const ModelShow = () => {
      setModelOpen(true);
    };
    const handle = () => {
      setOpener(false);
    };
    const cancel= () => {
      setOpener(false);
    };

  return (

   
    <div className={styles.allContainer}>
       <img  className={styles.backgroundImg} src="/images/hackatweetback.png" />
        <div className={styles.secondPart}>

        <h1 className={styles.title} >
          <div>
             <img  className={styles.bird} src="/images/white-logo.webp" />
          </div>
          See what's happening
        </h1>
       
            <h2>
              Join Hackatweet today.
            </h2>

              <Button className={styles.joinBtn} type= "button" onClick={ModelShow}>
                 Sign Up
              </Button>
                  <Modal title="Sign Up" open={modelOpen} onOk={handle} onCancel={cancel}>
                    <p><input type="email" id="email" pattern=".+@example\.com" size="30" required /></p>
                    <p><input type="password" id="pass" name="password" minlength="8" required placeholder="Password"/></p>
                  </Modal>

          <h5>
          Already have an account? 
          </h5>
                <Button type= "button" className={styles.signBtn} onClick={showModal} >
                  Sign in 
                </Button>
                   <Modal className={styles.signInBox} title="Sign In" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                      <p><input type="text" id="username" name="username" placeholder="Username"/></p>
                      <p><input type="password" id="pass" name="password" minlength="8" required placeholder="Password"/></p>
                  </Modal>
          </div> 
      </div>
       
    
   
  );

}

export default Home;
