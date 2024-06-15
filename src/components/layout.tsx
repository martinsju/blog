'use client'

import StyledComponentsRegistry from '@/lib/registry'
import GlobalStyles from '@/styles/GlobalStyles'
import type { ReactNode } from 'react'
import { NavBarLayout } from './NavBar/layout'

/**
 * Client component that contains styling rules and layout for entire website
 * @param children the element that should be wrapped by this layout
 * @returns JSX component
 */
export const LayoutWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <StyledComponentsRegistry>
      <GlobalStyles />
      <NavBarLayout />
      {children}
    </StyledComponentsRegistry>
  )
}
