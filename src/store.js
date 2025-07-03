import { defineStore } from 'pinia'

export const useBookingStore = defineStore('booking', {
  state: () => ({
    office: '',
    room: '',
    date: '',
    time: '',
    duration: ''
  }),
  actions: {
    setBooking(data) {
      this.office = data.office
      this.room = data.room
      this.date = data.date
      this.time = data.time
      this.duration = data.duration
    },
    resetBooking() {
      this.office = ''
      this.room = ''
      this.date = ''
      this.time = ''
      this.duration = ''
    }
  }
}) 