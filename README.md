## How to run
1. Clone
1. `npm install`
1. Rename `.env.template` to `.env`
    - for the time being, no values need to be updated or populated in this file
1.  `npm start`

Alternatively, you can run it in docker by following these simple steps:
1. `npm run build:docker`
1. `npm run start:docker`

To stop it, run `npm run stop:docker`. To destroy the container, run `npm run destroy:docker`.

## Endpoints

GET `/generateSvg/raw/{ergoname}`

GET `/generateSvg/encoded/{ergoname}`

GET `/generateSvg/url/{ergoname}`

## Examples

GET `/generateSvg/raw/ergonaut` will return:

```html
<svg xmlns="http://www.w3.org/2000/svg" width="500" height="500">
	<rect x="0" y="0" width="500" height="500" fill="black"></rect><text x="50%" y="50%" text-anchor="middle"
		dominant-baseline="middle" font-size="42" font-family="Monospace">
		<tspan fill="orange" font-weight="bolder">~</tspan>
		<tspan fill="white">ergonaut</tspan>
	</text>
</svg>
```

GET `/generateSvg/encoded/ergonaut` will return:
```
PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MDAiIGhlaWdodD0iNTAwIj48cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iNTAwIiBoZWlnaHQ9IjUwMCIgZmlsbD0iYmxhY2siPjwvcmVjdD48dGV4dCB4PSI1MCUiIHk9IjUwJSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSIgZm9udC1zaXplPSI0MiIgZm9udC1mYW1pbHk9Ik1vbm9zcGFjZSI+PHRzcGFuIGZpbGw9Im9yYW5nZSIgZm9udC13ZWlnaHQ9ImJvbGRlciI+fjwvdHNwYW4+PHRzcGFuIGZpbGw9IndoaXRlIj5lcmdvbmF1dDwvdHNwYW4+PC90ZXh0Pjwvc3ZnPg==
```

GET `/generateSvg/url/ergonaut` will return:
```
data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MDAiIGhlaWdodD0iNTAwIj48cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iNTAwIiBoZWlnaHQ9IjUwMCIgZmlsbD0iYmxhY2siPjwvcmVjdD48dGV4dCB4PSI1MCUiIHk9IjUwJSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSIgZm9udC1zaXplPSI0MiIgZm9udC1mYW1pbHk9Ik1vbm9zcGFjZSI+PHRzcGFuIGZpbGw9Im9yYW5nZSIgZm9udC13ZWlnaHQ9ImJvbGRlciI+fjwvdHNwYW4+PHRzcGFuIGZpbGw9IndoaXRlIj5lcmdvbmF1dDwvdHNwYW4+PC90ZXh0Pjwvc3ZnPg==
```


### TODO:
- Add input validation
- Add robust logging
- Require API key (?)
- Add Swagger Documentation
- Package for serverless function deployment (AWS Lambda)
