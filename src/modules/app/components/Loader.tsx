import React from 'react'
import { LinearProgress, LinearProgressProps } from '@mui/material'

interface LoaderProps extends LinearProgressProps {
  loading: boolean
}
const Loader = ({ loading, ...props }: LoaderProps) =>
  loading ? <LinearProgress {...props} /> : null
export default Loader
