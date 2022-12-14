import React from 'react'

// React simple components: functions
const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>Name</th>
        <th>Job</th>
        <th>Remove</th>
      </tr>
    </thead>
  )
}

const TableBody = (props) => {
  const rows = props.characterData.map((row, index) => {
    return (
      <tr key={index}>
        <td>{row.name}</td>
        <td>{row.job}</td>
        <td>
          <button onClick = {() => props.removeCharacter(index)}>Delete</button>
        </td>
      </tr>
    )
  })
  return <tbody>{rows}</tbody>
}

const Table = (props) => {
  const {characterData, removeCharacter} = props;

  return (
    <table>
      <TableHeader />
      <TableBody characterData={characterData} removeCharacter={removeCharacter} />
    </table>
  )
}

// React Components: classes
// class Table extends Component {
//   render() {
//     const { characterData } = this.props;

//     return (
//       <table>
//         <TableHeader />
//         <TableBody characterData={characterData}/>
//       </table>
//     )
//   }
// }

export default Table;