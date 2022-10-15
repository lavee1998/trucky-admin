import React from 'react'
import { NavLink, NavLinkProps } from 'react-router-dom'
import { IconButton, Tooltip, TooltipProps } from '@mui/material'

interface NavButtonProps extends NavLinkProps {
  tooltip: string
  tooltipPlacement?: TooltipProps['placement']
}

const NavButton = ({
  tooltip,
  children,
  tooltipPlacement = 'bottom',
  ...props
}: NavButtonProps) => (
  <Tooltip title={tooltip} enterDelay={100} leaveDelay={200} placement={tooltipPlacement}>
    <IconButton aria-label={tooltip} component={NavLink} {...props}>
      {children}
    </IconButton>
  </Tooltip>
)

export default NavButton
