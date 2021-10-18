export const List = ({ users, lists }: any) => {
  return (
    <table>
      <thead>
        <tr>
          <th>1</th>
          <th>2</th>
        </tr>
      </thead>
      <tbody>
        {lists?.map((list: any) => (<tr key={list?.id}><td>{list?.organization}</td><td>{list?.name}</td></tr>))}
        {/* {users?.map((user: any) => (<tr key={user?.id}><td>{user?.id}</td><td>{user?.name}</td></tr>))} */}
      </tbody>
    </table>
  )
}