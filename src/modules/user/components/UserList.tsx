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
  Typography,
  Tooltip,
  Toolbar,
  useTheme,
} from '@mui/material'
import { Delete as DeleteIcon, FilterList, Visibility as VisibilityIcon } from '@mui/icons-material'
import { User } from 'modules/api'
import SearchDialog from './SearchDialog'

type UserListProps = {
  items: User[]
  total: number
  limit: number
  page: number
  filter: string
  onFetchUsers: () => unknown
  onClickUserDetails: (user: User) => void
  onClickUserRemove: (user: User) => void
  onSetPage: (pageNumber: number) => void
  onSearch: (search: string) => void
}

type TableToolbarProps = {
  title: string
  handleFilterClick: () => void
  rowsPerPage: number
  page: number
  count: number
  onChangePage: (e: unknown, page: number) => unknown
}

const TableToolbar = ({
  title,
  handleFilterClick,
  rowsPerPage,
  page,
  count,
  onChangePage,
}: TableToolbarProps) => {
  const theme = useTheme()

  return (
    <Toolbar
      sx={{
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(1),
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}>
      <Typography sx={{ flex: 1 }} variant="h6" id="tableTitle" component="div">
        {title}
      </Typography>
      <TablePagination
        rowsPerPageOptions={[]}
        count={count}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={onChangePage}
      />

      <Tooltip title={'Filter list'}>
        <IconButton aria-label="filter list" onClick={() => handleFilterClick()}>
          <FilterList />
        </IconButton>
      </Tooltip>
    </Toolbar>
  )
}

const UserList = ({
  items,
  total,
  limit,
  page,
  filter = '',
  onSetPage,
  onFetchUsers,
  onClickUserDetails,
  onClickUserRemove,
  onSearch,
}: UserListProps) => {
  const [rowsPerPage, _] = useState(limit)
  const [open, setOpen] = useState(false)
  const [search, setSearch] = useState(filter)

  const handleSearch = () => {
    onSearch(search)
    setOpen(false)
  }

  const handleSearchClose = () => {
    setOpen(false)
    setSearch('')
    onSearch('')
  }

  const handleChangePage = async (_: unknown, newPage: number) => {
    if (newPage > items.length / limit - 1 && items.length !== total) {
      await onFetchUsers()
    }

    onSetPage(newPage)
  }

  return (
    <>
      <TableToolbar
        title={'User list'}
        handleFilterClick={() => setOpen(prevState => !prevState)}
        count={total}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
      />
      <TableContainer component={Paper}>
        <Table aria-label="User table">
          <TableHead>
            <TableRow>
              <TableCell align="right">Company ID</TableCell>
              <TableCell align="right">Email</TableCell>
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
        </Table>
      </TableContainer>
      <SearchDialog
        onClose={() => setOpen(false)}
        onSearch={handleSearch}
        onSearchChange={setSearch}
        onSearchClose={handleSearchClose}
        cancelButtonText={filter ? 'Clear' : 'Cancel'}
        open={open}
        search={search}
      />
    </>
  )
}

export default UserList
