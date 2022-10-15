import React, { useState } from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { User } from '../../api'
import { TablePagination } from '@mui/material'
import { useRouteMatch } from 'react-router-dom'
import { Delete as DeleteIcon, Visibility as VisibilityIcon } from '@mui/icons-material'
import NavButton from '../../app/components/NavButton'

type UserListProps = {
  items: User[]
}
const UserList = ({ items }: UserListProps) => {
  const [rowsPerPage, setRowsPerPage] = useState(5)
  const [page, setPage] = React.useState(0)
  const match = useRouteMatch()

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10))
    setPage(0)
  }

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align="right">Company ID</TableCell>
            <TableCell align="right">email</TableCell>
            <TableCell align="right">First name</TableCell>
            <TableCell align="right">Last name</TableCell>
            <TableCell align="right">Created at</TableCell>
            <TableCell align="right">Updated at</TableCell>
            <TableCell align="right"></TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {items.map(row => (
            <TableRow key={row.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell align="right">{row.companyId}</TableCell>
              <TableCell align="right">{row.email}</TableCell>
              <TableCell align="right">{row.firstName}</TableCell>
              <TableCell align="right">{row.lastName}</TableCell>
              <TableCell align="right">{row.createdAt}</TableCell>
              <TableCell align="right">{row.updatedAt}</TableCell>
              <TableCell align="right">
                <NavButton to={`${match.url}/${row.id}/view`} tooltip="View">
                  <VisibilityIcon fontSize="small" />
                </NavButton>
              </TableCell>
              <TableCell align="right">
                <NavButton to={`${match.url}/${row.id}/remove`} tooltip="Delete">
                  <DeleteIcon fontSize="small" />
                </NavButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={items.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </TableContainer>
  )
}

export default UserList
