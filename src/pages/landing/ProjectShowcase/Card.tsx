import React from 'react'

interface Props {
  source: string
  title: string
  description: string
  language: string
  url: string
}

const Card = (props: Props) => {
  return (
    <div style={styles.container}>
      <div className="columns">
        <div className="column is-flex" style={styles.centered}>
          <div style={{width: 30, height: 30}}>
            <img src={props.source} style={styles.icon} />
          </div>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={props.url}
            className="is-size-6 has-text-weight-semibold"
            style={{marginLeft: 10}}>
            {props.title}
          </a>
        </div>
      </div>
      <div className="is-size-7" style={styles.body}>
        {props.description}
      </div>
      <div className="is-flex" style={{...styles.footer, ...styles.centered}}>
        <div
          style={{
            ...styles.circle,
            backgroundColor: colors[props.language] || 'lightgray',
          }}
        />
        <div className="is-size-6" style={{marginLeft: 5}}>
          {props.language}
        </div>
      </div>
    </div>
  )
}

const colors: {[key: string]: any} = {
  Python: '#3572A5',
  Javascript: '#F1E05A',
  'Node.js': '#F1E05A',
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
  iconContainer: {
    width: 30,
    height: 30,
  },
  icon: {
    width: 30,
    height: 30,
    borderRadius: '50%',
  },
}

export default Card
