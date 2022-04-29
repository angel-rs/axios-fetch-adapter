# What

This is a fork of [@vespaiach/axios-fetch-adapter](https://github.com/vespaiach/axios-fetch-adapter) with changes specific to a project I'm working on.
Only difference is that it adds support for `AbortController.signal` to abort requests while keeping same api to axios' `CancelToken`

# How to use

See `test` folder for example of usage

# Installation and Usage

You can install the adapter directly from this repository URL or feel free to copy its source code to your project.

```
npm install axios
npm install @angelrs/axios-fetch-adapter
```

There are two ways to use it:

1.  Create a new instance of Axios and pass this adapter in configuration

```
const instance = axios.create({
  baseURL: 'https://some-domain.com/api/',
  timeout: 1000,
  adapter: fetchAdapter
  ....
});
```

2.  Pass this adapter in each of request

```
axios.request({
  url: '/user',
  method: 'get',
  adapter: fetchAdapter
  ...
})
```

# Note

- Since, this adapter relies on fetch API so it won't work in Node environment

# Credits

- [vespaiach](https://github.com/vespaiach) for creating [original project](https://github.com/vespaiach/axios-fetch-adapter)