# Postcardium

Inspired by PostSecret, a true guilty pleasure of my highschool days, I started working on this project to practice using cloud storage and the GoogleMaps API in my applications. The idea is you can upload a photo, write a postcard-length message, and "post" it anonymously.

### Currently Working on:

- Fleshing out the rest of the application
- Styling

### Ideas for the future:

- pull location from the files
- add search functionality
- find a way to make sure the photos are of scenary/landscape and not people.
- For photos without gps exif data: https://docs.mapbox.com/mapbox-search-js/tutorials/add-address-autofill-with-react/
- Have this form only pop up if there's no exif data, with a little blurb about exif data

### Dev Setup:

- Make a `.env` file with

```bash
VITE_GOOGLE_MAPS_API_KEY=
VITE_BASE_API_URL="http://127.0.0.1:5001/api"
```