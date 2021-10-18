import React, { FC, useState, useEffect } from 'react';

export const SearchPanel = ({ param, setParam }: any) => {
  const [users, setUsers] = useState<any[]>([]);

  return (
    <form>
      <div>
        <input type="text" onChange={(evt) => {
          setParam({
            ...param,
            name: evt.target.value
          })
        }} />
        <select value={param?.personId} onChange={(evt) => {
          setParam({
            ...param,
            personId: evt.target.value
          })
        }} >
          <option value={''}>负责人</option>
          {users.map(user => (<option value={user.personId}>{user.name}</option>))}
        </select>
      </div>
    </form >
  )
}