import React from 'react'
import styles from './blog.module.css'
function Blog() {
  return (
    <>
        <div className={styles.wraper}>
        <div className={styles.head}>
          <h1 className=" text-[42px] font-semibold text-white">Blogs</h1>
          <div className={styles.line}></div>
        </div>
          <h1>This is blog</h1>
        </div>
    </>
  )
}

export default Blog