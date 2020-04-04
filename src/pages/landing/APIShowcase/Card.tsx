import React from 'react'

interface Props {
  api: {
    url: string
    type: string
    title: string
    source: string
    description: string
  }
}

const Card = ({api}: Props) => {
  return (
    <div style={styles.container}>
      <div className="columns">
        <div className="column is-flex" style={styles.centered}>
          <div
            style={{
              width: 30,
              height: 30,
              backgroundColor: 'lightgray',
              borderRadius: '50%',
            }}
          />
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={api.url}
            className="is-size-6 has-text-weight-semibold"
            style={{marginLeft: 10}}>
            {api.title}
          </a>
        </div>
      </div>
      <div className="is-size-7" style={styles.body}>
        {api.description}
      </div>
      <div className="is-flex" style={{...styles.footer, ...styles.centered}}>
        <div
          style={{
            ...styles.circle,
            backgroundColor: colors[api.type] || 'lightgray',
          }}
        />
        <div className="is-size-6" style={{marginLeft: 5}}>
          {api.type}
        </div>
      </div>
    </div>
  )
}

const colors: {[key: string]: any} = {
  JSON: '#F1E05A',
}

const styles: {[key: string]: any} = {
  container: {
    width: '90%',
    padding: 16,
    backgroundColor: 'rgb(252, 252, 253)',
    borderRadius: 5,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'rgb(231, 231, 231)',
  },
  header: {
    display: 'flex',
    width: '100%',
  },
  body: {
    marginTop: 8,
    marginBottom: 16,
  },
  footer: {
    height: 18,
  },
  centered: {
    alignItems: 'center',
  },
  circle: {
    width: 12,
    height: 12,
    borderRadius: '50%',
  },
}

export default Card
