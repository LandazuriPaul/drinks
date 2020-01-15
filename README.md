# Drinks

This repository is my submission to the home challenge requested by Silicon Rhino.

## Notes about the codebase

This TypeScript codebase has been developed using a number of frontend technologies. Here is a non-exhaustive list of them:

- [React](https://reactjs.org/): To build the interface. As a side note, this codebase uses the hook system.
- [Material UI](https://material-ui.com/): As a quick UI framework
- [Styled Components](https://styled-components.com/): To style the components
- [React Fetching Library](https://marcin-piela.github.io/react-fetching-library): To fetch data from the REST API. This also integrates a caching layer for improved performances. Under the hood, I have chosen to rely on [axios](https://github.com/axios/axios) for a more predictable behaviour.
- [Parcel](https://parceljs.org/): As a bundler and development server.

## Development

To run this project locally, you just have to:

1. Download it, or clone this repository

2. Install the dependencies with:

```sh
npm install
```

3. Run the development server:

```sh
npm start
```

If you want a production bundle, you can run:

```sh
npm build
```

### Possible improvements

This codebase is very basic as it has been developed in a short period of time, following the challenge instructions. If it were to be improved, here are some options we could explore :

- To write several unit tests to check the non-regression of the components and main functions.

- To have a list of filters with the search bar to get the events corresponding to a type, or a creator for example.

- To add some interactivity with the map:
  - The markers could be clickable.
  - Hovering them we could have a quick preview of the event.
  - When searching / filtering the event list, we could have only the matching ones shown.

## Author

Paul Landázuri
