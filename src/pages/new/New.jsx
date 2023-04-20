import React, { useEffect, useState } from 'react'
import './New.scss'
import { useInput } from '../../customHooks/useInput'

const New = ({ addNewUser }) => {
  const name = useInput('', {isEmpty: true} )
  const email = useInput('', {isEmpty: true, isEmail: true})
  const phone = useInput('', {isEmpty: true, isPhone: true})
  const street = useInput('')
  const suite = useInput('')
  const city = useInput('')
  const [imgFile, setImgFile] = useState(null)

  const onChangeFile = (e) => {
    setImgFile(e.target.files[0].name)
  }

  return (
    <div className='new'>
      <h3 className='title'>Add new user</h3>
        <form className='container'>
          <div className="inputs">
            <div className="left">
              <div className="item">
                <label>Name:</label>
                <input type="text" placeholder='Name Lastname'
                  onChange={(e) => name.onChange(e)}
                  onBlur={(e) => name.onBlur(e)}
                  value={name.value}
                  className={(name.isEmpty && name.isDirty) && 'error'}/>
              </div>
              <div className="item">
                <label>Email:</label>
                <input type="email" placeholder='name@gmail.com'
                  onChange={(e) => email.onChange(e)}
                  onBlur={(e) => email.onBlur(e)}
                  value={email.value}
                  className={((email.isEmpty || email.isEmail) && email.isDirty) && 'error'}/>
              </div>
              <div className="item">
                <label>Phone:</label>
                <input type="text" placeholder='+1 234-567-8900'
                onChange={(e) => phone.onChange(e)}
                onBlur={(e) => phone.onBlur(e)}
                value={phone.value}
                className={((phone.isEmpty || phone.isPhone) && phone.isDirty) && 'error'}/>
              </div>
            </div>
            <div className="right">
              <div className="item">
                <label>Street:</label>
                <input type="text" placeholder='Wilton St.'
                  onChange={(e) => street.onChange(e)}
                  onBlur={(e) => street.onBlur(e)}
                  value={street.value}/>
              </div>
              <div className="item">
                <label>Suite:</label>
                <input type="text" placeholder='Suite 123'
                  onChange={(e) => suite.onChange(e)}
                  onBlur={(e) => suite.onBlur(e)}
                  value={suite.value}/>
              </div>
              <div className="item">
                <label>City:</label>
                <input type="text" placeholder='New-York'
                  onChange={(e) => city.onChange(e)}
                  onBlur={(e) => city.onBlur(e)}
                  value={city.value}/>
              </div>
            </div>
          </div>
          <input type="file" className='file'
            accept='.png, .jpg, .webp'
            onChange={onChangeFile}/>
          <p className="warnings">Fields marked with an * are required</p>
          <button disabled={(name.isValid && email.isValid && phone.isValid)} type='submit' className="add"
          onSubmit={(e) => {
            e.preventDefault()
            addNewUser({
            id: 11,
            name : name.value,
            email: email.value,
            address: {
              street: street.value,
              suite: suite.value,
              city: city.value
            },
            phone: phone.value,
            image: imgFile ? imgFile : ''
          })}}>Add new user</button>
        </form>
    </div>
  )
}

export default New