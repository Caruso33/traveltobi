import styled from "styled-components"

const colors = {
  "blue-grey-50": "#eceff1",
  "blue-grey-200": "#b0bec5",
  "red-800": "#c62828",
  "blue-grey-900": "#263238",
  "blue-grey-100": "#cfd8dc"
}

export const MapWrapper = styled.div`
  .map,
  .map-base {
    height: 100vh;
  }

  .map {
    position: relative;

    &,
    .map-base {
      width: 100%;
      height: 100%;
      background: ${colors["blue-grey-50"]};
    }
  }

  .map-loading {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    color: ${colors["blue-grey-200"]};
    width: 100%;
    height: 4em;
    line-height: 4em;
    text-align: center;
    margin: auto;
  }

  .map-marker {
    &[class*="shadow"] {
      filter: blur(5px);
      opacity: 0.7;
    }
  }

  .icon-marker {
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    color: white;
    width: 3.6em;
    height: 3.6em;
    font-size: 0.7em;
    font-weight: bold;
    background-color: ${colors["red-800"]};
    border-radius: 100%;
    box-shadow: 0 2px 5px rgba(black, 0.9);

    &:hover {
      .icon-marker-tooltip {
        display: block;
      }
    }
  }

  .icon-marker-tooltip {
    display: none;
    position: absolute;
    bottom: 100%;
    width: 16em;
    font-size: 1.4em;
    padding: 1em;
    background-color: ${colors["blue-grey-900"]};
    border-radius: 0.4em;
    margin-bottom: 1em;
    box-shadow: 0 3px 5px rgba(black, 0.9);

    &:before {
      display: block;
      position: absolute;
      bottom: -0.6em;
      left: 50%;
      content: ‘’;
      width: 1.4em;
      height: 1.4em;
      background-color: ${colors["blue-grey-900"]};
      transform: rotate(45deg);
      margin-left: -0.7em;
    }

    h2 {
      font-size: 1.5em;
      line-height: 1.2;
      margin-bottom: 0.1em;
      margin-top: 0;
    }

    h3 {
      font-size: 1.2em;
      margin: 0.1em 0;
      font-weight: normal;
      color: ${colors["blue-grey-100"]};
    }

    ul,
    p {
      font-weight: normal;
    }

    ul {
      list-style: none;
      padding: 0;
      margin: 0.6em 0 0;
    }
  }
`
