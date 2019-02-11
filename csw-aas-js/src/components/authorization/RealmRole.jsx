import React from 'react'
import PropTypes from 'prop-types'
import { Consumer } from '../context/AuthContext'

/**
 * React component which renders if user is authenticated and has specified realm role
 * @param realmRole (required prop) string which specifies expected realm role
 * @param children (optional prop) can be react components or html element which will be rendered
 * if user is authenticated and has specified realm role
 * @param error (optional prop) can be react components or html element which will be rendered
 * if user is not authenticated or does not have specified realm role
 * @returns React component
 */
const RealmRole = ({ realmRole, children, error }) => (
  <Consumer>
    {({ auth }) => {
      if (!auth) return error
      return auth.isAuthenticated() && auth.hasRealmRole(realmRole)
        ? children
        : error || null
    }}
  </Consumer>
)

RealmRole.propTypes = {
  realmRole: PropTypes.string.isRequired,
  children: PropTypes.node,
  error: PropTypes.node,
}

export default RealmRole
