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
  total: number
  limit: number
  page: number
  onFetchUsers: () => unknown
  onClickUserDetails: (user: User) => void
  onClickUserRemove: (user: User) => void
  onSetPage: (pageNumber: number) => void
}

const UserList = ({
  items,
  total,
  limit,
  page,
  onSetPage,
  onFetchUsers,
  onClickUserDetails,
  onClickUserRemove,
}: UserListProps) => {
  const [rowsPerPage, _] = useState(limit)

  const handleChangePage = async (_: unknown, newPage: number) => {
    if (newPage > items.length / limit - 1 && items.length !== total) {
      await onFetchUsers()
    }

    onSetPage(newPage)
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
              count={total}
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
