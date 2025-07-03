<template>
  <div class="confirm">
    <h2>Подтверждение бронирования</h2>
    <ul>
      <li><b>Офис:</b> {{ store.office }}</li>
      <li><b>Переговорная:</b> {{ store.room }}</li>
      <li><b>Дата:</b> {{ store.date }}</li>
      <li><b>Время начала:</b> {{ store.time }}</li>
      <li><b>Продолжительность:</b> {{ store.duration }}</li>
    </ul>
  </div>
</template>

<script setup>
import { useBookingStore } from '../store'
const store = useBookingStore()
</script>

<style scoped>
.confirm {
  max-width: 350px;
  margin: 2rem auto;
  padding: 2rem;
  border: 1px solid #eee;
  border-radius: 8px;
  background: #fafbfc;
}
.confirm ul {
  list-style: none;
  padding: 0;
}
.confirm li {
  margin-bottom: 0.5rem;
  font-size: 1.1rem;
}
</style> 