import React from 'react'

export default function (props) {
  return (
    <form onSubmit={props.handleSubmit}>
      <label>Email</label>
      <input name="email" type="text" />
      <label>Password</label>
      <input name="password" type="password" />
      <button type="submit" className="btn btn-primary">submit</button>
    </form>
  )
}
