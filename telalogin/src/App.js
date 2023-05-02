import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react'
import Modal from './components/Modal';
import Modal2 from './components/Modal2';

function App() {
  const [openModal, setOpenModal] = useState(false)
  const [openModal2, setOpenModal2] = useState(false)

  return (
    <div className="App">
      <div className='form'>
        
        <form>
          <div className='title'>
            <h1>LOGIN</h1>
          </div>
          
          <div className="label-login">
            <label>Login</label>
            <br/>
            <input type="text" name="login" placeholder="login" className="form--login"></input>
          </div>
          <div className="label-password">
            <label>Password</label>
            <br/>
            <input type="password" name="password" placeholder="password" className="form--password"></input>
          </div>
          <br/>
          <div className='btn-group' class="text-center" role="group" aria-label="Basic example">
            
            <button type="button" class="btn btn-dark" onClick={() => setOpenModal(true)}>SigIn</button>
            <button type="button" class="btn btn-dark" onClick={() => setOpenModal2(true)}>SigUp</button>
          </div>
        </form>
      </div>

      <Modal isOpen={openModal} setModalOpen={() => setOpenModal(!openModal)}>
      </Modal>
      <Modal2 isOpen={openModal2} setModalOpen={() => setOpenModal2(!openModal2)}>
      </Modal2>

    </div>

    

  );
}

export default App;
