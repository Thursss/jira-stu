import { useState, useEffect } from 'react';

import { SearchPanel } from "./search-panel";
import { List } from "./list";


export const ProjectList = () => {
  const [param, setParam] = useState<any>({
    name: '',
    personId: ''
  });
  const [users, setUsers] = useState<any[]>([]);
  const [lists, setLists] = useState<any[]>([]);

  useEffect(() => {
    fetch('http://localhost:4001/users').then(async (res) => {
      if (res.ok) {
        const users = await res.json();
        setUsers(users);
      }
    });
  }, [param]);

  useEffect(() => {
    fetch('http://localhost:4001/projects').then(async (res) => {
      if (res.ok) {
        const lists = await res.json();
        setLists(lists);
      }
    });
  }, []);

  return (
    <div>
      <SearchPanel user={users} param={param} setParam={setParam} />
      <List users={users} lists={lists} />
    </div>
  )
}