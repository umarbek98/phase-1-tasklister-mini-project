document.addEventListener("DOMContentLoaded", () => {
  const taskForm = document.querySelector('#create-task-form')
  taskForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const descField = document.querySelector('#new-task-description')
    const priorityForm = document.createElement('select')
    const selectPrio = document. createElement('option')
    selectPrio.textContent = 'Select'
    const taskList = document.querySelector('#tasks')
    const newTask = document.createElement('li')
    const delBtn = document.createElement('button')
    const priorityHigh = document.createElement('option')
    priorityHigh.textContent = 'High'
    const priorityMed = document.createElement('option')
    priorityMed.textContent = 'Med'
    const priorityLow = document.createElement('option')
    priorityLow.textContent = 'Low'
    delBtn.textContent = "Delete"
    newTask.textContent = descField.value
    priorityForm.append(selectPrio, priorityHigh, priorityMed, priorityLow)
    newTask.append(delBtn, priorityForm)
    taskList.append(newTask)
    newTask.addEventListener('change', (e) => {
      if (priorityForm.value === 'High') {
        newTask.className = 'red'
      } else if (priorityForm.value === 'Med') {
        newTask.className = 'yellow'
      } else {
        newTask.className = 'green'
      }
    })
    delBtn.addEventListener('click', (e) => {
      newTask.remove()
    })
  })
});
