import React from 'react'

interface Props {
  repo: {
    source: string
    title: string
    description: string
    language: string
    uri: string
  }
}

const Card = ({repo}: Props) => {
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
            href={repo.uri}
            className="is-size-6 has-text-weight-semibold"
            style={{marginLeft: 10}}>
            {repo.title}
          </a>
        </div>
      </div>
      <div className="is-size-7" style={styles.body}>
        {repo.description}
      </div>
      <div className="is-flex" style={{...styles.footer, ...styles.centered}}>
        <div
          style={{
            ...styles.circle,
            backgroundColor: colors[repo.language] || 'lightgray',
          }}
        />
        <div className="is-size-6" style={{marginLeft: 5}}>
          {repo.language}
        </div>
      </div>
    </div>
  )
}

const colors: {[key: string]: any} = {
  Python: '#3572A5',
  Javascript: '#F1E05A',
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
