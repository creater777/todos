import React from 'react'

export default ({className, user}) =>
  <div className={className}>
    <p>
      {user.name}
    </p>
    <p>
      {user.phone}
    </p>
    <p>
      {user.email}
    </p>
    <p>
      <a href="#">{user.website}</a>
    </p>
    <p>
      <button type="button" className="btn btn-primary">Редактировать</button>
    </p>
    <form>
      <div className="form-group">
        <label htmlFor="name">Имя</label>
        <input type="text" className="form-control" id="name" placeholder={user.name}/>
      </div>
      <div className="form-group">
        <label htmlFor="phone">Телефон</label>
        <input type="text" className="form-control" id="phone" placeholder={user.phone}/>
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input type="email" className="form-control" id="email" placeholder={user.email}/>
      </div>
      <div className="form-group">
        <label htmlFor="website">Сайт</label>
        <input type="text" className="form-control" id="website" placeholder={user.website}/>
      </div>
      <button type="submit" className="btn btn-primary">Сохранить</button>
    </form>
  </div>
