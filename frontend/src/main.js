document.getElementById('btn').addEventListener('click', async () => {
  const output = document.getElementById('output')
  output.textContent = '请求中...'

  try {
    const res = await fetch('/api/hello')
    const data = await res.json()
    output.textContent = JSON.stringify(data, null, 2)
  } catch (err) {
    output.textContent = '请求失败：' + err.message
  }
})