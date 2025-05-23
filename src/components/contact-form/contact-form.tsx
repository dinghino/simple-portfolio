'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { toast } from 'sonner'

import { contactFormSchema, ContactFormValues } from '@/schemas/contact-form'

import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { useTranslations } from 'next-intl'

export function ContactForm() {
  const t = useTranslations('system')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  })

  async function onSubmit(values: ContactFormValues) {
    setIsSubmitting(true)
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      })
      const result = await response.json()
      if (result.success) {
        toast.success('Thank you for your message. We will get back to you soon.', {
          description: 'Message sent!',
        })
        form.reset()
      } else {
        toast.error(result.error || 'Failed to send message. Please try again later.', {
          description: 'Error',
        })
      }
    } catch (e) {
      toast.error('Failed to send message. Please try again later.', {
        description: 'Error',
      })
    }
    setIsSubmitting(false)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-mono">{t('formLabels.name')}</FormLabel>
              <FormControl>
                <Input placeholder={t('placeholders.name')} autoComplete="name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-mono">{t('formLabels.email')}</FormLabel>
              <FormControl>
                <Input
                  placeholder={t('placeholders.email')}
                  type="email"
                  autoComplete="email"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-mono">{t('formLabels.message')}</FormLabel>
              <FormControl>
                <Textarea placeholder={t('placeholders.message')} className="min-h-32" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <input
          type="text"
          name="website"
          autoComplete="off"
          tabIndex={-1}
          className="hidden"
          aria-hidden="true"
        />
        <Button type="submit" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? t('buttons.sending') : t('buttons.sendMessage')}
        </Button>
      </form>
    </Form>
  )
}
