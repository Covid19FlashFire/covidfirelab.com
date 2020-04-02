import React from 'react'

const Footer = () => (
  <footer style={styles.container}>
    <div className="is-size-7">© 2020 Firelab, Org.</div>
  </footer>
)

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 20,
    height: 50,
    width: '100%',
    borderTopWidth: 1,
    borderTopStyle: 'solid',
    borderTopColor: '#eaecef'
  },
}

export default Footer
