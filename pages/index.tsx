import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'

const Home: NextPage = () => {
  return (
    <section className={styles.calculator}>
      <div className={styles.calculator_output}>
        <p className={styles.output_previous_operand}>121212,21312*</p>
        <p className={styles.output_current_operand}>434,5454</p>
      </div>
      <button className={styles.calculator_ac}>AC</button>
      <button>DEL</button>
      <button>÷</button>
      <button>1</button>
      <button>2</button>
      <button>3</button>
      <button>*</button>
      <button>4</button>
      <button>5</button>
      <button>6</button>
      <button>+</button>
      <button>7</button>
      <button>8</button>
      <button>9</button>
      <button>-</button>
      <button>.</button>
      <button>0</button>
      <button className={styles.calculator_equals}>=</button>

    </section>
  )
}

export default Home
