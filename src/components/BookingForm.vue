<template>
  <form @submit.prevent="submitForm" class="booking-form">
    <label>
      Офис
      <select v-model="office" required @change="onOfficeChange">
        <option value="" disabled>Выберите офис</option>
        <option v-for="o in offices" :key="o.name" :value="o.name">{{ o.name }}</option>
      </select>
    </label>
    <label>
      Переговорная
      <select v-model="room" required :disabled="!office">
        <option value="" disabled>Выберите переговорную</option>
        <option v-for="r in filteredRooms" :key="r" :value="r">{{ r }}</option>
      </select>
    </label>
    <label>
      Дата
      <input type="date" v-model="date" required />
    </label>
    <label>
      Время начала
      <select v-model="time" required>
        <option value="" disabled>Выберите время</option>
        <option v-for="t in times" :key="t" :value="t">{{ t }}</option>
      </select>
    </label>
    <label>
      Продолжительность
      <select v-model="duration" required>
        <option value="" disabled>Выберите продолжительность</option>
        <option v-for="d in durations" :key="d" :value="d">{{ d }}</option>
      </select>
    </label>
    <button type="submit">Забронировать</button>
  </form>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useBookingStore } from '../store'

const offices = [
  { name: 'Астрахань', rooms: ['Переговорная 1', 'Переговорная 2'] },
  { name: 'Москва', rooms: ['Red Room', 'Blue Room'] }
]
const times = ['09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00']
const durations = ['30 мин', '1 час', '2 часа']

const office = ref('')
const room = ref('')
const date = ref('')
const time = ref('')
const duration = ref('')

const filteredRooms = computed(() => {
  const found = offices.find(o => o.name === office.value)
  return found ? found.rooms : []
})

function onOfficeChange() {
  room.value = ''
}

const router = useRouter()
const store = useBookingStore()

function submitForm() {
  store.setBooking({ office: office.value, room: room.value, date: date.value, time: time.value, duration: duration.value })
  router.push('/confirm')
}
</script>

<style scoped>
.booking-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 350px;
  margin: 2rem auto;
  padding: 2rem;
  border: 1px solid #eee;
  border-radius: 8px;
  background: #fafbfc;
}
.booking-form label {
  display: flex;
  flex-direction: column;
  font-weight: 500;
}
.booking-form button {
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  background: #42b983;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
.booking-form button:disabled {
  background: #ccc;
}
</style> 