## Running locally
1. Install dependencies
2. Add .env with REACT_APP_GIPHY_API_KEY set 
3. yarn start

## Hypothetical Additions Given More Time

1. Virtualization - if the user loads lots of gifs, this would help performance by only rendering visible or nearly visible items. The lib react-virtualized is a possibility for this
2. Lazy loading images - Don't load images all at once but only when they are visible or almost visible or currently visible images are loaded
3. Detail view - Clicking on the images could open a high-res version in a lightbox or new tab
4. Better error handling - More granular use of ErrorBoundaries, logging service, analytics
5. api proxy and proper handling of api secrets

