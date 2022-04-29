# What

This is a fork of [@vespaiach/axios-fetch-adapter](https://github.com/vespaiach/axios-fetch-adapter) with changes specific to a project I'm working on.
Only difference is that it adds support for `AbortController.signal` to abort requests while keeping same api to axios' `CancelToken`

# How

Use the following `createRequestCancelToken` function & provide it in your axios constructor.

```js
import axios from 'axios'

export function createRequestCancelToken(forFetchApi = false) {
  if (forFetchApi) {
    const controller = new AbortController()
    const signal = controller.signal
    return {
      token: signal,
      cancel: msg => controller.abort(msg),
    }
  }

  return axios.CancelToken.source()
}
```


# Installation and Usage

You can install the adapter directly from this repository URL or feel free to copy its source code to your project.

```
npm install axios
npm install @angel-rs/axios-fetch-adapter
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