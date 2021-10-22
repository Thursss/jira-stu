import React, { FC, useState, useEffect } from 'react';

export const SearchPanel = ({ users, param, setParam }: any) => {
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
          {users?.map((user: any) => (<option key={user?.id} value={user.id}>{user.name}</option>))}
        </select>
      </div>
    </form >
  )
}