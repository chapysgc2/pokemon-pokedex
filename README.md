# The Pokedex! 

**Summary**: Be able to gracefully do http requests (like fetching pokemon data) for end-users and give them a good experience. Display appropriate views depending on the status of the http request and handle unexpected errors.

Fetch pokemons from this [API](https://pokeapi.co/)!

## Task description

1. Write a form where users can enter the pokemon name and your app fetches and displays that pokemon's data
2. When a request hasn't been made yet, show no pokemon yet, please submit a pokemon!
3. While fetching the pokemon data, show a loading screen
4. Display the pokemon data as soon as it arrives
5. When something goes wrong (like a network error, or a pokemon not existing in the database), the error should be displayed at the bottom of the search bar.
6. There should be a button to try again after an error. Upon clicking this, the no pokemon yet, please submit a pokemon! will be shown and the current string on the search bar would be removed.
7. After an error, the user should be able to use the search bar to search for a new pokemon without having to click the try again button.

## Important notes

- Be free to do micro-commits or long-commits. It is up to you. I want to see how you work :)
- Libraries that must go into the project (you won't need anything else):
    - [axios](https://axios-http.com/)
- The provided UI is optional, you can create it your own way (let your imagination flow, without wasting too much time!)
- Create a pull request (with description) to finish the work