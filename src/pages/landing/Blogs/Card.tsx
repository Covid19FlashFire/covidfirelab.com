import React from 'react'

interface Props {
  blog: {
    source: string
    title: string
    url: string
    provider: string
  }
}

const Card = ({blog}: Props) => {
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      href={blog.url}
      className="container is-flex"
      style={styles.container}>
      <div style={{height: 200}}>
        <img
          src={blog.source}
          alt="cover"
          style={{width: '100%', height: '100%', objectFit: 'contain'}}
        />
      </div>
      <div
        style={{
          height: '30%',
          padding: '12px 16px',
          color: '#E4E6EB',
          backgroundColor: 'rgb(58, 59, 60)',
        }}>
        <div className="is-size-7">{blog.provider}</div>
        <div className="is-size-6 has-text-weight-semibold ">{blog.title}</div>
      </div>
    </a>
  )
}

const colors: {[key: string]: any} = {
  Python: '#3572A5',
  Javascript: '#F1E05A',
}

const styles: {[key: string]: any} = {
  container: {
    width: '90%',
    flexDirection: 'column',
    backgroundColor: 'rgb(252, 252, 253)',
    borderRadius: 5,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'rgb(231, 231, 231)',
    overflow: 'hidden',
    cursor: 'pointer',
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
