import React, { useState } from 'react'
import SectionTitle from '../../ui/SectionTitle/SectionTitle'
import Button from '../../ui/Button/Button'
import FadeIn from '../../ui/FadeIn/FadeIn'
import { useLang } from '../../../context/LangContext'
import styles from './Contact.module.scss'

interface FormState {
  name: string
  email: string
  message: string
}

const initialState: FormState = { name: '', email: '', message: '' }

const Contact: React.FC = () => {
  const [form, setForm] = useState<FormState>(initialState)
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')
  const { t } = useLang()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    // TODO: integrar EmailJS en producción
    // await emailjs.send(SERVICE_ID, TEMPLATE_ID, form, PUBLIC_KEY)
    setTimeout(() => {
      setStatus('sent')
      setForm(initialState)
    }, 1000)
  }

  return (
    <section id="contact" className={styles.contact}>
      <FadeIn>
        <SectionTitle title={t.contact.title} subtitle={t.contact.subtitle} />
      </FadeIn>
      <FadeIn delay={0.1}>
        <div className={styles.wrapper}>
          <div className={styles.info}>
            <p className={styles.email}>
              <a href="mailto:aledesmadev@gmail.com">aledesmadev@gmail.com</a>
            </p>
          </div>
          <form className={styles.form} onSubmit={handleSubmit} noValidate>
            <div className={styles.formGroup}>
              <label htmlFor="name" className={styles.label}>{t.contact.labelName}</label>
              <input id="name" name="name" type="text" className={styles.input}
                value={form.name} onChange={handleChange} required
                placeholder={t.contact.placeholderName} />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="email" className={styles.label}>{t.contact.labelEmail}</label>
              <input id="email" name="email" type="email" className={styles.input}
                value={form.email} onChange={handleChange} required
                placeholder={t.contact.placeholderEmail} />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="message" className={styles.label}>{t.contact.labelMessage}</label>
              <textarea id="message" name="message" className={styles.textarea}
                rows={5} value={form.message} onChange={handleChange} required
                placeholder={t.contact.placeholderMessage} />
            </div>
            <Button type="submit" variant="primary" disabled={status === 'sending'}>
              {status === 'sending' ? t.contact.sending : t.contact.send}
            </Button>
            {status === 'sent' && (
              <p className={styles.success} role="alert">{t.contact.successMsg}</p>
            )}
            {status === 'error' && (
              <p className={styles.error} role="alert">{t.contact.errorMsg}</p>
            )}
          </form>
        </div>
      </FadeIn>
    </section>
  )
}

export default Contact
