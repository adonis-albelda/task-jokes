import React from 'react'
import '../../styles/footer.css';
import Button from './../ui/Button'

function Footer() {
  return (
    <>
      <footer>
        <div className='container'>
          <div className='content'>
            <p>got jokes? get paid <br/>for submitting!</p>
            <Button text="submit joke" className="outline plain" icon="path.png"></Button>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer