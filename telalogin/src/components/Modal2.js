import React from 'react'

const BACKGROUND_STYLE = {
  position: 'fixed',
  top: '0',
  bottom: '0',
  left: '0',
  right: '0',
  backgroundColor: 'rgb(0,0,0, 0.7)',
  zIndex: '1000'
}

const MODAL_STYLE = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%,-50%)',
  padding: '150px',
  backgroundColor: '#fff',
  borderRadius: '10px',
  color: 'black'
}

export default function Modal2({ isOpen, setModalOpen, children }) {
  if (isOpen) {
    return (
        <div style={BACKGROUND_STYLE}>
            <div style={MODAL_STYLE}>
                <div style={{ cursor: 'pointer'}} onClick={setModalOpen}>
                    <h1>User Registration</h1>
                    <form>
                        <div className="label-login">
                            <label>Name</label>
                            <br/>
                            <input type="text" name="name" placeholder="name" className="form--name"></input>
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
                        <div class="text-center">
                            <br/>
                            <button type="button" class="btn btn-dark">Register</button>
                            
                            <button type="button" class="btn btn-dark" onClick={setModalOpen}>Back</button>
                        </div>
                    </form>
                </div>
                
        </div>
      </div>
    )
  }

  return null
}
