## Description

Flight schedule generator

### Getting started

1. Installation

```
$ pnpm install && pnpm start
```

2. Visit http://localhost:4000/

3. Paste the following graphql query into the sandbox to get generated flight schedule

```
query {
    flights(n: 10) {
        flightNumber
        airline
        origin
        destination
    }
}
```
