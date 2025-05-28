/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import React, { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { MagicCard } from './magicui/magic-card'
import { useTheme } from 'next-themes'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from './ui/form'
import { useForm } from 'react-hook-form'
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover'
import { cn } from '@/lib/utils'
import { Calendar } from './ui/calendar'
import { CalendarIcon, Loader2 } from 'lucide-react'
import { format } from 'date-fns'
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from './ui/select'
import { useRouter } from 'next/navigation'
import { api } from '@/lib/api'

const formSchema = z.object({
    username: z.string().min(2, {
        message: "ກະລຸນາໃສ່ຊື່ ແລະ ນາມສະກຸນ.",
    }),
    phonenumber: z.string().min(2, {
        message: "ກະລຸນາໃສ່ເບີໂທລະສັບ.",
    }),
    email: z.string().email({
        message: "ກະລຸນາໃສ່ອີເມລ ແລະ ຕ້ອງມີເຄຶ່ອງໝາຍ @.",
    }),
    date: z.date(),
    time: z.string().min(2, {
        message: "ກະລຸນາໃສ່ເວລາ.",
    }),
    document_types: z.string().min(2, {
        message: "ກະລຸນາເລືອກປະເພດເອກະສານ.",
    }),
    address: z.string().min(2, {
        message: "ກະລຸນາໃສ່ທີ່ຢູ່.",
    }),
})

function Apply (){
    const { theme } = useTheme()
    const router = useRouter()
    const [loading, setLoading] = useState(false);
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: '',
            phonenumber: '',
            email: '',
            date: new Date(),
            time: '',
            document_types: '',
            address: '',
        },
    })

    const onSubmit = async (formDataObject: any) => {
        setLoading(true);

        const jsonData = {
            username: formDataObject.username,
            phonenumber: formDataObject.phonenumber,
            email: formDataObject.email,
            date: format(formDataObject.date, "yyyy-MM-dd"), // Format date as YYYY-MM-DD
            time: formDataObject.time,
            document_types: formDataObject.document_types,
            address: formDataObject.address,
        };
        
        try {
            // Try to make the request without authentication for this public form
            const response = await api.post('/apply_booking', jsonData, {
                headers: {
                    'Content-Type': 'application/json',
                }
            });
            console.log('Response from server:', response.data);
            router.push('/apply_done');
        } catch (error) {
            console.error("Error submitting form:", error);
        } finally {
            setLoading(false);
        }
    }


  return (
      <Card className="p-0 max-w-sm w-full shadow-none border-none">
          <MagicCard
              gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
              className="p-0"
          >
              <CardHeader className="border-b border-border p-4 [.border-b]:pb-4">
                  <CardTitle>ຈອງຄິວເລີຍ</CardTitle>
                  <CardDescription className='text-sm'>
                      ກະລຸນາໃສ່ຂໍ້ມູນຂອງທ່ານເພື່ອຈອງຄິວເລີຍ.
                  </CardDescription>
              </CardHeader>
              <CardContent className="p-4">
                  <Form {...form}>
                      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                          <FormField
                              control={form.control}
                              name="username"
                              render={({ field }) => (
                                  <FormItem>
                                      <FormLabel>ຊື່ ແລະ ນາມສະກຸນ</FormLabel>
                                      <FormControl>
                                          <Input placeholder="ຊື່ ແລະ ນາມສະກຸນ" {...field} />
                                      </FormControl>
                                      <FormMessage />
                                  </FormItem>
                              )}
                          />
                          <div className='flex flex-row gap-2'>
                              <FormField
                                  control={form.control}
                                  name="phonenumber"
                                  render={({ field }) => (
                                      <FormItem>
                                          <FormLabel> ເບີໂທລະສັບ</FormLabel>
                                          <FormControl>
                                              <Input placeholder="ເບີໂທລະສັບ" {...field} />
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
                                          <FormLabel> ອີເມລ </FormLabel>
                                          <FormControl>
                                              <Input type="email" placeholder="ອີເມລ" {...field} />
                                          </FormControl>
                                          <FormMessage />
                                      </FormItem>
                                  )}
                              />
                          </div>
                          <div className='flex flex-row gap-2'>
                              <FormField
                                  control={form.control}
                                  name="date"
                                  render={({ field }) => (
                                      <FormItem>
                                          <FormLabel>ວັນທີ່ຈອງຄິວ</FormLabel>
                                          <Popover>
                                              <PopoverTrigger asChild>
                                                  <Button
                                                      variant="outline"
                                                      className={cn(
                                                          "w-full justify-start text-left font-normal",
                                                          !field.value && "text-muted-foreground"
                                                      )}
                                                  >
                                                      <CalendarIcon className="mr-2 h-4 w-4" />
                                                      {field.value ? format(field.value, "PPP") : "Select a date"}
                                                  </Button>
                                              </PopoverTrigger>
                                              <PopoverContent className="w-auto p-0" align="start">
                                                  <Calendar
                                                      mode="single"
                                                      selected={field.value}
                                                      onSelect={field.onChange}
                                                      initialFocus
                                                  />
                                              </PopoverContent>
                                          </Popover>
                                      </FormItem>
                                  )}
                              />
                              <FormField
                                  control={form.control}
                                  name="time"
                                  render={({ field }) => (
                                      <FormItem>
                                          <FormLabel>ເວລາ</FormLabel>
                                          <FormControl>
                                              <Input type="time" placeholder="ເວລາ" {...field} />
                                          </FormControl>
                                          <FormMessage />
                                      </FormItem>
                                  )}
                              />
                          </div>
                                  <FormField
                              control={form.control}
                              name="document_types"
                              render={({ field }) => (
                                  <FormItem>
                                      <FormLabel>ເລືອກປະເພດເອກະສານ</FormLabel>
                                      <Select
                                          onValueChange={field.onChange}
                                          value={field.value}
                                      >
                                          <FormControl>
                                              <SelectTrigger className="w-[180px]" ref={field.ref}>
                                                  <SelectValue placeholder="ເລືອກປະເພດເອກະສານ" />
                                              </SelectTrigger>
                                          </FormControl>
                                          <SelectContent>
                                              <SelectGroup>
                                                  <SelectLabel>ເລືອກປະເພດເອກະສານ</SelectLabel>
                                                  <SelectItem value="Passport">ໜັງສືຜ່ານແດນ</SelectItem>
                                                  <SelectItem value="visa">ວິຊ່າ</SelectItem>
                                                  <SelectItem value="marriage">ໃບແຕ່ງງານ</SelectItem>
                                                  <SelectItem value="Drivers_licence">ໃບຂັບຂີ່</SelectItem>
                                                  <SelectItem value="International_Drivers_licence">ໃບຂັບຂີ່ສາກົນ</SelectItem>
                                                  <SelectItem value="Other">ເອກະສານອື່ນໆ</SelectItem>
                                              </SelectGroup>
                                          </SelectContent>
                                      </Select>
                                      <FormMessage />
                                  </FormItem>
                              )}
                          />
                          <FormField
                              control={form.control}
                              name="address"
                              render={({ field }) => (
                                  <FormItem>
                                      <FormLabel>ທີ່ຢູ່</FormLabel>
                                      <FormControl>
                                          <Input type='text' placeholder="ທີ່ຢູ່" {...field} />
                                      </FormControl>
                                      <FormMessage />
                                  </FormItem>
                              )}
                          />
                          <Button type="submit" className="w-full bg-yellow-500">
                              {loading ? (
                                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                              ) : null}{" "}
                              ຈອງຄິວເລີຍ
                          </Button>
                      </form>
                  </Form>
              </CardContent>
          </MagicCard>
      </Card>
  )
}

export default Apply
