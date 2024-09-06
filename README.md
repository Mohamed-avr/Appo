Adding shadows in react native is very different from the web, both for iOS and anroid 

for android we just have two properties:

```js
{{
     shadowColor: "#222",
     elevation: 10,
  }} 

```

for Ios we have four properties:

```js
{{
    shadowColor: "#222",
    shadowOpacity: 0.5,
    shadowRadius: 10,
    shadowOffset: {
      width: 20,
      height: 20,
    }
}}

```
