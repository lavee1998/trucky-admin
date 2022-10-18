import React, { useState } from 'react'
import {
  IconButton,
  TablePagination,
  TableRow,
  Paper,
  TableContainer,
  TableCell,
  TableBody,
  Table,
  TableHead,
  TableFooter,
} from '@mui/material'
import { Delete as DeleteIcon, Visibility as VisibilityIcon } from '@mui/icons-material'
import { User } from 'modules/api'

type UserListProps = {
  items: User[]
  onFetchUsers: () => unknown
  onClickUserDetails: (user: User) => void
  onClickUserRemove: (user: User) => void
}

const columns: GridColDef[] = [
  { field: 'firstName', headerName: 'First name', width: 130 },
  { field: 'lastName', headerName: 'Last name', width: 130 },
]

const UserList = ({
  items,
  onFetchUsers,
  onClickUserDetails,
  onClickUserRemove,
}: UserListProps) => {
  const [rowsPerPage, setRowsPerPage] = useState(2)
  const [maxPageNumber, setMaxPageNumber] = React.useState(0)
  const [page, setPage] = React.useState(0)

  const handleChangePage = async (_: unknown, newPage: number) => {
    console.log({ newPage })
    if (newPage > maxPageNumber) {
      await onFetchUsers()
      setMaxPageNumber(newPage)
    }

    setPage(newPage)
  }

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
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
          {(rowsPerPage > 0
            ? items.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : items
          ).map(row => (
            <TableRow key={row.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell align="right" component="th" scope="row">
                {row.companyId}
              </TableCell>
              <TableCell align="right">{row.email}</TableCell>
              <TableCell align="right">{row.firstName}</TableCell>
              <TableCell align="right">{row.lastName}</TableCell>
              <TableCell align="right">{row.createdAt}</TableCell>
              <TableCell align="right">{row.updatedAt}</TableCell>
              <TableCell align="right">
                <IconButton onClick={() => onClickUserDetails(row)}>
                  <VisibilityIcon fontSize="small" />
                </IconButton>
              </TableCell>
              <TableCell align="right">
                <IconButton onClick={() => onClickUserRemove(row)}>
                  <DeleteIcon fontSize="small" />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[]}
              count={-1}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  )
}

export default UserList
