# Javascript Parser

Parsing a server response transforming values into attributes using `map` and `reduce`.

## Server Response

Considering I have the json server response below, I want to have a function to return an object with the attibutes found in the `field` with its respective values.

e.g: the object must have an attribute `name` with the value `lucas`.

```
{
  "fields": [
    {
      "field": {
        "key": "name",
        "value": "Lucas"
      }
    },
    {
      "field": {
        "key": "lastName",
        "value": "Estevão de Souza"
      }
    },
    {
      "field": {
        "key": "age",
        "value": "28"
      }
    },
    {
      "field": {
        "key": "gender",
        "value": "male"
      }
    }
  ]
}
```

## Parser

```

const parser = response => {
  return response.fields
    .map(({ field }) => ({
      [field.key]: field.value
    }))
    .reduce((obj, field) => ({ ...obj, ...field }), {})
}

```

## Result

```

const result = parser(response)

console.log(result.name) // lucas
console.log(result.age) // 28

```

## Try it out

[https://codepen.io/lucasestevao/pen/dLxZVy](https://codepen.io/lucasestevao/pen/dLxZVy)
