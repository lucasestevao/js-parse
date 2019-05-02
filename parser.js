const response = {
  fields: [
    {
      field: {
        key: 'name',
        value: 'Lucas'
      }
    },
    {
      field: {
        key: 'lastName',
        value: 'Estevão de Souza'
      }
    },
    {
      field: {
        key: 'age',
        value: '28'
      }
    },
    {
      field: {
        key: 'gender',
        value: 'male'
      }
    }
  ]
}

let result = {}

const parser = response => {
  return response.fields
    .map(({ field }) => ({
      [field.key]: field.value
    }))
    .reduce((obj, field) => ({ ...obj, ...field }), {})
}

result = parser(response)

console.log(result.name) // lucas
console.log(result.age) // 28
